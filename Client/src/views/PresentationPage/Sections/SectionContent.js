import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// library used for cool animations
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

import contentStyle from "assets/jss/material-kit-pro-react/views/presentationSections/contentStyle.js";
// images
import picxel_1 from "assets/img/picxel/picxel_1.jpg";
import picxel_2 from "assets/img/picxel/picxel_2.jpg";
import picxel_3 from "assets/img/picxel/picxel_3.jpg";

const useStyles = makeStyles(contentStyle);

export default function SectionContent() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={4} className={classes.mlAuto}>
            <div
              className={classes.sectionDescription}
              style={{
                textAlign: "end",
                marginTop: "0",
              }}
            >
              <h3 className={classes.title}>איך אנחנו מכינים את זה</h3>
              <h6 className={classes.description}>מפקסלים את התמונה שלך</h6>
              <h5 className={classes.description}>
                במהלך שנות ה-70 של המאה ה-20, עם התגבשות תחום לימודי התרבות,
                המונח טקסט התרחב להכללת כל פעילות אנושית הניתנת לניתוח תרבותי,
                בין אם מדובר במוצר מוגמר ובין אם מדובר בפעילות מתפתחת ומשתנה
                (כמו טקס חברתי מכל סוג שהוא). חוקרי הטקסטים במשמעותם המורחבת
                יישמו עקרונות מתחום חקר הספרות על תופעות חברתיות, כגון מיקום
                התופעות בהקשרים היסטוריים שונים ומציאת קישורים בין אירועים
                המתרחשים בשדות חברתיים שונים{" "}
              </h5>
            </div>
          </GridItem>
          <GridItem md={7}>
            <div className={classes.imageContainer}>
              <div className={classes.animeAreaImg}>
                <ScrollAnimation animateIn="fadeInUp">
                  <img
                    src={picxel_1}
                    alt="iPad comments"
                    className={classes.areaImg}
                  />
                </ScrollAnimation>
              </div>
              <div className={classes.animeInfoImg}>
                <ScrollAnimation animateIn="fadeInUp">
                  <img
                    src={picxel_2}
                    alt="iPad table"
                    className={classes.infoImg}
                  />
                </ScrollAnimation>
              </div>
              <img className={classes.ipadImg} src={picxel_3} alt="iPad" />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
