import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function NavLink({ href, className, children }) {
    return (
        <Link href={href} className={`nav-link active me-2 ${className}`}>
            {children}
        </Link>
    );
}
