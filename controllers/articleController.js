const { scrapeArticles } = require('../modules/scraper');

const getArticles = async (req, res) => {
  try {
    const articles = await scrapeArticles();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getArticles };
