import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../client";
import NewsLetterTeamSidebar from "../Components/NewsLetterTeamSidebar";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
function NewsletterTeam() {
    const { slug } = useParams();
    const [entry, setEntry] = useState([]);
    const [currentSlug, setCurrentSlug] = useState(slug);

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await client.getEntries({
                    content_type: "newsletterTeam",
                    "fields.slug": currentSlug
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
    }, [currentSlug]);

    useEffect(() => {
        setCurrentSlug(slug);
    }, [slug]);

    return (
        <>
        <div className="news-letter-team-wrapper">
            <NewsLetterTeamSidebar/>
                {
                    entry.map((item) => {
                        const { designation, fullName, richTextEditor } = item.fields;
                        const image = item.fields.image.fields.file.url;
                        const id = item.sys.id
                        console.log(id) 
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
                                    {documentToReactComponents(richTextEditor)}
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })
                }
        </div>
        </>
    );
}

export default NewsletterTeam;
