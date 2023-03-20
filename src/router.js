const { getAllBooksHandler } = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
];

module.exports = routes;
