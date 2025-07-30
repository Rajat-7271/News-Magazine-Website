import defaultImage from '../assets/news.jpg';

const NewsItem = ({ title, description, src, url, index }) => {
    return (
        <div
            className="card bg-dark text-white news-card d-inline-block my-3 mx-3 fade-in"
            style={{ maxWidth: "345px", animationDelay: `${index * 0.1}s` }}
        >
            <img
                src={src ? src : defaultImage}
                className="card-img-top img-fluid"
                style={{ height: "200px", objectFit: "cover" }}
                alt="News"
            />
            <div className="card-body">
                <h5 className="card-title">
                    {title ? (title.length > 50 ? `${title.slice(0, 50)}...` : title) : "Untitled News"}
                </h5>
                <p className="card-text">
                    {description ? (description.length > 90 ? `${description.slice(0, 90)}...` : description) : "No description available."}
                </p>
                <a href={url} className="btn btn-primary" target="_blank" rel="noreferrer">Read More</a>
            </div>
        </div>
    );
};

export default NewsItem;
