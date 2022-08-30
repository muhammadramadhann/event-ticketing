import React, { useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import EventHeader from "@/Components/Event/EventHeader";
import EventData from "@/Components/Event/EventData";
import EventList from "@/Components/Event/EventList";
import moment from "moment";

export default function Event({ auth, events }) {
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

    const sortedEvents = events.data.slice().sort((a, b) => {
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
        <Authenticated auth={auth}>
            <Head title="Home | Event Ticketing Platform" />
            <div className="container my-5">
                <EventHeader
                    keyword={keyword}
                    onKeywordChange={onKeywordChangeHandler}
                />
                <EventData
                    isFound={exist}
                    totalFound={count}
                    selectedSort={sortBy}
                    onSelectedSort={onSelectedSortHandler}
                />
                <EventList events={foundEvents} />
            </div>
        </Authenticated>
    );
}
