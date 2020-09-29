/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// sections for this page
import SectionDescription from "views/PresentationPage/Sections/SectionDescription.js";
import SectionComponents from "views/PresentationPage/Sections/SectionComponents.js";
import SectionCards from "views/PresentationPage/Sections/SectionCards.js";
import SectionContent from "views/PresentationPage/Sections/SectionContent.js";
import SectionSections from "views/PresentationPage/Sections/SectionSections.js";
import SectionExamples from "views/PresentationPage/Sections/SectionExamples.js";
import SectionFreeDemo from "views/PresentationPage/Sections/SectionFreeDemo.js";
import SectionOverview from "views/PresentationPage/Sections/SectionOverview.js";
import SectionPricing from "views/PresentationPage/Sections/SectionPricing.js";
import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.js";

import CustomInput from "components/CustomInput/CustomInput.js";
import Mail from "@material-ui/icons/Mail";
import bg7 from "assets/img/bg7.jpg";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import InputAdornment from "@material-ui/core/InputAdornment";
import PreFooter from "components/PreFooter/PreFooter";

const useStyles = makeStyles(presentationStyle);

export default function PresentationPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="PICXEL"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "info",
        }}
      />
      <Parallax
        image={require("assets/img/bg4.jpg")}
        className={classes.parallax}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1>PICXEL STORE</h1>
                <h3 className={classes.title}>Do Your Own Art.</h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionDescription />
        <SectionComponents />
        <SectionExamples />
      </div>

      <PreFooter />

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
              <a href="https://davidelyosef.web.app" target="_blank">
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
                  <a href="#pablo">Presentation</a>
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
            <GridItem xs={12} sm={4} md={4}>
              <h5>Subscribe to Newsletter</h5>
              <p>
                Join our newsletter and get news in your inbox every week! We
                hate spam too, so no worries about this.
              </p>
              <form>
                <CustomInput
                  id="footeremail"
                  formControlProps={{
                    fullWidth: false,
                    className: classes.customFormControl,
                  }}
                  inputProps={{
                    placeholder: "Your Email...",
                  }}
                />
                <Button color="primary" justIcon>
                  <Mail />
                </Button>
              </form>
            </GridItem>
          </GridContainer>
        </div>
      </Footer>
    </div>
  );
}
