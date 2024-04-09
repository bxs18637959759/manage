import React, { useState } from "react";
import { history } from "umi";
import { DashboardOutlined, FormOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import styles from "./index.less";

const NavBar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [current, setCurrent] = useState("/index/dashboard");

    const items: MenuProps["items"] = [
        {
            label: "dashboard",
            key: "/index/dashboard",
            icon: <DashboardOutlined />,
        },
        {
            label: "表单",
            key: "/index/form",
            icon: <FormOutlined />,
        },
    ];

    // 展开收起菜单
    // const toggleCollapsed = () => {
    //     setCollapsed(!collapsed);
    // };

    const onClick: MenuProps["onClick"] = (e) => {
        setCurrent(e.key);
        history.push(e.key);
    };

    return (
        <div className={styles.nav_bar}>
            <Menu
                className={styles.nav_bar_menu}
                onClick={onClick}
                selectedKeys={[current]}
                mode="inline"
                inlineCollapsed={collapsed}
                items={items}
            />
        </div>
    );
};
export default NavBar;
