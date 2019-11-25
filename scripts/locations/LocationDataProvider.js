const locationCollection = [
  {
    id: 1,
    image: "/images/glacierfishingpic.jpg",
    name: "Nome, Alaska, USA",
    climate: "Cold",
    landmark: "Polar Bears"
  },
  {
    id: 2,
    image: "/images/sunsetfishingpic.jpg",
    name: "Cancun, Mexico",
    climate: "Warm",
    landmark: "Margaritas"
  },
  {
    id: 3,
    image: "/images/flyfishingpic.jpg",
    name: "Colorado, USA",
    climate: "Chilly",
    landmark: "Rocks"
  },
  {
    id: 4,
    image: "/images/bridgefishingpic.png",
    name: "San Diego, California",
    climate: "Perfect",
    landmark: "Seals"
  }
];

export const useLocation = () => {
  return locationCollection;
};
