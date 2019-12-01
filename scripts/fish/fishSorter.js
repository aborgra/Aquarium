export const mostHolyFish = fishCollectionArray => {
  let holyFish = [];
  for (const fish of fishCollectionArray) {
    if (fish.size % 3 === 0) {
      holyFish.push(fish);
    }
  }
  return holyFish;
};

export const soldierFish = fishCollectionArray => {
  let soldiers = [];
  for (const fish of fishCollectionArray) {
    if (fish.size % 5 === 0) {
      soldiers.push(fish);
    }
  }
  return soldiers;
};

export const nonHolyFish = fishCollectionArray => {
  let regularFish = [];
  for (const fish of fishCollectionArray) {
    if (fish.size % 3 !== 0 && fish.size % 5 !== 0) {
      regularFish.push(fish);
    }
  }
  return regularFish;
};
