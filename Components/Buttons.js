import React from "react"

export default function Buttons() {
    return (
        <div className="button__container">
            <button className="button__contact-1"><span><i className="fa-solid fa-envelope"></i></span>Email</button>
            <button className="button__contact-2"><span><i className="fa-brands fa-linkedin"></i></span>LinkedIn</button>
        </div>
    )
}