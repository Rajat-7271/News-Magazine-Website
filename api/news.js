export default async function handler(req, res) {
    const { category = 'general' } = req.query;

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEWS_API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching news:", error);
        res.status(500).json({ message: "Failed to fetch news" });
    }
}
