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
import SectionContent from "views/PresentationPage/Sections/SectionContent.js";
import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.js";

import PreFooter from "components/PreFooter/PreFooter";
import SectionCollection from "./Sections/SectionCollection";
import SectionProductPreview from "./Sections/SectionProductPreview";

// images
import bg1 from "assets/img/bg0.jpg";
import bg2 from "assets/img/bg2.jpg";
import bg3 from "assets/img/bg3.jpg";
import bg4 from "assets/img/bg5.jpg";
import bg5 from "assets/img/bg6.jpg";
import bg6 from "assets/img/bg7.jpg";

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

        <div style={{ marginTop: "30px" }}>
          <h2
            style={{
              textAlign: "center",
              fontFamily: "Roboto Slab, Times New Roman, serif",
              fontWeight: "700",
            }}
          >
            פיקסלים מאומנים
          </h2>
          <GridContainer>
            <SectionProductPreview
              product={{
                name: "קוקו 1",
                description:
                  "במהלך שנות ה-70 של המאה ה-20, עם התגבשות תחום לימודי התרבות, המונח טקסט התרחב להכללת כל פעילות אנושית",
                price: 300,
                before_discount: 400,
                wishlist: true,
                link: "/product-page",
                img_src: bg1,
              }}
            />
            <SectionProductPreview
              product={{
                name: "קוקו 2",
                description:
                  "במהלך שנות ה-70 של המאה ה-20, עם התגבשות תחום לימודי התרבות, המונח טקסט התרחב להכללת כל פעילות אנושית",
                price: 300,
                before_discount: 400,
                wishlist: false,
                link: "/product-page",
                img_src: bg2,
              }}
            />
            <SectionProductPreview
              product={{
                name: "קוקו 3",
                description:
                  "במהלך שנות ה-70 של המאה ה-20, עם התגבשות תחום לימודי התרבות, המונח טקסט התרחב להכללת כל פעילות אנושית",
                price: 300,
                before_discount: 400,
                wishlist: true,
                link: "/product-page",
                img_src: bg3,
              }}
            />
            <SectionProductPreview
              product={{
                name: "קוקו 4",
                description:
                  "במהלך שנות ה-70 של המאה ה-20, עם התגבשות תחום לימודי התרבות, המונח טקסט התרחב להכללת כל פעילות אנושית",
                price: 333,
                before_discount: 444,
                wishlist: true,
                link: "/product-page",
                img_src: undefined,
              }}
            />
            <SectionProductPreview
              product={{
                name: "קוקו 5",
                description:
                  "במהלך שנות ה-70 של המאה ה-20, עם התגבשות תחום לימודי התרבות, המונח טקסט התרחב להכללת כל פעילות אנושית",
                price: 340,
                before_discount: 600,
                wishlist: false,
                link: "/product-page",
                img_src: bg4,
              }}
            />
            <SectionProductPreview
              product={{
                name: "קוקו 6",
                description:
                  "במהלך שנות ה-70 של המאה ה-20, עם התגבשות תחום לימודי התרבות, המונח טקסט התרחב להכללת כל פעילות אנושית",
                price: 500,
                before_discount: 700,
                wishlist: false,
                link: "/product-page",
                img_src: bg6,
              }}
            />
          </GridContainer>
        </div>

        <SectionContent />
      </div>
    </div>
  );
}
