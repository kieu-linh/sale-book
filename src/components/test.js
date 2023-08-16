import React from "react";
import Slider from "react-slick";
import img1 from "../assets/images/book1.webp";
import img2 from "../assets/images/book2.webp";
import img3 from "../assets/images/book3.webp";
import img4 from "../assets/images/book4.webp";
import img5 from "../assets/images/book5.webp";

const test = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slideshrefShow: 2,
                },
            },
            {
                dots: true,
                breakpoint: 600,
                settings: {
                    dots: true,
                    slideshrefShow: 1,
                },
            },
        ],
    };
    const featureBook = [
        {
            id: 1,
            title: "NGHĨ THÔNG KHÔNG LAO LỰC",
            src: img1,
            author: "Hyroyuki Inoue",
            price: "29",
        },
        {
            id: 2,
            title: "CÓ THANH XUÂN NÀO KHÔNG ĐAU ĐỚN, CÓ TUỔI TRẺ NÀO KHÔNG BÃO GIÔNG",
            src: img2,
            author: "Rando Kim",
            price: "29",
        },
        {
            id: 3,
            title: "ĐỪNG ĐI QUÁ VỘI, HÃY CHỜ ĐỢI TRÁI TIM",
            src: img3,
            author: "Hách Văn",
            price: "29",
        },
        {
            id: 4,
            title: "XA LẠ VỚI CHÍNH MÌNH",
            src: img4,
            author: "Quân Quách",
            price: "29",
        },
        {
            id: 5,
            title: "CÂN BẰNG CẢM XÚC - ĐÓN NHẬN HẠNH PHÚC",
            src: img5,
            author: "Daisy Smith",
            price: "29",
        },
        {
            id: 6,
            title: "NGHĨ THÔNG KHÔNG LAO LỰC",
            src: img1,
            author: "Hyroyuki Inoue",
            price: "29",
        },
    ];
    const renderBookFeature = featureBook.map((book) => (
        <div className="card" key={book.id}>
            <div className="p-3">
                <div className="product-book mb-3 ">
                    <a href="./">
                        <img className="mx-auto" src={book.src} alt="" style={{width: "200px", height: "auto"}}/>
                    </a>
                </div>
                <div className="card-body">
                    <h6 className="card-title" style={{height: "50%"}}>{book.title}</h6>
                    <h6 className="text-gray-700">{book.author}</h6>

                    <div className="d-flex align-items-center">
                        <span>$</span>
                        <span className="card-text font-size-3 font-weight-medium mt-0">
                            {book.price}
                        </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M8 12L8 8C8 5.79086 9.79086 4 12 4V4C14.2091 4 16 5.79086 16 8L16 12"
                                stroke="#222222"
                                stroke-linecap="round"
                            />
                            <path
                                d="M3.69435 12.6678C3.83942 10.9269 3.91196 10.0565 4.48605 9.52824C5.06013 9 5.9336 9 7.68053 9H16.3195C18.0664 9 18.9399 9 19.514 9.52824C20.088 10.0565 20.1606 10.9269 20.3057 12.6678L20.8195 18.8339C20.904 19.8474 20.9462 20.3542 20.6491 20.6771C20.352 21 19.8435 21 18.8264 21H5.1736C4.15655 21 3.64802 21 3.35092 20.6771C3.05382 20.3542 3.09605 19.8474 3.18051 18.8339L3.69435 12.6678Z"
                                stroke="#222222"
                            />
                        </svg>


                        <span className="d-flex flex-row justify-content-center align-items-center btn-outline-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z"
                                    stroke="#222222"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    ));
    return (
        <div className="container my-4">
            <section className="section-outstanding">
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className="font-size-26">SÁCH BÁN CHẠY</h2>
                    <a
                        href="/"
                        className="d-flex justify-content-between align-items-center h-primary"
                    >
                        Xem Tất Cả
                        <span className="ps-2 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="8"
                                height="14"
                                viewBox="0 0 8 14"
                                fill="none"
                            >
                                <path d="M1 1L7 7L1 13" stroke="#222222" />
                            </svg>
                        </span>
                    </a>
                </div>

                <Slider {...settings}>{renderBookFeature}</Slider>
            </section>
        </div>
    );
};
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style, display: "block",
                width: "2.813rem",
                height: "2.813rem",
                cursor: "pointer",
                transition: ".3s",
                border: "1px solid #eae8e4",
                position: "absolute"
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style, width: "2.813rem",
                height: "2.813rem",
                cursor: "pointer",
                transition: ".3s",
                zIndex: "1",
                border: "1px solid #eae8e4",
                position: "absolute",
            }}
            onClick={onClick}
        />
    );
};
export default test;
