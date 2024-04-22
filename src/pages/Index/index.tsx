import React, { useEffect } from "react";
import { Outlet, history } from "umi";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import styles from "./index.less";

const Index: React.FC = () => {
    useEffect(() => {
        if (!sessionStorage.getItem("token")) {
            history.push("/login");
        }
    }, []);

    return (
        <div className={styles.index}>
            <Header />
            <div className={styles.container}>
                <div className={styles.navs}>
                    <NavBar />
                </div>
                <div className={styles.outlet}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Index;
