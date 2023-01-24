import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import SelectedChairItem from "../SelectedChairItem/SelectedChairItem";

class SelectedChairList extends Component {
  bodyTableRef = createRef();

  renderSelectedChairItem() {
    const { chairSelectedList } = this.props;
    return chairSelectedList.map((selectedChair) => (
      <SelectedChairItem
        key={selectedChair.soGhe}
        selectedChair={selectedChair}
      />
    ));
  }

  totalPrice() {
    const { chairSelectedList } = this.props;
    return chairSelectedList.reduce((total, value) => total + value.gia, 0);
  }

  render() {
    return (
      <div className="table-wrapper">
        <div className="table-scroll">
          <table className="table primary-color table-bordered mt-4">
            <thead>
              <tr>
                <th>
                  <span className="text">Số ghế</span>
                </th>
                <th>
                  <span className="text">Giá </span>
                </th>
                <th>
                  <span className="text">Hủy</span>
                </th>
              </tr>
            </thead>
            <tbody
              ref={this.bodyTableRef}
              style={{ maxHeight: 100, overflowY: "hidden" }}
            >
              {this.renderSelectedChairItem()}
              <tr>
                <td>Tổng tiền</td>
                <td className="primary-color fw-bold">
                  {this.totalPrice().toLocaleString()}đ
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default connect((state) => ({
  chairSelectedList: state.chair.chairSelectedList,
}))(SelectedChairList);
