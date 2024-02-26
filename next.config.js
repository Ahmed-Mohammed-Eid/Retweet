/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.placeholder.com',
            },
            {
                protocol: 'https',
                hostname: 'api.retweet.com',
            },
        ],
    },
    env: {
        BASE_URL: 'https://api.retweet.com/api/v1'
    }
}

module.exports = nextConfig