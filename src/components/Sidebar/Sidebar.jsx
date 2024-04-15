import { useState } from "react";
import { assets } from "../../assets/assets";

import "./Sidebar.css";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  const handleMenuIcon = () => {
    setExtended(!extended);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img
          src={assets.menu_icon}
          alt=""
          className="menu"
          onClick={handleMenuIcon}
        />

        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {!extended && <p>New Chat</p>}
        </div>

        {!extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="" />

              <p>What is React...</p>
            </div>
          </div>
        )}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {!extended && <p>Help</p>}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {!extended && <p>Activity</p>}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {!extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
