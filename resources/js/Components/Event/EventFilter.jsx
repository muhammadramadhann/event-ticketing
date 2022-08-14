import React from "react";
import { faArrowDownShortWide } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../css/event-filter.css";

const EventFilter = ({ isFound, totalFound, totalEvents }) => {
    let initNumber = 0;
    if (isFound) {
        initNumber = 1 + " - " + totalFound;
    }

    return (
        <section id="event-filter" className="mb-4">
            <div className="row pb-4 justify-content-between align-items-center">
                <div className="col-sm-6">
                    <button
                        className="btn btn-border-blue fw-bold px-4 filter-options"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasFilterOptions"
                        aria-controls="offcanvasFilterOptions"
                    >
                        <FontAwesomeIcon icon={faArrowDownShortWide} />
                        <span className="ms-2">Filter</span>
                    </button>

                    <div
                        className="offcanvas offcanvas-start"
                        data-bs-scroll="true"
                        tabIndex="-1"
                        id="offcanvasFilterOptions"
                        aria-labelledby="offcanvasFilterOptionsLabel"
                    >
                        <div className="offcanvas-header">
                            <h5
                                className="offcanvas-title"
                                id="offcanvasFilterOptionsLabel"
                            >
                                Backdrop with scrolling
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="offcanvas-body">
                            <p>
                                Try scrolling the rest of the page to see this
                                option in action.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 text-sm-end text-start">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-sm-6">
                            <small>
                                Showing{" "}
                                <span className="fw-bold">{initNumber}</span> of{" "}
                                <span className="fw-bold">{totalEvents}</span>{" "}
                                <span className="text-main-blue">events</span>
                            </small>
                        </div>
                        <div className="col-sm-6 order-sm-last order-first">
                            <select
                                className="form-select"
                                aria-label="Default select example"
                            >
                                <option value="">Nearest date</option>
                                <option value="1">Furthest date</option>
                                <option value="2">Lowest price</option>
                                <option value="3">Highest price</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventFilter;
