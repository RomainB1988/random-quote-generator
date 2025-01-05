const quotes = [
  "The best way to predict the future is to invent it. - Alan Kay",
  "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
  "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
  "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
  "Believe you can and you're halfway there. - Theodore Roosevelt"
];

const quoteDisplay = document.getElementById("quote");
const newQuoteButton = document.getElementById("new-quote");

newQuoteButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDisplay.textContent = quotes[randomIndex];
});
