/*eslint-disable*/
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import shoppingCartStyle from "assets/jss/material-kit-pro-react/views/shoppingCartStyle.js";
// nodejs library that concatenates classes
import classNames from "classnames";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import React, { useEffect, useState } from "react";
// redux
import { connect, useStore } from "react-redux";
import { getCartProducts } from "../../actions/productsActions";
import CartItem from "./sections/CartItem";
import "./style/shoppingCart.scss";

const useStyles = makeStyles(shoppingCartStyle);

const ShoppingCartPage = ({ productsReducer: { cart }, getCartProducts }) => {
  const store = useStore();
  let [finalPrice, setFinalPrice] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    getCart();
  }, []);

  const getCart = async () => {
    await getCartProducts();
    cart = await store.getState().productsReducer.cart;
    let overallPrice = 0;
    await cart.map((p) => (overallPrice += p.price * p.quantity));
    setFinalPrice(overallPrice);
    finalPrice = overallPrice;
  };

  const onPurchase = async () => {
    await getCart();
    console.log("purchase");
    const obj = {
      cart,
      finalPrice
    }
    console.log(obj);
  };

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
                      <CartItem product={p} cart={cart} key={p._id} />
                    ))}

                    <tr className="endTr">
                      <td>בסך הכל:</td>
                      <td>
                        <span>
                          <small>₪</small>
                          {finalPrice && (
                            <span id="finalPrice">{finalPrice}</span>
                          )}
                        </span>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <Button
                          color="info"
                          round
                          style={{ float: "left" }}
                          onClick={onPurchase}
                        >
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
