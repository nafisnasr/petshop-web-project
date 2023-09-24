import React from 'react'
import "./FeatureBox.css"

export default function FeatureBox({ icon, number, text, color }) {
    return (
        <div className='col-lg-2 col-md-6 col-11'>
            <div className="feature-box">

                <div className={`feature_icon-box ${color} my-2`}>
                    {icon}
                </div>
                <h1 className="feature_number my-2">
                    {number}
                </h1>
                <p className="feature_text my-2">
                    {text}
                </p>
                
            </div>
        </div>
    )
}
