export async function handler(event, context) {
  const category = event.queryStringParameters.category;
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEWS_API_KEY}`);
  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}
