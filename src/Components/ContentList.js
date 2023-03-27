import { useEffect, useState } from "react";
import client from "../client";

const ContentList = (prop) => {
  const [modal, sertModal] = useState(false);
  const newsdropdown = () => {
    sertModal(!modal);
  };
  const {monthAndYear, type} = prop
  const [entry, setEntry] = useState([]);
  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await client.getEntries({
          content_type: type,
          "fields.monthAndYear": monthAndYear,
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
      <ul>
        <li>
          {entry.map((item) => {
            const { title } = item.fields;
            return (
              <ul>
                <li>{title}</li>
              </ul>
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default ContentList;
