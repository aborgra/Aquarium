/**
 *  FishComponent which renders individual fish objects as HTML(what used to be written on our HTML)
 * takes an object in (fish) and renders HTML with the components
 */
const FishComponent = (fish) => {
  return `
      <div class="fish">
          <div>
              <img class="fish__image" src="${fish.image}" alt="">
          </div>
          <div class="fish__name">${fish.name}</div>
          <button id="button--${fish.name}">Details</button>

          <dialog class="dialog--fish" id="details--${fish.name}">
              <div>Species: ${fish.species}</div>
              <div>Location: ${fish.location}</div>
              <div>Length: ${fish.size}</div>
              <div>Food: ${fish.food.join(",")}</div>

              <button class="button--close">Close Dialog</button>
          </dialog>
      </div>
  `
}

export default FishComponent