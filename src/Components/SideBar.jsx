import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import client from "../client";

const SideBar = () => {
    const { slug } = useParams();
    const [entry, setEntry] = useState([]);

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await client.getEntries({
                    content_type: "newsLetterSiderbar",
                    "fields.slug": slug,
                });
                console.log("Slug:", slug);
                console.log("Response:", response);
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

            {entry.map(itmes => (
                <>
                    <NavLink to='/newsletter/from-the-editorial-desk'>{itmes.fields.title}</NavLink>
                </>
            ))}
        </>
    )
}

export default SideBar
