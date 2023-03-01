import React from "react";
import datajson from '../DataJson/data.json'

function BoardOfMembers(){
    return(
        <>
            <div className="board-of-members-section info-container">
                <div className="board-of-members-wrapper">
                        <h2 className="Board-of-Members-title info-title">Board of Members</h2>
                    <div className="board-of-members-folder">
                        {
                            datajson.Board_of_members_data.map((val) => {
                                return <div className="board-of-members-blog-box-section">
                                            <div className="board-of-members-image">
                                                <img src={val.image} alt={val.image}/>
                                            </div>
                                            <h2>{val.title}</h2>
                                            <p>{val.des}</p>
                                        </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default BoardOfMembers;