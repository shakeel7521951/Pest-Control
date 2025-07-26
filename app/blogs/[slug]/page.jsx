"use client";
import blogs from "@/app/lib/blogs";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaCalendarAlt, FaRegNewspaper, FaRegThumbsUp, FaUser, FaUserCircle, } from "react-icons/fa";
import { useState } from "react";

export default function BlogDetail({ params }) {

    const blog = blogs.find((item) => item.slug === params.slug);

    if (!blog) return notFound();

    const [likes, setLikes] = useState(Number(blog.likes));
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        if (!liked) {
            setLikes((prev) => prev + 1);
            setLiked(true);
        } else {
            setLikes((prev) => prev - 1);
            setLiked(false);
        }
    };

    const [reviewLikes, setReviewLikes] = useState(
        blog.reviews.map((review) => ({ count: review.likes || 0, liked: false }))
    );

    const handleReviewLike = (index) => {
        setReviewLikes((prev) =>
            prev.map((item, i) => {
                if (i === index) {
                    const liked = !item.liked;
                    const count = liked ? item.count + 1 : item.count - 1;
                    return { count, liked };
                }
                return item;
            })
        );
    };


    const [reviews, setReviews] = useState(blog.reviews)

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
            comment: newReview.comment.trim(),
            likes: 0 // Add default likes count
        };

        setReviews([...reviews, review]);
        // Add a new entry to reviewLikes for the new review
        setReviewLikes([...reviewLikes, { count: 0, liked: false }]);
        setNewReview({ comment: "" });
    };

    return (
        <main className="py-16 px-4 bg-[#f9f9f9] min-h-screen">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-6">
                    <Link
                        href="/blogs"
                        className="text-[#7BAE4B] hover:text-[#679640] flex items-center gap-2 text-sm font-medium"
                    >
                        <FaArrowLeft /> Back to Blog
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Left side BlogDetail Section  */}
                    <div className="md:col-span-2">
                        <div className="rounded-xl overflow-hidden mb-4 shadow-sm">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                width={1200}
                                height={600}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="mb-6 flex items-center justify-between text-sm text-gray-500 flex-wrap pe-2">
                            <div className="flex gap-4">
                                <span className="flex items-center">
                                    <FaCalendarAlt className="mr-2 text-[#7BAE4B]" />
                                    {blog.date}
                                </span>
                                <span className="flex items-center">
                                    <FaUser className="mr-2 text-[#7BAE4B]" />
                                    {blog.author}
                                </span>
                            </div>
                            <div className="flex gap-3">
                                <span className="flex items-center">
                                    <FaRegNewspaper size={15} className="mr-1 text-[#7BAE4B]" />
                                    Blog Post
                                </span>
                                <button
                                    onClick={handleLike}
                                    className="flex items-center gap-1 focus:outline-none cursor-pointer text-lg font-bold"
                                >
                                    <FaRegThumbsUp
                                        className={`transition-colors duration-200 text-lg ${liked ? "text-[#7BAE4B]" : "text-gray-500"
                                            }`}
                                    />
                                    {likes}
                                </button>
                            </div>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-[#1E2A38] mb-6">
                            {blog.title}
                        </h1>
                        <article className="prose prose-lg prose-gray max-w-none text-gray-700">
                            {blog.content.split("\n").map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </article>
                    </div>
                    {/* Right side SideBar  */}
                    <aside className="space-y-8 md:sticky top-14 self-start">
                        <div className="bg-white p-4 border rounded-md shadow-sm">
                            <h4 className="font-semibold mb-2 text-[#1E2A38]">
                                Welcome to Our Blog!
                            </h4>
                            <p className="text-sm text-gray-600">
                                Discover pet care tips, news, and helpful guides to keep your furry friends happy and healthy.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-2 text-[#1E2A38]">
                                Categories
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>🐶 Pet Care</li>
                                <li>🐾 Dog Food</li>
                                <li>🐱 Cat Health</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-2 text-[#1E2A38]">
                                Latest Blogs
                            </h4>
                            <div className="space-y-3 text-sm">
                                {blogs.slice(0, 3).map((item) => (
                                    <Link
                                        key={item.slug}
                                        href={`/blogs/${item.slug}`}
                                        className="block text-[#7BAE4B] hover:underline"
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white p-4 border rounded-md shadow-sm">
                            <h4 className="font-semibold mb-2 text-[#1E2A38]">
                                Subscribe to Newsletter
                            </h4>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full mb-2 px-3 py-2 border rounded"
                            />
                            <button className="w-full bg-[#7BAE4B] text-white py-2 rounded hover:bg-[#679640]">
                                Subscribe
                            </button>
                        </div>
                    </aside>
                </div>
                {/* Reviews Section  */}
                <div className="max-w-6xl mx-auto mt-16">
                    {/* //Add new Review Foarm// */}
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
                    {/* All Reviews  */}
                    <h2 className="text-2xl font-bold text-[#1E2A38] mb-6">Reviews</h2>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-5">
                        {reviews.map((review, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className="text-4xl text-gray-300">
                                        <FaUserCircle />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <span className="text-sm text-gray-500">{review.date}</span>
                                            <button
                                                onClick={() => handleReviewLike(index)}
                                                className="flex items-center gap-1 text-sm font-semibold text-gray-600"
                                            >
                                                <FaRegThumbsUp
                                                    className={`transition-colors duration-200 cursor-pointer text-lg ${reviewLikes[index].liked
                                                        ? "text-[#7BAE4B]"
                                                        : "text-gray-400"
                                                        }`}
                                                />
                                                {reviewLikes[index].count}
                                            </button>
                                        </div>
                                        <p className="text-gray-700 mt-2">{review.comment}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
