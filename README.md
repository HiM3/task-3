# 📚 Bookstore API

A simple REST API for managing a bookstore built with Node.js and Express.

## 🚀 Features

- Create, read, update, and delete books
- In-memory storage
- RESTful API endpoints
- Input validation
- Error handling

## 🛠️ Technologies Used

- Node.js
- Express.js
- Crypto (for generating unique IDs)

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## ⚙️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bookstore-api
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The server will start at `http://localhost:3000`

## 📡 API Endpoints

### 1. Get All Books
```http
GET /api/books
```
Response:
```json
{
  "success": true,
  "books": [
    {
      "id": "uuid",
      "title": "Book Title",
      "author": "Author Name",
      "price": 19.99,
      "category": "Fiction"
    }
  ]
}
```

### 2. Add a New Book
```http
POST /api/books
```
Request Body:
```json
{
  "title": "Book Title",
  "author": "Author Name",
  "price": 19.99,
  "category": "Fiction"
}
```
Response:
```json
{
  "success": true,
  "message": "Book added successfully",
  "book": {
    "id": "uuid",
    "title": "Book Title",
    "author": "Author Name",
    "price": 19.99,
    "category": "Fiction"
  }
}
```

### 3. Get a Specific Book
```http
GET /api/books/:id
```
Response:
```json
{
  "success": true,
  "book": {
    "id": "uuid",
    "title": "Book Title",
    "author": "Author Name",
    "price": 19.99,
    "category": "Fiction"
  }
}
```

### 4. Update a Book
```http
PUT /api/books?id=:id
```
Request Body:
```json
{
  "title": "Updated Title",
  "author": "Updated Author",
  "price": 29.99,
  "category": "Updated Category"
}
```
Response:
```json
{
  "success": true,
  "message": "Book updated successfully",
  "book": {
    "id": "uuid",
    "title": "Updated Title",
    "author": "Updated Author",
    "price": 29.99,
    "category": "Updated Category"
  }
}
```

### 5. Delete a Book
```http
DELETE /api/books/:id
```
Response:
```json
{
  "success": true,
  "message": "Book deleted successfully"
}
```

## ⚠️ Error Responses

All endpoints return appropriate error messages with status codes:

```json
{
  "success": false,
  "message": "Error message here"
}
```

Common error status codes:
- 400: Bad Request (missing required fields)
- 404: Not Found (book not found)

## 🧪 Testing the API

You can test the API using tools like:
- Postman
- cURL
- Thunder Client (VS Code Extension)

Example cURL commands:

1. Get all books:
```bash
curl http://localhost:3000/api/books
```

2. Add a new book:
```bash
curl -X POST http://localhost:3000/api/books \
  -H "Content-Type: application/json" \
  -d '{"title":"The Great Gatsby","author":"F. Scott Fitzgerald","price":15.99,"category":"Fiction"}'
```

3. Get a specific book:
```bash
curl http://localhost:3000/api/books/:id
```

4. Update a book:
```bash
curl -X PUT http://localhost:3000/api/books?id=:id \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated Title","author":"Author Name","price":19.99,"category":"Fiction"}'
```

5. Delete a book:
```bash
curl -X DELETE http://localhost:3000/api/books/:id
```

## 📝 Notes

- This is an in-memory implementation, so data will be reset when the server restarts
- All book IDs are generated using crypto.randomUUID()
- Price should be a number
- All fields (title, author, price, category) are required when creating or updating a book 