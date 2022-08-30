import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="mt-auto bg-main-blue text-white pt-5">
            <div className="container">
                <div className="row justify-content-start align-items-start pb-5">
                    <div className="col-md-4 mb-md-0 mb-4">
                        <h5 className="fw-bold mb-1">Event Ticketing</h5>
                        <p className="my-0">
                            We're here to be a best event ticketing platform for
                            everyone around the world.
                        </p>
                    </div>
                    <div className="col-md-3 mb-md-0 mb-4">
                        <h6 className="fw-bold mb-3 footer-title">Services</h6>
                        <div className="mb-2 footer-link">
                            <Link href="#">Post Event</Link>
                        </div>
                        <div className="mb-2 footer-link">
                            <Link href="#">Participant Management</Link>
                        </div>
                        <div className="mb-2 footer-link">
                            <Link href="#">Organizer Dashboard</Link>
                        </div>
                        <div className="mb-2 footer-link">
                            <Link href="#">Easy Disbursement</Link>
                        </div>
                    </div>
                    <div className="col-md-3 mb-md-0 mb-4">
                        <h6 className="fw-bold mb-3 footer-title">
                            Collaboration
                        </h6>
                        <div className="mb-2 footer-link">
                            <Link href="#">Organization</Link>
                        </div>
                        <div className="mb-2 footer-link">
                            <Link href="#">Community</Link>
                        </div>
                        <div className="mb-2 footer-link">
                            <Link href="#">Event Organizer</Link>
                        </div>
                        <div className="mb-2 footer-link">
                            <Link href="#">Contact Us</Link>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h6 className="fw-bold mb-1 footer-title">
                            Get Closer
                        </h6>
                        <p className="mb-3">Follow us on Social Media</p>
                        <div className="d-flex align-items-center footer-link">
                            <div className="me-2">
                                <Link href="#">
                                    <FontAwesomeIcon icon={faSquareFacebook} />
                                </Link>
                            </div>
                            <div className="me-2">
                                <Link href="#">
                                    <FontAwesomeIcon icon={faSquareInstagram} />
                                </Link>
                            </div>
                            <div className="me-2">
                                <Link href="#">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </Link>
                            </div>
                            <div className="me-2">
                                <Link href="#">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-main-blue-dark py-3">
                <div className="container text-center">
                    <small>Copyright &copy; 2022 Event Ticketing</small>
                </div>
            </div>
        </footer>
    );
}
