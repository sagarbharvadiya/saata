import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../client";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

function NewsletterTeam() {
    const { slug } = useParams();
    const [entry, setEntry] = useState([]);

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await client.getEntries({
                    content_type: "newsletterTeam",
                    "fields.slug": slug
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
    }, [slug]);
    // console.log(entry)
    return (
        <>
            
            {

                entry.map((item) => {
                    const { designation, fullName, title, richTextEditor } = item.fields;
                    const image = item.fields.image.fields.file.url;
                    const id = item.sys.id
                    console.log(id)
                    const richTextContent = documentToReactComponents(richTextEditor);
                    return (
                        <React.Fragment key={id}>
                            <div className="news-letter-team">
                                <div className="new-letter-team-d-flex">
                                    <img src={image} alt={fullName}></img>
                                    <div className="nes-letter-team-wrapper">
                                        <h2>{fullName}</h2>
                                        <h6>{designation}</h6>
                                    </div>
                                </div>
                                <div className="description">
                                    {richTextContent}
                                </div>
                                <div>
                                </div>
                            </div>

                        </React.Fragment>
                    )
                })
            }

        </>
    );
}

export default NewsletterTeam;
