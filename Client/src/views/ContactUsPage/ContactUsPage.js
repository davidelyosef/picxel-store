/*eslint-disable*/
import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Footer from "components/Footer/Footer.js";

import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.js";
import "./style/contactUs.scss";
import { addContactDetails } from "actions/contactActions";

const CustomSkinMap = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 44.43353, lng: 26.093928 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true,
        styles: [
          {
            featureType: "water",
            stylers: [
              { saturation: 43 },
              { lightness: -11 },
              { hue: "#0088ff" },
            ],
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              { hue: "#ff0000" },
              { saturation: -100 },
              { lightness: 99 },
            ],
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#808080" }, { lightness: 54 }],
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#ece2d9" }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#ccdca1" }],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#767676" }],
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }],
          },
          { featureType: "poi", stylers: [{ visibility: "off" }] },
          {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [{ visibility: "on" }, { color: "#b8cb93" }],
          },
          { featureType: "poi.park", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "on" }],
          },
          { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.business",
            stylers: [{ visibility: "simplified" }],
          },
        ],
      }}
    >
      <Marker position={{ lat: 44.43353, lng: 26.093928 }} />
    </GoogleMap>
  ))
);

const useStyles = makeStyles(contactUsStyle);

export default function ContactUsPage() {
  const [contact, setContact] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const { fullName, email, phone, message } = contact;

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);

  const classes = useStyles();

  const setStateByTagName = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    const phoneRegex = /^0\d([\d]{0,1})([-]{0,1})\d{7}$/

    if (!emailRegex.test(email)) {
      alert('Email is not valid.');
      return;
    }

    if (!phoneRegex.test(phone)) {
      alert('Phone number is not valid');
      return;
    }
    
    addContactDetails(contact);
    console.log(contact);
    setContact({ fullName: '', message: '', phone: '', email: '' });
  }

  return (
    <div>
      <div className={classes.bigMap}>
        <CustomSkinMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div
              style={{
                height: `100%`,
                borderRadius: "6px",
                overflow: "hidden",
              }}
            />
          }
          mapElement={<div style={{ height: `100%` }} />}
        />
        {/* <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.2399526671584!2d34.76405971449801!3d32.06275812736774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4c9bae3b7841%3A0xf4a0223128375fa9!2sShabazi%20St%2039%2C%20Tel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1580291917640!5m2!1sen!2sil"
      frameborder="0"
      allowfullscreen=""
    ></iframe> */}
      </div>
      <div
        className={classNames(classes.main, classes.mainRaised)}
        style={{ direction: "ltr" }}
      >
        <div className={classes.contactContent}>
          <div className={classes.container}>
            <h2 className={classes.title} style={{ textAlign: "end" }}>
              צור קשר
            </h2>
            <GridContainer>
              <GridItem md={4} sm={4}>
                <InfoArea
                  className={classes.info}
                  title="בואו אלינו"
                  description={<p>רחוב שבזי 39, תל אביב - יפו, ישראל</p>}
                  icon={PinDrop}
                  iconColor="primary"
                />
                <InfoArea
                  className={classes.info}
                  title="התקשרו אלינו"
                  description={
                    <p>
                      +972 XXX XXXX <br /> ראשון - חמישי, 9:00-18:00
                    </p>
                  }
                  icon={Phone}
                  iconColor="primary"
                />
                <InfoArea
                  className={classes.info}
                  title="Legal Information"
                  description={
                    <p>
                      פיקסל בע"מ. <br /> info@fortegallery.com
                    </p>
                  }
                  icon={BusinessCenter}
                  iconColor="primary"
                />
              </GridItem>
              <GridItem md={6} sm={6} className={classes.mlAuto}>
                <p style={{ textAlign: "right" }}>
                  במהלך שנות ה-70 של המאה ה-20, עם התגבשות תחום לימודי התרבות,
                  המונח טקסט התרחב להכללת כל פעילות אנושית הניתנת לניתוח תרבותי
                  <br />
                  <br />
                </p>
                <form dir="rtl" style={{ direction: "rtl" }}>
                  <CustomInput
                    inputProps={{
                      placeholder: "שם מלא",
                      value: fullName,
                      name: "fullName",
                      onChange: setStateByTagName,
                    }}
                    id="float"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                  <CustomInput
                    inputProps={{
                      placeholder: 'הדוא"ל שלך',
                      value: email,
                      name: "email",
                      onChange: setStateByTagName,
                    }}
                    id="float"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                  <CustomInput
                    inputProps={{
                      placeholder: "טלפון",
                      value: phone,
                      name: "phone",
                      onChange: setStateByTagName,
                    }}
                    id="float"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                  <CustomInput
                    inputProps={{
                      placeholder: "הודעה",
                      value: message,
                      multiline: true,
                      rows: 6,
                      name: "message",
                      onChange: setStateByTagName,
                    }}
                    id="float"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                  <div className={classes.textCenter}>
                    <Button color="primary" round onClick={onSubmit}>
                      שלח הודעה
                    </Button>
                  </div>
                </form>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
