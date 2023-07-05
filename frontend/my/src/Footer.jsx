
function Footer() {
    return (
        <>
            <div class="container-fluid bg-dark text-light pt-5 mt-5">
                <div class="container py-5">
                    <div class="row g-5">
                        <div class="col-lg-3 col-md-6">
                            <h4 class="text-start text-warning mb-4 fontFasthand">Wood
                            </h4>
                            <ul class="" >
                                <li class="list-group-item">
                                    <a class="btn btn-link text-decoration-none" href="about">About Us
                                    </a>
                                </li>
                                <li class="list-group-item">
                                    <a class="btn btn-link text-decoration-none" href="Service">Service
                                    </a>
                                </li>
                                <li class="list-group-item">
                                    <a class="btn btn-link text-decoration-none" href="Contactusform">Contact Us
                                    </a>
                                </li>

                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="text-start text-warning mb-4 fontFasthand">Contact Us
                            </h4>
                            <p class="mb-2">
                                <i class="fa fa-map-marker-alt me-3">
                                </i>Dwarka Sector-7,Vsit Codding Academy, Delhi
                            </p>
                            <p class="mb-2">
                                <i class="fa fa-phone-alt me-3">
                                </i>+91-1234567890
                            </p>
                            <p class="mb-2">
                                <i class="fa fa-envelope me-3">
                                </i>info@example.com
                            </p>

                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="text-start text-warning mb-4 fontFasthand">Opening
                            </h4>
                            <h5 class="text-light fw-normal">Monday - Saturday
                            </h5>
                            <p>09AM - 09PM</p>
                            <h5 class="text-light fw-normal">Sunday</h5>
                            <p>10AM - 08PM</p>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="text-start text-warning mb-4 fontFasthand">Contact us
                            </h4>
                            <div class="d-flex pt-2">
                                <a class="btn btn-outline-light btn-social" href="/">
                                    <i className="fab fa-twitter">
                                    </i>
                                </a>
                                <a class="btn btn-outline-light btn-social" href="#">
                                    <i class="fab fa-facebook-f">
                                    </i>
                                </a>
                                <a class="btn btn-outline-light btn-social" href="#">
                                    <i class="fab fa-youtube">
                                    </i>
                                </a>
                                <a class="btn btn-outline-light btn-social" href="#">
                                    <i class="fab fa-linkedin-in">
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col text-center text-md-start mb-3 mb-md-0">
                            <a class="float-start text-warning text-decoration-none fontFasthand" href="#">Sandeep & Company
                            </a>
                            <p class="float-end text-warning fontFasthand">All Right Reserved.
                            </p>




                        </div>

                    </div>

                </div>
            </div>

       {/* *********** Required jQuery first, then Popper.js, then Bootstrap  tag started *********************  */}


            <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
            <script src="https://unpkg.com/@popperjs/core@2.10.1/dist/umd/popper.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js">
            </script>
            

{/* 
             **********  Required jQuery first, then Popper.js, then Bootstrap tag ended *********************  */}




        </>
    )
}

export default Footer;