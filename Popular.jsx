import "../styles/main.css";
import img1 from "../assets/img1.jpg";

const Popular = () => {
  return (
    <section className="popular">
      <h2 className="section-title">Popular Items</h2>

      <div className="popular-container">
        <div className="popular-card">
          <img src={img1} alt="Chicken Biryani" />
          <h3>Chicken Biryani</h3>
          <a href="https://wa.me/91999xxxxxx9" target="_blank">
          <button className="order-btn">Order Now</button>
          </a>
        </div>

        <div className="popular-card">
          <img src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d" />
          <h3>Chicken Tandoori</h3>
          <a href="https://wa.me/91999xxxxxx9" target="_blank">
          <button className="order-btn">Order Now</button>
          </a>
        </div>

        <div className="popular-card">
          <img src="https://images.unsplash.com/photo-1550547660-d9450f859349" />
          <h3>Chicken Shawarma</h3>
          <a href="https://wa.me/91999xxxxxx9" target="_blank">
          <button className="order-btn">Order Now</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Popular;