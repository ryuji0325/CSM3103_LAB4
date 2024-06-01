function Product(name, quantity, price) {
  this.name = name;
  this.quantity = quantity;
  this.price = price;
}

function addProduct() {
  const productName = document.getElementById('productName').value;
  const quantity = parseInt(document.getElementById('quantity').value);
  const price = parseFloat(document.getElementById('price').value);

  const product = new Product(productName, quantity, price);

  displayOutput(product);
}


function Book(bookName, authorName) {
  this.bookName = bookName;
  this.authorName = authorName;
}

Book.prototype.price = null;

function addBook() {
  const bookName = document.getElementById('bookName').value;
  const authorName = document.getElementById('authorName').value;
  const bookPrice = parseFloat(document.getElementById('bookPrice').value);

  const book = new Book(bookName, authorName);
  book.price = bookPrice;

  displayOutput(book);
}

function displayOutput(obj) {
  let outputDiv = document.getElementById('output');
  let outputHTML = '';

  for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
          outputHTML += `<strong>${prop}:</strong> ${obj[prop]}<br>`;
      }
  }

  outputDiv.innerHTML += outputHTML + '<br>';
}