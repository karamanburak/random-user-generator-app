import React from "react";
import "./Footer.css";
import designSvg from "../../assets/design.svg";

const Footer = () => {
    return (
        <div className="footer-div">
            <a
                href="https://github.com/karamanburak"
                target="blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
            >
            </a>
            <img
                src={designSvg}
                alt="design"
                style={{ width: "40px", margin: "0  25px 0 10px" }}
            />
            <span>Copyright 2024</span>
        </div>
    );
};

export default Footer;