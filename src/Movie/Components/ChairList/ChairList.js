import React, { Component } from "react";
import { connect } from "react-redux";

import ChairItem from "../ChairItem/ChairItem";

class ChairList extends Component {
  renderChairItem() {
    const { chairList } = this.props;
    return chairList.map((chair) => (
      <ChairItem key={chair.hang} chair={chair} />
    ));
  }

  render() {
    return <div>{this.renderChairItem()}</div>;
  }
}

export default connect((state) => ({ chairList: state.chair.chairList }))(
  ChairList
);
