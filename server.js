import fs from 'fs';
import express from 'express';

const app = express();

app.use(express.json());

// Load the user data from JSON file
let users = JSON.parse(fs.readFileSync('./userData.json', 'utf-8'));

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);

  res.on('finish', () => {
    console.log(`Response status: ${res.statusCode}`);
  });

  next();
});

app.listen(2100, () => {
  console.log("Server is running on port 2100");
});

// Get all users
app.get("/users", (req, res) => {
  res.send(users);
});

// Get a specific user by id
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const user = users.find(user => user.id == userId);

  if (user) {
    res.send(user);
  } else {
    res.status(404).json({ message: "User with this ID does not exist" });
  }
});

// Add a new user
app.post("/user", (req, res) => {
  const { firstName, lastName, hobby } = req.body;

  const newUser = {
    id: Math.floor(Math.random() * 1000),
    firstName: firstName,
    lastName: lastName,
    hobby: hobby
  };

  users.push(newUser);

  fs.writeFileSync('./userData.json', JSON.stringify(users, null, 2));

  res.status(201).json(newUser);
});

// Update an existing user by id
app.put("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User with this ID does not exist" });
  }

  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({ message: "Request body cannot be empty" });
  }

  const allowedUpdates = ["firstName", "lastName", "hobby"];
  const keys = Object.keys(req.body);

  keys.forEach((key) => {
    if (allowedUpdates.includes(key)) {
      user[key] = req.body[key];
    }
  });

  fs.writeFileSync('./userData.json', JSON.stringify(users, null, 2));

  res.json({ message: "User updated successfully", user });
});

// Delete a user by id
app.delete("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: "User with this ID not found" });
  }

  users.splice(userIndex, 1);

  fs.writeFileSync('./userData.json', JSON.stringify(users, null, 2));

  res.status(200).json({ message: "User deleted successfully", users });
});
