import React, { useRef } from "react";

function Header() {
    const searchBox = useRef();

    const onSearchFocusOn = () => {
        searchBox.current.classList.add("focus-on");
    }

    const onSearchFocusOut = () => {
        searchBox.current.classList.remove("focus-on");
    }

    return (
        <div className="header-wrap">
            <div className="header-inner">
                <div className="header-left">
                    <h1 className="header-logo">Books, Not Hooks</h1>
                    <div className="search-box-wrap">
                        <div className="search-box" ref={searchBox}>
                            <div className="search-box-input">
                                <input onFocus={onSearchFocusOn} onBlur={onSearchFocusOut} placeholder="상품을 검색해보세요."></input>
                                <div className="search-btn"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="header-menu">
                    <li>
                        <div className="menu-inner">
                            <div className="menu-img" style={{background: "url('./images/ic-bag.svg')"}}></div>
                            <div className="menu-name">장바구니</div>
                        </div>
                    </li>
                    <li>
                        <div className="menu-inner">
                            <div className="menu-img" style={{background: "url('./images/ic-profile.svg')"}}></div>
                            <div className="menu-name">마이페이지</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;