import React, { useState, useEffect } from "react";
import { history, useLocation } from "umi";
import { DashboardOutlined, FormOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import styles from "./index.less";

const NavBar: React.FC = () => {
    const localtion = useLocation();
    const [collapsed, setCollapsed] = useState(false);
    const [current, setCurrent] = useState(localtion.pathname);

    useEffect(() => {
        setCurrent(localtion.pathname);
    }, [localtion]);

    const items: MenuProps["items"] = [
        {
            label: "dashboard",
            key: "/dashboard",
            icon: <DashboardOutlined />,
        },
        {
            label: "表单",
            key: "/form",
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
