import "../styles/main.css";

const About = () => {
  return (
    <section className="about" id="about">
      
      <div className="about-container">
        
        <div className="about-text">
          <h2>About The Cloud Kitchen</h2>
          <p>
            The Cloud Kitchen offers delicious and freshly prepared food 
            with premium quality ingredients. Our goal is to deliver 
            restaurant-quality meals directly to your doorstep.
          </p>

          <p>
            We specialize in Biryani, Tandoori, Shawarma and much more.
            Fast delivery and amazing taste guaranteed.
          </p>

          <a 
          href="https://wa.me/91999xxxxxx9"
          target="_blank"
          >
            <button className="about-btn">
              Order Now
            </button>
          </a>

        </div>

      </div>

    </section>
  );
};

export default About;