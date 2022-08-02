import React from "react";
import styles from "./ReportPage.module.css";
import a from "../../assets/images/0001.jpg";
import b from "../../assets/images/0002.jpg";
import c from "../../assets/images/0003.jpg";
import d from "../../assets/images/0004.jpg";
import e from "../../assets/images/0005.jpg";
import { MainLayout } from "../../layout/mainLayout";

export const ReportPage: React.FC = () => {
  return (
    <MainLayout>
      <div className={styles.body}>
        <img src={a} className={styles.img} />
        <img src={b} className={styles.img} />
        <img src={c} className={styles.img} />
        <img src={d} className={styles.img} />
        <img src={e} className={styles.img} />
      </div>
    </MainLayout>
  );
};
