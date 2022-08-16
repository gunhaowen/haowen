import React, { useEffect } from "react";
import { MainLayout } from "../../layout/mainLayout";
import styles from "./HomePage.module.css";
import { PopUp, Weather, Myself } from "../../components";

export const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <div className={styles.main}>
        <Myself />
      </div>
      <div className={styles["main-2"]}>
        <Weather />
      </div>
      <PopUp />
    </MainLayout>
  );
};
