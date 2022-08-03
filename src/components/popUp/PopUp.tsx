import React, { useState } from "react";
import styles from "./PopUp.module.css";
import x from "../../assets/icons/close.png";

export const PopUp: React.FC = () => {
  const [active, setActive] = useState(true);

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
      <h3 className={styles["popup-h3"]}>溫馨提示 (觀看個人作品 旅遊網站)</h3>
      <p className={styles["popup-p"]} style={{ marginTop: "30px" }}>
        應為調用的api是http的所以會被當成不安全網站
      </p>
      <p className={styles["popup-p"]}>
        需要先點選左上角那個鎖頭 再點選網站設定
      </p>
      <p className={styles["popup-p"]}>
        然後到權限找到(不安全的內容) 更改成允許
      </p>
      <p className={styles["popup-p"]}>然後回到頁面重新載入就可以看了</p>
      <p className={styles["popup-p-under"]}>可使用 帳號:aa 密碼:123a</p>
    </div>
  );
};
