import React from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faHandPointRight } from "@fortawesome/free-regular-svg-icons";

export default function EventHighlight({ item }) {
    // Date
    let event_date = moment(item.start_date).format("LL");
    if (item.start_date !== item.end_date)
        event_date = `${moment(item.start_date).format("LL")} - ${moment(
            item.end_date
        ).format("LL")}`;

    return (
        <section id="event-highlight">
            <div className="card p-sm-4 p-3">
                <div className="row justify-content-start align-items-center">
                    <div className="col-lg-6">
                        <div className="highlight-poster d-lg-block d-none">
                            <img
                                src="https://images.unsplash.com/photo-1577224682866-a1834ca126ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                                alt="highlight-poster"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h6 className="fw-bold mb-4">{item.title}</h6>
                        <p className="fw-bold mb-2">Date and Location</p>
                        <div className="event-info mb-2">
                            <FontAwesomeIcon icon={faClock} />
                            <span className="text-muted ms-2">{`${item.start_time} - ${item.end_time}`}</span>
                        </div>
                        <div className="event-info mb-2">
                            <FontAwesomeIcon icon={faCalendar} />
                            <span className="text-muted ms-2">
                                {event_date}
                            </span>
                        </div>
                        <div className="event-info">
                            <FontAwesomeIcon icon={faHandPointRight} />
                            <span className="text-muted ms-2">{item.city}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
