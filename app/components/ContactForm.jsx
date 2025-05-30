'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Loader2, CheckCircle, AlertTriangle } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState(null) // null, 'success', 'error'
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }))
    }
  }

  const validateForm = () => {
    let tempErrors = {}
    if (!formData.name.trim()) tempErrors.name = 'Name is required.'
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required.'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid.'
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required.'
    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmissionStatus(null)

    try {
      // Simulate API call
      // In a real app, this would be: await fetch('/api/contact', { ... })
      await new Promise(resolve => setTimeout(resolve, 2000)); 
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      
      // if (!response.ok) {
      //   const errorData = await response.json();
      //   throw new Error(errorData.message || 'Something went wrong');
      // }

      setSubmissionStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmissionStatus('error')
      // console.error('Submission error:', error);
      // In a real app, you might set a generic error message or one from the API
      // setErrors({ form: error.message || 'Failed to send message. Please try again.' });
      setErrors({ form: 'Failed to send message. Email sending is simulated.' });
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    if (submissionStatus === 'success' || submissionStatus === 'error') {
      const timer = setTimeout(() => {
        setSubmissionStatus(null)
        setErrors({})
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [submissionStatus])

  const inputVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-neutral-100">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-primary mb-4"
        >
          Let's Design Your Story
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-primary/80 mb-10 md:mb-12 font-body"
        >
          Have a project in mind or just want to say hello? Drop us a line.
        </motion.p>
      </div>
      <motion.form
        onSubmit={handleSubmit}
        className="container mx-auto px-6 max-w-xl bg-white shadow-xl rounded-lg p-8 md:p-12 space-y-6 relative overflow-hidden"
        style={{ border: '1px solid #E0E0E0' /* Simulating a letter/note edge */ }}
        initial={{ opacity: 0, scale: 0.9 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {/* Decorative "stamp" or "seal" element */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center opacity-50">
          <Send size={20} className="text-accent" />
        </div>

        <AnimatePresence>
          {submissionStatus === 'success' && (
            <motion.div
              key="success"
              variants={inputVariants}
              initial="initial" animate="animate" exit="exit"
              className="flex items-center p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg border border-green-300"
              role="alert"
            >
              <CheckCircle className="flex-shrink-0 inline w-5 h-5 mr-3" />
              <span className="font-medium">Message sent successfully! We'll be in touch soon.</span>
            </motion.div>
          )}
          {submissionStatus === 'error' && errors.form && (
            <motion.div
              key="error"
              variants={inputVariants}
              initial="initial" animate="animate" exit="exit"
              className="flex items-center p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg border border-red-300"
              role="alert"
            >
              <AlertTriangle className="flex-shrink-0 inline w-5 h-5 mr-3" />
              <span className="font-medium">{errors.form}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div>
          <label htmlFor="name" className="block text-sm font-body font-medium text-primary/90 mb-1 text-left">Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 font-body bg-neutral-50 border ${errors.name ? 'border-error' : 'border-neutral-300'} rounded-md focus:ring-accent focus:border-accent transition-colors duration-300 text-primary placeholder-neutral-400`}
            placeholder="What should we call you?"
          />
          {errors.name && <p className="text-error text-xs mt-1 text-left">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-body font-medium text-primary/90 mb-1 text-left">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 font-body bg-neutral-50 border ${errors.email ? 'border-error' : 'border-neutral-300'} rounded-md focus:ring-accent focus:border-accent transition-colors duration-300 text-primary placeholder-neutral-400`}
            placeholder="Where can we reach you?"
          />
          {errors.email && <p className="text-error text-xs mt-1 text-left">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-body font-medium text-primary/90 mb-1 text-left">Your Message</label>
          <textarea
            name="message"
            id="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 font-body bg-neutral-50 border ${errors.message ? 'border-error' : 'border-neutral-300'} rounded-md focus:ring-accent focus:border-accent transition-colors duration-300 text-primary placeholder-neutral-400`}
            placeholder="Tell us about your project or idea..."
          />
          {errors.message && <p className="text-error text-xs mt-1 text-left">{errors.message}</p>}
        </div>

        <div className="text-center pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 font-body font-semibold text-white bg-accent rounded-md hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto group"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin mr-2 h-5 w-5" />
                Sending...
              </>
            ) : (
              <>
                Send Your Note
                <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </>
            )}
          </button>
        </div>
        <p className="text-xs text-center text-primary/60 font-body mt-8">
          Or, find us on Instagram: <a href="https://instagram.com/hueneu_" target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline">@hueneu_</a>
        </p>
      </motion.form>
    </section>
  )
}
