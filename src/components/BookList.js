import React, { useState, useEffect } from "react";

function BookList() {
    
    const [orderName, setOrderName] = useState();

    const changeOrder = (_orderName) => {
        setOrderName(_orderName);
    }

    useEffect(() => {
        changeOrder("최신순");
    }, []);

    return (
        <div className="book-list-wrap">
            <div className="book-list-inner">
                <div className="list-header">
                    <h2>All Books</h2>
                    <div className="order-list">
                        <div className={orderName==="최신순"?"on":""} onClick={() => changeOrder("최신순")}>최신순</div>
                        <div className={orderName==="오래된순"?"on":""} onClick={() => changeOrder("오래된순")}>오래된순</div>
                        <div className={orderName==="조회수순"?"on":""} onClick={() => changeOrder("조회수순")}>조회수순</div>
                    </div>
                </div>
                <div className="list">
                    <div className="book-wrap">
                        <div className="book-img"></div>
                        <div className="book-info">
                            <div className="title">제목dkhfasdjhfㅁㄴㅇㄹㄴㄹㄴㅁㄴㄹㅇㄴㄹㄹㄴㅍㅋㅌㅊㅋㅋㄶㅇㅎㅎㅎㄹㄴㅇ</div>
                            <div className="publisher">출판사asfsdafsdafsdafsdafsasfafadsfasdfsd</div>
                        </div>
                    </div>
                    <div className="book-wrap">
                        <div className="book-img"></div>
                        <div className="book-info">
                            <div className="title">제목</div>
                            <div className="publisher">출판사</div>
                        </div>
                    </div>
                    <div className="book-wrap">
                        <div className="book-img"></div>
                        <div className="book-info">
                            <div className="title">제목</div>
                            <div className="publisher">출판사</div>
                        </div>
                    </div>
                    <div className="book-wrap">
                        <div className="book-img"></div>
                        <div className="book-info">
                            <div className="title">제목</div>
                            <div className="publisher">출판사</div>
                        </div>
                    </div>
                    <div className="book-wrap">
                        <div className="book-img"></div>
                        <div className="book-info">
                            <div className="title">제목</div>
                            <div className="publisher">출판사</div>
                        </div>
                    </div>
                    <div className="book-wrap">
                        <div className="book-img"></div>
                        <div className="book-info">
                            <div className="title">제목</div>
                            <div className="publisher">출판사</div>
                        </div>
                    </div>
                    <div className="book-wrap">
                        <div className="book-img"></div>
                        <div className="book-info">
                            <div className="title">제목</div>
                            <div className="publisher">출판사</div>
                        </div>
                    </div>
                    <div className="book-wrap">
                        <div className="book-img"></div>
                        <div className="book-info">
                            <div className="title">제목</div>
                            <div className="publisher">출판사</div>
                        </div>
                    </div>
                    <div className="book-wrap">
                        <div className="book-img"></div>
                        <div className="book-info">
                            <div className="title">제목</div>
                            <div className="publisher">출판사</div>
                        </div>
                    </div>
                    <div className="book-wrap">
                        <div className="book-img"></div>
                        <div className="book-info">
                            <div className="title">제목</div>
                            <div className="publisher">출판사</div>
                        </div>
                    </div>
                    <div className="book-wrap">
                        <div className="book-img"></div>
                        <div className="book-info">
                            <div className="title">제목</div>
                            <div className="publisher">출판사</div>
                        </div>
                    </div>
                    <div className="book-wrap">
                        <div className="book-img"></div>
                        <div className="book-info">
                            <div className="title">제목</div>
                            <div className="publisher">출판사</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookList;