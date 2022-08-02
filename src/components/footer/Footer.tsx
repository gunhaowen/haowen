import React from "react";
import { Layout, Typography } from "antd";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <Layout.Footer style={{ backgroundColor: "rgb(241, 233, 223)" }}>
      <Typography.Title
        level={1}
        style={{ textAlign: "center" }}
        className={styles.title}
      >
        歡迎來到我的網站
      </Typography.Title>
      <div className={styles.text}>
        聯絡資訊 <br /> 電話: 0936210060 <br /> email: asd25878098@gmail.com
      </div>
    </Layout.Footer>
  );
};
