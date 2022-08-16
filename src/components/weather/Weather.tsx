import React, { useState, useEffect } from "react";
import { Row, Col, Spin } from "antd";
import styles from "./Weather.module.css";
import weather from "../../assets/images/天氣.png";
import { useSelector, useAppDispatch } from "../../redux/hooks";
import { searchWeather } from "../../redux/weather/slice";
import { useTranslation } from "react-i18next";

export const Weather: React.FC = () => {
  const { t } = useTranslation();
  const [city, setCity] = useState("臺北市");
  let input: any;
  const weatherData = useSelector((state) => state.weather.data);
  const loading = useSelector((s) => s.weather.loading);
  const error = useSelector((s) => s.weather.error);
  const [feel, setFeel] = useState();
  const [type, setType] = useState();
  const [rain, setRain] = useState();
  const [max, setMax] = useState();
  const [min, setMin] = useState();
  const [mistake, setMistake] = useState(false);
  const [succeed, setSucceed] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      searchWeather({
        Authorization: "CWB-BC2D44F9-AC16-4319-B290-C5F0A7E3C254",
        format: "JSON",
      })
    );
  }, []);

  useEffect(() => {
    if (weatherData !== null) {
      setFeel(
        weatherData.cwbopendata.dataset.location[0].weatherElement[3].time[0]
          .parameter.parameterName
      );
      setMax(
        weatherData.cwbopendata.dataset.location[0].weatherElement[1].time[0]
          .parameter.parameterName
      );
      setMin(
        weatherData.cwbopendata.dataset.location[0].weatherElement[2].time[0]
          .parameter.parameterName
      );
      setType(
        weatherData.cwbopendata.dataset.location[0].weatherElement[0].time[0]
          .parameter.parameterName
      );
      setRain(
        weatherData.cwbopendata.dataset.location[0].weatherElement[4].time[0]
          .parameter.parameterName
      );
    }
  }, [weatherData]);

  if (loading) {
    return (
      <Spin
        size="large"
        style={{
          marginTop: 200,
          marginBottom: 200,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
        }}
      />
    );
  }

  if (error) {
    return <div>網站出錯: {error}</div>;
  }

  return (
    <Row>
      <Col span={12}>
        <img
          src={weather}
          width={"80%"}
          height={"550px"}
          className={styles["main-img"]}
        />
      </Col>
      <Col span={12}>
        {mistake ? (
          <div style={{ marginRight: "10%" }}>
            <h1
              className={styles["main"]}
              style={{ marginBottom: "1%", marginTop: "8%" }}
            >
              {t("weather.error")}
            </h1>
            <h1 className={styles["error"]}>{t("weather.suggestion")}</h1>
            <p className={styles["error-content"]}>
              臺北市 新北市 桃園市 臺中市 臺南市
            </p>
            <p className={styles["error-content"]}>
              高雄市 基隆市 新竹縣 新竹市 苗栗縣
            </p>
            <p className={styles["error-content"]}>
              彰化縣 南投縣 雲林縣 嘉義縣 嘉義市
            </p>
            <p className={styles["error-content"]}>
              屏東縣 宜蘭縣 花蓮縣 臺東縣 澎湖縣
            </p>
            <p className={styles["error-content"]}>金門縣 連江縣</p>
            <p
              className={styles["error-button"]}
              onClick={() => {
                setMistake(false);
              }}
            >
              {t("weather.return")}
            </p>
          </div>
        ) : (
          <div style={{ marginRight: "10%" }}>
            <h1 className={styles["main"]}>{t("weather.main")}</h1>
            <input
              type="text"
              placeholder={"臺北市"}
              className={styles["main-input"]}
              id={"city"}
              onChange={(e) => (
                (input = e.target.value), setCity(input), setSucceed(false)
              )}
            />
            <button
              className={styles["main-button"]}
              onClick={() => {
                for (let i = 0; i <= 21; i++) {
                  if (
                    city ===
                    weatherData.cwbopendata.dataset.location[i].locationName
                  ) {
                    setSucceed(true);
                    setMax(
                      weatherData.cwbopendata.dataset.location[i]
                        .weatherElement[1].time[0].parameter.parameterName
                    );
                    setMin(
                      weatherData.cwbopendata.dataset.location[i]
                        .weatherElement[2].time[0].parameter.parameterName
                    );
                    setType(
                      weatherData.cwbopendata.dataset.location[i]
                        .weatherElement[0].time[0].parameter.parameterName
                    );
                    setRain(
                      weatherData.cwbopendata.dataset.location[i]
                        .weatherElement[4].time[0].parameter.parameterName
                    );
                    setFeel(
                      weatherData.cwbopendata.dataset.location[i]
                        .weatherElement[3].time[0].parameter.parameterName
                    );
                    return;
                  }
                }
                if (!succeed) {
                  setMistake(true);
                }
              }}
            >
              {t("weather.search")}
            </button>
            <p className={styles["temperature"]}>
              {t("weather.max")}
              {max}° {t("weather.min")}
              {min}°
            </p>
            <h2 className={styles["main-h2"]} style={{ marginTop: "6%" }}>
              {t("weather.feel")} {feel}
            </h2>
            <h2 className={styles["main-h2"]}>{type}</h2>
            <h2 className={styles["main-h2"]}>
              {t("weather.rain")} {rain}%
            </h2>
          </div>
        )}
      </Col>
    </Row>
  );
};
