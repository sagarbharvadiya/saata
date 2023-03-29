import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../client";

const NewsLetterList = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await client.getEntries({
          content_type: "news", // specify the content type you want to fetch
        });
        console.log(response);
        if (response.items.length) {
          setEntries(response.items);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchEntries();
  }, []);
  return (
    <div>
      <h2>Newsletters</h2>
      <ul>
        {entries.map((entry) => (
          <li key={entry.sys.id}>
            <Link to={`/newsletterlist/${entry.fields.slug}`}>
              {entry.fields.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsLetterList;
