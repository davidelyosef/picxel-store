// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import productStyle from "assets/jss/material-kit-pro-react/views/productStyle.js";
import classNames from "classnames";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles(productStyle);

const ProductRecom = ({ product, collection }) => {
  const classes = useStyles();

  const {
    name,
    description,
    price,
    before_discount,
    en_name,
    images,
    wishlist,
  } = product;

  return (
    <GridItem sm={6} md={3}>
      <Card product>
        <CardHeader image>
          <a href={`/product-page/${collection}/${en_name}`}>
            <img
              src={require(`assets/img/artists_picxel/${images[0]}`)}
              alt="cardProduct"
              style={{ objectFit: "cover", height: "150px" }}
            />
          </a>
        </CardHeader>
        <CardBody>
          {/* <h6 className={classNames(classes.cardCategory, classes.textRose)}>
            Trending
          </h6> */}
          <h4 className={classes.cardTitle}>{name}</h4>
          <div className={classes.cardDescription}>{description}</div>
        </CardBody>
        <CardFooter className={classes.justifyContentBetween}>
          <div className={classes.price}>
            <h4 style={{ display: "inline-block" }}>₪{price}</h4>
            <h4
              style={{
                textDecoration: "line-through",
                display: "inline-block",
                color: "#9a9a9a",
              }}
            >
              ₪{before_discount}
            </h4>
          </div>
          {/* <div className={classes.stats}>
            <Tooltip
              id="tooltip-top"
              title="Save to Wishlist"
              placement="top"
              classes={{ tooltip: classes.tooltip }}
            >
              <Button justIcon color="rose" simple>
                {wishlist ? <Favorite /> : <FavoriteBorder />}
              </Button>
            </Tooltip>
          </div> */}
        </CardFooter>
      </Card>
    </GridItem>
  );
};

ProductRecom.prototypes = {
  product: PropTypes.object.isRequired,
  collection: PropTypes.string.isRequired,
};

export default ProductRecom;
