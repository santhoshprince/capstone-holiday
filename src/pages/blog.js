import React from "react";
import BlogList from "../components/blogList";
import Pagination from "../components/blogpagination";
import ContentSection from "../components/contentbg";
import Sidebar from "../components/sidebar";
import blogbg from "../assets/blogsimg/city-4864747_1920.jpg";
import { Helmet } from 'react-helmet';


const BlogPage = () => {
  const seoData = {
    title: "Travel Blog | Capstone Holidays Chennai",
    keywords: "travel blog, singapore malaysia blog, bali blog, vietnam cambodia blog, international travel blog, domestic travel blogs",
    description: "Wander, Dream, and learn. This travel blog offers free travel advice and guidance along with information about radiant places to visit throughout the globe!",
    schema: {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "Capstone Holidays",
      "url": "https://www.capstoneholidays.in/travel-blog/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.capstoneholidays.in/travel-blog/{search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  };
  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="keywords" content={seoData.keywords} />
        <meta name="description" content={seoData.description} />
        <script type="application/ld+json">
          {JSON.stringify(seoData.schema)}
        </script>
      </Helmet>
     <ContentSection heading={"Blogs"} children={""} backgroundImage={blogbg} />
      <section className="th-blog-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-lg-12">
            {/* <h3 className="blog-title" style={{textAlign:"center"}}>TourPackages Blogs</h3> */}
              <BlogList />
              <Pagination />
            </div>
          </div>
        </div>
      </section>
    </>
   
  );
};

export default BlogPage;
