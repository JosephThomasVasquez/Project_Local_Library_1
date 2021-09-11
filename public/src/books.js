function findAuthorById(authors, id) {
  let authorFound = authors.find((author) => author.id === id);

  return authorFound;
}

function findBookById(books, id) {
  let bookFound = books.find((book) => book.id === id);

  return bookFound;
}

function partitionBooksByBorrowedStatus(books) {
  let borrowed = books.filter((book) => !book.borrows[0].returned);
  let returned = books.filter((book) => book.borrows[0].returned);

  let bookStatus = [borrowed, returned];

  return bookStatus;
}

function getBorrowersForBook(book, accounts) {
  let accountBorrowers = [];

  book.borrows.forEach((account) =>
    accounts.filter((accId) => {
      if (account.id === accId.id) {
        accId.returned = account.returned;
        accountBorrowers.push(accId);
      }
    })
  );

  return accountBorrowers.splice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
