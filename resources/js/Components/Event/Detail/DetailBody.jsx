import React from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export default function DetailBody({ item }) {
    // Date
    let event_date = moment(item.start_date).format("LL");
    if (item.start_date !== item.end_date)
        event_date = `${moment(item.start_date).format("LL")} - ${moment(
            item.end_date
        ).format("LL")}`;

    return (
        <>
            <section
                id="desc"
                className="row justify-content-center align-items-center pt-5"
            >
                <h5 className="fw-bold">Deskripsi</h5>
                <hr />
                <div className="row align-items-center mt-3">
                    <div className="col-lg-4">
                        <div className="card pt-4 pb-3 mb-lg-0 mb-3">
                            <div className="d-flex flex-column text-center">
                                <div className="detail-icon">
                                    <FontAwesomeIcon icon={faCalendar} />
                                </div>
                                <div className="mb-2">
                                    <small className="text-muted">Date</small>
                                </div>
                                <div>
                                    <h6 className="fw-bold text-main-blue">
                                        {event_date}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card pt-4 pb-3 mb-lg-0 mb-3">
                            <div className="d-flex flex-column text-center">
                                <div className="detail-icon">
                                    <FontAwesomeIcon icon={faClock} />
                                </div>
                                <div className="mb-2">
                                    <small className="text-muted">Time</small>
                                </div>
                                <div>
                                    <h6 className="fw-bold text-main-blue">
                                        {`${item.start_time} - ${item.end_time}`}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card pt-4 pb-3 mb-lg-0 mb-3">
                            <div className="d-flex flex-column text-center">
                                <div className="detail-icon">
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                <div className="mb-2">
                                    <small className="text-muted">
                                        Capacity
                                    </small>
                                </div>
                                <div>
                                    <h6 className="fw-bold text-main-blue">
                                        {`${item.capacity} Person`}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="desc"
                className="row justify-content-between align-items-center pt-5"
            >
                <h5 className="fw-bold">About Event</h5>
                <hr />
                <p>{item.desc}</p>
            </section>
        </>
    );
}
