import React, { Component } from "react";
import { connect } from "react-redux";
import { removeSelectedChair } from "../../../actions/chair";

class SelectedChairItem extends Component {
  handleRemoveSelectedChair(chairName) {
    if (!chairName) return;

    const { dispatch } = this.props;
    const action = removeSelectedChair(chairName);
    dispatch(action);
  }

  render() {
    const { selectedChair } = this.props;

    const { soGhe, gia } = selectedChair;

    return (
      <tr className="primary-color fw-bold">
        <td>{soGhe}</td>
        <td>{gia.toLocaleString()}đ</td>
        <td>
          <button
            className="btn btn-light"
            onClick={() => this.handleRemoveSelectedChair(soGhe)}
          >
            &#10060;
          </button>
        </td>
      </tr>
    );
  }
}

export default connect()(SelectedChairItem);
