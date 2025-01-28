import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import NewsList from "../components/NewsList";
import { fetchNews } from "../services/newsApi";

// Define the Article interface
interface Article {
  title: string;
  url: string;
  imageUrl: string | null;
}

const Home: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setLoading(true);
    const results = await fetchNews(query);
    setArticles(results);
    setLoading(false);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">News Search</h1>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <NewsList articles={articles} />
      )}
    </div>
  );
};

export default Home;
