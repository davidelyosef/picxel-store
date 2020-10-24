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
import PropTypes from "prop-types";
import "../style/shoppingCart.scss";

import product2 from "assets/img/product2.jpg";
import product3 from "assets/img/product3.jpg";

const useStyles = makeStyles(shoppingCartStyle);

const CartItem = ({ product: { images, en_name, name, price, quantity } }) => {
  const classes = useStyles();
  return (
    <tr>
      <td className="td">
        <div className={classes.imgContainer} key={1}>
          <img
            src={require(`assets/img/artists_picxel/${images[0]}`)}
            alt={en_name}
            className={classes.img}
          />
        </div>
      </td>

      <td className="td">
        <span key={1}>
          <a href={`/product-page/${en_name}`} className={classes.tdNameAnchor}>
            {name}
          </a>
          <br />
          <small className={classes.tdNameSmall}>by Dolce&amp;Gabbana</small>
        </span>
      </td>

      <td className="td">
        <span key={1}>
        <small className={classes.tdNumberSmall}>₪</small> 
        {price}
        </span>
      </td>

      <td className="td">{quantity}</td>

      <td className="td">
        <span key={1}>
          <div className={classes.buttonGroup}>
            <Button
              color="info"
              size="sm"
              round
              className={classes.firstButton}
            >
              <Remove />
            </Button>
            <Button color="info" size="sm" round className={classes.lastButton}>
              <Add />
            </Button>
          </div>
        </span>
      </td>

      <td className="td">
        <span key={1}>
        <small className={classes.tdNumberSmall}>₪</small>
        {quantity * price}
        </span>
      </td>

      <td className="td">
        <Tooltip
          key={1}
          id="close1"
          title="מחק"
          placement="left"
          classes={{ tooltip: classes.tooltip }}
        >
          <Button link className={classes.actionButton}>
            <Close />
          </Button>
        </Tooltip>
      </td>
    </tr>
  );
};

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default CartItem;
