function findAuthorById(authors, id) {
  // Find author id matching id
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  // Find book id matching id
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {

  // Set array of books returned, and another array of books not returned
  let borrowed = books.filter((book) => !book.borrows[0].returned);
  let returned = books.filter((book) => book.borrows[0].returned);

  // Return both arrays inside an empty array
  return [borrowed, returned];
}

function getBorrowersForBook(book, accounts) {
  let accountBorrowers = [];

  // Loop through books borrowed arrays
  book.borrows.forEach((account) =>

  // filter accounts matching id and book returned status
    accounts.filter((accId) => {
      if (account.id === accId.id) {
        accId.returned = account.returned;
        // Push account Id to borrows array
        accountBorrowers.push(accId);
      }
    })
  );
// Return account borrowers of book
  return accountBorrowers.splice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
