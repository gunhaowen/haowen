import React from "react";
import { Row, Col, Divider } from "antd";
import styles from "./Header.module.css";
import "./Header.css";
import ig from "../../assets/icons/instagram.svg";
import gitHub from "../../assets/icons/github-brands 1.svg";
import youtube from "../../assets/icons/youtube.png";
import { useNavigate } from "react-router-dom";
import i18n from "../../i18n/config";
import { useTranslation } from "react-i18next";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  let language = document.getElementById("language")?.dataset.id;

  return (
    <div className={styles["top-header"]}>
      <Divider orientation="left" className={styles["divider"]}>
        {t("header.title")}
        <button
          style={{ marginLeft: "30px" }}
          className={styles["change"]}
          id={"language"}
          data-id={"zh"}
          onClick={() => {
            if (language == "zh") {
              i18n.changeLanguage("en");
              document
                .getElementById("language")
                ?.setAttribute("data-id", "en");
            } else {
              i18n.changeLanguage("zh");
              document
                .getElementById("language")
                ?.setAttribute("data-id", "zh");
            }
          }}
        >
          {t("header.language")}
        </button>
      </Divider>
      <Row>
        <Col span={12} offset={1}>
          <button
            className={styles.button}
            onClick={() => {
              navigate("/");
            }}
          >
            {t("header.about")}
          </button>
          <ul className="drop-down-menu">
            <li>
              <a href="#">{t("header.portfolio")}</a>
              <ul>
                <li>
                  <a href="https://guanhaowen.netlify.app" target="_blank">
                    ✑ {t("header.introduce")}
                  </a>
                </li>
                <li>
                  <a href="https://ghw-memorandum.netlify.app" target="_blank">
                    ✑ {t("header.todolist")}
                  </a>
                </li>
                <li>
                  <a href="https://haowen-travel.netlify.app" target="_blank">
                    ✑ {t("header.travel")}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <button
            className={styles.button}
            onClick={() => {
              navigate("/report");
            }}
          >
            {t("header.report")}
          </button>
          <button
            className={styles.button}
            onClick={() => {
              window.open(
                "https://www.youtube.com/channel/UCsMpJz7sEgGLu7y_WuygGmA"
              );
            }}
          >
            {t("header.youtube")}
          </button>
        </Col>
        <Col span={5} offset={6}>
          <img
            src={ig}
            height={30}
            className={styles.img}
            onClick={() => {
              window.open("https://www.instagram.com/ghw0429/");
            }}
          ></img>
          <img
            src={gitHub}
            height={30}
            className={styles.img}
            onClick={() => {
              window.open("https://github.com/gunhaowen");
            }}
          ></img>
          <img
            src={youtube}
            height={30}
            className={styles.img}
            onClick={() => {
              window.open(
                "https://www.youtube.com/channel/UCsMpJz7sEgGLu7y_WuygGmA"
              );
            }}
          ></img>
        </Col>
      </Row>
    </div>
  );
};
