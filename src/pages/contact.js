import Header from '../components/header'
import Footer from '../components/footer';

const Contact = () => {
  return (
    <div>
      <Header />
      <section className="contact">
        <h1>Contact Us</h1>
        <p>Email: info@capstoneholidays.in</p>
        <p>Phone: +91 123 456 7890</p>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
