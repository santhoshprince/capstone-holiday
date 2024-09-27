import React from 'react';
import RecentPosts from './RecentPosts';
import PopularTags from '../components/populartags';
import HelpOffer from '../components/helpoffer';

const TourPage = () => {
  return (
    <section className="space">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-lg-7">
            {/* Your main content goes here */}
          </div>
          <div className="col-xxl-4 col-lg-5">
            <aside className="sidebar-area">
              <RecentPosts />
              <PopularTags />
              <HelpOffer />
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourPage;
