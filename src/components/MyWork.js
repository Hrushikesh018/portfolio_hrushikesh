import React, { Fragment } from 'react'
import { GrPrevious, GrNext } from 'react-icons/gr';
import { BsLaptop } from 'react-icons/bs';
import { AiFillDownCircle, AiFillGithub } from 'react-icons/ai';

function MyWork() {
    return (
        <Fragment>
            <div className="col p-4">
                <div className="p-4 slide-in-top">

                    <div className="row">
                        <div className="col-6">
                            <h2 className="ff-jose fw-bold ls-2">Something I've Built</h2>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-md-4 text-center my-2">

                            <div id="carouselExampleControls1" className="carousel slide my-1" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="../portfolio-images/w-01.png" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/w-02.png" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
                                    <GrPrevious />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
                                    <GrNext />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <h5 className="ff-jose my-1">Trade Easy</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://trade-easy.netlify.app/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><BsLaptop /> Watch Live</a>
                            </div>

                        </div>
                        <div className="col-md-4 text-center my-2">

                            <div id="carouselExampleControls2" className="carousel slide my-1" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="../portfolio-images/m-01.png" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/m-02.png" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                                    <GrPrevious />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                                    <GrNext />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div>
                                <h5 className="ff-jose my-1">Netflix Clone</h5>
                                <div className="row d-flex justify-content-center">
                                    <a href="https://64ddf7b8503d266eac502797--dapper-bunny-d34c35.netlify.app/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><BsLaptop /> Watch Live</a>
                                    <a href="https://www.upload-apk.com/m62dkA2TLmgTl2H" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillDownCircle /> Download Apk</a>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4 text-center my-2">

                            <div id="carouselExampleControls3" className="carousel slide my-1" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="../portfolio-images/n-01.png" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/n-02.png" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
                                    <GrPrevious />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
                                    <GrNext />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <h5 className="ff-jose my-1">Food Blog</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://clear-rose-jumper.cyclic.app" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><BsLaptop /> Watch Live</a>
                            </div>

                        </div>
                        <div className="col-md-4 text-center my-2">

                            <div id="carouselExampleControls4" className="carousel slide my-1" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="../portfolio-images/solo-01.png" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/solo-02.png" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="prev">
                                    <GrPrevious />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="next">
                                    <GrNext />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <h5 className="ff-jose my-1">News Website</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://purple-wasp-gear.cyclic.app/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><BsLaptop /> Watch Live</a>
                            </div>

                        </div>
                        <div className="col-md-4 text-center my-2">

                            <div id="carouselExampleControls5" className="carousel slide my-1" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="../portfolio-images/resume-1.png" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="../portfolio-images/resume-2.png" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls5" data-bs-slide="prev">
                                    <GrPrevious />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls5" data-bs-slide="next">
                                    <GrNext />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <h5 className="ff-jose my-1">Google Keep</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://64ddcbe926417b52cd843e79--bucolic-wisp-d8a340.netlify.app/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><BsLaptop /> Watch Live</a>
                                <a href="https://www.upload-apk.com/en/WOADKCEnlBb6fcW" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillDownCircle /> Download Apk</a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default MyWork