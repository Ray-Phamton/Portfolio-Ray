import { useRef, useEffect, useCallback } from 'react'

const PARTICLE_COUNT = 50
const MIN_RADIUS = 2
const MAX_RADIUS = 5
const BASE_SPEED = 0.2
const MIN_OPACITY = 0.5
const MAX_OPACITY = 1

const NEON_COLOR_RGB = '192, 0, 255'
const NEON_COLOR_HEX = '#C000FF'

const NEON_BLUR_FACTOR = 4 //

class Particle {
  constructor (x, y, radius, speedY) {
    this.x = x
    this.y = y
    this.radius = radius

    // The opacity will vary slightly to give depth
    this.opacity = Math.random() * (MAX_OPACITY - MIN_OPACITY) + MIN_OPACITY
    // We use RGB color with opacity for the fillStyle
    this.color = `rgba(${NEON_COLOR_RGB}, ${this.opacity})`
    this.speedY = speedY
  }

  draw (ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)

    // Shadow for the glow effect
    ctx.shadowBlur = this.radius * NEON_BLUR_FACTOR // The larger the radius, the brighter
    ctx.shadowColor = NEON_COLOR_HEX // Neon "halo" color

    ctx.fillStyle = this.color
    ctx.fill()
    ctx.closePath()

    // Important: Reset the shadowBlur after drawing the particle
    // to avoid affecting other drawings, if any, or clearing the canvas.
    ctx.shadowBlur = 0
    ctx.shadowColor = 'transparent'
  }

  update (width, height) {
    this.y -= this.speedY // Upward movement

    // If the particle comes out from above, it reappears from below
    if (this.y < -this.radius) {
      this.y = height + this.radius // Reappears at the bottom
      this.x = Math.random() * width // New random X position
      this.radius = Math.random() * (MAX_RADIUS - MIN_RADIUS) + MIN_RADIUS // New random radius
      this.speedY = BASE_SPEED + Math.random() * 0.5 // New slightly variable speed
      this.opacity = Math.random() * (MAX_OPACITY - MIN_OPACITY) + MIN_OPACITY
      this.color = `rgba(${NEON_COLOR_RGB}, ${this.opacity})` // Update color with new opacity
    }
  }
}

const ParticleBackground = () => {
  const canvasRef = useRef(null)
  const particles = useRef([])
  const animationFrameId = useRef(null)

  const initParticles = useCallback((width, height) => {
    particles.current = []
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.current.push(
        new Particle(
          Math.random() * width,
          Math.random() * height,
          Math.random() * (MAX_RADIUS - MIN_RADIUS) + MIN_RADIUS,
          BASE_SPEED + Math.random() * 0.5
        )
      )
    }
  }, [])

  const render = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const { width, height } = canvas

    // Clear the canvas.
    ctx.clearRect(0, 0, width, height)

    for (let i = 0; i < particles.current.length; i++) {
      const p = particles.current[i]
      p.update(width, height)
      p.draw(ctx)
    }

    animationFrameId.current = requestAnimationFrame(render)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resizeCanvas = () => {
      const rect = canvas.parentElement.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    const rect = canvas.parentElement.getBoundingClientRect()
    canvas.width = rect.width
    canvas.height = rect.height
    initParticles(canvas.width, canvas.height)

    const resizeObserver = new ResizeObserver(resizeCanvas)
    resizeObserver.observe(canvas.parentElement)

    animationFrameId.current = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrameId.current)
      resizeObserver.disconnect()
    }
  }, [initParticles, render])

  return (
    <canvas
      ref={canvasRef}
      className='absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-t from-purple-950 via-black via-30% to-black'
    />
  )
}

export default ParticleBackground
