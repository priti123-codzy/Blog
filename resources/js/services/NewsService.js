const NewsService = {
    getRecent: async () => {
        const response = await fetch('https://api.example.com/news'); // Replace with your actual news API endpoint
        if (!response.ok) {
            throw new Error('Failed to fetch news articles');
        }
        return response.json();
    }
};

export default NewsService;
