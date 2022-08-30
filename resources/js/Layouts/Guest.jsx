import React from "react";

export default function Guest({ children }) {
    return (
        <div className="d-flex flex-column min-vh-100">
            <div className="container mt-5">{children}</div>
        </div>
    );
}
