import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui icons
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Cached from "@material-ui/icons/Cached";
import Subject from "@material-ui/icons/Subject";
import Check from "@material-ui/icons/Check";
// core components
import Accordion from "components/Accordion/Accordion.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import Clearfix from "components/Clearfix/Clearfix.js";

import suit1 from "assets/img/examples/suit-1.jpg";
import suit2 from "assets/img/examples/suit-2.jpg";
import suit3 from "assets/img/examples/suit-3.jpg";
import suit4 from "assets/img/examples/suit-4.jpg";
import suit5 from "assets/img/examples/suit-5.jpg";
import suit6 from "assets/img/examples/suit-6.jpg";
import color1 from "assets/img/examples/color1.jpg";
import color3 from "assets/img/examples/color3.jpg";
import color2 from "assets/img/examples/color2.jpg";
import dg3 from "assets/img/dg3.jpg";
import dg1 from "assets/img/dg1.jpg";

import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionProducts() {

  const classes = useStyles();
  return (
    <div className={classes.section} style={{paddingTop: 0}}>
      <div className={classes.container}>
        <h2>News in fashion</h2>
        <GridContainer>
          <GridItem md={4} sm={4}>
            <Card background style={{ backgroundImage: `url(${color1})` }}>
              <CardBody background>
                <h6
                  className={classNames(classes.cardCategory, classes.textInfo)}
                >
                  Productivity Apps
                </h6>
                <a href="#pablo">
                  <h3 className={classes.cardTitle}>
                    The best trends in fashion 2017
                  </h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart
                  the human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <Button href="#" round color="white">
                  <Subject /> Read
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card background style={{ backgroundImage: `url(${color3})` }}>
              <CardBody background>
                <h6
                  className={classNames(classes.cardCategory, classes.textInfo)}
                >
                  FASHION NEWS
                </h6>
                <a href="#pablo">
                  <h3 className={classes.cardTitle}>
                    Kanye joins the Yeezy team at Adidas
                  </h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart
                  the human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <Button href="#" round color="white">
                  <Subject /> Read
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card background style={{ backgroundImage: `url(${color2})` }}>
              <CardBody background>
                <h6
                  className={classNames(classes.cardCategory, classes.textInfo)}
                >
                  Productivity Apps
                </h6>
                <a href="#pablo">
                  <h3 className={classes.cardTitle}>
                    Learn how to use the new colors of 2017
                  </h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart
                  the human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <Button href="#" round color="white">
                  <Subject /> Read
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={6} sm={6}>
            <Card background style={{ backgroundImage: `url(${dg3})` }}>
              <CardBody background>
                <h6
                  className={classNames(classes.cardCategory, classes.textInfo)}
                >
                  Tutorials
                </h6>
                <a href="#pablo">
                  <h3 className={classes.cardTitle}>Trending colors of 2017</h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart
                  the human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <Button href="#" round color="white">
                  <Subject /> Read
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={6} sm={6}>
            <Card background style={{ backgroundImage: `url(${dg1})` }}>
              <CardBody background>
                <h6
                  className={classNames(classes.cardCategory, classes.textInfo)}
                >
                  Productivity Style
                </h6>
                <a href="#pablo">
                  <h3 className={classes.cardTitle}>Fashion & Style 2017</h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart
                  the human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <Button href="#" round color="white">
                  <Subject /> Read
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
