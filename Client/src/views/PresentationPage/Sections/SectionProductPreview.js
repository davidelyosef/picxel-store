import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui icons
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/latestOffersStyle.js";
import defaultImage from "assets/img/placeholder.jpg";

import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);

const SectionProductPreview = ({
  product: {
    name,
    en_name,
    artist,
    description,
    price,
    before_discount,
    wishlist,
    background,
    images,
    link = '/product-page'
  },
}) => {
  const classes = useStyles();
  return (
    <GridItem md={4} sm={4}>
      <Card product plain>
        <CardHeader image plain>
          <Link to={`/product-page/${en_name}`}>
            <img
              src={
                images[0] ? require(`assets/img/artists_picxel/${images[0]}`) : defaultImage
              }
              alt="..."
              style={{ height: "300px", objectFit: "cover" }}
            />
          </Link>
          <div
            className={classes.coloredShadow}
            style={{
              backgroundImage: `url(${
                images[0] ? require(`assets/img/artists_picxel/${images[0]}`) : defaultImage
              })`,
              opacity: 1,
            }}
          />
        </CardHeader>
        <CardBody className={classes.textCenter} plain>
          <Link to={link}>
            <h4 className={classes.cardTitle}>{name}</h4>
          </Link>
          <p className={classes.cardDescription}>{description}</p>
        </CardBody>
        <CardFooter plain>
          
          <div className={classes.priceContainer}>
            <span className={classNames(classes.price, classes.priceOld)}>
              {" "}
              ₪{before_discount}
            </span>
            <span className={classNames(classes.price, classes.priceNew)}>
              {" "}
              ₪{price}
            </span>
          </div>
          {/* eslint-disable-next-line */}
          <div className={classNames(classes.stats, classes.mlAuto)}>
            <Tooltip
              id="tooltip-top"
              title="Saved to Wishlist"
              placement="top"
              classes={{ tooltip: classes.tooltip }}
            >
              <Button justIcon simple color="rose">
                {wishlist ? <Favorite /> : <FavoriteBorder />}
              </Button>
            </Tooltip>
          </div>
        </CardFooter>
      </Card>
    </GridItem>
  );
};

export default SectionProductPreview;