import axios from "axios";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2/everything";

export const fetchNews = async (query: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: query,
        apiKey: API_KEY,
        pageSize: 20,
      },
    });

    // Define the Article type explicitly
    return response.data.articles
      .map((article: any) => ({
        title: article.title,
        url: article.url,
        imageUrl: article.urlToImage || null,
        author: article.author || "Unknown Author",
        publishedAt: article.publishedAt || "Unknown Date",
      }))
      .sort(
        (a: { publishedAt: string }, b: { publishedAt: string }) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
