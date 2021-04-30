import React, { useState } from "react"
import { navigate } from "gatsby"

const IndexPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...formState,
      }),
    })
      .then(() => navigate("/page-2/"))
      .catch(error => alert(error))
  }

  return (
    <>
      <div id="form-center">
        <form
          onSubmit={handleSubmit}
          id="contact-form"
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />

          <input
            id="form-input"
            type="text"
            name="name"
            onChange={handleChange}
            value={formState.name}
            required
            placeholder="your name"
          />
          <input
            id="form-input"
            type="email"
            name="email"
            onChange={handleChange}
            value={formState.email}
            required
            placeholder="your email"
          />
          <textarea
            id="form-input"
            name="message"
            onChange={handleChange}
            value={formState.message}
            rows="9"
            required
            placeholder="write something"
          />

          <button id="form-input" type="submit">
            Send to Email
          </button>
        </form>
      </div>
    </>
  )
}

export default IndexPage
