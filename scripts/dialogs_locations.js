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

  document.querySelector("#button--beach").addEventListener(
    "click",
    theClickEvent => {
      const theDialog = document.querySelector("#details--beach")
      theDialog.showModal()
    }
  )

  document.querySelector("#button--bridge").addEventListener(
    "click",
    theClickEvent => {
      const theDialog = document.querySelector("#details--bridge")
      theDialog.showModal()
    }
  )

  document.querySelector("#button--fly").addEventListener(
    "click",
    theClickEvent => {
      const theDialog = document.querySelector("#details--fly")
      theDialog.showModal()
    }
  )

  document.querySelector("#button--glacier").addEventListener(
    "click",
    theClickEvent => {
      const theDialog = document.querySelector("#details--glacier")
      theDialog.showModal()
    }
  )
}

export default initializeDetailButtonEvents