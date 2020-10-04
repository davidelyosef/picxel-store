import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import descriptionStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/descriptionStyle.js";

const useStyles = makeStyles(descriptionStyle);

export default function SectionDescription() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.aboutDescription, classes.textCenter)}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h5 className={classes.description}>
            במהלך שנות ה-70 של המאה ה-20, עם התגבשות תחום לימודי התרבות, המונח
            טקסט התרחב להכללת כל פעילות אנושית הניתנת לניתוח תרבותי, בין אם
            מדובר במוצר מוגמר ובין אם מדובר בפעילות מתפתחת ומשתנה (כמו טקס חברתי
            מכל סוג שהוא). חוקרי הטקסטים במשמעותם המורחבת יישמו עקרונות מתחום
            חקר הספרות על תופעות חברתיות, כגון מיקום התופעות בהקשרים היסטוריים
            שונים ומציאת קישורים בין אירועים המתרחשים בשדות חברתיים שונים
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
