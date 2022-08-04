import React, { useState } from "react";
import styles from "./PopUp.module.css";
import { useTranslation } from "react-i18next";

export const PopUp: React.FC = () => {
  const [active, setActive] = useState(true);
  const { t } = useTranslation();

  const open = () => {
    setActive(false);
  };

  if (!active) {
    return <></>;
  }

  return (
    <div className={styles["popup-main"]}>
      <p className={styles["popup-x"]} onClick={open}>
        x
      </p>
      <h3 className={styles["popup-h3"]}>{t("popup.remind")}</h3>
      <p className={styles["popup-p"]} style={{ marginTop: "23px" }}>
        {t("popup.pop-main-1")}
      </p>
      <p className={styles["popup-p"]}>{t("popup.pop-main-2")}</p>
      <p className={styles["popup-p"]}>{t("popup.pop-main-3")}</p>
      <p className={styles["popup-p"]}>{t("popup.pop-main-4")}</p>
      <p className={styles["popup-p-under"]}>{t("popup.accountsecret")}</p>
    </div>
  );
};
