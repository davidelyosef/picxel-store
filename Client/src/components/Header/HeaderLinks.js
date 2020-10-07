/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import ShoppingCart from "@material-ui/icons/ShoppingCart";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-pro-react/components/headerLinksStyle.js";
import "./style/header.scss";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function() {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  var onClickSections = {};

  const { dropdownHoverColor } = props;
  const classes = useStyles();
  return (
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <Button className={classes.navLink} color="transparent">
          <Link to="/" style={{ color: "white", fontSize: "19px" }}>
            בית
          </Link>
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button className={classes.navLink} color="transparent">
          <Link to="/about-us" style={{ color: "white", fontSize: "19px" }}>
            אודות
          </Link>
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button className={classes.navLink} color="transparent">
          <Link
            to="/ecommerce-page"
            style={{ color: "white", fontSize: "19px" }}
          >
            מוצרים
          </Link>
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button className={classes.navLink} color="transparent">
          <Link to="/contact-us" style={{ color: "white", fontSize: "19px" }}>
            צור קשר
          </Link>
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link style={{ color: "#fff" }} to="/shopping-cart-page">
          <ShoppingCart
            className={classes.icons}
            style={{
              width: "32px",
              height: "32px",
              right: "11px",
              top: "10px",
            }}
          />
        </Link>
      </ListItem>
    </List>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary",
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
  ]),
};
