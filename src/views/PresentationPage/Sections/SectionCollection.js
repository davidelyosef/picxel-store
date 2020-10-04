/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import "../style//sectionCollection.scss";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Badge from "components/Badge/Badge.js";

import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";
import { Link } from "react-router-dom";

const useStyles = makeStyles(profilePageStyle);
// makeStyles-card-211 collection-home
const SectionCollection = ({ link, name, bg }) => {
  const classes = useStyles();
  return (
    <GridItem xs={12} sm={6} md={6}>
      <Link to={`/${link}`}>
        <Card
          className="collection-home"
          background
          style={{
            backgroundImage: "url(" + bg + ")",
            marginTop: "0",
            padding: "50px",
          }}
        >
          <CardBody
            background
            className={`${classes.cardBody} collection-home`}
          >
            <h2 className={classes.cardTitleWhite}>{name}</h2>
          </CardBody>
        </Card>
      </Link>
    </GridItem>
  );
};

export default SectionCollection;
