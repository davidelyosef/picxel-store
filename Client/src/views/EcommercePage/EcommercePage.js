/*eslint-disable*/
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ecommerceHeader from "assets/img/examples/ecommerce-header.jpg";
import styles from "assets/jss/material-kit-pro-react/views/ecommerceStyle.js";
// nodejs library that concatenates classes
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import React from "react";
import SectionLatestOffers from "views/EcommercePage/Sections/SectionLatestOffers.js";
import SectionProducts from "views/EcommercePage/Sections/SectionProducts.js";

const useStyles = makeStyles(styles);

const EcommercePage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const classes = useStyles();
  return (
    <div>
      <Parallax
        image={require("assets/img/picxel/picxel_about.jpeg")}
        filter="dark"
        small
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <div className={classes.brand}>
                <h1 className={classes.title}>דף המוצרים</h1>
                <h4>
                  משלוח חינם לכל הארץ 20% הנחה על כל המוצרים{" "}
                </h4>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionLatestOffers />
        <SectionProducts />
      </div>
      {/* <SectionBlog /> */}
      <div
        className={classNames(
          classes.subscribeLine,
          classes.subscribeLineImage
        )}
        style={{ backgroundImage: `url(${ecommerceHeader})`, display:"none" }}
      >
      </div>
    </div>
  );
}

export default EcommercePage;