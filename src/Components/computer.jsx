import React, { useEffect, useState } from 'react';
import * as contentful from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import  client  from '../client';
const MyComponent = ({info}) => {
  console.log(info);
  const htmlData = documentToHtmlString(info)
  return (
    <div id="rich-text-body" >
       { htmlData }
      </div>
  );
};

export default MyComponent;