import React from "react";
import Style from "./style";
import Link from "next/link";
import { useRouter } from "next/router";
import pagesRouter from "../../helpers/pagesRouter";

const Sidebar = ({ handleToggleSidebar = () => {} }) => {
    const router = useRouter();
    return (
        <Style id="sidebar">
            <button
                className="btn btn-close"
                onClick={handleToggleSidebar}
            ></button>
            <ul className="sidebar-menu">
                {pagesRouter.map((item, key) => {
                    return (
                        <li className="sidebar-menu__list" key={key}>
                            <Link href={item.url}>
                                <a
                                    className={`${
                                        router.pathname === item.url
                                            ? "active"
                                            : ""
                                    } sidebar-menu__list-name`}
                                >
                                    <i
                                        className={item.icon}
                                        aria-hidden="true"
                                    ></i>{" "}
                                    {item.name}
                                </a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </Style>
    );
};
export default Sidebar;
