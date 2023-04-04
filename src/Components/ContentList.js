import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import client from "../client";

const ContentList = (prop) => {
  const [entry, setEntry] = useState([]);
  const [toggleNews, setToggleNews] = useState(false);
  // const toggleNewsHandler = () => setToggleNews((prevState) => !prevState);
  const { monthAndYear, type, title, activeLink,  setActiveLink } = prop;
  const { slug } = useParams();
  const currentSlug = slug;

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

        if (response.items.length) {
          setEntry(response.items.reverse());
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchPage();
  }, [monthAndYear, type]);



  return (
    <div>
      <div onClick={() => toggleNewsHandler(slug)} className="news-field">
        {title}
      </div>
      <ul className="news-drop_drown-menu">
        {entry.map((item, index) => {
          const { title, slug } = item.fields;
          const isActive = currentSlug === slug; 
          return (
            <React.Fragment key={item.sys.id}>
              {toggleNews && (
                <li className={isActive ? "menu-item active" : "menu-item"}>
                  <NavLink to={`/content/${slug}`}>{title}</NavLink>
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
