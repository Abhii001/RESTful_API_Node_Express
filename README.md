Project Title: RESTful API with Node.js and Express - User Management System

Project Description:

This project is a RESTful API built using Node.js and Express.js that demonstrates the fundamental CRUD (Create, Read, Update, Delete) operations for managing user data. The API serves as a user management system that allows external applications to interact with user data by performing various operations like creating a new user, retrieving user information, updating existing user data, and deleting users.

Key Features:

Create: Add a new user to the system by sending a POST request with user details.
Read: Retrieve a list of all users or get a specific user's details using a GET request.
Update: Modify an existing user's information via a PUT or PATCH request.
Delete: Remove a user from the system using a DELETE request.

Endpoints:

GET /users: Retrieve a list of all users.
GET /users/:id: Retrieve a specific user by ID.
POST /user: Add a new user.
PUT /user/:id: Update a user's information by ID.
DELETE /user/:id: Delete a user by ID.

Technologies Used:

Node.js: JavaScript runtime environment for building the server.
Express.js: Web framework for creating RESTful routes and handling requests.
JSON: Format used for data interchange.

GET request to get all user data:
•	Route: GET /users
•	Description: This request fetches all user data from the server. It returns a list of all users stored in the database.

![image](https://github.com/user-attachments/assets/49412fbe-9adf-40d9-a381-eccb270290de)

 
GET request to get a user by ID:
•	Route: GET /users/:id
•	Description: This request fetches the data of a specific user using their ID, which is passed as a route parameter.

![image](https://github.com/user-attachments/assets/1b3775ca-b8de-468e-b8c7-997ae5df5f9c)

 
POST request to add a new user:
•	Route: POST /user
•	Description: This request allows the client to send user data to the server to create a new user. The user information is sent in the request body.
 
![image](https://github.com/user-attachments/assets/276affda-ecf5-415f-a8e4-959d2edca0cc)


GET request before updating user:
•	Route: GET /users/:id
•	Description: Before updating a user, this GET request retrieves the user's current data using their ID to ensure the correct user is being modified.

 ![image](https://github.com/user-attachments/assets/aeb7a7ce-a0c6-4108-9960-143c96b69ace)



PUT request to update user hobby:
•	Route: PUT /user/:id
•	Description: This request updates the user's hobby. The user ID is passed in the URL, and the new hobby data is sent in the request body.

 ![image](https://github.com/user-attachments/assets/c6933977-40f3-4106-9423-1da392aedb9d)



A DELETE request to remove a user:
•	Route: DELETE /user/:id
•	Description: This request deletes the user with the specified ID from the database.

![image](https://github.com/user-attachments/assets/aeb095f3-368e-49be-b3cc-6f1157aa2eb0)



GET request after deleting a user:
•	Route: GET /users/:id
•	Description: After deleting a user, this GET request checks whether the user still exists in the database. If the user has been deleted, it returns a message indicating the user is not found.

![image](https://github.com/user-attachments/assets/8e8e3db5-1e30-41c0-8902-97a94bbc90f1)

 
This flow represents a full cycle of CRUD (Create, Read, Update, Delete) operations for managing user data in an Express.js application.
