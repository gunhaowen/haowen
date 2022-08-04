import React from "react";
import { MainLayout } from "../../layout/mainLayout";
import styles from "./HomePage.module.css";
import { Row, Col } from "antd";
import a from "../../assets/images/a.jpg";
import { PopUp } from "../../components";
import { useTranslation } from "react-i18next";

export const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <div className={styles.main}>
        <Row>
          <Col span={12}>
            <div className={styles["main-special"]}>
              <h3 className={styles["main-h3"]}>
                {t("home_page.main-introduce-1")}
              </h3>
              <h3 className={styles["main-h3"]}>
                {t("home_page.main-introduce-2")}
              </h3>
              <p className={styles["main-p"]} style={{ marginTop: "30px" }}>
                {t("home_page.main-introduce-3")}
              </p>
              <p className={styles["main-p"]}>
                {t("home_page.main-introduce-4")}
              </p>
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
      <PopUp />
    </MainLayout>
  );
};
