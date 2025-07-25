"use client";

import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const ReviewsSection = () => {
    const [reviews, setReviews] = useState([
        {
            id: 1,
            date: "May 15, 2023",
            comment: "This article was extremely helpful for my golden retriever's summer care!"
        },
        {
            id: 2,
            date: "April 28, 2023",
            comment: "Great tips, especially about not shaving double-coated breeds."
        },
        {
            id: 3,
            date: "June 2, 2023",
            comment: "I've been following these grooming tips and my dog looks and feels much better!"
        }
    ]);

    const [newReview, setNewReview] = useState({
        comment: ""
    });

    const handleInputChange = (e) => {
        setNewReview({ comment: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newReview.comment.trim()) return;

        const review = {
            id: reviews.length + 1,
            date: new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            }),
            comment: newReview.comment.trim()
        };

        setReviews([...reviews, review]);
        setNewReview({ comment: "" });
    };

    return (
        <section className="border-t border-[#7BAE4B] py-12 bg-[#f9f9f9] px-5">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-bold text-[#1E2A38] mb-8">Reader Reviews</h2>
                
                {/* Add Review Form */}
                <div className="bg-white p-6 rounded-lg shadow-sm mb-12">
                    <h3 className="text-xl font-semibold text-[#1E2A38] mb-4">Add Your Review</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <textarea
                                placeholder="Share your thoughts..."
                                name="comment"
                                rows="4"
                                value={newReview.comment}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#7BAE4B] focus:border-[#7BAE4B]"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-[#7BAE4B] hover:bg-[#679640] text-white font-medium rounded-md transition-colors"
                        >
                            Submit Review
                        </button>
                    </form>
                </div>

                {/* Reviews List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {reviews.map(review => (
                        <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="text-4xl text-gray-300">
                                    <FaUserCircle />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <span className="text-sm text-gray-500">{review.date}</span>
                                    </div>
                                    <p className="text-gray-700 mt-2">{review.comment}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;