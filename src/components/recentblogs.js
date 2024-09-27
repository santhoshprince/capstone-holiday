import React from 'react';
import post from "../img/blog/recent-post-1-1.jpg"

const RecentPosts = () => {
  return (
    <div className="widget">
      <h3 className="widget_title">Recent Posts</h3>
      <div className="recent-post-wrap">
        {/* Add recent post items here */}
        <div className="recent-post">
          <div className="media-img">
            <a href="blog-details.html">
              <img src={post} alt="Blog Image" />
            </a>
          </div>
          <div className="media-body">
            <h4 className="post-title">
              <a className="text-inherit" href="blog-details.html">
                Exploring The Green Spaces Of the island maldives
              </a>
            </h4>
            <div className="recent-post-meta">
              <a href="blog.html"><i className="fa-regular fa-calendar"></i>22/6/ 2024</a>
            </div>
          </div>
        </div>
        {/* Repeat for more posts */}
      </div>
    </div>
  );
};

export default RecentPosts;
