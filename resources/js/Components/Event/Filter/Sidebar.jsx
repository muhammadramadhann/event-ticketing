import React, { useState } from "react";
import Item from "./Item";
import { filterCategories } from "../../../constants";
import { filterPrices } from "../../../constants";
import { filterLocations } from "../../../constants";
import { faArrowDownShortWide } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar({ checkedFilterEvent }) {
    const [price, setPrice] = useState(true);

    const onCheckedFilterEvent = (event) => {
        if (event.target.value === "Free") {
            setPrice(false);
        } else {
            setPrice(true);
        }
        checkedFilterEvent(event.target.value);
    };

    return (
        <>
            <button
                className="btn btn-border-blue px-4 mb-sm-0 mb-3"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
            >
                <FontAwesomeIcon icon={faArrowDownShortWide} />
                <span className="ms-2">Filter</span>
            </button>

            <div
                className="offcanvas offcanvas-start"
                data-bs-scroll="true"
                tabIndex="-1"
                id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel"
            >
                <form className="d-flex flex-column min-vh-100">
                    <div className="offcanvas-header border-bottom px-4 py-3">
                        <h3
                            className="offcanvas-title fw-bold"
                            id="offcanvasWithBothOptionsLabel"
                        >
                            Filter
                        </h3>
                        <button type="reset" className="reset-filter fw-bold">
                            Reset Filter
                        </button>
                    </div>
                    <div className="offcanvas-body p-4">
                        <div className="mb-4">
                            <div className="mb-3">
                                <p className="fw-bold">Category</p>
                            </div>
                            {filterCategories.map((item, index) => (
                                <Item
                                    key={item.id}
                                    index={index}
                                    title={item.title}
                                />
                            ))}
                        </div>
                        <hr />
                        <div className="mb-4">
                            <div className="mb-3">
                                <p className="fw-bold">Price</p>
                            </div>
                            {filterPrices.map((item, index) => (
                                <Item
                                    key={item.id}
                                    index={index}
                                    title={item.title}
                                    category="price"
                                    onCheckedFilter={onCheckedFilterEvent}
                                />
                            ))}
                            <div className="mt-4 mb-3 d-flex flex-sm-row flex-column gap-2 justify-content-between">
                                <div className="input-group price-input">
                                    <span className="input-group-text price-input bg-white ps-2 pe-1">
                                        Rp
                                    </span>
                                    <input
                                        type="number"
                                        name="min-price"
                                        className="form-control px-3"
                                        placeholder="Minimum"
                                        autoComplete="off"
                                        readOnly={!price}
                                    />
                                </div>
                                <div className="input-group price-input">
                                    <span className="input-group-text price-input bg-white ps-2 pe-1">
                                        Rp
                                    </span>
                                    <input
                                        type="number"
                                        name="max-price"
                                        className="form-control px-3"
                                        placeholder="Maximum"
                                        autoComplete="off"
                                        readOnly={!price}
                                    />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="mb-3">
                            <p className="fw-bold">Location</p>
                        </div>
                        {filterLocations.map((item, index) => (
                            <Item
                                key={item.id}
                                index={index}
                                title={item.title}
                                category="location"
                            />
                        ))}
                    </div>
                    <div className="offcanvas-footer mt-auto bg-white p-4">
                        <button
                            type="button"
                            className="btn btn-outline-blue"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        >
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-main-blue">
                            Apply
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
