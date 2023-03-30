import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../client";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

const BasicPage = () => {
    const { slug } = useParams();
    const [entry, setEntry] = useState([]);

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await client.getEntries({
                    content_type: "basicPage",
                    "fields.slug": slug,
                });
                console.log(slug)
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
    return (
        <>
            {
                entry.map((item) => {
                    const { title, description, subTitle } = item.fields;
                    const id = item.sys.id
                    console.log(id)
                    const imageUrl = (item?.fields?.image?.fields?.file?.url) ? item?.fields?.image?.fields?.file?.url : '';
                    const richTextContent = documentToReactComponents(description, {
                        renderNode: {
                          [INLINES.ASSET_HYPERLINK]: (node) => (
                            <a href={`https://`+ node.data.target.fields.file.url} target="_blank" rel="noopener noreferrer">{node.data.target.fields.title}</a>
                          
                            ),
                        },
                    });
                    return (
                        <React.Fragment key={id}>
                                <div className="about_us about_ta">
                                    <div className="about_us_wrapper">
                                        <h2>{title}</h2>
                                    </div>
                                    <div className="aboutus_parent">
                                        <div className="about_us_img">
                                            <img src={imageUrl} alt={imageUrl.title} />
                                            <h3>{subTitle}</h3>
                                        </div>
                                        <div className="about_us_content">
                                            {richTextContent}
                                        </div>
                                    </div>
                                </div>       
                        </React.Fragment>
                    )
                })
            }
        </>
    )
}

export default BasicPage
