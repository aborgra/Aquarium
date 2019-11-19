const addTipsEventListener = () => {

  const tip = document.querySelectorAll(".tip")

  for (let tips of tip) {
    tips.addEventListener(
      "mouseover",
      (themouseOverEvent) => {
        tips.classList.add("addTipsBorder")

      }
    )
    tips.addEventListener(
      "mouseout",
      (themouseOutEvent) => {
        tips.classList.remove("addTipsBorder")
      }
    )
  }
}

export default addTipsEventListener