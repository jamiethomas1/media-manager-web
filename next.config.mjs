/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        backendUrl: 'http://mm-api:80',
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
