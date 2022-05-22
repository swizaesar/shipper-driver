import React from "react";
import Link from "next/link";
import Style from "./style";

const Header = ({ handleToggleSidebar = () => {} }) => {
    return (
        <Style>
            <div>
                <button
                    onClick={handleToggleSidebar}
                    className="btn btn-sidebar"
                >
                    <i className="fas fa-bars"></i>
                </button>
                <Link href="/">
                    <a>
                        <img
                            src="/images/logo.png"
                            alt="Shipper"
                            className="img-fluid logo"
                        />
                    </a>
                </Link>
            </div>
            <div className="user">
                <span>Hello, </span>{" "}
                <span className="user-name">Shipper User</span>
                <img
                    src="/images/default-avatar.jpg"
                    alt=""
                    className="img-fluid avatar"
                />
            </div>
        </Style>
    );
};
export default Header;
