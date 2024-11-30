import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    question: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Your message was sent and we would give you feedback",
      confirmButtonColor: "hsl(202, 9%, 13%)",
    });
    console.log(formData);
  }

  return (
    <div className='bg-white py-12 px-4 mt-12'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-center text-3xl font-bold text-grayTheme'>Contact Us</h2>
        <form onSubmit={handleSubmit} className='mt-8 bg-cream space-y-6 w-[80%] m-auto p-[20px] md:w-[500px]'>
          {/* Name Field */}
          <div>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Your Name'
              className='w-full mt-2 p-3 bg-grayTheme text-cream rounded-md focus:bg-grayTheme active:bg-grayTheme'
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Your Email'
              className='w-full mt-2 p-3 bg-grayTheme text-cream rounded-md focus:bg-grayTheme active:bg-grayTheme'
              required
            />
          </div>

          {/* Phone Field */}
          <div>
            <input
              type='tel'
              id='phone'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              placeholder='Your Phone Number'
              className='w-full mt-2 p-3 bg-grayTheme text-cream rounded-md focus:bg-grayTheme active:bg-grayTheme'
            />
          </div>

          {/* Department Selection */}
          <div>
            <select
              id='department'
              name='department'
              value={formData.department}
              onChange={handleChange}
              className='w-full mt-2 p-3 bg-grayTheme text-cream rounded-md focus:bg-grayTheme active:bg-grayTheme'
              required
            >
              <option value=''>Select a Department</option>
              <option value='business'>Business</option>
              <option value='personnel'>Personnel</option>
              <option value='support'>Support</option>
              <option value='others'>Others</option>
            </select>
          </div>

          {/* Question Textarea */}
          <div>
            <textarea
              id='question'
              name='question'
              value={formData.question}
              onChange={handleChange}
              placeholder='Your Question'
              className='w-full mt-2 p-3 bg-grayTheme text-cream rounded-md focus:bg-grayTheme active:bg-grayTheme'
              rows='5'
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className='text-center'>
            <button
              type='submit'
              className='mt-4 px-6 py-3 bg-grayTheme text-cream font-bold rounded-md hover:bg-gray-700 transition-all'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact;
