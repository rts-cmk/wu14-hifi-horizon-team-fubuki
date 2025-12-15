import { useRef, useState } from "react";

import ProfileOrders from "./ProfileOrders";
import ProfileContent from "./ProfileContent";


export default function ProfileInfo() {

    const [selectedButton, setSelectedButton] = useState("profile");

    const contentRef = useRef(null);

    const switchSection = (section) => {
        const element = contentRef.current

        const startHeight = element.getBoundingClientRect().height


        setSelectedButton(section)

        requestAnimationFrame(() => {
            const endHeight = element.scrollHeight
            element.style.height = startHeight + "px"

            requestAnimationFrame(() => {
                element.style.height = endHeight + "px"
            })

            const onTransitionEnd = () => {
                element.style.height = "auto"
                element.removeEventListener("transitionend", onTransitionEnd)
            }

            element.addEventListener("transitionend", onTransitionEnd)
        })

    }



    return (
        <>
            <div className="content-profile-sec__div-buttons">
                <button className={`content-profile-sec__button ${selectedButton === "profile" ? "current" : ""}`} onClick={() => { switchSection("profile") }} >Profile</button>
                <button className={`content-profile-sec__button ${selectedButton === "orders" ? "current" : ""}`} onClick={() => { switchSection("orders") }}>Orders</button>
            </div>

            <section ref={contentRef} className="content-profile-sec__main-section-info">
            {selectedButton === "profile" && (
                <ProfileContent />
            )}

            {selectedButton === "orders" && (
                <ProfileOrders />
            )}
            </section>
        </>
    );
}