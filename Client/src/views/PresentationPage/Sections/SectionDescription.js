// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import descriptionStyle from "assets/jss/material-kit-pro-react/views/presentationSections/descriptionStyle.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import React from "react";
import "../style/sectionCollection.scss";

const useStyles = makeStyles(descriptionStyle);

export default function SectionDescription() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={8} sm={8}>
            <h4 className={classes.description}>
              במהלך שנות ה-70 של המאה ה-20, עם התגבשות תחום לימודי התרבות, המונח
              טקסט התרחב להכללת כל פעילות אנושית הניתנת לניתוח תרבותי, בין אם
              מדובר במוצר מוגמר ובין אם מדובר בפעילות מתפתחת ומשתנה
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
