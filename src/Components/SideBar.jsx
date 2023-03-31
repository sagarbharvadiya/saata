import React, { useState } from "react";
import ContentList from "./ContentList";

const SideBar = ({ monthAndYear }) => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (slug) => {
    setActiveLink(slug);
  };


  return (
    <>
      <div className="news-letter-folder2">
        <div className="news-latter-right-field-folder">
          <ul>
            <ContentList
              monthAndYear={monthAndYear}
              type={"newslettter"}
              title={"From the Editorial Desk"}
              activeLink={activeLink}
              onLinkClick={handleLinkClick}
            />
            <ContentList
              monthAndYear={monthAndYear}
              type={"News"}
              title={"Ta News"}
              activeLink={activeLink}
              onLinkClick={handleLinkClick}
            />
            <ContentList
              monthAndYear={monthAndYear}
              type={"article"}
              title={"ARTICLES"}
              activeLink={activeLink}
              onLinkClick={handleLinkClick}
            />
            <ContentList
              monthAndYear={monthAndYear}
              type={"Experiences"}
              title={"Experiences"}
              activeLink={activeLink}
              onLinkClick={handleLinkClick}
            />
            <ContentList
              monthAndYear={monthAndYear}
              type={"creativeCorner"}
              title={"Creative Corner"}
              activeLink={activeLink}
              onLinkClick={handleLinkClick}
            />
            <img src="../Images/think_tank.png" alt="think"></img>
            <ContentList
              monthAndYear={monthAndYear}
              type={"CopyrightPolicy"}
              title={"Copyright policy"}
              activeLink={activeLink}
              onLinkClick={handleLinkClick}
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
