import Link from 'next/link';
import React from 'react';

const notfound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl font-bold text-red-600">404</h1>
            <p className="mt-4 text-lg">Oops! Page not found.</p>
            <Link href="/" className="mt-6 px-4 py-2 bg-green-700 text-white rounded-lg">
                Back to Home
            </Link>
        </div>
    );
};

export default notfound;