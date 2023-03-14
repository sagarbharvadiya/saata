import React, { useEffect, useState } from 'react';
import * as contentful from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { client } from '../client';
const MyComponent = () => {
  const [renderedHtml, setRenderedHtml] = useState('');

  useEffect(() => {
    client.getEntry('5OwsNAw0EAg1EOgGW1UT4J')
      .then((entry) => {
        console.log(entry.fields.description);
        const rawRichTextField = entry.fields.description;
        const htmlString = documentToHtmlString(rawRichTextField);
        setRenderedHtml(htmlString);
        console.log(entry)
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div id="rich-text-body" dangerouslySetInnerHTML={{ __html: renderedHtml }} />
  );
};

export default MyComponent;