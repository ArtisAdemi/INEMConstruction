import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 text-center">
            <p>We use cookies to improve your experience on our site. By using our site, you consent to cookies.</p>
            <button onClick={handleAccept} className="bg-yellow-500 text-white px-4 py-2 font-bold mt-2">
                Accept
            </button>
        </div>
    );
};

export default CookieConsent;