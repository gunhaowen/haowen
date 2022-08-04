import React from "react";
import { Layout, Typography } from "antd";
import styles from "./Footer.module.css";
import { useTranslation } from "react-i18next";

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout.Footer style={{ backgroundColor: "rgb(241, 233, 223)" }}>
      <Typography.Title
        level={1}
        style={{ textAlign: "center" }}
        className={styles.title}
      >
        {t("footer.welcome")}
      </Typography.Title>
      <div className={styles.text}>
        {t("footer.information")} <br /> {t("footer.telephone")} <br />{" "}
        {t("footer.email")}
      </div>
    </Layout.Footer>
  );
};
