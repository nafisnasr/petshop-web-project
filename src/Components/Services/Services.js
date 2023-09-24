import React from 'react'
import "./Services.css"


export default function Services() {
    return (
        <section className='services'>
            <div className="container">
                <div className="services-wrapper row">

                    <div className="services_left-box col-lg-4 col-11">
                        <div className="services_left-img-box">
                            <img src="/images/services-left.jpg" alt="sleeping cat | wikipedia" />
                        </div>
                    </div>

                    <div className="services_center-box col-lg-5 col-11">
                        <p>How Can We Help</p>
                        <h3 className="services_title">While you are on vecation or</h3>
                        <h3 className="services_title">at work can be stressful</h3>
                    </div>

                    <div className="services_right-box col-lg-3 col-11">
                        <div className="services_right-img-box">
                            <img src="/images/services-right.jpg" alt="kitty cat || pexeles" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
