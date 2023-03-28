import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import client from "../client";

const ContentList = (prop) => {

  const [tonews, sertnews] = useState(false);
  const togglenews = () => { sertnews(!tonews) }

  const [modal, sertModal] = useState(false);
  const newsdropdown = () => {
    sertModal(!modal);
  };
  const { monthAndYear, type, title } = prop
  const [entry, setEntry] = useState([]);
  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await client.getEntries({
          content_type: "news",
          "fields.monthAndYear": monthAndYear,
          "fields.type":type,
        });
        console.log(response.items);
        console.log(prop.monthAndYear);
        if (response.items.length) {
          setEntry(response.items.reverse());
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchPage();
  }, []);

  return (
    <div>
      <div onClick={togglenews} className="news-feild">
        {title}
      </div>
      {tonews &&(
        <ul className="news-dropdrown-menu">
          <li>
            {entry.map((item) => {
              const { title } = item.fields;
              return (
                <React.Fragment key={item.id}>
                    <li><NavLink to={`${title}`}>{title}</NavLink></li>
                  </React.Fragment>
              );
            })}
          </li> 
      </ul>
      )}
    </div>
  );
};

export default ContentList;
