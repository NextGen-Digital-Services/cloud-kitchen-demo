import "../styles/main.css";

const Menu = () => {
  return (
    <section className="menu" id="menu">

      <h2 className="section-title">Our Menu</h2>

      <div className="menu-container">

        <div className="menu-card">
          <h3>Starter</h3>
          <p>Chicken Alfaham</p>
          <p>Chicken Tandoori</p>
          <p>Chicken Malai Tikka</p>
        </div>

        <div className="menu-card">
          <h3>Main Course</h3>
          <p>Butter Chicken</p>
          <p>Chicken Korma</p>
          <p>Chicken Changezi</p>
        </div>

        <div className="menu-card">
          <h3>Biryani</h3>
          <p>Chicken Biryani</p>
          <p>Mutton Biryani</p>
          <p>Special Biryani</p>
        </div>

      </div>

    </section>
  );
};

export default Menu;