import React from 'react'
import "./Articles.css"


export default function Articles() {
    return (
        <section className='article'>
            <div className="container">
                <div className="article-wrapper row">

                    <div className="article_left-box col-lg-6 col-11">

                        <div className="article_left-img-box">
                            <img
                                src="/images/article-img.jpg"
                                alt="pretty eye kitty | pexeles"
                            />
                        </div>
                    </div>

                    <div className="article_right-box col-lg-6 col-11">
                        <h2 className="article_title">How to take care</h2>
                        <h2 className="article_title-box d-flex align-items-center ">
                            <div className="article_title-before mx-2"></div>
                            <h2 className="article_title">of your pets</h2>
                        </h2>
                        <p className="article_text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum vero vitae earum sunt ex beatae ullam velit nam fugit, dolores quos in, culpa quae, tenetur doloribus natus consequatur repellendus facilis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus ducimus quidem velit nostrum molestiae. Distinctio modi eaque suscipit voluptatem omnis.
                        </p>
                    </div>


                </div>
            </div>
        </section>
    )
}
