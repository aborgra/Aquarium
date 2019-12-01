/**
 *  FishListComponent which renders individual fish objects as HTML
 */
import { useFish } from "/scripts/fish/fish_data_provider.js";
import FishComponent from "/scripts/fish/fish.js";
import {
  mostHolyFish,
  soldierFish,
  nonHolyFish
} from "/scripts/fish/fishSorter.js";

// Import `useFish` from the data provider module (this module is dependent on the fish_data_provider)

const FishListComponent = () => {
  // Get a reference to the `<article class="content">` element (tells which class to insert the HTML)
  const contentElement = document.querySelector(".fishList");
  const fishes = useFish(); //var fishes now equals the data in the array due to the return statement
  const sortedFish = mostHolyFish(fishes).concat(
    soldierFish(fishes),
    nonHolyFish(fishes)
  );
  contentElement.innerHTML += `
      <section class="fishList">
          ${sortedFish
            .map(currentfish => {
              return FishComponent(currentfish);
            })
            .join("")}
      </section>
  `;
};
export default FishListComponent;
