import React from "react";
import { MainLayout } from "../../layout/mainLayout";
import styles from "./HomePage.module.css";
import { Row, Col } from "antd";
import a from "../../assets/images/a.jpg";

export const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <div className={styles.main}>
        <Row>
          <Col span={12}>
            <div className={styles["main-special"]}>
              <h3 className={styles["main-h3"]}>hi~ 我是 Haowen </h3>
              <h3 className={styles["main-h3"]}>一位網頁前端設計師</h3>
              <p className={styles["main-p"]}>熱衷於網頁開發</p>
              <p className={styles["main-p"]}>平常喜歡用影片記錄旅遊</p>
            </div>
          </Col>
          <Col span={12}>
            <div className={styles["main-right"]}>
              <img
                src={a}
                height={500}
                width={450}
                className={styles["main-img"]}
              />
            </div>
          </Col>
        </Row>
      </div>
    </MainLayout>
  );
};
