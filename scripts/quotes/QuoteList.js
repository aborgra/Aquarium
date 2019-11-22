import { useQuote } from "/scripts/quotes/QuoteDataProvider.js"
import QuoteComponent from "/scripts/quotes/Quote.js"


const QuoteListComponent = () => {
  const contentElement = document.querySelector (".quoteList")
  const quotes = useQuote()
  let allQuotesHTML = ""

  for (const quote of quotes) {
    const quoteHTML = QuoteComponent(quote)
    allQuotesHTML += quoteHTML
  }

  contentElement.innerHTML += `
    <section class="quoteList">
      ${allQuotesHTML}
      </section>
  `
}

useQuote()
export default QuoteListComponent