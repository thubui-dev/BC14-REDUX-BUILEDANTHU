import React, { Component } from "react";
import { connect } from "react-redux";
import { actIcon } from "../redux/action";

class Player extends Component {
  render() {
    const { iconList, selectedIcon, getIcon } = this.props;

    const selectedItem = iconList.find(item => item.id === selectedIcon);

    return (
      <div className="text-center playerGame mt-5">
        <div className="showIcon">
          {selectedItem && <img
            className="mt-3"
            style={{ width: 150, height: 150, transform: "rotate(90deg)" }}
            src={selectedItem.hinhAnh}
            alt={selectedItem.hinhAnh}
          />}
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 200, height: 200 }}
          src="./img/gameOanTuTi/player.png"
          alt="./img/gameOanTuTi/player.png"
        />
        <div className="row">
          {iconList.map((item) => {
            return (
              <div className="col-4" key={item.id}>
                <button
                  className={`btnItem ${
                    item.id === selectedIcon ? "active" : ""
                  }`}
                  onClick={() => {
                    getIcon(item);
                  }}
                >
                  <img
                    style={{ width: 50, height: 50 }}
                    src={item.hinhAnh}
                    alt={item.hinhAnh}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    iconList: state.gameOanTuTiReducer.iconList,
    selectedIcon: state.gameOanTuTiReducer.selectedIcon,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getIcon: (item) => {
      dispatch(actIcon(item));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
