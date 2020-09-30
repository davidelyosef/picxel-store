import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import officeStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/officeStyle.js";

// images
import picxel1 from "assets/img/picxel/picxel1.jpeg";
import picxel2 from "assets/img/picxel/picxel2.jpg";
import picxel3 from "assets/img/picxel/picxel3.jpg";
import picxel4 from "assets/img/picxel/picxel4.jpg";
import picxel_about from "assets/img/picxel/picxel_about.jpeg";
// office
import office1 from "assets/img/examples/office1.jpg";
import office2 from "assets/img/examples/office2.jpg";
import office3 from "assets/img/examples/office3.jpg";
import office4 from "assets/img/examples/office4.jpg";
import office5 from "assets/img/examples/office5.jpg";

const useStyles = makeStyles(officeStyle);

export default function SectionOffice() {
  const classes = useStyles();
  return (
    <div className={classes.office}>
      <GridContainer className={classes.textCenter}>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h2 className={classes.title}>הפכו את הבית לנעים יותר</h2>
          <h4 className={classes.description}>
            הנה כמה תמונות ממשרדנו. אתה יכול לראות שהמקום נראה כמו ארמון והוא
            מאובזר במלואו בכל מה שאתה צריך כדי לבצע את העבודה.
          </h4>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={picxel1}
            alt="office1"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={picxel2}
            alt="office2"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={picxel3}
            alt="office3"
          />
        </GridItem>
        <GridItem md={6} sm={6}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={picxel4}
            alt="office4"
          />
        </GridItem>
        <GridItem md={6} sm={6}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={picxel_about}
            alt="office5"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
