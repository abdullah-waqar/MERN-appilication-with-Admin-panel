import React, { useState } from 'react'



const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const onSubmit = (e) => {
    
    console.log('Form submitted:', formData);
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  }

  return (
    <section>
      <main>
        <form onSubmit={onSubmit}>
          <label htmlFor="name">name</label>
          <input type="text"
                id='name'
                name='name'
                placeholder='Enter your name'
                autoComplete='off'
                value={formData.name}
                onChange={handleChange}
                required
          />

          <label htmlFor="email">Email</label>
          <input type="text"
                id='email'
                name='email'
                placeholder='Enter your email'
                autoComplete='off'
                value={formData.email}
                onChange={handleChange}
                required
          />

          <label htmlFor="message">Message</label>
          <textarea
                id='message'
                name='message'
                placeholder='Enter your message'
                autoComplete='off'
                value={formData.message}
                onChange={handleChange}
                required />

          <button type="submit" className='btn btn-submit'>Send Message</button>
        </form>
      </main>
    </section>
  )
}

export default Contact