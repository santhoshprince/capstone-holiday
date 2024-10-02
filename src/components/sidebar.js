import React from 'react';
import Categories from '../components/categories';
import RecentPosts from '../components/recentblogs';
import HelpOffer from '../components/helpoffer';


const Sidebar = () => {
  return (
    <aside className="sidebar-area">
      <Categories />
      <RecentPosts />
      <HelpOffer />
    </aside>
  );
};

export default Sidebar;
