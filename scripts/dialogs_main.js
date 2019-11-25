const initializeDetailButtonEvents = () => {
  // CAN'T TOUCH THIS - START
  const allCloseButtons = document.querySelectorAll(".button--close");

  for (const btn of allCloseButtons) {
    btn.addEventListener("click", theEvent => {
      const dialogElement = theEvent.target.parentNode;
      dialogElement.close();
    });
  }

  // Get a reference to all buttons that start with "button--"
  const allDetailButtons = document.querySelectorAll("button[id^='button--']");

  // Add an event listener to each one
  for (const btn of allDetailButtons) {
    btn.addEventListener("click", theEvent => {
      const dialogSiblingSelector = `#${theEvent.target.id}+dialog`;
      const theDialog = document.querySelector(dialogSiblingSelector);
      theDialog.showModal();
    });
  }
  // Show Bart's details when the button is clicked
  // document.querySelector("#button--bart").addEventListener(
  //   "click",
  //   theClickEvent => {
  //     const theDialog = document.querySelector("#details--bart")
  //     theDialog.showModal()
  //   }
  // )

  // document.querySelector("#button--sam").addEventListener(
  //   "click",
  //   theClickEvent => {
  //     const theDialog = document.querySelector("#details--sam")
  //     theDialog.showModal()
  //   }
  // )

  // document.querySelector("#button--erroll").addEventListener(
  //   "click",
  //   theClickEvent => {
  //     const theDialog = document.querySelector("#details--erroll")
  //     theDialog.showModal()
  //   }
  // )

  // document.querySelector("#button--noodle").addEventListener(
  //   "click",
  //   theClickEvent => {
  //     const theDialog = document.querySelector("#details--noodle")
  //     theDialog.showModal()
  //   }
  // )

  // document.querySelector("#button--mike").addEventListener(
  //   "click",
  //   theClickEvent => {
  //     const theDialog = document.querySelector("#details--mike")
  //     theDialog.showModal()
  //   }
  // )
  // document.querySelector("#button--jerry").addEventListener(
  //   "click",
  //   theClickEvent => {
  //     const theDialog = document.querySelector("#details--jerry")
  //     theDialog.showModal()
  //   }
  // )

  // // document.querySelector("#button--bridge").addEventListener(
  // //   "click",
  // //   theClickEvent => {
  // //     const theDialog = document.querySelector("#details--bridge")
  // //     theDialog.showModal()
  // //   }
  // // )
};

export default initializeDetailButtonEvents;
