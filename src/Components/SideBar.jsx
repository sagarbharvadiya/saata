import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import client from "../client";

const SideBar = () => {
    // const [modal, sertModal] = useState(false);
    // const newsdropdown = () => { sertModal(!modal) }

    // const [articlemodal, sertModalarticl] = useState(false);
    // const articlesdropdown = () => { sertModalarticl(!articlemodal) }


    // const { slug } = useParams();
    const [entry, setEntry] = useState([]);

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await client.getEntries({
                    content_type: "newsLetterSiderbar"
                    // "fields.slug": slug,
                });
                // console.log("Slug:", slug);
                console.log("Response:", response);
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
        <>
            <div className="news-letter-folder2">
                <div className="news-latter-right-field-folder">
                   
                <ul>
                    {entry.map((items) => {
                        return (
                            <React.Fragment key={items.sys.id}>
                                    <li>
                                        <NavLink to={items.fields.link}>{items.fields.title}</NavLink>
                                    </li>
                            </React.Fragment>
                        )
                    })}
                    </ul>
                    
                </div>
            </div>

        </>
    )
}

export default SideBar
