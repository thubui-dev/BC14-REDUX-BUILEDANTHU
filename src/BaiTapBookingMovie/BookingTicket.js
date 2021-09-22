import React, { Component } from "react";
import { connect } from "react-redux";
import { actBooking } from "../redux/action/indexBooking";

class BookingTicket extends Component {
  renderInfoTicket = () => {
    return this.props.lineNumber.danhSachGhe.map((item, index) => {
      let cssgheDuocChon = "";
      let disabled = false;
      if (item.daDat) {
        cssgheDuocChon = "gheDuocChon";
        disabled = true;
      }

      let cssgheDangDat = "";
      let indexgheDangDat = this.props.bookingList.findIndex(
        (gheDangDat) => gheDangDat.soGhe === item.soGhe
      );
      if (indexgheDangDat !== -1) {
        cssgheDangDat = "gheDangChon";
      }

      return (
        <button
          onClick={() => {
            this.props.bookingTicket(item);
          }}
          disabled={disabled}
          className={`ghe ${cssgheDuocChon} ${cssgheDangDat}`}
          key={index}
        >
          {item.soGhe}
        </button>
      );
    });
  };

  render() {
    return (
      <div className="text-light text-left mt-2 lineBooking">
        <div className="row-name">{this.props.lineNumber.hang}</div>
        <div className="seat-container">{this.renderInfoTicket()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bookingList: state.BookingMovieReducer.bookingList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    bookingTicket: (item) => {
      dispatch(actBooking(item));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingTicket);
