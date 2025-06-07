const contact = require('../models/contact-model')
const contactForm = async (req, res) => {
    try {
        const { username, email, message } = req.body;

        // Validate input
        if (!username || !email || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Create a new contact entry
        const newContact = await contact.create({
            username,
            email,
            message
        });

        res.status(201).json({
            message: "Contact form submitted successfully",
            contact: newContact
        });
    } catch (error) {
        console.error("Error in contactForm controller:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
    contactForm
};