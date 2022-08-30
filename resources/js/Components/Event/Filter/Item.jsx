import React from "react";
import { filterCategories } from "../../../constants";
import { filterPrices } from "../../../constants";
import { filterLocations } from "../../../constants";

export default function FilterItem({
    category = "category",
    title,
    index,
    onCheckedFilter,
}) {
    const filterTypes = {
        price: "price",
        location: "location",
    };

    switch (category) {
        case filterTypes.price:
            return (
                <div
                    className={`form-check ${
                        index !== filterPrices.length - 1 ? "mb-3" : "mb-0"
                    }`}
                >
                    <input
                        type="radio"
                        name="price"
                        className="form-check-input me-3"
                        value={title}
                        id={`priceIs${title}`}
                        onChange={onCheckedFilter}
                    />
                    <label
                        className="form-check-label align-middle"
                        htmlFor={`priceIs${title}`}
                    >
                        {title}
                    </label>
                </div>
            );
        case filterTypes.location:
            return (
                <div
                    className={`form-check ${
                        index !== filterLocations.length - 1 ? "mb-3" : "mb-0"
                    }`}
                >
                    <input
                        type="checkbox"
                        onChange={onCheckedFilter}
                        className="form-check-input me-3"
                        value={title}
                        id={`check${title}`}
                    />
                    <label
                        className="form-check-label align-middle"
                        htmlFor={`check${title}`}
                    >
                        {title}
                    </label>
                </div>
            );
        default:
            return (
                <div
                    className={`form-check ${
                        index !== filterCategories.length - 1 ? "mb-3" : "mb-0"
                    }`}
                >
                    <input
                        type="checkbox"
                        onChange={onCheckedFilter}
                        className="form-check-input me-3"
                        value={title}
                        id={`check${title}`}
                    />
                    <label
                        className="form-check-label align-middle"
                        htmlFor={`check${title}`}
                    >
                        {title}
                    </label>
                </div>
            );
    }
}
