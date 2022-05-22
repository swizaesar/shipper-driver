import React from "react";
import Script from "next/script";
import Header from "../header";
import Sidebar from "../sidebar";
import Style from "./style";
const Layout = (props) => {
    const [isSidebar, setSidebar] = React.useState(false);
    const handleToggleSidebar = () => {
        setSidebar(!isSidebar);
    };
    return (
        <React.Fragment>
            <Script
                src="https://kit.fontawesome.com/1be1e42c40.js"
                crossorigin="anonymous"
            />

            <Header handleToggleSidebar={handleToggleSidebar} />
            <Style isSidebar={isSidebar}>
                <Sidebar handleToggleSidebar={handleToggleSidebar} />
                <section className="section">{props.children}</section>
            </Style>
        </React.Fragment>
    );
};
export default Layout;
