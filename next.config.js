/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'out',
    output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                port: '',
                pathname: '/**',
            }
        ],
    }
}

module.exports = nextConfig
