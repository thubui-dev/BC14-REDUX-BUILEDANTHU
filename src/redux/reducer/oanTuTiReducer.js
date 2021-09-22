import * as ActionType from "../constants";

const initialState = {
  iconList: [
    {
      id: "keo",
      hinhAnh: "./img/gameOanTuTi/keo.png",
    },
    {
      id: "bua",
      hinhAnh: "./img/gameOanTuTi/bua.png",
    },
    {
      id: "bao",
      hinhAnh: "./img/gameOanTuTi/bao.png",
    },
  ],
  selectedIcon: undefined,
  ketQua: " Yeahh!!!! I WIN ",
  soBanThang: 0,
  soLuotChoi: 0,
  computer: {
    id: "bao",
    hinhAnh: "./img/gameOanTuTi/bao.png",
  },
};

const gameOanTuTiReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECTION_ICON: {
      console.log(action);
      return {
        ...state,
        selectedIcon: action.payload.id,
      };
    }

    case ActionType.PLAY_GAME: {
      const index = Math.floor(Math.random() * 3);
      const ranDom = state.iconList[index];
      return {
        ...state,
        computer: ranDom,
      };
    }

    case ActionType.END_GAME: {
      let selectedItem = state.iconList.find(
        (item) => item.id === state.selectedIcon
      );
      let computer = state.computer;

      if (selectedItem.id === computer.id) {
        state.ketQua = "Hòa nhau !!!";
      } else {
        switch (selectedItem.id) {
          case "keo":
            if (computer.id === "bao") {
              state.soBanThang = state.soBanThang + 1;
              state.ketQua = "Yeahhhh,,,I WIN !!!";
            } else {
              state.ketQua = "Buồn quá thua rồi !!!";
            }
            break;

          case "bua":
            if (computer.id === "keo") {
              state.soBanThang = state.soBanThang + 1;
              state.ketQua = "Yeahhhh,,,I WIN !!!";
            } else {
              state.ketQua = "Buồn quá thua rồi !!!";
            }
            break;

          case "bao":
            if (computer.id === "bua") {
              state.soBanThang = state.soBanThang + 1;
              state.ketQua = "Yeahhhh,,,I WIN !!!";
            } else {
              state.ketQua = "Buồn quá thua rồi !!!";
            }
            break;
          default:
            console.log("default");
            state.soBanThang = state.soBanThang + 1;
            state.ketQua = "Yeahhhh,,,I WIN !!!";
        }
      }
      state.soLuotChoi = state.soLuotChoi + 1;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default gameOanTuTiReducer;
