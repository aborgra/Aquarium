const fishCollection = [
  {
    name: "Bart",
    Species: "Orange Clownfish",
    Location: "Caribbean",
    Length: 1,
    Food: ["Algae", "Crustaceans"],
    image: "/images/bartpic.jpg"
  },
  {
    name: "Jerry",
    Species: "Yellow Fish",
    Location: "Pacific Ocean",
    Length: 2,
    Food: "Boogers",
    image: "/images/jerrypic.jpg"
  },
  {
    name: "Mike",
    Species: "Pink Fish",
    Location: "Arctic Ocean",
    Length: 3,
    Food: "Ice",
    image: "/images/mikepic.jpg"
  },
  {
    name: "Noodle",
    Species: "Blue Fish",
    Location: "Dead Sea",
    Length: 4,
    Food: "Salt",
    image: "/images/noodlepic.jpg"
  },
  {
    name: "Erroll",
    Species: "Rainbow Fish",
    Location: "Atlantic Ocean",
    Length: 5,
    Food: "People",
    image: "/images/errollpic.jpg"
  },
  {
    name: "Sam",
    Species: "Beluga Fish",
    Location: "Caribbean",
    Length: 6,
    Food: "Lobsters",
    image: "/images/sampic.jpg"
  },
]

export const useFish = () => {
  return fishCollection
}



// let addFish = (name, Species, Location, Length, Food) => {
//   let newFish = {
//     name: name,
//     Species: Species,
//     Location: Location,
//     Length: Length,
//     Food: Food
//   }
//   fishCollection.push(newFish);
// }

// addFish("Fluffy", "Brown Fish", "Deep", 8, "Water")


