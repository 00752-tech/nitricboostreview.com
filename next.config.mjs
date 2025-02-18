/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"getnitricboost.com"
            },
            {
                protocol:"https",
                hostname:"img.youtube.com"
            },
            {
                protocol:"https",
                hostname:"images.unsplash.com"
            }
        ]
    }
};

export default nextConfig;
