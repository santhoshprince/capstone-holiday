import React from "react";
import BlogList from "../components/blogList";
import Pagination from "../components/blogpagination";
import ContentSection from "../components/contentbg";
import Sidebar from "../components/sidebar";
import blogbg from "../assets/blogsimg/city-4864747_1920.jpg";
import { Helmet } from 'react-helmet';


const BlogPage = () => {
  return (
    <>
     <Helmet>
        <title>Blogs</title>
        {/* <meta name="keywords" content="andaman tour, andaman tourism itinerary, andaman island, andaman tour plan" /> */}
        {/* <meta name="description" content="The Andaman tour from Chennai will take you to Andaman after monsoon days. So, Capstone Holidays plans for an Andaman trip from October to April." /> */}
       
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
