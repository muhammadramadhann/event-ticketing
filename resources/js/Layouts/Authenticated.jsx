import React from "react";
import Navbar from "@/Components/Navigation/Navbar";
import Footer from "@/Components/Navigation/Footer";

export default function Authenticated({ auth, children }) {
    return (
        <>
            <Navbar auth={auth} />
            <main className="d-flex flex-column min-vh-100">
                <div id="content" className="mb-5">
                    {children}
                </div>
                <Footer />
            </main>
        </>
    );
}
