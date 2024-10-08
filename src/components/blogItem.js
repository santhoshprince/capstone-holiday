import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = ({ id, image, author, date, category, title, text, videoLink, isVideo }) => {
  return (
    <div className="th-blog blog-single has-post-thumbnail">
      {isVideo ? (
        <div className="blog-img" data-overlay="bg-title" data-opacity="5">
          <Link to={`/blog/${id}`}>
            <img src={image} alt="Blog Image" />
          </Link>
          <a href={videoLink} className="play-btn popup-video">
            <i className="fas fa-play"></i>
          </a>
        </div>
      ) : (
        <div className="blog-img">
          <Link to={`/blog/${id}`}>
            <img src={image} alt="Blog Image" />
          </Link>
        </div>
      )}
      <div className="blog-content">
        <div className="blog-meta">
          <a className="author" href="#">
            <i className="fa-light fa-user"></i>by {author}
          </a>
          <a href="#">
            <i className="fa-solid fa-calendar-days"></i>{date}
          </a>
          <a href="#">
            <img src="assets/img/icon/map.svg" alt="" />{category}
          </a>
        </div>
        <h2 className="blog-title">
          <Link to={`/blog/${id}`}>{title}</Link>
        </h2>
        <p className="blog-text">{text}</p>
        <Link to={`/blog/${id}`} className="th-btn style4 th-icon">Read More</Link>
      </div>
    </div>
  );
};

export default BlogItem;
