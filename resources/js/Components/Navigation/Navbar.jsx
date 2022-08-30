import React from "react";
import { Link } from "@inertiajs/inertia-react";
import NavLink from "./NavLink";
import Dropdown from "./Dropdown";

export default function Navbar({ auth }) {
    return (
        <nav className="navbar navbar-expand-lg bg-white border-bottom py-3">
            <div className="container">
                <Link
                    className="navbar-brand fw-bold text-main-blue"
                    href={route("event")}
                >
                    Event Ticketing
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav ms-lg-3 ms-0">
                        <NavLink href={route("event")}>Home</NavLink>
                        <NavLink href="">Services</NavLink>
                        <div className="nav-item dropdown">
                            <Link
                                className="nav-link active dropdown-toggle"
                                data-bs-toggle="dropdown"
                                href="#"
                                role="button"
                                aria-expanded="false"
                            >
                                Collaboration
                            </Link>
                            <Dropdown />
                        </div>
                    </div>
                    <div className="navbar-nav ms-auto">
                        {auth.user ? (
                            <div className="nav-item dropdown">
                                <Link
                                    className="nav-link active dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    href="#"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    {auth.user.name}
                                </Link>
                                <Dropdown main={false} />
                            </div>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="btn btn-outline-blue mb-lg-0 mb-2"
                                >
                                    Log In
                                </Link>
                                <Link
                                    className="btn btn-main-blue ms-lg-2 ms-0"
                                    href="/register"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
