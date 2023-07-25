/** @type {import('next').NextConfig} */
const nextConfig = () => {
    return {
        env: {
            PUBLIC_DB_CONNECTION: 'mongodb+srv://maromdavid7:IwdCUmWBfZqwraXg@cluster0.d74ktnk.mongodb.net',
            PUBLIC_REACT_APP_API_KEY: 'AIzaSyAk7dzHWv3bCvkBl9ThMLKWZDMMg-AZHZo',
            PUBLIC_REACT_APP_AUTH_DOMAIN: 'next-crm-14d6d.firebaseapp.com',
            PUBLIC_REACT_APP_PROJECT_ID: 'next-crm-14d6d',
            PUBLIC_REACT_APP_STORAGE_BUCKET: 'next-crm-14d6d.appspot.com',
            PUBLIC_REACT_APP_MESSAGING_SENDER_ID: '440588696852',
            PUBLIC_REACT_APP_APP_ID: '1:440588696852:web:747f43b2ebaa69d1811601',
        }
    }
}

module.exports = nextConfig
