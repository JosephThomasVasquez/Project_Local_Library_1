const common = require("mocha/lib/interfaces/common");
// Completed
function getTotalBooksCount(books) {
  // Return total leng of book array
  return books.length;
}

function getTotalAccountsCount(accounts) {
  // Return total length of accounts array
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let borrowing = [];
// Loop through books array and check first index of borrows array is not returned then push borrows to borrowing array 
  books.forEach(({ borrows }) =>
    !borrows[0].returned ? borrowing.push(borrows) : null
  );
  // Return total books currently borrowed
  return borrowing.length;
}

function getMostCommonGenres(books) {
  // Accumulate genre's and transform each result into a new object with anme and count keys
  let getGenres = books.reduce((acc, book) => {
    const { genre } = book;

    // if genre doesn't exist then set object name of genre and count to 0, else set genre.count += 1
    !acc[genre] ? (acc[genre] = { name: genre, count: 1 }) : acc[genre].count++;
    return acc;
  }, {});

  // Get values of new genres array of objects
  let genresArray = Object.values(getGenres);

  // Sort genres
  genresArray.sort((genre1, genre2) => (genre1.count > genre2.count ? -1 : 1));

  // Return index from 0 to 5 of genres
  return genresArray.splice(0, 5);
}

function getMostPopularBooks(books) {
  
  // Transform books to object with name of title and count of how many borrows
  let bookCounts = books.map((book) => {
    const { title, borrows } = book;

    return { name: title, count: borrows.length };
  });

  // Sort new array of objects
  bookCounts.sort((title1, title2) => (title1.count > title2.count ? -1 : 1));

  // Return index from 0 to 5 of popular books
  return bookCounts.splice(0, 5);
}

function getMostPopularAuthors(books, authors) {

  // Accumulate authors and transform author with name of author's first and last name, and count of borrows
  let authorsReduce = authors.reduce((acc, author) => {
    const { id, name } = author;
    const { first, last } = name;

    let authorDetails = { name: `${first} ${last}`, count: 0 };

    // Filter books author id to match author id and set count to the books borrows length
    books.filter((book) =>
      book.authorId === id ? (authorDetails.count += book.borrows.length) : null
    );
    // Push the author object to the accumulator array
    acc.push(authorDetails);

    return acc;
  }, []);

  // Sory popular authors from highest count to lowest
  authorsReduce.sort((author1, author2) =>
    author1.count > author2.count ? -1 : 1
  );

  // Return index from 0 to 5 of popular authors
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
