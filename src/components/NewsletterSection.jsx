import React from "react";

const NewsletterSection = () => {
  return (
    <section className="bg-yellow-50 py-16 px-4 text-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-yellow-600 mb-4">Stay Updated!</h2>
        <p className="text-gray-600 mb-8">
          Subscribe to our newsletter and never miss exclusive travel deals, tips, and updates.
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <button
            type="submit"
            className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            Subscribe
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-4">We respect your privacy. Unsubscribe anytime.</p>
      </div>
    </section>
  );
};

export default NewsletterSection;
