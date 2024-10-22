import React from 'react';
import HelpOffer from '../components/helpoffer';
import EnquieryForm from "../components/inquieryform"


const Sidebar = () => {
  return (
    <aside className="sidebar-area">
      <EnquieryForm />
      {/* <HelpOffer /> */}
    </aside>
  );
};

export default Sidebar;
