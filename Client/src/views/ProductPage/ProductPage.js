/*eslint-disable*/
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import defaultImage from "assets/img/placeholder.jpg";
import productStyle from "assets/jss/material-kit-pro-react/views/productStyle.js";
// nodejs library that concatenates classes
import classNames from "classnames";
import Accordion from "components/Accordion/Accordion.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import React, { useEffect, useState } from "react";
// react component used to create nice image meadia player
import ImageGallery from "react-image-gallery";
import { connect, useStore } from "react-redux";
import { getProduct, getProducts } from "../../actions/productsActions";
import ProductBadges from "./sections/ProductBadges";
import ProductRecom from "./sections/ProductRecom";
import "./style/productPage.scss";

const useStyles = makeStyles(productStyle);

// getProduct
const ProductPage = ({
  productsReducer: { products, selected },
  getProducts,
  getProduct,
}) => {
  const en_name = window.location.pathname;
  const store = useStore();

  const [otherProducts, setOtherProducts] = useState([]);
  const [theCart, setTheCart] = useState(localStorage.getItem("cart"));

  const fourRandom = () => {
    if (products !== null && selected !== null) {
      products.map((p) => {
        if (p._id !== selected._id) otherProducts.push(p);
      });

      // list of four
      for (let i = 0; i < otherProducts.length - 4; i++) {
        setOtherProducts(
          otherProducts.splice(
            Math.floor(Math.random() * otherProducts.length),
            1
          )
        );
      }
      setOtherProducts(otherProducts);
    }
  };

  useEffect(() => {
    async function get() {
      await getProducts();
      await getProduct(en_name.replace("/product-page/", ""));
      products = store.getState().productsReducer.products;
      selected = store.getState().productsReducer.selected;
      await fourRandom();
    }
    get();
    // eslint-disable-next-line
  }, []);

  let imagesArr = [];

  const setImageArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      try {
        imagesArr[i] = {
          original: require(`assets/img/artists_picxel/${arr[i]}`),
          thumbnail: require(`assets/img/artists_picxel/${arr[i]}`),
        };
        // error handeling
      } catch (error) {
        imagesArr[i] = {
          original: defaultImage,
          thumbnail: defaultImage,
        };
      }
    }
    return imagesArr;
  };

  const addToCart = () => {
    const add = { _id: selected._id, quantity: 1 };
    let cart = localStorage.getItem("cart");
    let exist = false;

    if (cart) {
      cart = JSON.parse(cart);
      cart.find(c => {
        if (c._id === add._id) {
          exist = true;
          c.quantity += 1;
        }
      });
      exist ? '' : cart.push(add);
      localStorage.setItem("cart", JSON.stringify(cart));
      // setTheCart(JSON.stringify(cart));
      return;
    }

    localStorage.setItem("cart", JSON.stringify([add]));
    setTheCart(JSON.stringify([add]));
  };

  const [colorSelect, setColorSelect] = React.useState("0");
  const [sizeSelect, setSizeSelect] = React.useState("0");
  const classes = useStyles();

  return (
    <div className={classes.productPage} style={{ direction: "rtl" }}>
      <Parallax
        image={require("assets/img/bg6.jpg")}
        filter="rose"
        className={classes.pageHeader}
      >
        <div className={classes.container}>
          <GridContainer className={classes.titleRow}>
            <GridItem md={4} className={classes.mlAuto}>
              <Button color="white" className={classes.floatRight}>
                <ShoppingCart />
                &nbsp; {theCart ? JSON.parse(theCart).length : 0} מוצרים
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.section, classes.sectionGray)}>
        {selected !== null && (
          <div className={classes.container}>
            <div
              className={classNames(classes.main, classes.mainRaised)}
              style={{ textAlign: "right" }}
            >
              <GridContainer>
                <GridItem md={6} sm={6}>
                  <ImageGallery
                    showFullscreenButton={true}
                    showPlayButton={true}
                    // startIndex={3}
                    items={setImageArr(selected.images)}
                  />
                </GridItem>
                <GridItem md={6} sm={6}>
                  <h2 className={classes.title}>{selected.name}</h2>
                  <h3
                    className={classes.mainPrice}
                    style={{ display: "inline-block" }}
                  >
                    ₪{selected.price}
                  </h3>
                  <h3
                    className={classes.mainPrice}
                    style={{
                      textDecoration: "line-through",
                      display: "inline-block",
                      color: "#9a9a9a",
                    }}
                  >
                    ₪{selected.before_discount}
                  </h3>

                  <Accordion
                    active={0}
                    activeColor="rose"
                    collapses={[
                      {
                        title: "פרטים",
                        content: <p>{selected.description}</p>,
                      },
                      {
                        title: "פרטים על האמן",
                        content: (
                          <p>
                            An infusion of West Coast cool and New York
                            attitude, Rebecca Minkoff is synonymous with It girl
                            style. Minkoff burst on the fashion scene with her
                            best-selling {"'"}
                            Morning After Bag{"'"} and later expanded her
                            offering with the Rebecca Minkoff Collection - a
                            range of luxe city staples with a {'"'}
                            downtown romantic{'"'} theme.
                          </p>
                        ),
                      },
                      {
                        title: "קצת עלינו",
                        content: (
                          <ul>
                            <li>
                              Storm and midnight-blue stretch cotton-blend
                            </li>
                            <li>
                              Notch lapels, functioning buttoned cuffs, two
                              front flap pockets, single vent, internal pocket
                            </li>
                            <li>Two button fastening</li>
                            <li>84% cotton, 14% nylon, 2% elastane</li>
                            <li>Dry clean</li>
                          </ul>
                        ),
                      },
                    ]}
                  />
                  <GridContainer className={classes.pickSize}>
                    <GridItem md={6} sm={6}>
                      <label>בחר צבע</label>
                      <FormControl
                        fullWidth
                        className={classes.selectFormControl}
                      >
                        <Select
                          MenuProps={{
                            className: classes.selectMenu,
                          }}
                          classes={{
                            select: classes.select,
                          }}
                          value={colorSelect}
                          onChange={(event) =>
                            setColorSelect(event.target.value)
                          }
                          inputProps={{
                            name: "colorSelect",
                            id: "color-select",
                          }}
                        >
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected,
                            }}
                            value="0"
                          >
                            ורוד
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected,
                            }}
                            value="1"
                          >
                            אפור
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected,
                            }}
                            value="2"
                          >
                            לבן
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem md={6} sm={6}>
                      <label>בחר גודל</label>
                      <FormControl
                        fullWidth
                        className={classes.selectFormControl}
                      >
                        <Select
                          MenuProps={{
                            className: classes.selectMenu,
                          }}
                          classes={{
                            select: classes.select,
                          }}
                          value={sizeSelect}
                          onChange={(event) =>
                            setSizeSelect(event.target.value)
                          }
                          inputProps={{
                            name: "sizeSelect",
                            id: "size-select",
                          }}
                        >
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected,
                            }}
                            value="0"
                          >
                            קטן
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected,
                            }}
                            value="1"
                          >
                            בינוני
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected,
                            }}
                            value="2"
                          >
                            גדול
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </GridItem>
                  </GridContainer>

                  <GridContainer className="add-to-cart">
                    <div onClick={addToCart}>
                      <Button round color="rose">
                        הוסף לעגלה &nbsp; <ShoppingCart />
                      </Button>
                    </div>
                  </GridContainer>
                </GridItem>
              </GridContainer>
            </div>

            {/* Badges */}
            <ProductBadges />

            <div className={classes.relatedProducts}>
              <h3 className={classNames(classes.title, classes.textCenter)}>
                אתה עשוי להתעניין גם ב:
              </h3>
              <GridContainer>
                {otherProducts &&
                  otherProducts.map((p) => (
                    <ProductRecom product={p} key={p._id} />
                  ))}
              </GridContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  productsReducer: state.productsReducer,
});

export default connect(
  mapStateToProps,
  { getProducts, getProduct }
)(ProductPage);
