/*eslint-disable*/
import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
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
import { getProduct, getProducts } from "../../actions/productsActions";

const useStyles = makeStyles(shoppingCartStyle);

const ShoppingCartPage = ({ productsReducer: { products }, getProducts }) => {
  const [cart, setCart] = useState(localStorage.getItem("cart"));
  const [cartProducts, setCartProducts] = useState([]);
  const store = useStore();
  let parse;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    async function go() {
      if (products === null) {
        await getProducts();
        products = store.getState().productsReducer.products;
      }

      parse = JSON.parse(cart);
      parse.map((cartItem) => {
        products.map((product) => {
          cartItem._id === product._id
            ? setCartProducts(cartProducts.push(product))
            : "";
        });
      });
      console.log(cartProducts);
      setCartProducts(cartProducts);
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
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Card plain>
            <CardBody plain>
              <h3 className={classes.cardTitle}>עגלת קניות</h3>

              {cartProducts.length >= 1 &&
                cartProducts.map(p => <div key={p._id}>{p.en_name}</div>)
                // cartProducts.length
              }

              {cartProducts.length >= 1 ? (
                <Table
                  tableHead={["", "מוצר", "מחיר", "כמות", "", "סך הכל", ""]}
                  tableData={[
                    // cartProducts.map(p => )
                    [
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
                        <small className={classes.tdNameSmall}>
                          by Dolce&amp;Gabbana
                        </small>
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
                    ]
                    ,{
                      purchase: true,
                      colspan: "3",
                      amount: (
                        <span>
                          <small>₪</small>2,346
                        </span>
                      ),
                      col: {
                        colspan: 3,
                        text: (
                          <Button color="info" round>
                            Complete Purchase <KeyboardArrowRight />
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
              ) : (
                <h3>No Products in cart</h3>
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
  { getProducts }
)(ShoppingCartPage);
