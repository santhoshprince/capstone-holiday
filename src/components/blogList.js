import React, { useState } from "react";
import BlogItem from "./blogItem";
import Pagination from "./blogpagination";

// Dummy blog data
import blog1 from "../assets/blogsimg/mahabalipuram-554237_1280.jpg";
import blog2 from "../assets/blogsimg/mountains-5969476_1280.jpg";
import blog3 from "../assets/blogsimg/reflection-3239899_1280.jpg";
import blog4 from "../assets/blogsimg/town-6843799_1280.jpg";
import blog5 from "../assets/blogsimg/bali-tour-packages-4706037_1280.jpg";
import blog6 from "../assets/blogsimg/camera-1130731_1280.jpg";
import blog7 from "../assets/blogsimg/temple-4128662_1280.jpg";
import blog8 from "../assets/blogsimg/veligandu-island-1044366_1280.jpg";
import blog9 from "../assets/blogsimg/sigiriya-459197_1280.jpg";
import blog10 from "../assets/blogsimg/dubai-4044183_1280.jpg";
import blog11 from "../assets/blogsimg/pham-ngu-lao-3989110_1280.jpg";
import blog12 from "../assets/blogsimg/marina-bay-of-singapore-2714866_1280.jpg";
import blog13 from "../assets/blogsimg/temple-2033409_1280.jpg";

