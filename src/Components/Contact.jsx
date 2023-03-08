import React from 'react'

const Contact = () => {
    return (
        <>
            <section className='contact'>
                <div className='contact_wrapper'>
                    <form className='contact_form'>
                        <h2>Contact Us</h2>
                        <p>Rationally encounter consequences that are extremely painful or again is there anyone.</p>
                        <div className='input_wrapper'>
                            <div className='input_field'>
                                <input type="text" className="inner-input" placeholder="Your Name" name="user_name" required=""/>
                               <i className='fa-solid fa-user input-icons'></i>
                            </div>
                            <div className='input_field'>
                                <input type="email" className="inner-input" placeholder="Email Address" name="user_email" required=""/>
                               <i className='fa-solid fa-envelope input-icons'></i>
                            </div>
                        </div>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Massege'></textarea>
                        <div className='submit_btn'>
                            <div className='btn'>
                                <button>Send</button>
                            </div>
                        </div>
                    </form>
                    <div className='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5183433954835!2d77.0082269142886!3d10.99968215804207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8576277c3f175%3A0x149ab1a4e986e87b!2sKrishna%20Colony%20Main%20Rd%2C%20Krishna%20Colony%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1677652885046!5m2!1sen!2sin" width="800" height="535" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map'></iframe>
                    
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact