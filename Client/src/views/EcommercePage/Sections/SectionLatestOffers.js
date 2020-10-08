// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui icons
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import dolce from "assets/img/examples/dolce.jpg";
// import kadishman from "assets/img/examples/blog2.jpg";
import gucci from "assets/img/examples/gucci.jpg";
import tomFord from "assets/img/examples/tom-ford.jpg";
import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/latestOffersStyle.js";
// nodejs library that concatenates classes
import classNames from "classnames";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import React from "react";
// redux
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../../../actions/productsActions";

const useStyles = makeStyles(styles);

const SectionLatestOffers = ({
  productsReducer: { products },
  getProducts,
}) => {
  const classes = useStyles();

  React.useEffect(() => {
    async function get() {
      await getProducts();
    }
    get();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.section} style={{ paddingBottom: "20" }}>
      {products !== null && (
        <section>
          <div className={classes.container}>
            <h2 style={{ textAlign: 'right' }}>קוקו</h2>
            <GridContainer>
              {products.map((p) => (
                <GridItem md={4} sm={4} key={p._id}>
                  <Card product plain>
                    <CardHeader image plain>
                      <Link to={`/product-page/${p.en_name}`}>
                        <img
                          src={require(`assets/img/artists_picxel/${p.images[0]}`)}
                          alt={`${p.name} ${p.artist}`}
                        />
                      </Link>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(assets/img/artists_picxel/${
                            p.images[0]
                          })`,
                          opacity: 1,
                        }}
                      />
                    </CardHeader>
                    <CardBody className={classes.textCenter} plain>
                      <h4 className={classes.cardTitle}>{p.name}</h4>
                      <p className={classes.cardDescription}>{p.description}</p>
                    </CardBody>
                    <CardFooter plain>
                      <div className={classes.priceContainer}>
                        <span
                          className={classNames(
                            classes.price,
                            classes.priceOld
                          )}
                        >
                          {" "}
                          ₪{p.before_discount}
                        </span>
                        <span
                          className={classNames(
                            classes.price,
                            classes.priceNew
                          )}
                        >
                          {" "}
                          ₪{p.price}
                        </span>
                      </div>
                      <div
                        className={classNames(classes.stats, classes.mlAuto)}
                      >
                        <Tooltip
                          id="tooltip-top"
                          title="Saved to Wishlist"
                          placement="top"
                          classes={{ tooltip: classes.tooltip }}
                        >
                          <Button justIcon simple color="rose">
                          {p.wishlist ? <Favorite /> : <FavoriteBorder />}
                          </Button>
                        </Tooltip>
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
              ))}
            </GridContainer>
          </div>

          <div className={classes.container}>
            <h2 style={{ textAlign: 'right' }}>טומי שנקר</h2>
            <GridContainer>
              <GridItem md={4} sm={4}>
                <Card product plain>
                  <CardHeader image plain>
                    <a href="#pablo">
                      <img src={gucci} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{ backgroundImage: `url(${gucci})`, opacity: 1 }}
                    />
                  </CardHeader>
                  <CardBody className={classes.textCenter} plain>
                    <h4 className={classes.cardTitle}>Gucci</h4>
                    <p className={classes.cardDescription}>
                      The structured shoulders and sleek detailing ensure a
                      sharp silhouette. Team it with a silk pocket square and
                      leather loafers.
                    </p>
                  </CardBody>
                  <CardFooter plain>
                    <div className={classes.priceContainer}>
                      <span
                        className={classNames(classes.price, classes.priceOld)}
                      >
                        {" "}
                        ₪1,430
                      </span>
                      <span
                        className={classNames(classes.price, classes.priceNew)}
                      >
                        {" "}
                        ₪743
                      </span>
                    </div>
                    <div className={classNames(classes.stats, classes.mlAuto)}>
                      <Tooltip
                        id="tooltip-top"
                        title="Saved to Wishlist"
                        placement="top"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <Button justIcon simple color="rose">
                          <Favorite />
                        </Button>
                      </Tooltip>
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem md={4} sm={4}>
                <Card product plain>
                  <CardHeader image plain>
                    <a href="#pablo">
                      <img src={dolce} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{ backgroundImage: `url(${dolce})`, opacity: 1 }}
                    />
                  </CardHeader>
                  <CardBody className={classes.textCenter} plain>
                    <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
                    <p className={classes.cardDescription}>
                      The structured shoulders and sleek detailing ensure a
                      sharp silhouette. Team it with a silk pocket square and
                      leather loafers.
                    </p>
                  </CardBody>
                  <CardFooter plain>
                    <div className={classes.priceContainer}>
                      <span
                        className={classNames(classes.price, classes.priceOld)}
                      >
                        {" "}
                        ₪1,430
                      </span>
                      <span
                        className={classNames(classes.price, classes.priceNew)}
                      >
                        {" "}
                        ₪743
                      </span>
                    </div>
                    <div className={classNames(classes.stats, classes.mlAuto)}>
                      <Tooltip
                        id="tooltip-top"
                        title="Saved to Wishlist"
                        placement="top"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <Button justIcon simple color="rose">
                          <Favorite />
                        </Button>
                      </Tooltip>
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem md={4} sm={4}>
                <Card product plain>
                  <CardHeader image plain>
                    <a href="#pablo">
                      <img src={tomFord} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{ backgroundImage: `url(${tomFord})`, opacity: 1 }}
                    />
                  </CardHeader>
                  <CardBody className={classes.textCenter} plain>
                    <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
                    <p className={classes.cardDescription}>
                      The structured shoulders and sleek detailing ensure a
                      sharp silhouette. Team it with a silk pocket square and
                      leather loafers.
                    </p>
                  </CardBody>
                  <CardFooter plain>
                    <div className={classes.priceContainer}>
                      <span
                        className={classNames(classes.price, classes.priceOld)}
                      >
                        {" "}
                        ₪1,430
                      </span>
                      <span
                        className={classNames(classes.price, classes.priceNew)}
                      >
                        {" "}
                        ₪743
                      </span>
                    </div>
                    <div className={classNames(classes.stats, classes.mlAuto)}>
                      <Tooltip
                        id="tooltip-top"
                        title="Saved to Wishlist"
                        placement="top"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <Button justIcon simple color="rose">
                          <Favorite />
                        </Button>
                      </Tooltip>
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </section>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  productsReducer: state.productsReducer,
});

export default connect(
  mapStateToProps,
  { getProducts }
)(SectionLatestOffers);
