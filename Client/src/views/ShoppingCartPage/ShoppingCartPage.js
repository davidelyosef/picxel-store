/*eslint-disable*/
import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import "./style/shoppingCart.scss";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/Footer/Footer.js";
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import shoppingCartStyle from "assets/jss/material-kit-pro-react/views/shoppingCartStyle.js";

import product1 from "assets/img/product1.jpg";
import product2 from "assets/img/product2.jpg";
import product3 from "assets/img/product3.jpg";

// redux
import { connect, useStore } from "react-redux";
import { getCartProducts, getProducts } from "../../actions/productsActions";
import CartItem from "./sections/CartItem";

const useStyles = makeStyles(shoppingCartStyle);

const ShoppingCartPage = ({ productsReducer: { cart }, getCartProducts }) => {
  const store = useStore();
  let [finalPrice, setFinalPrice] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    async function go() {
      await getCartProducts();
      cart = await store.getState().productsReducer.cart;
      let overallPrice = 0;
      await cart.map((p) => (overallPrice += p.price * p.quantity));
      setFinalPrice(overallPrice);
      finalPrice = overallPrice;
      console.log(cart);
    }
    go();
  }, []);

  const classes = useStyles();
  return (
    <div>
      <Parallax
        image={require("assets/img/examples/bg2.jpg")}
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
              <h2 className={classes.title}>דף רכישה</h2>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div
        className={classNames(classes.main, classes.mainRaised)}
        id="cartForPicxel"
      >
        <div className={classes.container}>
          <Card plain>
            <CardBody plain>
              <h3 className={classes.cardTitle}>עגלת קניות</h3>
              {cart ? (
                <table className="tableCart">
                  <thead>
                    <tr>
                      <th></th>
                      <th>מוצר</th>
                      <th>מחיר</th>
                      <th>כמות</th>
                      <th></th>
                      <th>סך הכל</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    {cart.map((p) => (
                      <CartItem product={p} key={p._id} />
                    ))}

                    <tr className='endTr'>
                      <td>בסך הכל:</td>
                      <td>
                        <span>
                          <small>₪</small>
                          {finalPrice && <span>{finalPrice}</span>}
                        </span>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <Button color="info" round style={{ float: "left" }}>
                          השלם רכישה
                          <KeyboardArrowLeft />
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <h3>אין מוצרים בעגלת הקניות</h3>
              )}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  productsReducer: state.productsReducer,
});

export default connect(
  mapStateToProps,
  { getCartProducts }
)(ShoppingCartPage);
