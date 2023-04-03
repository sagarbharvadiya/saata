import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import client from "../client";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

function CertifiedMembers() {

  const [entry, setEntry] = useState([]);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await client.getEntries({
          content_type: "certifiedMembers",
          // "fields.slug": slug,
        });

        console.log(response)
        if (response.items.length) {
          setEntry(response.items);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchPage();
  }, []);
  return (
    <>
      <div className="Certified-Members-section">
        <div className="Certified-Members-wrapper">
          <h2 className="Certified-Members-text">Certified Members</h2>
          <div className="Certified-Members-folder">
            {
              entry.map((item) => {
                const { qualification, name, } = item.fields;
                const id = item.sys.id
                console.log(id)
                const richTextContent = documentToReactComponents(qualification, {
                  renderNode: {
                    [INLINES.ASSET_HYPERLINK]: (node) => (
                      <a href={`https://` + node.data.target.fields.file.url} target="_blank" rel="noopener noreferrer">{node.data.target.fields.title}</a>

                    ),
                    [BLOCKS.EMBEDDED_ASSET]: (node) => (
                      <img
                        src={`https:${node.data.target.fields.file.url}`}
                        alt={node.data.target.fields.description}
                      />

                    ),
                  },
                });
                const richTextName = documentToReactComponents(name, {
                  renderNode: {
                    [INLINES.ASSET_HYPERLINK]: (node) => (
                      <a href={`https://` + node.data.target.fields.file.url} target="_blank" rel="noopener noreferrer">{node.data.target.fields.title}</a>

                    ),
                    [BLOCKS.EMBEDDED_ASSET]: (node) => (
                      <img
                        src={`https:${node.data.target.fields.file.url}`}
                        alt={node.data.target.fields.description}
                      />

                    ),
                  },
                });
                return (
                  <React.Fragment key={id}> 
                  <div>
                      <div>
                        {richTextContent}
                      </div>
                      <div className="certified-members-image-folder">
                        {richTextName}
                      </div>
                    </div>    
                   
                  </React.Fragment>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default CertifiedMembers;
