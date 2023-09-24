import React from 'react'
import "./NewsLetterBox.css"

export default function NewsLetterBox() {
    return (
        <section className='news-letter-box'>
            <div className="container">
                <div className="news-letter-wrapper">

                    <h1 className="news-letter_title">Subscribe Newsletter & get</h1>
                    <h1 className="news-letter_title">Pet Care News</h1>

                    <div className="user-email-container container my-3">
                        <div className="user-email">
                            <input type="email" placeholder='Enter your Email address' />
                            <button className="subscribe-btn Btn">Subscribe Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
