import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../client";

const NewsLetterList = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await client.getEntries({
          content_type: "newslettter", // specify the content type you want to fetch
        });
        // console.log(response);
        if (response.items.length) {
          setEntries(response.items);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchEntries();
  }, []);

  function handleEntryField(entry) {
    if (entry.fields.pdf && entry.fields.pdf.fields.file.url !== null) {
      window.open(entry.fields.pdf.fields.file.url, "_blank");
    } else {
      window.open(`/content/${entry.fields.slug}`, "_blank");
    }
  }
  return (
    <div>
      <h2>Newsletters</h2>
      <ul>
        {entries.map((entry) => (
          <li key={entry.sys.id}>
            <Link to="/newsletterlist/cpnews">
              <span onClick={() => handleEntryField(entry)}>
                {entry.fields.monthAndYear}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsLetterList;
