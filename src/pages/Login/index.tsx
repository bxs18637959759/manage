import React from "react";
import { history } from "umi";
import { Button, Form, type FormProps, Input, message } from "antd";
import styles from "./index.less";
import Img from "@/assets/yay.jpg";

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const Login: React.FC = () => {
    const onFinish: FormProps<FieldType>["onFinish"] = ({ username, password }) => {
        if (username === "admin" && password === "admin123") {
            message.success("登陆成功！");
            sessionStorage.setItem("token", username);
            history.push("/dashboard");
        } else {
            message.error("用户名或密码错误！");
        }
    };

    return (
        <div className={styles.login}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h1 className={styles.left_title}>Sign In</h1>
                    <div className={styles.left_form}>
                        <Form style={{ maxWidth: 600 }} layout="vertical" onFinish={onFinish}>
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: "Please input your username!" }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: "Please input your password!" }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item>
                                <Button
                                    className={styles.submit_button}
                                    type="primary"
                                    htmlType="submit"
                                >
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
                <div className={`${styles.right} flex align-items-center justify-content-center`}>
                    <img width={500} src={Img} draggable="false" />
                </div>
            </div>
        </div>
    );
};

export default Login;
