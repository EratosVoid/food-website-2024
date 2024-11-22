import React from "react";

function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" required />
        </div>
        <div>
          <label>Message:</label>
          <textarea required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h3>Our Contact Details</h3>
        <p>Phone: +123-456-7890</p>
        <p>Email: support@foodbusiness.com</p>
        <p>Location: 123 Food Street, Food City</p>
      </div>
    </div>
  );
}

export default Contact;
