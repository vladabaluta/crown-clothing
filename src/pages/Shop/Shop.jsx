import React, { Component } from "react";
import SHOP_DATA from "./Shop.data.js";
import "../../components/CollectionPreview/CollectionPreview";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

export class ShopPage extends Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...OtherCollectionProps }) => (
          <CollectionPreview key={id} {...OtherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
