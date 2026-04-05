import "../styles/main.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">

      <h2 className="section-title">Contact Us</h2>

      <div className="contact-container">

        <div className="contact-box">
          <h3>Location</h3>
          <p>XYZ CITY, NEAR BY ABCD</p>
          <p>Saharanpur</p>
        </div>

        <div className="contact-box">
          <h3>Phone</h3>
          <p>999XXXXXX9</p>
          <p>999XXXXXX9</p>
        </div>

        <div className="contact-box">
          <h3>Order Now</h3>
          
          <a 
          href="https://wa.me/91999XXXXXX9"
          target="_blank"
          >
            <button className="order-btn">
              WhatsApp Order
            </button>
          </a>

        </div>

      </div>

    </section>
  );
};

export default Contact;