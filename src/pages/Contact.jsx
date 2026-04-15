import { useState } from "react";
import axios from "axios";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(emptyForm);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await axios.post("http://localhost:5000/api/contactfeedback", form);
      alert("Feedback submitted successfully");
      setForm(emptyForm);
    } catch (error) {
      console.log(error);
      alert(error?.response?.data?.message || "Unable to submit feedback");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section className="contact-hero">
        <h1>Contact Us</h1>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          {/* <!-- Left Side Info --> */}
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>
              <b>Address:</b> Ujjain, Madhya Pradesh
            </p>
            <p>
              <b>Phone:</b> +91 9329590664
            </p>
            <p>
              <b>Email:</b> JobSeek@gmail.com
            </p>
          </div>

          {/* <!-- Right Side Form --> */}
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <label>Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
              />
              <label>Your Message</label>
              <textarea
                rows="4"
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" disabled={sending}>
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
