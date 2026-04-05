import "../styles/main.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>The Cloud Kitchen</h1>
        <p>Delicious Food Delivered To Your Doorstep</p>
        <a href="https://wa.me/91999xxxxxx9" target="_blank">
          <button className="order-btn">Order Now</button>
          </a>
      </div>
    </section>
  );
};

export default Hero;