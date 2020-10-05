// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Subject from "@material-ui/icons/Subject";
import dg1 from "assets/img/dg1.jpg";
import dg3 from "assets/img/dg3.jpg";
import color1 from "assets/img/examples/color1.jpg";
import color2 from "assets/img/examples/color2.jpg";
import color3 from "assets/img/examples/color3.jpg";
import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.js";
// nodejs library that concatenates classes
import classNames from "classnames";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import React from "react";

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
