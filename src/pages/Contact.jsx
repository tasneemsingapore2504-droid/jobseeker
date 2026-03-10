const Contact = () => {
  return (
    <>
      <section class="contact-hero">
        <h1>Contact Us</h1>
      </section>

      <section class="contact-section">
        <div class="contact-container">
          {/* <!-- Left Side Info --> */}
          <div class="contact-info">
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
          <div class="contact-form">
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="tel" placeholder="Phone Number" />
              <textarea rows="4" placeholder="Your Message"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
