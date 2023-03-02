import React from "react";
import Slider from "react-slick";
import datajson from '../DataJson/data.json'

function BoardOfMembers() {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 3000,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };




    return (
        <>
            <div className="board-of-members-section info-container">
                <div className="board-of-members-wrapper">
                    <h2 className="Board-of-Members-title info-title">Board of Members</h2>
                       <div className="board-of-members-folder">
                           <Slider {...settings}>
                            {
                                datajson.Board_of_members_data.map((val) => {
                                    return (
                                        <div className="board-of-members-blog-box-section">
                                            <div className="board-of-members-image">
                                                <img src={val.image} alt={val.image} />
                                            </div>
                                            <h2>{val.title}</h2>
                                            <p>{val.des}</p>
                                        </div>
                                    )
                                })
                            }
                            </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BoardOfMembers;