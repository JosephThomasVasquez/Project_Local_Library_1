function findAccountById(accounts, id) {
  // Use find method to compare account.id from accounts array to id parameter
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {

  let sortByLastNames = accounts.sort((account1, account2) => {
    // Set variables so each account last name is lowercase to conform to the characters code value
    let lastName1 = account1.name.last.toLowerCase();
    let lastName2 = account2.name.last.toLowerCase();

    // Return -1 if the value of the character code is lower than the other character code
    return lastName1 < lastName2 ? -1 : 1;
  });

  // Return sorted names
  return sortByLastNames;
}

function getTotalNumberOfBorrows(account, books) {
  let borrowed = [];

  // Loop through each book
  books.forEach((bookId) => {
    // Filter items with account.id and push to borrowed array
    bookId.borrows.filter((user) =>
      user.id === account.id ? borrowed.push(user.id) : null
    );
  });

  // Return length of borrowed array
  return borrowed.length;
}

function getBooksPossessedByAccount(account, books, authors) {
  let accountHasBooks = [];

  // Loop through books
  books.forEach((book) => {
    // Set first book to a variable
    let borrows = book.borrows[0];

    // Check if book is returned and borrows id matches account id
    if (!borrows.returned && borrows.id === account.id) {
      // Destructure book object
      let { id, title, genre, authorId, author, borrows } = book;

      // Set author to author id matching books author id
      author = authors.find((auth) => auth.id === book.authorId);

      // Push new book object data to accountHasBooks array
      accountHasBooks.push({ id, title, genre, authorId, author, borrows });
    }
  });

  // Return accountHasBooks
  return accountHasBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
