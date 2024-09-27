import React from 'react';

const Categories = () => {
  const categories = [
    { name: 'City Tour', count: 8 },
    { name: 'Beach Tours', count: 6 },
    { name: 'Wildlife Tours', count: 2 },
    { name: 'News & Tips', count: 7 },
    { name: 'Adventure Tours', count: 9 },
    { name: 'Mountain Tours', count: 10 }
  ];

  return (
    <div className="widget widget_categories">
      <h3 className="widget_title">Categories</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <a href="blog.html"><img src="assets/img/theme-img/map.svg" alt="" />{category.name}</a>
            <span>({category.count})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
