import React from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/inertia-react";

export default function DetailHero({ item }) {
    // Date
    const lastRegistration = moment(item.start_date); // last registration date
    const currentDate = moment(); // current time
    const calculationDate = lastRegistration.diff(currentDate); // calculate
    const openRegisDay = moment.duration(calculationDate).days(); // how much day until registration closed
    const closedRegisDay = "Sorry, this event has ended"; // closed registration

    // Price
    let price_format = `Rp ${item.price.toLocaleString()}`;
    if (item.price === 0) {
        price_format = "Free";
    }

    return (
        <section
            id="hero"
            className="row justify-content-between align-items-center pb-5"
        >
            <div className="col-lg-6">
                <div className="card card-expired p-3 text-white mb-4">
                    <div className="d-flex align-items-center">
                        {openRegisDay > 0 ? (
                            <>
                                <span className="me-1">
                                    Batas pendaftaran :{" "}
                                </span>{" "}
                                <span className="text-warning fw-bold">{`${openRegisDay} hari lagi`}</span>
                            </>
                        ) : (
                            closedRegisDay
                        )}
                    </div>
                </div>
                <div className="d-lg-block d-none">
                    <h6 className="text-muted mb-2">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span className="ms-2">{item.city}</span>
                    </h6>
                    <h4 className="fw-bold">{item.title}</h4>
                    <hr />
                    <h6 className="text-muted mb-2">Penyelenggara</h6>
                    <h5 className="fw-bold mb-4">{item.organizer}</h5>
                    <h3 className="fw-bold text-main-blue">{price_format}</h3>
                    <div className="d-flex align-items-center mt-4">
                        <div className="w-100 me-3">
                            <Link
                                role="button"
                                href={`${item.slug}/select-ticket`}
                                className={`btn btn-main-blue py-2 w-100 ${
                                    openRegisDay < 0 ? "disabled" : ""
                                }`}
                            >
                                Daftar Sekarang
                            </Link>
                        </div>
                        <div className="w-9">
                            <button className="btn btn-border-blue py-2">
                                <FontAwesomeIcon icon={faShare} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 order-lg-first order-last">
                <div className="event-poster rounded px-4 text-center mb-lg-0 mb-4">
                    <img
                        src="https://images.unsplash.com/photo-1568750655107-5f50598fc8a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                        alt="event-poster"
                    />
                </div>
                <div className="d-lg-none d-block">
                    <h6 className="text-muted mb-2">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span className="ms-2">{item.city}</span>
                    </h6>
                    <h4 className="fw-bold mb-4">{item.title}</h4>
                    <hr />
                    <small className="text-muted">Penyelenggara</small>
                    <h6 className="fw-bold mb-3 mt-2">{item.organizer}</h6>
                    <h3 className="fw-bold text-main-blue">{price_format}</h3>
                    <div className="d-flex align-items-center justify-content-between mt-4 gap-1">
                        <div className="w-100 me-2">
                            <Link
                                role="button"
                                href={`${item.slug}/select-ticket`}
                                className={`btn btn-main-blue py-2 w-100 ${
                                    openRegisDay < 0 ? "disabled" : ""
                                }`}
                            >
                                Daftar Sekarang
                            </Link>
                        </div>
                        <div className="w-9">
                            <button className="btn btn-border-blue py-2">
                                <FontAwesomeIcon icon={faShare} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
