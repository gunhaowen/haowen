import React from "react";
import { Row, Col, Button } from "antd";
import styles from "./Header.module.css";
import "./Header.css";
import ig from "../../assets/icons/instagram.svg";
import gitHub from "../../assets/icons/github-brands 1.svg";
import youtube from "../../assets/icons/youtube.png";
import { useNavigate } from "react-router-dom";

export const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles["top-header"]}>
      <Row>
        <Col span={12} offset={1}>
          <button
            className={styles.button}
            onClick={() => {
              navigate("/");
            }}
          >
            關於我
          </button>
          <ul className="drop-down-menu">
            <li>
              <a href="#">個人作品</a>
              <ul>
                <li>
                  <a href="https://guanhaowen.netlify.app" target="_blank">
                    ✑ 我的自介
                  </a>
                </li>
                <li>
                  <a href="https://ghw-memorandum.netlify.app" target="_blank">
                    ✑ 備忘錄
                  </a>
                </li>
                <li>
                  <a href="https://haowen-travel.netlify.app" target="_blank">
                    ✑ 旅遊網站
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
            實習報告
          </button>
          <button
            className={styles.button}
            onClick={() => {
              window.open(
                "https://www.youtube.com/channel/UCsMpJz7sEgGLu7y_WuygGmA"
              );
            }}
          >
            youtube作品
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
