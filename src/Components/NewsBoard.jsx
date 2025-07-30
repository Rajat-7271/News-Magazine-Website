import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";

const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            console.log("Fetching news for category:", category);  // <-- Correct place
            setLoading(true);
            try {
                let url = `/api/news?category=${category}`;
                const response = await fetch(url);
                const data = await response.json();
                setArticles(data.articles || []);
            } catch (error) {
                console.error("Failed to fetch news:", error);
                setArticles([]);
            } finally {
                setLoading(false);
            }
        };
        fetchData();  // <-- Call function with no params
    }, [category]);



    return (
        <div>
            <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>

            {loading ? (
                <Loader />
            ) : articles.length === 0 ? (
                <h5 className="text-center text-warning">No articles found for {category}.</h5>
            ) : (
                articles.map((news, index) => (
                    <NewsItem
                        key={index}
                        index={index}
                        title={news.title}
                        description={news.description}
                        src={news.urlToImage}
                        url={news.url}
                    />
                ))
            )}
        </div>
    );
};

export default NewsBoard;