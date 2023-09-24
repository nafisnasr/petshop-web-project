import React from 'react'
import FeatureBox from '../FeatureBox/FeatureBox'
import { BsShieldCheck , BsPeopleFill} from "react-icons/bs"
import { LiaAwardSolid } from "react-icons/lia"
import { RiCustomerService2Fill } from "react-icons/ri"
import "./Features.css"

export default function Features() {
    return (
        <section className="features">
            <div className="container">
                <div className="features-wrapper row">
                    <FeatureBox
                        icon={<LiaAwardSolid className='feature_icon' />}
                        number="85+"
                        text="Awards"
                        color="blue"
                    />
                    <FeatureBox
                        icon={<BsPeopleFill className='feature_icon' />}
                        number="96K"
                        text="Clients"
                        color="red"
                    />
                    <FeatureBox
                        icon={<RiCustomerService2Fill className='feature_icon' />}
                        number="60+"
                        text="Employees"
                        color="yellow"
                    />
                    <FeatureBox
                        icon={<BsShieldCheck className='feature_icon' />}
                        number="99%"
                        text="validation"
                        color="greenblue"
                    />
                </div>
            </div>
        </section>
    )
}
