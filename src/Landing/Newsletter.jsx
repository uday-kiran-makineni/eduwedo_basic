import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail('');
    setPhone('');
    setTimeout(() => setIsSubscribed(false), 3000); // Auto close modal after 3 seconds
  };

  return (
    <section className="py-16 bg-gray-900 text-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-400 mb-8">
            Subscribe to our newsletter for the latest course updates and tech news.
          </p>
          <form className="flex flex-col md:flex-row gap-4" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Subscribe Now</span>
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
      
      {/* Pop-up Modal */}
      {isSubscribed && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center animate-fade-in">
            <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
            <h3 className="text-xl font-bold">Subscription Successful!</h3>
            <p className="text-gray-600">Thank you for subscribing to EduWedo.</p>
          </div>
        </div>
      )}
    </section>
  );
}
