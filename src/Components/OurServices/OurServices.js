import React from 'react'
import { BsFillPatchCheckFill } from "react-icons/bs"
import "./OurServices.css"


export default function OurServices() {
    return (
        <section className="our-services">
            <div className="container">
                <div className="our-services-wrapper row">

                    <div className="our-services_left-section col-lg-6 col-11">
                        <h3 className="our-services_title">Our Services</h3>
                        <p className="our-services_text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, eveniet? Ipsa non, corrupti numquam unde dolorum commodi veniam quas deleniti.
                        </p>
                        <ul className="our-services_list">
                            <li>
                                <BsFillPatchCheckFill className="our-services_icon mx-2" />
                                Lorem, ipsum dolor Lorem, ipsum.
                            </li>
                            <li>
                                <BsFillPatchCheckFill className="our-services_icon mx-2" />
                                Lorem, ipsum dolor Lorem, ipsum.
                            </li>
                            <li>
                                <BsFillPatchCheckFill className="our-services_icon mx-2" />
                                Lorem, ipsum dolor Lorem, ipsum.
                            </li>
                        </ul>
                    </div>

                    <div className="our-services_right-section col-lg-6 col-11">
                        <div className="our-services_img-container">
                            <img src="/images/our-services-img.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}
