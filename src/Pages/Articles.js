import React from "react";
import { NavLink } from "react-router-dom";
import Artical_datajason from "../DataJson/Artical-data.json";

function Artical_section(){
    return(
        <>
            <div className="Artical-section">
                <div className="Artical-wrapper">
                        <h2 className="artical-text">Category Archives: TA Articles</h2>
                    <div className="artical-blog-folder">
                        {
                            Artical_datajason.map((val) => {
                                return <div className="artical-blog-box-section">
                                            <div className="artical-image">
                                                <img src={val.image}/>
                                            </div>
                                            <h2>{val.title}</h2>
                                            <p className="artical-des">{val.des}</p>
                                            <div className="artical-date-folder">
                                                <p className="artical-date">{val.date}</p>
                                                <NavLink to="/Articles_section/Articles">{val.read_more}</NavLink>
                                            </div>
                                        </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Artical_section;