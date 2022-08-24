import React from "react";
import FilterSidebar from "./Filter/FilterSidebar";
import "../../../css/event-filter.css";

export default function EventFilter({
    isFound,
    totalFound,
    selectedSort,
    onSelectedSort,
    onCheckedFilter,
}) {
    let initNumber = 0;
    if (isFound) {
        initNumber = `1 - ${totalFound}`;
    }

    return (
        <section id="event-filter" className="mb-4">
            <div className="row pb-4 justify-content-between align-items-center">
                <div className="col-sm-6">
                    <FilterSidebar checkedFilterEvent={onCheckedFilter} />
                </div>

                <div className="col-sm-6 text-sm-end text-start">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-sm-6 text-sm-auto text-end">
                            <small>
                                Showing{" "}
                                <span className="fw-bold">{initNumber}</span> of{" "}
                                <span className="fw-bold">{totalFound}</span>{" "}
                                <span className="text-main-blue">events</span>
                            </small>
                        </div>
                        <div className="col-sm-6 order-sm-last order-first mb-sm-0 mb-3">
                            <select
                                className="form-select"
                                name="sort_by"
                                defaultValue={selectedSort}
                                onChange={onSelectedSort}
                            >
                                <option disabled value="">
                                    Sort by
                                </option>
                                <option value="nearest_date">
                                    Nearest date
                                </option>
                                <option value="furthest_date">
                                    Furthest date
                                </option>
                                <option value="lowest_price">
                                    Lowest price
                                </option>
                                <option value="highest_price">
                                    Highest price
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* {filters !== undefined ? (
                <div className="d-flex flex-wrap justify-content-start align-items-center">
                    {filters.map((element, index) => (
                        <div key={index} className="me-2 mb-2">
                            <div className="filter-item d-flex justify-content-center">
                                <div>
                                    <small>{element}</small>
                                </div>
                                <div className="ms-3">
                                    <form action="">
                                        <input
                                            type="hidden"
                                            name="remove"
                                            value={element}
                                        />
                                        <button
                                            type="submit"
                                            className="btn btn-close"
                                        ></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : null} */}
        </section>
    );
}
