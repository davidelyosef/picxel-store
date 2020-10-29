// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.js";
import "assets/scss/material-kit-pro-react.scss?v=1.8.0";
// nodejs library that concatenates classes
import classNames from "classnames";
import Button from "components/CustomButtons/Button.js";
import Footer from "components/Footer/Footer.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import PreFooter from "components/PreFooter/PreFooter";
import { createBrowserHistory } from "history";
import React from "react";
import { Route, Router, Switch } from "react-router";
// pages for this product
import AboutUsPage from "views/AboutUsPage/AboutUsPage.js";
import BlogPostPage from "views/BlogPostPage/BlogPostPage.js";
import BlogPostsPage from "views/BlogPostsPage/BlogPostsPage.js";
import ComponentsPage from "views/ComponentsPage/ComponentsPage.js";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.js";
import EcommercePage from "views/EcommercePage/EcommercePage.js";
import ErrorPage from "views/ErrorPage/ErrorPage.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import PresentationPage from "views/PresentationPage/PresentationPage.js";
import PricingPage from "views/PricingPage/PricingPage.js";
import ProductPage from "views/ProductPage/ProductPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import SectionsPage from "views/SectionsPage/SectionsPage.js";
import ShoppingCartPage from "views/ShoppingCartPage/ShoppingCartPage.js";
import SignupPage from "views/SignupPage/SignupPage.js";

const useStyles = makeStyles(presentationStyle);

var hist = createBrowserHistory();

const Layout = () => {
  const classes = useStyles();

  return (
    <Router history={hist}>
      {/* Header */}
      <Header
        brand="פיקסל"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "info",
        }}
      />
      {/* Body */}
      <Switch>
        <Route path="/about-us" component={AboutUsPage} />
        <Route path="/blog-post" component={BlogPostPage} />
        <Route path="/blog-posts" component={BlogPostsPage} />
        <Route path="/components" component={ComponentsPage} />
        <Route path="/contact-us" component={ContactUsPage} />
        <Route path="/ecommerce-page" component={EcommercePage} />
        <Route path="/landing-page" component={LandingPage} />
        <Route path="/login-page" component={LoginPage} />
        <Route path="/pricing" component={PricingPage} />
        <Route path="/profile-page" component={ProfilePage} />
        <Route exac path="/product-page/:collection/:en_name" component={ProductPage} />
        <Route path="/sections" component={SectionsPage} />
        <Route path="/shopping-cart-page" component={ShoppingCartPage} />
        <Route path="/signup-page" component={SignupPage} />
        <Route path="/error-page" component={ErrorPage} />
        <Route path="/" component={PresentationPage} />
      </Switch>
      {/* PreFooter */}
      <PreFooter />
      {/* Footer */}
      <Footer
        theme="white"
        content={
          <div>
            <ul className={classes.socialButtons}>
              <li>
                <Button justIcon simple href="#pablo" color="twitter">
                  <i className="fab fa-twitter" />
                </Button>
              </li>
              <li>
                <Button justIcon simple href="#pablo" color="facebook">
                  <i className="fab fa-facebook-square" />
                </Button>
              </li>
              <li>
                <Button justIcon simple href="#pablo" color="dribbble">
                  <i className="fab fa-dribbble" />
                </Button>
              </li>
              <li>
                <Button justIcon simple href="#pablo" color="google">
                  <i className="fab fa-google-plus-g" />
                </Button>
              </li>
              <li>
                <Button justIcon simple href="#pablo" color="youtube">
                  <i className="fab fa-youtube" />
                </Button>
              </li>
            </ul>
            <div className={classNames(classes.pullCenter, classes.copyRight)}>
              Copyright &copy; {new Date().getFullYear()} Developed by{" "}
              <a href="https://davidelyosef.web.app" rel="noopener noreferrer" target="_blank">
                David-el Yosef
              </a>{" "}
              and Daphne Levy.
            </div>
          </div>
        }
      >
        <div className={classes.footer}>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <a href="#pablo">
                <h5>PICXEL Store</h5>
              </a>
              <p>
                Probably the best UI Kit in the world! We know you{"'"}ve been
                waiting for it, so don{"'"}t be shy!
              </p>
            </GridItem>
            <GridItem xs={12} sm={2} md={2}>
              <h5>About</h5>
              <ul className={classes.linksVertical}>
                <li>
                  <a href="#pablo">Blog</a>
                </li>
                <li>
                  <a href="#pablo">About us</a>
                </li>
                <li>
                  <a href="#pablo">Contact us</a>
                </li>
              </ul>
            </GridItem>
            <GridItem xs={12} sm={2} md={2}>
              <h5>Legal</h5>
              <ul className={classes.linksVertical}>
                <li>
                  <a href="#pablo">Transactions FAQ</a>
                </li>
                <li>
                  <a href="#pablo">Terms & conditions</a>
                </li>
                <li>
                  <a href="#pablo">Licenses</a>
                </li>
              </ul>
            </GridItem>
          </GridContainer>
        </div>
      </Footer>
    </Router>
  );
};

export default Layout;
