import React, { useEffect, useState } from "react";
import client from "../client";

const ContentList = (prop) => {
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
          content_type: 'news',
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
      <div>
        {title}
      </div>
      {entry.map((item) => {
        const { title } = item.fields;
        return (
          <ul>
            <React.Fragment key={item.id}>
              <li>{title}</li>
            </React.Fragment>
          </ul>
        );
      })}
    </div>
  );
};

export default ContentList;
