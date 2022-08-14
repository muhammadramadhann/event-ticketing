import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function DropdownMenu({ items }) {
    return (
        <>
            {items.map((item) => (
                <li key={item.id}>
                    <Link className="dropdown-item" href={item.path}>
                        {item.title}
                    </Link>
                </li>
            ))}
        </>
    );
}
