const express = require('express');
const router = express.Router();
const Item = require('../Models/Listdb');


router.post("/", async (req, res) => {
    try {
        const newItem = new Item(req.body);
        await newItem.save();
        res.status(201).json({ message: "Item created successfully!" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const items = await Item.find();
        
        res.status(200).json(items); // Use 200 for successful retrieval

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
module.exports = router;