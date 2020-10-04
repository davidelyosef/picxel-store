import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Phone from "@material-ui/icons/Phone";
import Email from "@material-ui/icons/Email";
import Home from "@material-ui/icons/Home";

import contactStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/contactStyle.js";

const useStyles = makeStyles(contactStyle);

export default function SectionContact() {
  const classes = useStyles();
  return (
    <div style={{ textAlign: 'center', padding: '40px 0px' }}>
      <Phone
        className={classes.icons}
      /> +972 XXX XXXX
      <br></br>
      <Email
        className={classes.icons}
      /> info@fortegallery.com
      <br />
      <Home
        className={classes.icons}
      /> שבזי 39 תל אביב - יפו
    </div>
  );
}
