import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import client from "../client";

const ContentList = (prop) => {
  const [entry, setEntry] = useState([]);
  const [toggleNews, setToggleNews] = useState(false);
  // const toggleNewsHandler = () => setToggleNews((prevState) => !prevState);
  const { monthAndYear, type, title, activeLink, onLinkClick,setActiveLink } = prop;
  const { slug } = useParams();

  const toggleNewsHandler = (slug) => {
    if (slug === activeLink || activeLink === null) {
      setToggleNews((prevState) => !prevState);
      localStorage.setItem("toggleNews", !toggleNews);
      if (activeLink === slug) {
        setActiveLink(null);
        localStorage.removeItem("activeLink");
      } else {
        setActiveLink(slug);
        localStorage.setItem("activeLink", slug);
      }
    }
  };

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await client.getEntries({
          content_type: "news",
          "fields.monthAndYear": monthAndYear,
          "fields.type": type,
        });
        // console.log(response.items);
        // console.log(prop.monthAndYear);
        if (response.items.length) {
          setEntry(response.items.reverse());
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchPage();
  }, [monthAndYear, type]);

  useEffect(() => {
    const savedToggle = localStorage.getItem("toggleNews");
    if (savedToggle) {
      setToggleNews(JSON.parse(savedToggle));
    }
  }, []);

  useEffect(() => {
    if (activeLink === slug) {
      setToggleNews(true);
      localStorage.setItem("toggleNews", true);
    }
  }, [activeLink, slug]);

  return (
    <div>
      <div onClick={() => toggleNewsHandler(slug)} className="news-field">
        {title}
      </div>
      <ul className="news-drop_drown-menu">
        {entry.map((item, index) => {
          const { title, slug } = item.fields;
          const isActive = activeLink === slug;
          return (
            <React.Fragment key={item.sys.id}>
              {toggleNews && (
                <li>
                  <NavLink
                    to={`/content/${slug}`}
                    className={isActive ? "activeLink" : ""}
                    onClick={() => {
                      onLinkClick(slug);
                      setToggleNews(false);
                    }}
                  >
                    {title}
                  </NavLink>
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default ContentList;
