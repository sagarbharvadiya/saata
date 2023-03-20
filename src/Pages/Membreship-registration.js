import React from "react";
import Membership_Registration_data from "../DataJson/Membership-registrationdata";

function MembershipRegistration(){
    return(
        <>
            <div className="membreship-registration-section">
                <div className="membreship-registration-wrapper">
                    <h2 className="Membership-Registration-title">Membership Registration</h2>
                    <h2 className="Membership-Registration-text">If you are already an existing SAATA Member, <a href="https://subscriptions.zoho.in/portal/saata1/login">Click here to login</a></h2>
                </div>
                <div className="membership-registration-card-folder">
                    {
                        Membership_Registration_data.map((val) => {
                            return <>
                                        <div className="membership-registration-card">
                                            <div className="membership-registration-text">
                                                <h2>{val.title}</h2>
                                            </div>
                                            <div className="membership-registration-image">
                                                <img src={val.image}/>
                                            </div>
                                            <div className="membership-registration-card-des-folder">
                                                <div className="membership-registration-card-des">
                                                    <a href="#"><i class="fa-solid fa-check"></i></a>
                                                    <p>{val.des1}</p>
                                                </div>
                                                <div className="membership-registration-card-des">
                                                    <a href="#"><i class="fa-solid fa-check"></i></a>
                                                    <p>{val.des2}</p>
                                                </div>
                                            </div>
                                            <p className="plan-price"><a href="#"><i class="fa-solid fa-indian-rupee-sign"></i></a>{val.price}</p>
                                            <p className="Billed-Yearly">{val.Billed_Yearly}</p>
                                            <div className="membership-subscribe-btn">
                                                <a href="#">{val.subscribe}</a>
                                            </div>
                                        </div>
                                    </>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default MembershipRegistration;