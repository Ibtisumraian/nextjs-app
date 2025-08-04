import React from "react";

const reviews = [
  {
    id: 1,
    name: "Ayesha Rahman",
    location: "Dhaka, Bangladesh",
    rating: 5,
    comment: "This platform made my travel so much easier! Highly recommended.",
    isTop: true,
  },
  {
    id: 2,
    name: "John Smith",
    location: "New York, USA",
    rating: 4,
    comment: "Great experience. Booking was smooth and support was helpful.",
  },
  {
    id: 3,
    name: "Sara Ahmed",
    location: "London, UK",
    rating: 4,
    comment: "Loved the UI. Very intuitive and mobile-friendly!",
  },
  {
    id: 4,
    name: "Tanvir Islam",
    location: "Chittagong, BD",
    rating: 5,
    comment: "Found amazing travel deals here. Will use again.",
  },
];

const StarRating = ({ count }) => (
  <div className="flex justify-center mb-2">
    {Array.from({ length: 5 }).map((_, idx) => (
      <span key={idx} className={`text-yellow-400 ${idx < count ? '' : 'opacity-30'}`}>
        ★
      </span>
    ))}
  </div>
);

const TopReviewSection = () => {
  const topReview = reviews.find((review) => review.isTop);
  const otherReviews = reviews.filter((review) => !review.isTop);

  return (
    <section className="bg-white py-16 px-4 text-gray-800">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-3xl font-bold text-yellow-500 mb-2">What Our Users Say</h2>
        <p className="text-gray-500 mb-10">Top reviews from our happy travelers</p>

        {/* Top Review */}
        {topReview && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-12 shadow-md max-w-3xl mx-auto">
            <StarRating count={topReview.rating} />
            <p className="text-lg italic mb-4">"{topReview.comment}"</p>
            <p className="font-semibold">{topReview.name}</p>
            <p className="text-sm text-gray-500">{topReview.location}</p>
          </div>
        )}

        {/* Other Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherReviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow hover:shadow-md transition-shadow"
            >
              <StarRating count={review.rating} />
              <p className="mb-3 text-sm">"{review.comment}"</p>
              <p className="font-medium text-gray-800">{review.name}</p>
              <p className="text-sm text-gray-500">{review.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopReviewSection;
