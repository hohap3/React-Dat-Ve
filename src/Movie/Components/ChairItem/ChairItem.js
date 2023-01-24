import React, { Component } from "react";
import clsx from "clsx";
import { connect } from "react-redux";
import { selectChair } from "../../../actions/chair";

class ChairItem extends Component {
  handleSelectChair = (chairItem) => {
    if (!chairItem) return;

    const { dispatch } = this.props;

    const action = selectChair(chairItem);
    dispatch(action);
  };

  render() {
    const { chair, chairSelectedList } = this.props;

    return (
      <div>
        <div className="d-flex">
          <h3 className="rowNumber mb-3">{chair.hang}</h3>
          {chair.danhSachGhe.map((chairItem) => (
            <div
              onClick={() => this.handleSelectChair(chairItem)}
              key={chairItem.soGhe}
              className={clsx({
                gheDuocChon: chairItem.daDat === true,
                ghe: chair.hang !== "",
                rowNumber: chair.hang === "",
                gheDangChon: chairSelectedList.some(
                  (chair) => chair.soGhe === chairItem.soGhe
                ),
              })}
            >
              <p className="">{chairItem.soGhe}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default connect((state) => ({
  chairSelectedList: state.chair.chairSelectedList,
}))(ChairItem);
