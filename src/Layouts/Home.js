import React from "react";
import BookList from "../components/BookList";

function Home() {
    return (
        <div>
            <div className="banner-wrap">
                <div className="banner-inner">
                    <div className="banner-left"></div>
                    <div className="banner-right"></div>
                </div>
            </div>
            <BookList/>
        </div>
    )
}

export default Home;