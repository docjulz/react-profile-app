import React from "react";

export default function Header() {
    return (
        <div className="header__container">
            <img src='./Images/Selfie.jpg' className="header__image" />
            <h1 className="header__name">Julian Miller</h1>
            <h3 className="header__title">Junior Developer</h3>
            <h5 className="header__website">southcountycreative.com</h5>
        </div>
    )
}