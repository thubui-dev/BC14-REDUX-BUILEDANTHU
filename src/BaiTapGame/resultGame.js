import React, { Component } from "react";
import { connect } from "react-redux";

class ResultGame extends Component {
  render() {
    const { ketQua, soBanThang, soLuotChoi } = this.props;
    return (
      <div>
        <div className="display-4 text-warning mt-5">{ketQua}</div>
        <div className="display-4 text-success">
          Số bàn thắng :<span className="text-warning">{soBanThang}</span>
        </div>
        <div className="display-4 text-warning">
          Tổng số bàn chơi :<span className="text-warning">{soLuotChoi}</span>
        </div>
      </div>
    );
  }s
}

const mapStateToProps = (state) => {
  return {
    ketQua: state.gameOanTuTiReducer.ketQua,
    soBanThang: state.gameOanTuTiReducer.soBanThang,
    soLuotChoi: state.gameOanTuTiReducer.soLuotChoi,
  };
};

export default connect(mapStateToProps, null)(ResultGame);
