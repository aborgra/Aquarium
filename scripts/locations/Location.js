const LocationComponent = location => {
  return `
  <section class="locations__location">
    <img src="${location.image}" alt="">
        <div class="">${location.name}</div>
        <div>
          <button id="button--${location.id}" class="button">Details</button>
          <dialog class="dialog--location" id="details--${location.id}">
            <div>Climate: ${location.climate}</div>
            <div>Landmarks: ${location.landmark}</div>

            <button class="button--close button" >Close</button>
          </dialog>
        </div>

      </section>
  `;
};

export default LocationComponent;
