import initializeDetailButtonEvents from "/scripts/dialogs_main.js";
import addMouseOverEventListeners from "./highlightFishCards.js";
import addTipsEventListener from "./highlightTips.js";
import { useFish } from "/scripts/fish/fish_data_provider.js";
import FishListComponent from "/scripts/fish/FishList.js";
import { useTip } from "/scripts/tips/TipDataProvider.js";
import TipListComponent from "/scripts/tips/TipList.js";

TipListComponent();
FishListComponent();

initializeDetailButtonEvents();
addTipsEventListener();
addMouseOverEventListeners();

// useFish()

// const allOfTheFish = useFish() //this var returns the value of the array bec the fx returns the value of the arr

// console.log("All of the fish:", allOfTheFish) //prints the array from fishCollection

// for (const fish of allOfTheFish) {
//   console.log("Individual fish object:", fish)
// }
