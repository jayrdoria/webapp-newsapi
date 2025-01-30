import React from "react";

interface NewsItem {
  title: string;
  url: string;
  imageUrl: string | null;
  author: string;
  publishedAt: string;
}

interface NewsListProps {
  articles: NewsItem[];
}

const NewsList: React.FC<NewsListProps> = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <div
          key={index}
          className={`border rounded-lg p-4 shadow-md hover:shadow-lg ${
            index === 0 ? "border-2 border-blue-500 bg-gray-100" : ""
          }`}
        >
          {/* Highlight the first card as the latest news */}
          {index === 0 && (
            <p className="text-sm font-bold text-red-500">Latest News</p>
          )}

          {/* Display Image */}
          {article.imageUrl && (
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-40 object-cover rounded mb-4"
            />
          )}

          {/* Display Title */}
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-blue-600 hover:underline"
          >
            {article.title}
          </a>

          {/* Display Author and Date */}
          <p className="text-gray-500 mt-2 text-sm">
            <span>By: {article.author}</span>
            <br />
            <span>
              Published: {new Date(article.publishedAt).toLocaleDateString()}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
