import React from "react";
import BlogList from "../components/blogList";
import Pagination from "../components/blogpagination";
import ContentSection from "../components/contentbg";
import Sidebar from "../components/sidebar";

const BlogPage = () => {
  return (
    <>
     <ContentSection heading={"Blogs"} children={""} />
    <section className="th-blog-wrapper space-top space-extra-bottom">
        
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-lg-7">
        
            <BlogList />
            <Pagination />
          </div>
          <div className="col-xxl-4 col-lg-3">
              <Sidebar />
            </div>
        </div>
      </div>
    </section>
    </>
   
  );
};

export default BlogPage;
