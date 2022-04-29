import React from "react";
import '../common/template/dependencies'
import Header from "../common/template/header";
import SideBar from "../common/template/sidebar";
import Footer from "../common/template/footer";
import Routes from "./routes";
import Message from "../common/msg/message";

export default props => {
    return (
        <div className="wrapper">
            <Header></Header>
            <SideBar></SideBar>
            <div className="content-wrapper">
                <Routes></Routes>
            </div>
            <Footer></Footer>
            <Message />
        </div>
    )
}