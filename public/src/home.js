const common = require("mocha/lib/interfaces/common");

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let borrowing = [];
  books.forEach(({ borrows }) =>
    !borrows[0].returned ? borrowing.push(borrows) : null
  );

  return borrowing.length;
}

function getMostCommonGenres(books) {
  let getGenres = books.reduce((acc, book) => {
    const { genre } = book;

    !acc[genre] ? (acc[genre] = { name: genre, count: 1 }) : acc[genre].count++;
    return acc;
  }, {});

  let genresArray = Object.values(getGenres);

  genresArray.sort((genre1, genre2) => (genre1.count > genre2.count ? -1 : 1));

  return genresArray.splice(0, 5);
}

function getMostPopularBooks(books) {
  let bookCounts = books.map((book) => {
    const { title, borrows } = book;

    return { name: title, count: borrows.length };
  });

  bookCounts.sort((title1, title2) => (title1.count > title2.count ? -1 : 1));

  return bookCounts.splice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let authorsReduce = authors.reduce((acc, author) => {
    const { id, name } = author;
    const { first, last } = name;

    let authorDetails = { name: `${first} ${last}`, count: 0 };

    books.filter((book) =>
      book.authorId === id ? (authorDetails.count += book.borrows.length) : null
    );

    acc.push(authorDetails);

    return acc;
  }, []);

  authorsReduce.sort((author1, author2) =>
    author1.count > author2.count ? -1 : 1
  );

  return authorsReduce.splice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