const blogs = [
    {
      id: 1,  // Add unique IDs
      image: blog1,
      author: "Blog",
      slug:"best-travel-agents-in-chennai",
      date: "September 27, 2024",
      category: "Tour Guide",
      title: "Best Travel Agents in Chennai",
      text: "Absolutely! capstone holidays is the best travel agency in Chennai. Wherever you go you can't find the best agency in Chennai like Capstone Holidays. If you are searching for the best travel agency then why are you waiting! Reach us immediately. Once you reached us definitely capstone holidays will become your best travel agency in...",
      isVideo: false,
    },
    {
      id: 2,
      image: blog2,
      author: "Blog",
      slug: "kashmir-tour-packages",
      date: "September 24, 2024",
      category: "Tour Guide",
      title: "Kashmir Tour Packages",
      text: "Witness the extraordinary travel destinations & enjoy compatible services with our best tour operators in Chennai - Capstone Holidays...",
      isVideo: false,
    },
    {
      id: 3,
      image: blog3,
      author: "Blog",
      slug: "best-tours-and-travels-in-chennai",
      date: "September 14, 2024",
      category: "Tour Guide",
      title: "Best Tours And Travels in Chennai",
      text: "Witness the extraordinary travel destinations & enjoy compatible services with our best tour operators in Chennai - Capstone Holidays...",
      isVideo: false,
    },
    {
      id: 4,
      image: blog4,
      author: "blog",
      slug: "best-tour-operators-in-chennai",
      date: "September 6, 2024",
      category: "Tour Guide",
      title: "Best Tour Operators in Chennai",
      text: "Witness the extraordinary travel destinations & enjoy compatible services with our best tour operators in Chennai - Capstone Holidays...",
      videoLink: "https://www.youtube.com/watch?v=cQfIUPw72Dk",
      isVideo: false,
    },

    {
      id: 5,
      image: blog5,
      author: "Blog",
      slug: "bali-tour-package",
      date: "August 22, 2024",
      category: "Tour Guide",
      title: "Bali Tour Package",
      text: "Witness the blue beaches, volcanoes, waterfalls, & landscapes in our Capstone Bali Tour Package, which drags you to a vibrant world...",
      videoLink: "https://www.youtube.com/watch?v=cQfIUPw72Dk",
      isVideo:false,
    },
    {
      id: 6,
      image: blog6,
      author: "Blog",
      slug: "best-travel-agency-in-velachery",
      date: "August 9, 2024",
      category: "Tour Guide",
      title: "Best Travel agency in Velachery",
      text: "The Best Travel agency in Velachery is Capstone because it goes far surpassing the call of duty to satisfy customers in the travels industry...",
      videoLink: "https://www.youtube.com/watch?v=cQfIUPw72Dk",
      isVideo: false,
    },
    {
      id: 7,
      image: blog7,
      slug: "thailand-tour-package",
      author: "Blog",
      date: "August 5, 2024",
      category: "Tour Guide",
      title: "Thailand Tour Package",
      text: "Thailand is geographically located in the midst of Southeast Asia. Thailand is known for its numerous islands with beautiful beaches and a mild climate. The largest and most significant economic sector in the country is tourism...",
      videoLink: "https://www.youtube.com/watch?v=cQfIUPw72Dk",
      isVideo: false,
    },

    {
      id: 8,
      image: blog8,
      slug: "maldives-honeymoon-package",
      author: "David Smith",
      date: "July 23, 2024",
      category: "Tour Guide",
      title: "Maldives Honeymoon Package",
      text: "The Maldives is an experience unlike any other; it's a small group of islands in the Indian Ocean with flawless beaches, the purest turquoise waters, amazing marine life, over-the-water cottages, and much more—it's an island nation that should be on everyone's bucket list!...",
      videoLink: "https://www.youtube.com/watch?v=cQfIUPw72Dk",
      isVideo: false,
    },
    {
      id: 9,
      image: blog9,
      slug: "srilanka-tour-package",
      author: "Blog",
      date: "July 16, 2024",
      category: "Tour Guide",
      title: "Sri Lanka Tour Package",
      text: "One of the most popular South Asian vacation destinations, Sri Lanka is a region of a fairy tale, historical significance, and one of its most treasured cultures, enticing tourists of all stripes. With more than 2,000 years of documented history, historical Sri Lankan tourist places are long-standing...",
      videoLink: "https://www.youtube.com/watch?v=cQfIUPw72Dk",
      isVideo: false,
    },
    {
      id: 10,
      image: blog10,
      author: "Blog",
      slug: "dubai-tour-packages-from-india",
      date: "June 26, 2024",
      category: "Tour Guide",
      title: "Dubai Tour Packages from India",
      text: "Dubai is an adventurous vacation spot with its breathtaking skyscrapers, rich historical legacy, gorgeous white sand beaches, vast desert dunes, exhilarating adventure sports, terrifying theme parks, opulent retail complexes, and more...",
      videoLink: "https://www.youtube.com/watch?v=cQfIUPw72Dk",
      isVideo: false,
    },
    {
      id: 11,
      image: blog11,
      author: "Blog",
      slug: "vietnam-tour-packages-from-india",
      date: "June 24, 2024",
      category: "Tour Guide",
      title: "Vietnam Tour Packages from India",
      text: "I grew tired of handling my regular responsibilities and staying idle. Let's unlock the happiness within you by a spectacular journey in capstone holidays with Vietnam and Cambodia tour package. Get close with your loved ones by planning a love journey to Vietnam and Cambodia tour package...",
      videoLink: "https://www.youtube.com/watch?v=cQfIUPw72Dk",
      isVideo: false,
    },

    {
      id: 12,
      image: blog12,
      slug:"singapore-malaysia-tour-package-from-chennai",
      author: "Blog",
      date: "June 24, 2024",
      category: "Tour Guide",
      title: "Singapore Malaysia Tour Package from Chennai",
      text: "People know Capstone Holidays for its exceptional service in both domestic and international services from Chennai and Coimbatore. Choosing the Malaysia Singapore trip package from Capstone allows you to sit back and enjoy your holidays without the hassle of planning everything...",
      videoLink: "https://www.youtube.com/watch?v=cQfIUPw72Dk",
      isVideo: false,
    },

    {
      id: 13,
      image: blog13,
      slug:"best-travel-agency-in-chennai",
      author: "Blog",
      date: "June 24, 2024",
      category: "Tour Guide",
      title: "Best Travel Agency in Chennai",
      text: "If you are one of those curious souls yearning for cosy and exquisite travel experiences that delight you or simply looking for a tour to refresh your body and soul, there are many destinations that our planet has to offer you...",
      videoLink: "https://www.youtube.com/watch?v=cQfIUPw72Dk",
      isVideo: false,
    },

    // Add more blogs here...
  ];
  

const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4; // Number of blogs per page

  // Calculate the total number of pages
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Get the blogs for the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="th-blog-wrapper space-top space-extra-bottom">
    <div className="container">
      <div className="row">
        {currentBlogs.map((blog, index) => (
          <div className="col-lg-6 col-md-6 col-sm-12" key={index}>
            <BlogItem {...blog} />
          </div>
        ))}
      </div>
      {/* Pagination */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  </section>
  );
};

export default BlogList;
