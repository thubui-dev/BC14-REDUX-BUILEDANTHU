import * as ActionType from "../constants/indexBooking";

const actBooking = (item) => {
    return {
        type: ActionType.BOOKING_TICKET,
        payload:item,
    };
};

const actCancel = (soGhe) => {
    return {
        type: ActionType.CANCEL_ACTION,
        payload: soGhe,
    };
};



export { actBooking, actCancel };