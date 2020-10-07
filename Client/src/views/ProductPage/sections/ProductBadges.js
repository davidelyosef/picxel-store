/*eslint-disable*/
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import LocalShipping from "@material-ui/icons/LocalShipping";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Chat from "@material-ui/icons/Chat";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import productStyle from "assets/jss/material-kit-pro-react/views/productStyle.js";

const useStyles = makeStyles(productStyle);

const ProductBadges = () => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.features, classes.textCenter)}>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="14 ימי משלוח"
            description="במהלך שנות ה-70 של המאה ה-20, עם התגבשות תחום לימודי התרבות, המונח טקסט התרחב להכללת כל פעילות אנושית"
            icon={LocalShipping}
            iconColor="info"
            vertical
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="קנייה מאובטחת"
            description="במהלך שנות ה-70 של המאה ה-20, עם התגבשות תחום לימודי התרבות, המונח טקסט התרחב להכללת כל פעילות אנושית"
            icon={VerifiedUser}
            iconColor="success"
            vertical
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="צ'אט זמין"
            description="במהלך שנות ה-70 של המאה ה-20, עם התגבשות תחום לימודי התרבות, המונח טקסט התרחב להכללת כל פעילות אנושית"
            icon={Chat}
            iconColor="rose"
            vertical
          />
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default ProductBadges;
