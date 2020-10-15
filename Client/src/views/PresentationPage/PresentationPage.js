/*eslint-disable*/
import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import bb41 from "assets/img/picxel/bb4-1.jpg";
// core components
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// sections for this page
import SectionContent from "views/PresentationPage/Sections/SectionContent.js";
import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.js";

import SectionCollection from "./Sections/SectionCollection";

// redux
import { connect, useStore } from "react-redux";
import { getCollections } from "../../actions/productsActions";
import SectionDescription from "./Sections/SectionDescription";

import "./style/sectionCollection.scss";
import SectionCollectionPreview from "./Sections/SectionCollectionPreview";

const useStyles = makeStyles(presentationStyle);

const PresentationPage = ({
  productsReducer: { collections },
  getCollections,
}) => {
  const store = useStore();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    async function go() {
      await getCollections();
      collections = store.getState().productsReducer.collections;
      console.log(collections);

      // const artists = products.map(p => p.artist);
      // const uniques = artists.filter(onlyUnique);
      // console.log(uniques);
    }
    go();
    // eslint-disable-next-line
  }, []);

  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  };

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
                <h3 className={classes.title}>.צור את האמנות שלך</h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionDescription />

        <GridContainer className={classes.collections}>
          <SectionCollection
            link="ecommerce-page"
            name="צור את האמנות שלך"
            bg={bb41}
          />
          <SectionCollection
            link="ecommerce-page"
            name="אמנים"
            bg="https://cdn.shopify.com/s/files/1/0269/4725/6407/products/281fec30-a3c5-4c01-918f-b57873dc23ec_360x.jpg?v=1600120666"
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
            {collections &&
              collections.map((collection) => (
                <SectionCollectionPreview
                  key={collection._id}
                  products={
                    collection.products.filter(p => p.review_on_home ? true : false)
                  }
                  collection={collection}
                />
              ))}
          </GridContainer>
        </div>

        <SectionContent />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  productsReducer: state.productsReducer,
});

export default connect(
  mapStateToProps,
  { getCollections }
)(PresentationPage);
