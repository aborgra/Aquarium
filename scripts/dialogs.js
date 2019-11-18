const initializeDetailButtonEvents = () => {
  // CAN'T TOUCH THIS - START
  const allCloseButtons = document.querySelectorAll(".button--close")

  for (const btn of allCloseButtons) {
    btn.addEventListener(
      "click",
      theEvent => {
        const dialogElement = theEvent.target.parentNode
        dialogElement.close()
      }
    )
  }
  // CAN'T TOUCH THIS - END

  // You will be writing code below this line

  // Show Bart's details when the button is clicked
  document.querySelector("#button--bart").addEventListener(
    "click",
    theClickEvent => {
      const theDialog = document.querySelector("#details--bart")
      theDialog.showModal()
    }
  )


  document.querySelector("#button--sam").addEventListener(
    "click",
    theClickEvent => {
      const theDialog = document.querySelector("#details--sam")
      theDialog.showModal()
    }
  )

  document.querySelector("#button--erroll").addEventListener(
    "click",
    theClickEvent => {
      const theDialog = document.querySelector("#details--erroll")
      theDialog.showModal()
    }
  )

  document.querySelector("#button--noodle").addEventListener(
    "click",
    theClickEvent => {
      const theDialog = document.querySelector("#details--noodle")
      theDialog.showModal()
    }
  )

  document.querySelector("#button--mike").addEventListener(
    "click",
    theClickEvent => {
      const theDialog = document.querySelector("#details--mike")
      theDialog.showModal()
    }
  )
  document.querySelector("#button--jerry").addEventListener(
    "click",
    theClickEvent => {
      const theDialog = document.querySelector("#details--jerry")
      theDialog.showModal()
    }
  )

}







export default initializeDetailButtonEvents