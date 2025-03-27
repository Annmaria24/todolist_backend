const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); 

// Connect to MongoDB
mongoose.connect("mongodb+srv://annmariajoseph2026:annmaria2004@cluster0.tfixr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log(" Connected to MongoDB"))
  .catch(err => console.error(" Database connection error:", err));

const itemRoutes = require("./Routes/Listroutes");
app.use("/itemInserting",itemRoutes);

// Start server
app.listen(PORT, () => {
    console.log(` Server running at http://localhost:${PORT}`);
});