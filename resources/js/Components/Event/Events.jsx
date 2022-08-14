import React, { useState } from "react";
import EventHeader from "./EventHeader";
import EventFilter from "./EventFilter";
import EventList from "./EventList";

export default function Events({ items }) {
    // length of event data from database
    const countItems = items.length;

    // declaration data is exist or not
    let exist = true;

    // declaration for displayed data right now
    let countFoundItem = 0;

    const [search, setSearch] = useState("");

    const filteredItems = items.filter((item) => {
        if (search === "") {
            return items;
        }
        return item.title.toLowerCase().includes(search.toLowerCase());
    });

    if (filteredItems.length !== 0) {
        countFoundItem += filteredItems.length;
    } else {
        exist = false;
    }

    const onSearchItemHandler = (keyword) => {
        setSearch(keyword);
    };

    return (
        <main>
            <EventHeader keyword={search} onSearchItem={onSearchItemHandler} />
            <EventFilter
                isFound={exist}
                totalFound={countFoundItem}
                totalEvents={countItems}
            />
            <EventList items={filteredItems} />
        </main>
    );
}
