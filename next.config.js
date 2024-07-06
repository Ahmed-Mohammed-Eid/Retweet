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
            {
                protocol: 'http',
                hostname: 'localhost',
            },
            {
                protocol: 'https',
                hostname: 'cdn.builder.io',
            },
            {
                protocol: 'https',
                hostname: 'twemoji.maxcdn.com',
            },
        ],
    },
    env: {
        BASE_URL: 'https://api.retweet.com/api/v1'
    }
}

module.exports = nextConfig