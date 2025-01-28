import React from "react";

interface NewsItem {
  title: string;
  url: string;
  imageUrl: string | null;
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
          className="border rounded-lg p-4 shadow-md hover:shadow-lg"
        >
          {article.imageUrl && (
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-40 object-cover rounded mb-4"
            />
          )}
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-blue-600 hover:underline"
          >
            {article.title}
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
