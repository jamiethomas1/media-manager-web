/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        backendUrl: 'http://localhost:8000',
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '**',
            },
        ],
    },
};

export default nextConfig;
