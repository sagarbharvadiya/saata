import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ContentList from "./ContentList";

const SideBar = ({ monthAndYear }) => {
  const [activeLink, setActiveLink] = useState(null); //state variable activeLink
  const location = useLocation(); // returns the current loction or url 

  const handleLinkClick = (slug) => {
    setActiveLink(slug);
    localStorage.setItem("activeLink", slug);
  };// activeLink = slug saved in localstorage with setItem

  // take the slug from localstorage 
  useEffect(() => {
    const savedLink = localStorage.getItem("activeLink");
    if (savedLink) {
      setActiveLink(savedLink);
    }
  }, []);

  useEffect(() => {
    const pathname = location.pathname;
    if (activeLink && !pathname.includes(activeLink)) {
      setActiveLink(null);
      localStorage.removeItem("activeLink");
    }
  }, [location.pathname, activeLink]);

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
              setActiveLink={setActiveLink} 
            />
            <ContentList
              monthAndYear={monthAndYear}
              type={"News"}
              title={"Ta News"}
              activeLink={activeLink}
              onLinkClick={handleLinkClick}
              setActiveLink={setActiveLink} 
            />
            <ContentList
              monthAndYear={monthAndYear}
              type={"article"}
              title={"ARTICLES"}
              activeLink={activeLink}
              onLinkClick={handleLinkClick}
              setActiveLink={setActiveLink} 
            />
            <ContentList
              monthAndYear={monthAndYear}
              type={"Experiences"}
              title={"Experiences"}
              activeLink={activeLink}
              onLinkClick={handleLinkClick}
              setActiveLink={setActiveLink} 
            />
            <ContentList
              monthAndYear={monthAndYear}
              type={"creativeCorner"}
              title={"Creative Corner"}
              activeLink={activeLink}
              onLinkClick={handleLinkClick}
              setActiveLink={setActiveLink} 
            />
            <img src="../Images/think_tank.png" alt="think"></img>
            <ContentList
              monthAndYear={monthAndYear}
              type={"CopyrightPolicy"}
              title={"Copyright policy"}
              activeLink={activeLink}
              onLinkClick={handleLinkClick}
              setActiveLink={setActiveLink} 
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
