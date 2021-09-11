import fs from "fs";

class JsonProvider {
  static build() {
    const file = fs.readFileSync("data/sample.json");
    const json = JSON.parse(file);
    return new JsonProvider(json);
  }

  constructor(json) {
    this.json = json;
  }

  get books() {
    return this.json.books;
  }

  filterBooks(type) {
    return this.books
      .filter((book) => (!type ? true : book.type === type))
      .map(({ title, img, id }) => ({ title, img, id }));
  }

  get itemsInCart() {
    const normalizePrice = (price) =>
      (Math.round(price * 100) / 100).toFixed(2);

    const items = this.json.cart.map(({ bookId, quantity }) => {
      const book = this.findById(bookId);
      return {
        ...book,
        quantity,
        price: normalizePrice(quantity * book.price),
      };
    });

    const subtotal = items
      .map(({ price }) => parseFloat(price))
      .reduce((prev, cur) => prev + cur);

    return { items, subtotal: normalizePrice(subtotal) };
  }

  findById(bookId) {
    return this.books.find((x) => x.id === bookId);
  }

  addBookToCart(bookId, quantity) {
    const bookInCart = this.json.cart.find((x) => x.bookId === bookId);
    if (bookInCart) {
      bookInCart.quantity += parseInt(quantity);
    } else {
      this.json.cart.push({ bookId, quantity });
    }
    this.save();
  }

  updateBookQuantityInCart(bookId, quantity) {
    const bookInCart = this.json.cart.find((x) => x.bookId === bookId);
    if (bookInCart) {
      bookInCart.quantity = parseInt(quantity);
    }
    this.save();
  }

  removeBookFromCart(bookId) {
    this.json.cart = this.json.cart.filter((x) => x.bookId !== bookId);
    this.save();
  }

  get numberOfBooksInCart() {
    return this.json.cart && this.json.cart.length > 0
      ? this.json.cart
          .map(({ quantity }) => quantity)
          .reduce((prev, cur) => prev + cur)
      : 0;
  }

  save() {
    fs.writeFile("data/sample.json", JSON.stringify(this.json));
  }
}

export default JsonProvider.build();
