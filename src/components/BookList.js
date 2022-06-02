import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function BookList() {

    const bookArry = [
        {id: "00001", title: "12가지 인생의 법칙", publisher: "메이븐", img: "http://image.kyobobook.co.kr/images/book/xlarge/694/x9791196067694.jpg"},
        {id: "00002", title: "Clean Code(클린 코드)", publisher: "인사이트", img: "http://image.kyobobook.co.kr/images/book/xlarge/959/x9788966260959.jpg"},
        {id: "00003", title: "면접을 위한 CS 전공지식 노트", publisher: "길벗", img: "http://image.kyobobook.co.kr/images/book/xlarge/529/x9791165219529.jpg"},
        {id: "00004", title: "스파이 패밀리 1", publisher: "학산문화사", img: "http://image.kyobobook.co.kr/images/book/xlarge/560/x9791134838560.jpg"},
        {id: "00005", title: "반도체, 넥스트 시나리오", publisher: "위즈덤하우스", img: "http://image.kyobobook.co.kr/images/book/xlarge/518/x9791168120518.jpg"},
        {id: "00006", title: "셋업", publisher: "인스피레이션", img: "http://image.kyobobook.co.kr/images/book/xlarge/303/x9791195735303.jpg"},
        {id: "00007", title: "당신이 알던 MBTI는 진짜 MBTI가 아니다", publisher: "인스피레이션", img: "http://image.kyobobook.co.kr/images/book/xlarge/023/x9791188929023.jpg"},
        {id: "00008", title: "아몬드", publisher: "창비", img: "http://image.kyobobook.co.kr/images/book/xlarge/267/x9788936434267.jpg"},
        {id: "00009", title: "고블린 슬레이어 9", publisher: "디앤씨미디어", img: "http://image.kyobobook.co.kr/images/book/xlarge/548/x9791127850548.jpg"},
        {id: "000010", title: "사피엔스", publisher: "김영사", img: "http://image.kyobobook.co.kr/images/book/xlarge/464/x9788934972464.jpg"},
        {id: "000011", title: "경제기사 궁금증 300문 300답(2022)", publisher: "혜다", img: "http://image.kyobobook.co.kr/images/book/xlarge/139/x9791191183139.jpg"},
    ]
    
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
                    {bookArry.map((book, index) => {
                        const url = `/book/${book.id}`
                        return (
                            <div className="book-wrap">
                                <Link to={{
                                    pathname: url,
                                    state: {
                                        title: book.title
                                    }
                                }}>
                                    <div className="book-img"><img src={book.img} alt={book.title}/></div>
                                </Link>
                                <div className="book-info">
                                    <div className="title">{book.title}</div>
                                    <div className="publisher">{book.publisher}</div>
                                </div>
                            </div>
                    )})}
                </div>
            </div>
        </div>
    )
}

export default BookList;