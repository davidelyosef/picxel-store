/*eslint-disable*/
import Tooltip from "@material-ui/core/Tooltip";
import Add from "@material-ui/icons/Add";
import Close from "@material-ui/icons/Close";
import Remove from "@material-ui/icons/Remove";
import product1 from "assets/img/product1.jpg";
import Button from "components/CustomButtons/Button.js";
import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import shoppingCartStyle from "assets/jss/material-kit-pro-react/views/shoppingCartStyle.js";

import product2 from "assets/img/product2.jpg";
import product3 from "assets/img/product3.jpg";

const useStyles = makeStyles(shoppingCartStyle);

const CartItem = () => {
  const classes = useStyles();
  return (
    <Fragment>
          // Product image
    <div className={classes.imgContainer} key={1}>
      <img src={product1} alt="..." className={classes.img} />
    </div>,

    // Product name
    <span key={1}>
      <a href="#jacket" className={classes.tdNameAnchor}>
        Spring Jacket
      </a>
      <br />
      <small className={classes.tdNameSmall}>by Dolce&amp;Gabbana</small>
    </span>,

    // Product price
    <span key={1}>
      <small className={classes.tdNumberSmall}>₪</small> 549
    </span>,

    // Quantity
    "1",

    // + and - buttons
    <span key={1}>
      <div className={classes.buttonGroup}>
        <Button color="info" size="sm" round className={classes.firstButton}>
          <Remove />
        </Button>
        <Button color="info" size="sm" round className={classes.lastButton}>
          <Add />
        </Button>
      </div>
    </span>,

    // final price
    <span key={1}>
      <small className={classes.tdNumberSmall}>₪</small> 549
    </span>,

    // X button
    <Tooltip
      key={1}
      id="close1"
      title="Remove item"
      placement="left"
      classes={{ tooltip: classes.tooltip }}
    >
      <Button link className={classes.actionButton}>
        <Close />
      </Button>
    </Tooltip>,
    </Fragment>
  );
};

export default CartItem;
