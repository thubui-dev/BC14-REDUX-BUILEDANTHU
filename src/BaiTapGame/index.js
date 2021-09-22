import React, { Component } from 'react';
import Player from './player';
import Computer from './computer';
import ResultGame from './resultGame';
import "./style.css";
import { connect } from "react-redux";
import { actGame, actResult } from "../redux/action";


class BaiTapGameOanTuTi extends Component { 
    render() {
        return (
            <div className="playGame">
                <div className="row text-center mt5">
                    <div className="col-4">
                        <Player/>
                    </div>
                    <div className="col-4">
                        <ResultGame/>
                        <button 
                            className="btn btn-success p-3 display-5 mt-5" 
                            onClick={() => {
                                this.props.playGame();
                            }}
                        >
                            Play game
                        </button>
                    </div>
                    <div className="col-4">
                        <Computer/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            dispatch(actGame())
            dispatch(actResult())
        }
    }
}

export default connect(null, mapDispatchToProps)(BaiTapGameOanTuTi);
