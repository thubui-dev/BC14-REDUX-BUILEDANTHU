import { combineReducers } from "redux";
import gameOanTuTiReducer from "./oanTuTiReducer";
import BookingMovieReducer from "./bookingMovieReducer";

const rootReducer = combineReducers({
    gameOanTuTiReducer,
    BookingMovieReducer,
});

export default rootReducer;