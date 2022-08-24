import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function DropdownMenu({ items }) {
    return (
        <>
            {items.map((item) => (
                <li key={item.id}>
                    {item.title === "Log Out" ? (
                        <Link
                            className="dropdown-item"
                            href={route(item.path)}
                            as="button"
                            method="post"
                        >
                            {item.title}
                        </Link>
                    ) : (
                        <Link className="dropdown-item" href={item.path}>
                            {item.title}
                        </Link>
                    )}
                </li>
            ))}
        </>
    );
}
