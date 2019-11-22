import initializeDetailButtonEvents from '/scripts/dialogs_main.js'
import addMouseOverEventListeners from './highlightFishCards.js'
import addTipsEventListener from './highlightTips.js'
import { useFish } from './fish_data_provider.js'


// newFunction()
addTipsEventListener()
addMouseOverEventListeners()
initializeDetailButtonEvents()
const allOfTheFish = useFish() //this var returns the value of the array bec the fx returns the value of the arr

console.log("All of the fish:", allOfTheFish) //prints the array from fishCollection

for (const fish of allOfTheFish) {
  console.log("Individual fish object:", fish)
}

