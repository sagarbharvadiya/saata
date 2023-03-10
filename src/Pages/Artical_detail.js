import React, { useState, useEffect, useCallback } from "react";
import { client } from "../client";

function Articles() {
    const [info, setInfo] = useState([]);

    const cleanUpInfo = useCallback((rawdata) => {
        const cleaninfo = rawdata.map((item) => {
            const { sys, fields } = item;
            const { id } = sys;
            const Title = fields.title;
            const author = fields.author;
            const icon = fields.icon.fields.file.url;
            const image = fields.image.fields.file.url;
            const description = fields.description;
            const Time = fields.time;
            const subTitle = fields.subTitle;
            const updateInfo = { id, Title, image, description, Time, subTitle, icon, author };
            return updateInfo;
        });
        setInfo(cleaninfo);
    }, []);

    const getInfo = useCallback(async () => {
        try {
            const response = await client.getEntries({ content_type: "articleDetials" });
            const responseData = response.items
            console.log(responseData)
            if (responseData) {
                cleanUpInfo(responseData);
            } else {
                setInfo([]);
            }
        } catch (error) {
            console.log(error);
        }
    }, [cleanUpInfo]);

    useEffect(() => {
        getInfo();
    }, [getInfo]);

    return (
        <>
            <div className="Articles-section">
                <div className="Articles-wrapper">
                    <div className="Articles-folder">
                        <div className="Articles-blog-section">
                            {
                                info.map((item, index) => {
                                    return (
                                        <>

                                            <div className="artical-author-folder">
                                                <div className="artical-author-image">
                                                    <img src={item.icon} alt={item.icon} />
                                                </div>
                                                <div className="artical-author-text-folder">
                                                    <h2>{item.Title}</h2>
                                                    <p className="Articles-date">{item.subTitle}</p>
                                                </div>
                                            </div>
                                            <div className="Articles-image">
                                                <img src={item.image} alt={item.image} />
                                            </div>
                                            <p className="Articles-Author"><span>{item.author}</span>
                                                {item.description}
                                            </p>
                                            {/* <div className="Articles-des-folder">
                                                <p className="Articles-des">
                                                    1. The Strokes Cluster. This cluster finds correlates in existing theories of “attachment,” “intimacy,” “warmth,” “tender loving care,” “need to belong,” “contact,” “closeness,” “relationships,” “social support,” and “love.”
                                                </p>
                                                <p className="Articles-des">
                                                    2. The OK Cluster. This cluster finds correlates in existing theories of “positive psychology,” “flow,” “human potential,” “resiliency,” “excellence,” “optimism,” “subjective well-being,” “positive self-concept,” “spontaneous healing,” “nature’s helping hand,” “vis medicatrix naturae” (the healing power of nature), and “the healing power of the mind.”
                                                </p>
                                                <p className="Articles-des">
                                                    3. The Script and Games Cluster. This cluster finds correlates in existing theories of “narratives,” “maladaptive schemas,” “self-narratives,” “story schemas,” “story grammars,” “personal myths,” “personal event memories,” “self-defining memories,” “nuclear scenes,” “gendered narratives,” “narrative coherence,” “narrative complexity,” “core self-beliefs,” and “self-concept.”
                                                </p>
                                                <p className="Articles-des">
                                                    4. The Ego States and Transactions Cluster. The idea of three egos states and the transactional interactions between them are the most distinctive feature of transactional analysis and yet have the least amount of resonance in the literature. However, the utility of this concept is the principal reason why people become interested and maintain their interest in transactional analysis.
                                                </p>
                                                <p className="Articles-des">
                                                    5. The Transactional Analysis Theory of Change Cluster. Transactional analysis is essentially a cognitive-behavioral theory of personality and change that nevertheless retains an interest in the psychodynamic aspect of the personality.
                                                </p>
                                                <p className="Articles-des">
                                                    Echoes of each of these clusters of concepts can be found in writings in the fields of psychology, social psychology, and psychotherapy, where they exist independent of any awareness of their possible transactional analysis origins. Transactional analysis includes all five in a sophisticated, interconnected theory of personality and change. From the social sciences literature, we have collected a portfolio of method, theory, and research that corroborates each of the five theoretical clusters. This portfolio is summarized in the following sections.
                                                </p>
                                            </div> */}
                                        </>

                                    )
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Articles;
