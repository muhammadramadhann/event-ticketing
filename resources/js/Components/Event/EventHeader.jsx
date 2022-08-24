import React from "react";
import Input from "../Input";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../css/event-header.css";

export default function EventHeader({ onKeywordChange, keyword }) {
    return (
        <section id="event-header" className="mb-4">
            <div className="row align-items-end">
                <div className="col-lg-7">
                    <h1 className="fw-bold">
                        Event Lists
                        <span className="text-main-blue ms-2">.</span>
                    </h1>
                    <p className="mb-lg-0 mb-3">
                        Explore the best event from all around the world!
                    </p>
                </div>
                <div className="col-lg-5">
                    <div className="input-group search-group">
                        <Input
                            type="text"
                            name="search"
                            value={keyword}
                            className="form-control px-3"
                            placeholder="Event's name..."
                            autoComplete="off"
                            handleChange={onKeywordChange}
                        />
                        <span className="input-group-text search px-3 bg-white">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </span>
                    </div>
                </div>
            </div>
            <div className="pt-4 pb-1">
                <hr className="my-2" />
            </div>
        </section>
    );
}
