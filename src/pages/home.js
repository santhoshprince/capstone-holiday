import Header from '../components/header';
import Footer from '../components/footer';

const Home = () => {
  return (
    <div>
      <Header />
      <section className="hero">
        <h1>Welcome to Capstone Holidays</h1>
        <p>Explore the world with us!</p>
      </section>
      <section className="featured-tours">
        <h2>Our Top Tour Packages</h2>
        <div className="tour-grid">
          {/* Add TourCards here */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
