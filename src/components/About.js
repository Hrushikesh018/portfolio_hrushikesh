import React, { Fragment } from 'react'

function About() {
    return (
        <Fragment>
            <div className="col py-3 d-flex align-items-center about-image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                            <div>
                                <h1 className="font-big text-red slide-in-top">About me</h1>
                                <hr></hr>
                                <p className='slide-in-bottom'>
                                    Energetic and goal-oriented, I'm Hrushikesh Kadudula, a Information technology graduate with a CGPA of 8.02 from Anurag University.<br></br> Currently a Software Engineer at ThoughtClan Technologies, I've swiftly transitioned from intern to a key contributor, specializing in React.js and Node.js. Prior roles at Cognizant and ThoughtClan Technolgies as an intern have fortified my expertise in API development and UI design. <br></br>Proficient in MERN stack, Java, and C++, I'm eager to drive impactful solutions and contribute effectively to innovative tech teams.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <img className="img-fluid" src="../images/nomad-amico.png" alt="..."></img>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default About