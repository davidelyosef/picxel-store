/*eslint-disable*/
import Tooltip from "@material-ui/core/Tooltip";
import Add from "@material-ui/icons/Add";
import Close from "@material-ui/icons/Close";
import Remove from "@material-ui/icons/Remove";
import product1 from "assets/img/product1.jpg";
import Button from "components/CustomButtons/Button.js";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import shoppingCartStyle from "assets/jss/material-kit-pro-react/views/shoppingCartStyle.js";
import PropTypes from "prop-types";
import "../style/shoppingCart.scss";

import product2 from "assets/img/product2.jpg";
import product3 from "assets/img/product3.jpg";

const useStyles = makeStyles(shoppingCartStyle);

const CartItem = ({
  cart,
  product: { images, en_name, name, price, quantity, _id },
}) => {
  const classes = useStyles();
  const [overallPrice, setOverallPrice] = useState(0);
  let allSum = 0;

  const setQuantity = (num) => {
    if (num < 1 && quantity <= 1) {
      quantity = 1;
    } else {
      const elem = document.getElementById(en_name);
      quantity = quantity + num;
      elem.innerHTML = quantity;

      let ls = localStorage.getItem("cart");
      ls = JSON.parse(ls);
      const item = ls.find((item) => (item._id === _id ? true : false));
      item.quantity = quantity;

      localStorage.setItem("cart", JSON.stringify(ls));
      setProductSum(price * quantity);
      setOverallSum(price * num);
    }
  };

  const setProductSum = (num) => {
    const sumPrice = document.getElementById(`${en_name}_sum`);
    sumPrice.innerHTML = num;
  };

  const setOverallSum = async (num) => {
    const elem2 = document.getElementById("finalPrice");

    if (allSum <= 0) {
      await cart.map((p) => (allSum += p.price * p.quantity));
    }
    allSum += num;

    elem2.innerHTML = allSum;
  };

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

      <td className="td" id={en_name}>
        {quantity}
      </td>

      <td className="td">
        <span key={1}>
          <div className={classes.buttonGroup}>
            <Button
              onClick={() => setQuantity(-1)}
              color="info"
              size="sm"
              round
              className={classes.firstButton}
            >
              <Remove />
            </Button>
            <Button
              color="info"
              size="sm"
              round
              className={classes.lastButton}
              onClick={() => setQuantity(1)}
            >
              <Add />
            </Button>
          </div>
        </span>
      </td>

      <td className="td">
        <span key={1}>
          <small className={classes.tdNumberSmall}>₪</small>
          <span id={`${en_name}_sum`}>{quantity * price}</span>
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
  cart: PropTypes.array.isRequired,
};

export default CartItem;
