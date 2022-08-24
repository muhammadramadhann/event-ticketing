import React from "react";

import DropdownMenu from "./DropdownMenu";

export default function Dropdown({ main = true }) {
    let menu = [
        {
            id: 1,
            title: "Organization",
            path: "",
        },
        {
            id: 2,
            title: "Community",
            path: "",
        },
        {
            id: 3,
            title: "Event Organizer",
            path: "",
        },
    ];

    if (main === false) {
        menu = [
            {
                id: 1,
                title: "Profile",
                path: "",
            },
            {
                id: 2,
                title: "Log Out",
                path: "logout",
            },
        ];
    }

    return (
        <ul className="dropdown-menu">
            <DropdownMenu items={menu} />
        </ul>
    );
}
