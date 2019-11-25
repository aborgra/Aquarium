import initializeDetailButtonEvents from "/scripts/dialogs_main.js";
import addMouseOverEventListeners from "./highlightFishCards.js";
import addTipsEventListener from "./highlightTips.js";
// import { useFish } from "/scripts/fish/fish_data_provider.js";
import FishListComponent from "./fish/FishList.js";
// import { useTip } from "/scripts/tips/TipDataProvider.js";
import TipListComponent from "./tips/TipList.js";

TipListComponent();
FishListComponent();

initializeDetailButtonEvents();
addTipsEventListener();
addMouseOverEventListeners();
