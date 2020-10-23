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
      await cart.map(p => overallPrice += p.price * p.quantity);
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
      <div className={classNames(classes.main, classes.mainRaised)} id="cartForPicxel">
        <div className={classes.container}>
          <Card plain>
            <CardBody plain>
              <h3 className={classes.cardTitle}>עגלת קניות</h3>

              <Table
                tableHead={["", "מוצר", "מחיר", "כמות", "", "סך הכל", ""]}
                tableData={[]}
              />

              {cart ? (
                <div>
                  {cart.map((p) => (
                    <Table
                      key={p._id}
                      tableData={[
                        [
                          // Product image
                          <div className={classes.imgContainer} key={1}>
                            <img
                              // require(`assets/img/artists_picxel/${p.images[0]}`)
                              src={require(`assets/img/artists_picxel/${
                                p.images[0]
                              }`)}
                              alt={p.en_name}
                              className={classes.img}
                            />
                          </div>,

                          // Product name
                          <span key={1}>
                            <a
                              href={`/product-page/${p.en_name}`}
                              className={classes.tdNameAnchor}
                            >
                              {p.name}
                            </a>
                            <br />
                            <small className={classes.tdNameSmall}>
                              by Dolce&amp;Gabbana
                            </small>
                          </span>,

                          // Product price
                          <span key={1}>
                            <small className={classes.tdNumberSmall}>₪</small>{" "}
                            {p.price}
                          </span>,

                          // Quantity
                          `${p.quantity}`,

                          // + and - buttons
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
                              <Button
                                color="info"
                                size="sm"
                                round
                                className={classes.lastButton}
                              >
                                <Add />
                              </Button>
                            </div>
                          </span>,

                          // final price
                          <span key={1}>
                            <small className={classes.tdNumberSmall}>₪</small>{" "}
                            {p.quantity * p.price}
                          </span>,

                          // X button
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
                          </Tooltip>,
                        ],
                      ]}
                      tableShopping
                      customHeadCellClasses={[
                        classes.textCenter,
                        classes.description,
                        classes.description,
                        classes.textRight,
                        classes.textRight,
                        classes.textRight,
                      ]}
                      customHeadClassesForCells={[0, 2, 3, 4, 5, 6]}
                      customCellClasses={[
                        classes.tdName,
                        classes.customFont,
                        classes.customFont,
                        classes.tdNumber,
                        classes.tdNumber + " " + classes.tdNumberAndButtonGroup,
                        classes.tdNumber + " " + classes.textCenter,
                      ]}
                      customClassesForCells={[1, 2, 3, 4, 5, 6]}
                    />
                  ))}

                  <Table
                    tableData={[
                      {
                        purchase: true,
                        colspan: "3",
                        amount: (
                          <span>
                            <small>₪</small>{finalPrice && <span>{finalPrice}</span>}
                          </span>
                        ),
                        col: {
                          colspan: 3,
                          text: (
                            <Button color="info" round style={{ float: "left" }}>
                              השלם רכישה 
                              <KeyboardArrowLeft />
                            </Button>
                          ),
                        },
                      },
                    ]}
                    tableShopping
                    customHeadCellClasses={[
                      classes.textCenter,
                      classes.description,
                      classes.description,
                      classes.textRight,
                      classes.textRight,
                      classes.textRight,
                    ]}
                    customHeadClassesForCells={[0, 2, 3, 4, 5, 6]}
                    customCellClasses={[
                      classes.tdName,
                      classes.customFont,
                      classes.customFont,
                      classes.tdNumber,
                      classes.tdNumber + " " + classes.tdNumberAndButtonGroup,
                      classes.tdNumber + " " + classes.textCenter,
                    ]}
                    customClassesForCells={[1, 2, 3, 4, 5, 6]}
                  />
                </div>
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
