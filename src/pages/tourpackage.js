import Header from '../components/header';
import Footer from '../components/footer';
import TourCard from '../components/tourcard';

const TourPackages = () => {
  return (
    <div>
      <Header />
      <section className="tour-packages">
        <h2>Explore Our Tour Packages</h2>
        <div className="tour-grid">
          {/* TourCard can be repeated for each package */}
          <TourCard title="Dubai Tour" description="Explore the luxury of Dubai" />
          <TourCard title="Kerala Tour" description="Discover the backwaters of Kerala" />
          {/* Add more cards as needed */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TourPackages;
