const SkeletonNewsItem = () => {
    return (
        <div className="card bg-dark text-white news-card shadow-sm h-100 skeleton-card">
            <div className="skeleton-image skeleton-animate"></div>
            <div className="card-body d-flex flex-column">
                <div className="skeleton-text skeleton-animate" style={{ width: '80%', height: '1.2rem', marginBottom: '0.5rem' }}></div>
                <div className="skeleton-text skeleton-animate" style={{ width: '90%', height: '0.8rem', marginBottom: '0.3rem' }}></div>
                <div className="skeleton-text skeleton-animate" style={{ width: '70%', height: '0.8rem', marginBottom: '0.3rem' }}></div>
                <div className="skeleton-text skeleton-animate mt-auto" style={{ width: '50%', height: '0.75rem', marginTop: 'auto', marginBottom: '1.5rem' }}></div>
                <div className="skeleton-button skeleton-animate"></div>
            </div>
        </div>
    );
};

export default SkeletonNewsItem;