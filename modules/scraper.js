const axios = require('axios');
const cheerio = require('cheerio');

const newsURL = 'https://www.nbcnews.com/health';

const scrapeArticles = async () => {
  try {
    const response = await axios.get(newsURL);
    const html = response.data;
    const $ = cheerio.load(html);
    const articles = [];

    $('div.wide-tease-item__wrapper').each((index, element) => {
      const titleElement = $(element).find('h2.wide-tease-item__headline');
      const title = titleElement.text().trim();

      const descriptionElement = $(element).find('.wide-tease-item__description');
      const description = descriptionElement.text().trim();

      const imageElement = $(element).find('img');
      const imageUrl = imageElement.attr('src');

      articles.push({ title, description, imageUrl });
    });
    
    return articles;
  } catch (error) {
    throw new Error('Error occurred while scraping articles');
  }
};

module.exports = { scrapeArticles };
