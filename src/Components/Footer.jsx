import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <section className='footer'>
                <div className='footer_wrapper'>
                    <div className='get_d_fex'>
                        <div className='right'>
                            <div className='footer_logo'>
                                <img src="../images/itaa2.png" alt="logo" />
                            </div>
                        </div>

                        <div className='left'>
                            <div className='footer_menu'>
                                <ul>
                                    <li><Link to='/basicpage/about-us'>About SAATA</Link></li>
                                    <li><Link to="/basicpage/presidents-note">
                                        President’s Note
                                    </Link>
                                    </li>
                                    <li><Link to="basicpage/saata-bot">
                                        Saata Bot
                                    </Link>
                                    </li>
                                </ul>
                                <ul>
                                    <li><Link to="/basicpage/about-ta">About TA</Link></li>
                                    <li><Link to="/Contact">Contact Us</Link></li>
                                    <li><Link to="basicpage/eric-berne">Eric Berne</Link></li>
                                </ul>
                                <ul>
                                    <li><Link to="/basicpage/history-and-origin-of-saata">History and Origin of SAATA</Link></li>
                                    <li><Link to="/basicpage/mission-and-vision">Mission and Vision</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='social_icon'>
                        <a href="https://www.facebook.com/saataworld" target='_blank' rel='noreferrer'> <i className="fa-brands fa-facebook"></i></a>
                        <a href="https://twitter.com/saataorg" target='_blank' rel='noreferrer'> <i className="fa-brands fa-twitter"></i></a>
                        <a href="https://www.youtube.com/channel/UCGTMW3BmOElfJNNoUH2x9JA/videos" target='_blank' rel='noreferrer'>  <i className="fa-brands fa-youtube"></i></a>
                    </div>
                    <div className='copy_right'>
                        <p>@2023 SAATA </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer