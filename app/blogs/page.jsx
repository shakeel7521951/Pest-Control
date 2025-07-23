'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

// Mock data - replace with your actual data fetching
const allBlogPosts = [
    {
        id: 1,
        slug: "summer-grooming-tips",
        image: "/home/news.jpg",
        title: "5 Essential Summer Grooming Tips for Your Dog",
        excerpt: "Learn how to keep your dog cool and comfortable during the hot summer months with these professional grooming tips.",
        date: "June 15, 2023",
        author: "Dr. Sarah Johnson",
        category: "Grooming",
    },
    {
        id: 2,
        slug: "pet-nutrition-guide",
        image: "/home/news (3).jpg",
        title: "The Ultimate Guide to Pet Nutrition in 2023",
        excerpt: "Discover the latest research on pet nutrition and how to choose the best diet for your furry friend's specific needs.",
        date: "May 28, 2023",
        author: "Dr. Michael Chen",
        category: "Health",
    },
    {
        id: 3,
        slug: "training-anxious-pets",
        image: "/home/news (1).jpg",
        title: "New Techniques for Training Anxious Pets",
        excerpt: "Innovative methods to help your anxious pet feel more comfortable and behave better in stressful situations.",
        date: "April 10, 2023",
        author: "Amanda Rodriguez",
        category: "Training",
    },
    {
        id: 4,
        slug: "pet-first-aid",
        image: "/home/news (2).jpg",
        title: "Essential First Aid for Pets",
        excerpt: "Learn life-saving first aid techniques every pet owner should know in emergency situations.",
        date: "March 22, 2023",
        author: "Dr. James Wilson",
        category: "Health",
    },
    {
        id: 5,
        slug: "senior-pet-care",
        image: "/home/news.jpg",
        title: "Caring for Senior Pets: A Complete Guide",
        excerpt: "Special considerations and care tips for your aging furry companions.",
        date: "February 15, 2023",
        author: "Dr. Emily Parker",
        category: "Care",
    },
    {
        id: 6,
        slug: "pet-allergies",
        image: "/home/news (2).jpg",
        title: "Identifying and Managing Pet Allergies",
        excerpt: "How to recognize allergy symptoms in pets and effective treatment options.",
        date: "January 8, 2023",
        author: "Dr. Robert Kim",
        category: "Health",
    },
];

export default function BlogPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");

    // Get unique categories
    const categories = [...new Set(allBlogPosts.map(post => post.category))];

    // Filter posts based on search and category
    const filteredPosts = allBlogPosts.filter((post) => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = activeCategory === "all" || post.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <main className="py-16 px-4 bg-[#f9f9f9] min-h-screen">
            <div className="container mx-auto max-w-7xl">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#1E2A38] mb-4">
                        Pet Care <span className="text-[#7BAE4B]">Blog</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Expert advice, tips, and the latest information on pet care, health, and training.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Sidebar */}
                    <div className="lg:w-1/4 lg:sticky top-0 lg:h-[calc(100vh-80px)] py-4 overflow-y-auto">
                        {/* Search */}
                        <div className="relative mb-8">
                            <input
                                type="text"
                                placeholder="Search blog posts..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:border-[#7BAE4B] focus:ring-2 focus:ring-[#7BAE4B] outline-none transition-all"
                            />
                            <FiSearch className="absolute left-3 top-3.5 text-gray-400" />
                        </div>

                        {/* Categories */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-[#1E2A38] mb-3">Categories</h3>
                            <div className="flex flex-wrap gap-2">
                                <button
                                    onClick={() => setActiveCategory("all")}
                                    className={`px-4 py-2 rounded-full text-sm font-medium ${activeCategory === "all"
                                        ? "bg-[#7BAE4B] text-white"
                                        : "bg-gray-100 text-[#1E2A38] hover:bg-gray-200"
                                        }`}
                                >
                                    All
                                </button>
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setActiveCategory(category)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium ${activeCategory === category
                                            ? "bg-[#7BAE4B] text-white"
                                            : "bg-gray-100 text-[#1E2A38] hover:bg-gray-200"
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Popular Posts */}
                        <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                            <h3 className="text-lg font-semibold text-[#1E2A38] mb-4">Popular Posts</h3>
                            <div className="space-y-4">
                                {allBlogPosts.slice(0, 3).map((post) => (
                                    <div key={post.id} className="flex gap-3">
                                        <div className="w-16 h-16 rounded overflow-hidden">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                width={64}
                                                height={64}
                                                className="object-cover h-full"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium text-[#1E2A38] hover:text-[#7BAE4B] transition-colors">
                                                <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                                            </h4>
                                            <p className="text-xs text-gray-500">{post.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:w-3/4">
                        {/* Results Count */}
                        <div className="mb-6 text-gray-600">
                            Showing {filteredPosts.length} {filteredPosts.length === 1 ? "post" : "posts"}
                            {activeCategory !== "all" && ` in ${activeCategory}`}
                            {searchQuery && ` matching "${searchQuery}"`}
                        </div>

                        {/* Blog Posts Grid - Now showing all filtered posts at once */}
                        {filteredPosts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {filteredPosts.map((post) => (
                                    <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group h-full flex flex-col">
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute top-4 right-4 bg-[#7BAE4B] text-white px-3 py-1 rounded-full text-xs font-semibold">
                                                {post.category}
                                            </div>
                                        </div>

                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex items-center text-sm text-gray-500 mb-3">
                                                <span className="flex items-center mr-4">
                                                    <FaCalendarAlt className="mr-1 text-[#7BAE4B]" />
                                                    {post.date}
                                                </span>
                                                <span className="flex items-center">
                                                    <FaUser className="mr-1 text-[#7BAE4B]" />
                                                    {post.author}
                                                </span>
                                            </div>

                                            <h3 className="text-xl font-bold text-[#1E2A38] mb-3 group-hover:text-[#7BAE4B] transition-colors duration-200">
                                                {post.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>

                                            <Link
                                                href={`/blogs/${post.slug}`}
                                                className="text-[#7BAE4B] font-semibold flex items-center hover:text-[#679640] transition-colors duration-200 mt-auto"
                                            >
                                                Read More
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4 ml-1"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 5l7 7-7 7"
                                                    />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white p-8 rounded-xl text-center">
                                <h3 className="text-xl font-medium text-[#1E2A38] mb-2">No posts found</h3>
                                <p className="text-gray-600">
                                    Try adjusting your search or filter criteria
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}