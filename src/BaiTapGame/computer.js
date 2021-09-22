import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {

  render() {
    console.log('hinh', this.props.computer);
    return (
      <div className="text-center playerGame mt-5">
        <div className="showIcon">
            <img className="mt-3 showIconItem" key={this.props.computer.hinhAnh}
                src={this.props.computer.hinhAnh}
                alt={this.props.computer.hinhAnh}
            />
        </div>
        <div className="speech-bubble"></div>
        <img className="iconComputer"
          src="./img/gameOanTuTi/playerComputer.png"
          alt="./img/gameOanTuTi/playerComputer.png"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.gameOanTuTiReducer.computer,
  }
}


export default connect(mapStateToProps,null)(Computer);
