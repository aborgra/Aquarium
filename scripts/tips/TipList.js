import { useTip } from "/scripts/tips/TipDataProvider.js"
import TipComponent from "/scripts/tips/Tip.js"


const TipListComponent = () => {
  const contentElement = document.querySelector (".tipList")
  const tips = useTip()

  let allTipsHTML = ""

  for (const tip of tips) {
    const tipHTML = TipComponent(tip)
    allTipsHTML += tipHTML
  }

  contentElement.innerHTML += `
    <section class="tipList">
      ${allTipsHTML}
      </section>
  `
}

useTip()
export default TipListComponent