import img from '../images/image.png'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    comments: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // You can integrate EmailJS / backend API here
    alert("Thank you for reaching out! We'll get back to you soon.")
    setFormData({ name: '', mobile: '', email: '', comments: '' })
  }

  return (
    <section className="px-4 py-10 md:py-16 h-auto w-full bg-gradient-to-b from-purple-500 to-green-500 text-blue-950">
      {/* container */}
      <div className="px-2 py-2 w-full max-w-[1080px] mx-auto flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
        
        {/* left part (image) */}
        <div className=" h-full w-full md:w-[40%] flex justify-center items-center relative">
          <img 
            src={img}
            loading='lazy' 
            alt="Contact illustration" 
            className="w-full h-auto max-h-[400px] rounded-lg shadow-xl hover:scale-105 transition-transform duration-500 ease-in-out" 
          />
        </div>

        {/* right part (form) */}
        <div className="w-full md:w-[60%] bg-white/70 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-center md:text-left">
            Contact Me
          </h3>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name" 
              required
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input 
              type="tel" 
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile Number" 
              pattern="[0-9]{10}" 
              required
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email" 
              required
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <textarea 
              name="comments" 
              value={formData.comments}
              onChange={handleChange}
              placeholder="Comments (optional)" 
              rows="4"
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button 
              type="submit" 
              className="px-6 py-2 rounded-md font-bold text-white bg-gradient-to-r from-blue-500 to-pink-500 shadow-md hover:opacity-90 transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
