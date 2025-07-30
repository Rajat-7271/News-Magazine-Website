// If using Node 18+, no need to import fetch. If not, uncomment the below line:
// import fetch from 'node-fetch';

export async function handler(event, context) {
  const category = event.queryStringParameters.category || 'general'; // Default category

  // Try both Netlify Environment Variable and .env (Vite) variable
  const apiKey = process.env.NEWS_API_KEY || process.env.VITE_API_KEY;

  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "API Key not set in environment variables" }),
    };
  }

  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Error fetching news:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to fetch news" }),
    };
  }
}
