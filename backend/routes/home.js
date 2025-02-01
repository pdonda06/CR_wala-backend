import express from 'express';
const router = express.Router();

// Get home page data (stats, hero content, etc.)
router.get('/', async (req, res) => {
  try {
    const homeData = {
      stats: {
        clientsPublished: 47,
        startupFounders: 24,
        awardsReceived: 32
      },
      heroContent: {
        title: "Boost your Brand Visibility & Reach New Heights With Our Expertise",
        description: "CR Wala is a PR Agency that focuses on bringing YOU & YOUR Story to a bigger audience, with a modern approach."
      }
    };
    
    res.json({
      success: true,
      data: homeData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

export { router };