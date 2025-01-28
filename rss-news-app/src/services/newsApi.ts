import axios from "axios";

const API_KEY = "b549a2e6cc684bae8e07a1f0fe309ebb";
const BASE_URL = "https://newsapi.org/v2/everything";

export const fetchNews = async (query: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: query,
        apiKey: API_KEY,
        pageSize: 20, // Limit results
      },
    });
    return response.data.articles.map((article: any) => ({
      title: article.title,
      url: article.url,
      imageUrl: article.urlToImage, // Include the image URL
    }));
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
