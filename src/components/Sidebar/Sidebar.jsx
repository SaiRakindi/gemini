import { useContext, useState } from "react";
import { assets } from "../../assets/assets";

import "./Sidebar.css";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const handleMenuIcon = () => {
    setExtended((prevState) => !prevState);
  };

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
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

        <div className="new-chat" onClick={newChat}>
          <img src={assets.plus_icon} alt="" />
          {!extended && <p>New Chat</p>}
        </div>

        {!extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((prevPrompt, index) => {
              return (
                <div
                  className="recent-entry"
                  onClick={loadPrompt(prevPrompt)}
                  key={index}
                >
                  <img src={assets.message_icon} alt="" />

                  <p>{prevPrompt.slice(0, 18)} ...</p>
                </div>
              );
            })}
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
