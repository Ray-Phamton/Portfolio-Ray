import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
// Accepts 'isOpen' to check if it's visible and 'onClose' to close it
const ContactFormModal = ({ isOpen, onClose }) => {
  const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/raymonreyesxddd@gmail.com'
  const modalVariants = {
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    initial: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    hidden: {
      opacity: 0,
      scale: 0.7,
      y: -50,
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    },
  }

  const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  const [text, setText] = useState('')
  const MAX_LENGTH = 200

  const handleText = (evento) => {
    const newText = evento.target.value.slice(0, MAX_LENGTH)
    setText(newText)
  }

  return (
    // Modal and Darkened Background
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm"
          onClick={onClose} // Closes if clicked outside the modal
        >
          {/* Form Container */}
          <motion.div
            variants={modalVariants}
            className="relative w-full max-w-lg p-8 bg-zinc-800 rounded-xl overflow-hidden "
            onClick={(e) => e.stopPropagation()} // Prevents clicking within the form from closing the modal
          >
            <div className="flex w-full border-b border-violet-600 mb-4 ">
              <h2 className=" text-3xl font-bold text-gray-100 mb-2">
                hablemos de tu idea 🚀
              </h2>
              <button
                onClick={onClose}
                className="absolute w-10 h-10 text-3xl font-bold rounded-lg text-gray-100 top-2 right-2 hover:bg-zinc-700 active:bg-zinc-900"
              >
                ✕
              </button>
            </div>

            <form action={FORMSUBMIT_ENDPOINT} method="POST">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-100"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="text-gray-100 mt-1 block w-full px-4 py-2 border border-violet-600 rounded-lg focus:ring-violet-600 focus:border-violet-300
                focus:ring-2 outline-none"
                  placeholder="Raymon Reyes"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-100"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="reply-to"
                  id="email"
                  required
                  className="text-gray-100 mt-1 block w-full px-4 py-2 border border-violet-600 rounded-lg focus:ring-violet-600 focus:border-violet-300
                focus:ring-2 outline-none"
                  placeholder="ejemplo@dominio.com"
                />
              </div>
              <div className="mb-6">
                <div className="flex flex-row justify-between items-center w-full">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-100"
                  >
                    Mensaje
                  </label>
                  <p className="text-sm text-white">
                    {text.length} / {MAX_LENGTH} caracteres
                  </p>
                </div>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  value={text}
                  onChange={handleText}
                  className=" text-gray-100 mt-1 block w-full px-4 py-2 border border-violet-600 rounded-lg focus:ring-violet-600 focus:border-violet-300
                focus:ring-2 outline-none "
                  placeholder="saludos cordiales, estoy interesado en tus servicios, quisiera saber mas al respecto."
                />
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium text-gray-100 bg-zinc-700 rounded-lg hover:bg-zinc-600 transition duration-150"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 text-sm font-medium bg-linear-to-tr from-violet-500 via-indigo-600  to-blue-600 rounded-lg  hover:bg-indigo-700 shadow-lg shadow-violet-700/50 hover:shadow-violet-600 hover:shadow-lg  z-10 text-gray-100 hover:scale-105 active:translate-y-1 transitiontransition duration-150"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ContactFormModal
