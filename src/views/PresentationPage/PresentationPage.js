/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import bb41 from "assets/img/picxel/bb4-1.jpg";
// core components
import Parallax from "components/Parallax/Parallax.js";
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

import PreFooter from "components/PreFooter/PreFooter";
import SectionCollection from "./Sections/SectionCollection";

const useStyles = makeStyles(presentationStyle);

export default function PresentationPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Parallax
        image={require("assets/img/bg4.jpg")}
        className={classes.parallax}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1>פיקסל</h1>
                <h3 className={classes.title}>צור את האמנות שלך.</h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <GridContainer className={classes.collections}>
          <SectionCollection
            link="ecommerce-page"
            name="Artists"
            bg="https://cdn.shopify.com/s/files/1/0269/4725/6407/products/281fec30-a3c5-4c01-918f-b57873dc23ec_360x.jpg?v=1600120666"
          />
          <SectionCollection
            link="ecommerce-page"
            name="Make Your Own Art"
            bg={bb41}
          />
        </GridContainer>

        <SectionDescription />
        <SectionContent />
        <SectionExamples />
      </div>
    </div>
  );
}
