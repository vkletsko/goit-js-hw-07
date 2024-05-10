console.log(`Number of categories: ${categories.childElementCount}`);
const items = [...categories.children].map(({ children }) => {
  console.log(`Category: ${children[0].textContent}`);
  console.log(`Category: ${children[1].childElementCount}`);
});
