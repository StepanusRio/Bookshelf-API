# Bookshelf-API
RESTful API Bookshelf [Dicoding Submision Back-End JavaScript With Google Cloud]

---
## Todo :
  - The aplication using port 9000
  - The aplication run with npm run start
  - The API can save the books and 

    **Retrun error if** :
    ```
    Client do not fill book name 
    Client fill the readPage biger than pageCount
    ```
  - The API can show all books

    **Notes** :
    ```
    if Books is empty, will return empty array
    ```
  - API can show details book Selected

    **Return Error if** :
    ```
    Books with ID based on can not be Find
    ```
  - API can Update/Edit Books based on Id from router
    
    **Retrun error if** :
    ```
    Client do not fill book name 
    Client fill the readPage biger than pageCount
    Books with ID based on router can not be Find
    ```
  - API can Delete the book based on Id from router

    **Retrun error if**
    ```
    Books with ID based on router can not be Find
    ```

## Suggestion
- Add Feature Query Params
  - ?name [String]
  - ?reading (True/False) [Number]
  - ?finished (True/False) [Number]
- Using ESLint
## SpecAPI
<a href='https://github.com/dicodingacademy/a261-backend-pemula-labs/raw/099-shared-files/BookshelfAPITestCollectionAndEnvironment.zip'>Postman Testing File</a>

**Notes:**
```
id: using nanoid@3.x.x.
finished: calculate that pageCount === readPage.
insertedAt: Auto insert when created Books. (using new Date().toISOString())
updatedAt: Auto insert when updated Book. (using new Date().toISOString())
```

### createBooks
```
Method: 'POST',
Path: '/books',
Handler: createBooks

Body Request :
  {
      "name": string,
      "year": number,
      "author": string,
      "summary": string,
      "publisher": string,
      "pageCount": number,
      "readPage": number,
      "reading": boolean
  }
Data Sample : 
  {
      "id": "Qbax5Oy7L8WKf74l",
      "name": "Buku A",
      "year": 2010,
      "author": "John Doe",
      "summary": "Lorem ipsum dolor sit amet",
      "publisher": "Dicoding Indonesia",
      "pageCount": 100,
      "readPage": 25,
      "finished": false,
      "reading": false,
      "insertedAt": "2021-03-04T09:11:44.598Z",
      "updatedAt": "2021-03-04T09:11:44.598Z"
  }
Response Server: 
  is Filed:
  statuscode : 400(Bad Request)
  {
    "status": "fail",
    "message": "Gagal menambahkan buku. Mohon isi nama buku"
  },
  {
    "status": "fail",
    "message": "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount"
  }
  is Success : 
  statuscode: 201(Created)
  {
    "status": "success",
    "message": "Buku berhasil ditambahkan",
    "data": {
        "bookId": "1L7ZtDUFeGs7VlEt"
    }
  }
```

### getAllBooks
```
Method: 'GET',
Path: '/books',
Handler: getAllBooks

Response Server: 
  is Empty :
  statuscode: 200(Ok)
  {
    "status": "success",
    "data": {
        "books": []
    }
  }
  is Success : 
  statuscode: 200(Ok)
  {
    "status": "success",
    "data": {
      "books": [{
        "id": "Qbax5Oy7L8WKf74l",
        "name": "Buku A",
        "publisher": "Dicoding Indonesia"
        },
        {
          "id": "1L7ZtDUFeGs7VlEt",
          "name": "Buku B",
          "publisher": "Dicoding Indonesia"
        },
        {
          "id": "K8DZbfI-t3LrY7lD",
          "name": "Buku C",
          "publisher": "Dicoding Indonesia"
        }
      ]
    }
  }  
```
### findBookById
```
Method: 'GET',
Path: '/books/{bookId}',
Handler: findBookById

Response Server: 
  is Not Found :
  statuscode: 404(Not Found)
  {
    "status": "fail",
    "message": "Buku tidak ditemukan"
  }
  is Success Response Body: 
  statuscode: 200(Ok)
  {
    "status": "success",
    "data": {
      "book": {
        "id": "aWZBUW3JN_VBE-9I",
        "name": "Buku A Revisi",
        "year": 2011,
        "author": "Jane Doe",
        "summary": "Lorem Dolor sit Amet",
        "publisher": "Dicoding",
        "pageCount": 200,
        "readPage": 26,
        "finished": false,
        "reading": false,
        "insertedAt": "2021-03-05T06:14:28.930Z",
        "updatedAt": "2021-03-05T06:14:30.718Z"
      }
    }
  }
```

### updateBookById
```
Method: 'PUT',
Path: '/books/{bookId}',
Handler: updateBookById

Response Server: 
  Request Body:
  {
    "name": string,
    "year": number,
    "author": string,
    "summary": string,
    "publisher": string,
    "pageCount": number,
    "readPage": number,
    "reading": boolean
  }
  is Not Filled Name:
  statuscode: 400(Client Error)
  {
    "status": "fail",
    "message": "Gagal memperbarui buku. Mohon isi nama buku"
  }
  is Not Able Criteria:
  statuscode: 400(Client Error)
  {
    "status": "fail",
    "message": "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount"
  }
  is Id Not Found
  statuscode: 404(Not Found)
  {
    "status": "fail",
    "message": "Gagal memperbarui buku. Id tidak ditemukan"
  }
  is Success
  statuscode: 200(Ok)
  {
    "status": "success",
    "message": "Buku berhasil diperbarui"
  }
```

### deleteBookById
```
Method: 'DELETE',
Path: '/books/{bookId}',
Handler: deleteBookById

Response Server: 
  is Id Not Found
  statuscode : 404 (Not Found)
  {
    "status": "fail",
    "message": "Buku gagal dihapus. Id tidak ditemukan"
  }
  is success
  {
    "status": "success",
    "message": "Buku berhasil dihapus"
  }
```