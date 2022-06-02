import React, {useState} from "react";
import BookList from "../components/BookList";
import Slider from 'react-slick';

function Home() {
    const [bestBookIndex, setBestBookIndex] = useState(0);

    const bestBookArr = [
        {category: "자기계발", books: [
            "http://image.kyobobook.co.kr/images/book/xlarge/333/x9791191280333.jpg",
            "http://image.kyobobook.co.kr/images/book/xlarge/342/x9788996991342.jpg",
            "http://image.kyobobook.co.kr/images/book/xlarge/982/x9791158511982.jpg",
            "http://image.kyobobook.co.kr/images/book/xlarge/145/x9788960519145.jpg"]},
        {category: "주식", books: [
            "http://image.kyobobook.co.kr/images/book/xlarge/627/x9788972773627.jpg",
            "http://image.kyobobook.co.kr/images/book/xlarge/588/x9791188754588.jpg",
            "http://image.kyobobook.co.kr/images/book/xlarge/703/x9788901259703.jpg",
            "http://image.kyobobook.co.kr/images/book/xlarge/755/x9788950900755.jpg"]},
        {category: "코믹스", books: [
            "http://image.kyobobook.co.kr/images/book/xlarge/930/x9791125668930.jpg",
            "http://image.kyobobook.co.kr/images/book/xlarge/496/x9791166255496.jpg",
            "http://image.kyobobook.co.kr/images/book/xlarge/365/x9791165019365.jpg",
            "http://image.kyobobook.co.kr/images/book/xlarge/567/x9791133485567.jpg"]},
    ];

    const settings = {
        dots: true,
        Infinity: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        cneterMode: true,
        centerPadding: '0px',
        beforeChange: (current, next) => setSlideIndex(next)
    };

    function setSlideIndex(idx) {

        setBestBookIndex(idx + 1)
    }

    return (
        <div>
            <div className="banner-wrap">
                <div className="banner-inner">
                    <div className="slider-wrap">
                        <Slider {...settings}>
                            {bestBookArr.map((obj, index) => {
                                return (
                                    <div className="best-book">
                                        <div className="banner-left">
                                            <div>BEST TOP 4</div>
                                            <div>{obj.category}</div>
                                        </div>
                                        <div className="banner-right">
                                            {obj.books.map((obj2, index2) => {
                                                return (
                                                    <div><img src={obj2}/></div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                    <div className="best-book-index">{bestBookIndex}/{bestBookArr.length}</div>
                </div>
            </div>
            <BookList/>
        </div>
    )
}

export default Home;