import React, { Component } from "react";
import SelectedChairList from "../Components/SelectedChairList/SelectedChairList";
import ChairList from "../Components/ChairList/ChairList";
import "./movie.scss";

export default class HomePage extends Component {
  render() {
    return (
      <div className="movie-container">
        <div className="container">
          <div className="movie-container">
            <div className="row g-2">
              <div className="movie-col col-lg-8">
                <div className="movie-item text-center">
                  <h2 className="text-white ">
                    Đặt vé xem phim tại cyberlearn.com.vn
                  </h2>
                  <p className="text-white">Màn hình</p>
                  <div className="screen"></div>
                  <ChairList />
                </div>
              </div>
              <div className="movie-col col-lg-4">
                <div className="movie-item ">
                  <h2 className="text-white text-center">
                    Danh sách ghế bạn chọn
                  </h2>

                  <div className="movie-chair-detail">
                    <div className="d-flex movie-chair-item">
                      <div className="ghe gheDuocChon mx-2"></div>
                      <h4 className="text-white">Ghế đã đặt</h4>
                    </div>

                    <div className="d-flex movie-chair-item my-3">
                      <div className="ghe gheDangChon mx-2"></div>
                      <h4 className="text-white">Ghế đang chọn</h4>
                    </div>

                    <div className="d-flex movie-chair-item">
                      <div className="ghe mx-2"></div>
                      <h4 className="text-white">Ghế chưa đặt</h4>
                    </div>
                  </div>

                  <SelectedChairList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
