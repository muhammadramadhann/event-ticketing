import React, { useState } from "react";
import EventHeader from "./EventHeader";
import EventFilter from "./EventFilter";
import EventList from "./EventList";
import moment from "moment";

export default function Events({ items }) {
    let count = 0;
    let exist = false;

    const [sortBy, setSortBy] = useState("");
    const [keyword, setKeyword] = useState("");

    const onKeywordChangeHandler = (e) => {
        setKeyword(e.target.value);
    };

    const onSelectedSortHandler = (e) => {
        setSortBy(e.target.value);
    };

    const sortedEvents = items.data.slice().sort((a, b) => {
        const sortTypes = {
            nearest_date: "nearest_date",
            furthest_date: "furthest_date",
            lowest_price: "lowest_price",
            highest_price: "highest_price",
        };

        switch (sortBy) {
            case sortTypes.nearest_date:
                return (
                    moment(a.start_date).format("YYYYMMDD") -
                    moment(b.start_date).format("YYYYMMDD")
                );
            case sortTypes.furthest_date:
                return (
                    moment(b.start_date).format("YYYYMMDD") -
                    moment(a.start_date).format("YYYYMMDD")
                );
            case sortTypes.lowest_price:
                return a.price - b.price;
            case sortTypes.highest_price:
                return b.price - a.price;
            default:
                break;
        }
    });

    const foundEvents = sortedEvents.filter((item) => {
        if (keyword !== "") {
            return item.title.toLowerCase().includes(keyword.toLowerCase());
        } else {
            return item;
        }
    });

    if (foundEvents.length !== 0) {
        count = count += foundEvents.length;
        exist = true;
    }

    return (
        <>
            <EventHeader
                keyword={keyword}
                onKeywordChange={onKeywordChangeHandler}
            />
            <EventFilter
                isFound={exist}
                totalFound={count}
                selectedSort={sortBy}
                onSelectedSort={onSelectedSortHandler}
            />
            <EventList events={foundEvents} />
        </>
    );
}
