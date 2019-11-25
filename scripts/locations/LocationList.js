import { useLocation } from "/scripts/locations/LocationDataProvider.js";
import LocationComponent from "/scripts/locations/Location.js";

const LocationListComponent = () => {
  const contentElement = document.querySelector(".locationList");
  const locations = useLocation();
  //   let allLocationHTML = ""

  //   for (const location of locations) {
  //     const locationHTML = LocationComponent(location)
  //     allLocationHTML += locationHTML
  //   }

  contentElement.innerHTML += `
    <section class="locationList">
        ${locations
          .map(location => {
            return LocationComponent(location);
          })
          .join("")}
        </section>
  `;
};

export default LocationListComponent;
