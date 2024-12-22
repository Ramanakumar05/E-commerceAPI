1.User Management:
    Register a user.
    Log in to get a token.

2.Category Management (Admin only):
    Add a category.
    Edit a category.
    Delete a category.

3.Product Management (Admin only):
    Add a product (with an image).
    Get all products.
    Edit a product.
    Delete a product.

3.Order Management (Authenticated users):
    Create an order.


Here’s a polished version of the `README.md` file formatted with Markdown for your GitHub repository:

---

# **E-commerce API**

An API for managing users, categories, products, and orders in an e-commerce platform. Built using **Node.js**, **Express**, and **MongoDB**, this API supports authentication, CRUD operations, and secure routing.

---

## **Features**

- **User Management**: Register and log in users with JWT-based authentication.
- **Category Management**: Add, retrieve, and delete categories.
- **Product Management**: Create, update, retrieve, and delete products.
- **Order Management**: Place orders and view user-specific order details.

---

## **Technology Stack**

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Token (JWT)
- **Validation**: Mongoose

---

## **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ecommerce-api.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ecommerce-api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     MONGO_URI=mongodb://localhost:27017/ecommerce
     JWT_SECRET=your_jwt_secret
     PORT=5000
     ```
5. Start the server:
   ```bash
   npm start
   ```

---

## **API Documentation**

### **Base URL**

```
http://localhost:5000/api
```

### **Endpoints**

#### **1. User Endpoints**

| Method | Endpoint        | Description           |
|--------|-----------------|-----------------------|
| POST   | `/register`     | Register a new user   |
| POST   | `/login`        | Log in and get a token |

#### **2. Category Endpoints**

| Method | Endpoint                | Description                    |
|--------|-------------------------|--------------------------------|
| POST   | `/categories`           | Create a new category          |
| GET    | `/categories`           | Retrieve all categories        |
| DELETE | `/categories/:categoryId` | Delete a category by ID      |

#### **3. Product Endpoints**

| Method | Endpoint                | Description                    |
|--------|-------------------------|--------------------------------|
| POST   | `/products`             | Create a new product           |
| GET    | `/products`             | Retrieve all products          |
| DELETE | `/products/:productId`  | Delete a product by ID         |

#### **4. Order Endpoints**

| Method | Endpoint          | Description               |
|--------|-------------------|---------------------------|
| POST   | `/orders`         | Create an order           |
| GET    | `/orders/user`    | Retrieve user-specific orders |

---

## **Error Handling**

- **400 Bad Request**: Invalid input data or validation errors.
- **401 Unauthorized**: Attempt to access protected resources without authentication.
- **404 Not Found**: Resource not found (e.g., category or product does not exist).

---

## **Project Structure**

```
ecommerce-api/
│
├── models/              # MongoDB Models
│   ├── User.js
│   ├── Category.js
│   ├── Product.js
│   └── Order.js
│
├── routes/              # Express Routes
│   ├── userRoutes.js
│   ├── categoryRoutes.js
│   ├── productRoutes.js
│   └── orderRoutes.js
│
├── utils/               # Utility functions
│   └── authMiddleware.js
│
├── server.js            # Main server file
└── .env                 # Environment variables
```

---

## **How to Test the API**

### **Using Postman**
1. **Register a User**:
   - **Method**: POST
   - **URL**: `/api/register`
   - **Body**:
     ```json
     {
       "name": "John Doe",
       "email": "john@example.com",
       "password": "password123"
     }
     ```
2. **Login**:
   - **Method**: POST
   - **URL**: `/api/login`
   - **Body**:
     ```json
     {
       "email": "john@example.com",
       "password": "password123"
     }
     ```
   - Copy the returned JWT token for authenticated requests.
3. **Create a Category**:
   - **Method**: POST
   - **URL**: `/api/categories`
   - **Headers**:
     ```json
     {
       "Authorization": "Bearer <your_token_here>"
     }
     ```
   - **Body**:
     ```json
     {
       "name": "Electronics",
       "categoryId": "CAT001"
     }
     ```

---

## **Future Improvements**

1. Add role-based access control (e.g., admin and user roles).
2. Implement search and pagination for large datasets.
3. Integrate a payment gateway for processing orders.
4. Add validation middleware using libraries like `Joi` or `express-validator`.

---

Upload this `README.md` file along with your project to GitHub, and your repository will look professional and well-organized! Let me know if you need further assistance!
