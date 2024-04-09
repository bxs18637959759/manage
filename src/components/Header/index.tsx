import React from "react";
import { Link } from "umi";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import styles from "./index.less";

const Header: React.FC = () => {
    const items: MenuProps["items"] = [
        {
            key: "1",
            label: <Link to="/login">退出登录</Link>,
        },
    ];

    return (
        <div className={styles.header}>
            <div className={styles.header_logo}>
                <img
                    height={28}
                    src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                    alt=""
                />
                <h1 className={styles.header_logo_title}>Antd Design</h1>
            </div>
            <div className={styles.header_user}>
                <Dropdown menu={{ items }} placement="bottom" arrow>
                    <div className="flex align-items-center">
                        <img
                            height={26}
                            src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
                            alt=""
                        />
                        <span style={{ paddingLeft: "8px" }}>admin</span>
                    </div>
                </Dropdown>
            </div>
        </div>
    );
};

export default Header;
