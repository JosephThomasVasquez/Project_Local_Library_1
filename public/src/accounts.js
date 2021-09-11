function findAccountById(accounts, id) {
  // Use find method to compare account.id from accounts array to id parameter
  let findAccount = accounts.find((account) => account.id === id);
  return findAccount;
}

function sortAccountsByLastName(accounts) {
  let sortByLastNames = accounts.sort((account1, account2) => {
    // Set variables so each account last name is lowercase to conform to the characters code value
    let lastName1 = account1.name.last.toLowerCase();
    let lastName2 = account2.name.last.toLowerCase();

    // Return -1 if the value of the character code is lower than the other character code
    return lastName1 < lastName2 ? -1 : 1;
  });
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

  books.forEach((book) => {
    let borrows = book.borrows[0];

    if (!borrows.returned && borrows.id === account.id) {
      let { id, title, genre, authorId, author, borrows } = book;

      author = authors.find((auth) => auth.id === book.authorId);

      accountHasBooks.push({ id, title, genre, authorId, author, borrows });
    }
  });

  return accountHasBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
