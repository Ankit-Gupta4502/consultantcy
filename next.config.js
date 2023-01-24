/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

}

module.exports = {
  ...nextConfig,
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites(){
    return[
      {
        source:'/api/:path*',
        destination:"https://consultancy.iid.org.in/api/:path*"
      },
      {
        source:"/basepath/:path*",
        destination:"https://consultancy.iid.org.in/storage/:path*"
      }
    ]
  }
}
