import React from "react";
import moment from "moment";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../css/event-card.css";

export default function EventCard({
    slug,
    title,
    poster,
    start_date,
    end_date,
    city,
    price,
}) {
    let event_date = moment(start_date).format("LL");
    if (start_date !== end_date) {
        event_date = `${moment(start_date).format("LL")} - ${moment(
            end_date
        ).format("LL")}`;
    }

    let price_format = `Rp${price.toLocaleString()}`;
    if (price === 0) {
        price_format = "Free";
    }

    return (
        <div className="card h-100">
            <img src={poster} className="card-img-top" alt={slug} />
            <div className="card-body">
                <h5 className="card-title fw-bold mb-4">{title}</h5>
                <div className="mb-2">
                    <small className="card-text">
                        <FontAwesomeIcon icon={faCalendar} />
                        <span className="ms-2">{event_date}</span>
                    </small>
                </div>
                <div className="mb-3">
                    <small className="card-text d-block">
                        <FontAwesomeIcon icon={faBuilding} />
                        <span className="ms-2">{city}</span>
                    </small>
                </div>
                <h6 id="price" className="card-text fw-bold mb-2">
                    {price_format}
                </h6>
            </div>
        </div>
    );
}
