/*eslint-disable*/
import React, { useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component used to create nice image meadia player
import ImageGallery from "react-image-gallery";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import LocalShipping from "@material-ui/icons/LocalShipping";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import Accordion from "components/Accordion/Accordion.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Tooltip from "@material-ui/core/Tooltip";

import productStyle from "assets/jss/material-kit-pro-react/views/productStyle.js";

// images
import cardProduct1 from "assets/img/examples/card-product1.jpg";
import cardProduct3 from "assets/img/examples/card-product3.jpg";
import cardProduct4 from "assets/img/examples/card-product4.jpg";
import cardProduct2 from "assets/img/examples/card-product2.jpg";
import defaultImage from "assets/img/placeholder.jpg";

const useStyles = makeStyles(productStyle);
import "./style/productPage.scss";

import { getProduct, getProducts } from "../../actions/productsActions";
import { connect } from "react-redux";
// getProduct
const ProductPage = (props) => {
  const en_name = props.match.params.en_name;
  const { getProduct, getProducts } = props;

  // const state = store.getState();
  const { selected } = props.state;

  useEffect(() => {
    async function get() {
      await getProducts();
      await getProduct(en_name);
    }
    get();
    // eslint-disable-next-line
  }, selected);

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
                &nbsp; 0 מוצרים
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
                  <h3 className={classes.mainPrice}>₪{selected.price}</h3>
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
                            best-selling {"'"}Morning After Bag{"'"} and later
                            expanded her offering with the Rebecca Minkoff
                            Collection - a range of luxe city staples with a{" "}
                            {'"'}
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
                  {/* <GridContainer className={classes.pullRight + 'add-to-cart'}> */}
                  <GridContainer className="add-to-cart">
                    <Button round color="rose">
                      הוסף לעגלה &nbsp; <ShoppingCart />
                    </Button>
                  </GridContainer>
                </GridItem>
              </GridContainer>
            </div>
            <div className={classNames(classes.features, classes.textCenter)}>
              <GridContainer>
                <GridItem md={4} sm={4}>
                  <InfoArea
                    title="2 Days Delivery"
                    description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                    icon={LocalShipping}
                    iconColor="info"
                    vertical
                  />
                </GridItem>
                <GridItem md={4} sm={4}>
                  <InfoArea
                    title="Refundable Policy"
                    description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                    icon={VerifiedUser}
                    iconColor="success"
                    vertical
                  />
                </GridItem>
                <GridItem md={4} sm={4}>
                  <InfoArea
                    title="Popular Item"
                    description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                    icon={Favorite}
                    iconColor="rose"
                    vertical
                  />
                </GridItem>
              </GridContainer>
            </div>
            <div className={classes.relatedProducts}>
              <h3 className={classNames(classes.title, classes.textCenter)}>
                You may also be interested in:
              </h3>
              <GridContainer>
                <GridItem sm={6} md={3}>
                  <Card product>
                    <CardHeader image>
                      <a href="#pablo">
                        <img src={cardProduct1} alt="cardProduct" />
                      </a>
                    </CardHeader>
                    <CardBody>
                      <h6
                        className={classNames(
                          classes.cardCategory,
                          classes.textRose
                        )}
                      >
                        Trending
                      </h6>
                      <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
                      <div className={classes.cardDescription}>
                        Dolce & Gabbana{"'"}s {"'"}Greta{"'"} tote has been
                        crafted in Italy from hard-wearing red textured-leather.
                      </div>
                    </CardBody>
                    <CardFooter className={classes.justifyContentBetween}>
                      <div className={classes.price}>
                        <h4>$1,459</h4>
                      </div>
                      <div className={classes.stats}>
                        <Tooltip
                          id="tooltip-top"
                          title="Save to Wishlist"
                          placement="top"
                          classes={{ tooltip: classes.tooltip }}
                        >
                          <Button justIcon color="rose" simple>
                            <Favorite />
                          </Button>
                        </Tooltip>
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem sm={6} md={3}>
                  <Card product>
                    <CardHeader image>
                      <a href="#pablo">
                        <img src={cardProduct3} alt="cardProduct3" />
                      </a>
                    </CardHeader>
                    <CardBody>
                      <h6 className={classes.cardCategory}>Popular</h6>
                      <h4 className={classes.cardTitle}>Balmain</h4>
                      <div className={classes.cardDescription}>
                        Balmain{"'"}s mid-rise skinny jeans are cut with stretch
                        to ensure they retain their second-skin fit but move
                        comfortably.
                      </div>
                    </CardBody>
                    <CardFooter className={classes.justifyContentBetween}>
                      <div className={classes.price}>
                        <h4>$459</h4>
                      </div>
                      <div className={classes.stats}>
                        <Tooltip
                          id="tooltip-top"
                          title="Save to Wishlist"
                          placement="top"
                          classes={{ tooltip: classes.tooltip }}
                        >
                          <Button justIcon link>
                            <Favorite />
                          </Button>
                        </Tooltip>
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem sm={6} md={3}>
                  <Card product>
                    <CardHeader image>
                      <a href="#pablo">
                        <img src={cardProduct4} alt="cardProduct4" />
                      </a>
                    </CardHeader>
                    <CardBody>
                      <h6 className={classes.cardCategory}>Popular</h6>
                      <h4 className={classes.cardTitle}>Balenciaga</h4>
                      <div className={classes.cardDescription}>
                        Balenciaga{"'"}s black textured-leather wallet is
                        finished with the label{"'"}s iconic {"'"}Giant{"'"}{" "}
                        studs. This is where you can...
                      </div>
                    </CardBody>
                    <CardFooter className={classes.justifyContentBetween}>
                      <div className={classes.price}>
                        <h4>$590</h4>
                      </div>
                      <div className={classes.stats}>
                        <Tooltip
                          id="tooltip-top"
                          title="Save to Wishlist"
                          placement="top"
                          classes={{ tooltip: classes.tooltip }}
                        >
                          <Button justIcon color="rose" simple>
                            <Favorite />
                          </Button>
                        </Tooltip>
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem sm={6} md={3}>
                  <Card product>
                    <CardHeader image>
                      <a href="#pablo">
                        <img src={cardProduct2} alt="cardProduct2" />
                      </a>
                    </CardHeader>
                    <CardBody>
                      <h6
                        className={classNames(
                          classes.cardCategory,
                          classes.textRose
                        )}
                      >
                        Trending
                      </h6>
                      <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
                      <div className={classes.cardDescription}>
                        Dolce & Gabbana{"'"}s {"'"}Greta{"'"} tote has been
                        crafted in Italy from hard-wearing red textured-leather.
                      </div>
                    </CardBody>
                    <CardFooter className={classes.justifyContentBetween}>
                      <div className={classes.price}>
                        <h4>$1,459</h4>
                      </div>
                      <div className={classes.stats}>
                        <Tooltip
                          id="tooltip-top"
                          title="Save to Wishlist"
                          placement="top"
                          classes={{ tooltip: classes.tooltip }}
                        >
                          <Button justIcon link>
                            <Favorite />
                          </Button>
                        </Tooltip>
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  state: state.productsReducer,
});

export default connect(
  mapStateToProps,
  { getProducts, getProduct }
)(ProductPage);
