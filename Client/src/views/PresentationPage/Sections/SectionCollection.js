/*eslint-disable*/
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import GridItem from "components/Grid/GridItem.js";
import React from "react";
import { Link } from "react-router-dom";
import "../style//sectionCollection.scss";

const useStyles = makeStyles(profilePageStyle);

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
