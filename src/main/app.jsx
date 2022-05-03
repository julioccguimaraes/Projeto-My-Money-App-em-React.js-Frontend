import React from "react";
import { HashRouter } from 'react-router-dom'
import Header from "../common/template/header";
import SideBar from "../common/template/sidebar";
import Footer from "../common/template/footer";
import Message from "../common/msg/message";

import Routes from './routes'

export default props => {
    return (
        <HashRouter>
            <div className="wrapper">
                <Header></Header>
                <SideBar></SideBar>
                <Routes></Routes>
                <Footer></Footer>
                <Message />
            </div>
        </HashRouter>
    )
}