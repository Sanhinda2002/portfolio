import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="First Name" required />
        <input type="text" placeholder="Last Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="contact-info">
        <p>📞 +94 711146922</p>
        <p>📧 sanhindagimhan2002@gmail.com</p>
        <p>🏠 16, Jesmine Garden, Kurunegala</p>
        <p>🔗 <a href="https://www.linkedin.com/in/sanhinda-jayarathne-37135833a/">LinkedIn</a></p>
        <p>🐙 <a href="https://github.com/Sanhinda2002">GitHub</a></p>
      </div>
    </section>
  );
};

export default Contact;