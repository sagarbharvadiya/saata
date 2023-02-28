import React from 'react'

const Footer = () => {
    return (
        <>
            <section className='footer'>
                <div className='footer_wrapper'>
                    <div className='get_d_fex'>
                        <div className='right'>
                            <div className='footer_logo'>
                                <img src="../Images/itaa.png" alt="logo" />
                            </div>
                        </div>

                        <div className='left'>
                            <div className='footer_menu'>
                                <ul>
                                    <li><a href="/">About SAATA</a></li>
                                    <li><a href="/">President’s Note</a></li>
                                    <li><a href="/">Saata Bot</a></li>
                                </ul>
                                <ul>
                                    <li><a href="/">About TA</a></li>
                                    <li><a href="/">Contact Us</a></li>
                                    <li><a href="/">Eric Berne</a></li>
                                </ul>
                                <ul>
                                    <li><a href="/">History and Origin of SAATA</a></li>
                                    <li><a href="/">Mission and Vision</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='social_icon'>
                                <a href="/"> <i class="fa-brands fa-facebook"></i></a>
                                <a href="/"> <i class="fa-brands fa-twitter"></i></a>
                                <a href="/">  <i class="fa-brands fa-youtube"></i></a>
                            </div>
                </div>
            </section>
        </>
    )
}

export default Footer