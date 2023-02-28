import React from 'react'

const Contact = () => {
    return (
        <>
            <section className='contact'>
                <div className='contact_wrapper'>
                    <form className='contact_form'>
                        <h2>Contact Form</h2>
                        <p>Rationally encounter consequences that are extremely painful or again is there anyone.</p>
                        <div className='input_wrapper'>
                            <div className='input_field'>
                                <input type="text" class="inner-input" placeholder="Your Name" name="user_name" required="" value="" />
                                <a href="/"><i className='fa-solid fa-user'></i></a>
                            </div>
                            <div className='input_field'>
                                <input type="email" class="inner-input" placeholder="Email Address" name="user_email" required="" value="" />
                                <a href="/"><i className='fa-solid fa-envelope'></i></a>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

        </>
    )
}

export default Contact