const fishCollection = [
  {
    name: "Bart",
    species: "Orange Clownfish",
    location: "Caribbean",
    size: 1,
    food: ["Algae", "Crustaceans"],
    image: "/images/bartpic.jpg"
  },
  {
    name: "Jerry",
    species: "Yellow Fish",
    location: "Pacific Ocean",
    size: 2,
    food: ["Boogers"],
    image: "/images/jerrypic.jpg"
  },
  {
    name: "Mike",
    species: "Pink Fish",
    location: "Arctic Ocean",
    size: 3,
    food: ["Ice"],
    image: "/images/mikepic.jpg"
  },
  {
    name: "Noodle",
    species: "Blue Fish",
    location: "Dead Sea",
    size: 4,
    food: ["Salt"],
    image: "/images/noodlepic.jpg"
  },
  {
    name: "Erroll",
    species: "Rainbow Fish",
    location: "Atlantic Ocean",
    size: 5,
    food: ["People"],
    image: "/images/errollpic.jpg"
  },
  {
    name: "Sam",
    species: "Beluga Fish",
    location: "Caribbean",
    size: 6,
    food: ["Lobsters"],
    image: "/images/sampic.jpg"
  }
];
// Function that exports the fish data without giving access to the original data

export const useFish = () => {
  return fishCollection;
};

// let addFish = (name, species, location, size, food, image) => {
//   let newFish = {
//     name: name,
//     species: species,
//     location: location,
//     size: size,
//     food: food
//   }
//   fishCollection.push(newFish);
// }

// addFish("Fluffy", "Brown Fish", "Deep", 8, "Water")
