const QuoteComponent = (quote) => {
  return `
  <div class="quote">
          <h4>${quote.title}</h4>
          <p>${quote.content}</p>
        </div>
    `
 }

 export default QuoteComponent