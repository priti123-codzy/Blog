const BlogService = {
    getAll: async () => {
        const response = await fetch('/api/posts'); // Adjust endpoint as per your Laravel routes
        if (!response.ok) {
            throw new Error('Failed to fetch blog posts');
        }
        return response.json();
    }
};

export default BlogService;
