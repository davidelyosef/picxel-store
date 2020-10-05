const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

// Connect Database
connectDB();

// Serve index.html:
app.use(express.static(path.join(__dirname, "./build")));

app.use("/api/products", require("./routes/products"));

// Any other route - return index.html as we are SPA:
app.use("*", (request, response) => {
  response.sendFile(path.join(__dirname, "./build/index.html"));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
