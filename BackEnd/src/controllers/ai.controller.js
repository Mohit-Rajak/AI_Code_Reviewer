const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
  try {
    // Extract code from the request body
    const { code } = req.body;

    // Validate that code is provided
    if (!code) {
      return res.status(400).json({ message: "Code is required" });
    }

    // Call the AI service with the code
    const response = await aiService(code);

    // Send the response back to the client
    res.status(200).json({ response });
  } catch (error) {
    // Handle errors
    console.error("Error in getReview:", error);
    res.status(500).json({ message: "An error occurred while processing your request" });
  }
};