const books = require('./books');
// const { nanoid } = require('nanoid');

const getAllBooksHandler = () => (
  {
    status: 'success',
    data: {
      books: { books },
    },
  }
);

module.exports = {
  getAllBooksHandler,
};
