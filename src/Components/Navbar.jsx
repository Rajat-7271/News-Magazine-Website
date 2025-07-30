const Navbar = ({ setCategory, category }) => {
    const categories = ["technology", "business", "health", "sports", "entertainment"];
    return (
        <nav id="customNavbar" className="navbar navbar-expand-lg" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <span className="brand-badge">NewsMag</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {categories.map((cat) => (
                            <li className="nav-item" key={cat}>
                                <div
                                    className={`nav-link ${category === cat ? "active" : ""}`}
                                    onClick={() => setCategory(cat)}
                                    style={{ cursor: "pointer" }}
                                >
                                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
