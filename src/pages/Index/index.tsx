import { Outlet } from "umi";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import styles from "./index.less";

const Index = () => {
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
