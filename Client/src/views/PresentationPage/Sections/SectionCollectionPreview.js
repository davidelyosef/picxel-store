import React, { Fragment } from "react";
import PropTypes from "prop-types";
import SectionProductPreview from "./SectionProductPreview";
// core components
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import defaultImage from "assets/img/placeholder.jpg";
import "../style/sectionCollection.scss";

import { Link } from "react-router-dom";

const SectionCollectionPreview = ({ products, collection }) => {
  return (
    <Fragment>
      <GridItem md={3} sm={4} xs={6}>
        <Card>                  
          <Link to="/ecommerce-page" style={{ position: "relative" }}>
            <img
              src={require(`assets/img/sections/${collection.background}`)}
              style={{
                height: "300px",
                boxShadow: "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
                borderRadius: '6px',
                maxWidth: "100%",
                objectFit: "cover",
                filter: "brightness(50%)",
              }}
            />
            <h3 className="darkened-h3">{collection.name}</h3>
            <h4 className="darkened-h4">צפה בכולם</h4>
          </Link>
        </Card>
      </GridItem>
      {products &&
        products.map((p) => <SectionProductPreview product={p} key={p._id} />)}
    </Fragment>
  );
};

SectionCollectionPreview.propTypes = {
  products: PropTypes.array.isRequired,
  collection: PropTypes.object.isRequired,
};

export default SectionCollectionPreview;
