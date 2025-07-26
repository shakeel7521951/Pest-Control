"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaSearch, FaCalendarAlt, FaUser, FaRegThumbsUp } from "react-icons/fa";
import blogs from "../lib/blogs";

export default function Blogs() {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [likedBlogs, setLikedBlogs] = useState({}); // Track liked state per blog

    const categories = ["All", "Grooming", "Training", "Health"];

    // Filter blogs based on search and category
    const filteredBlogs = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase())
    );

    const displayedBlogs =
        selectedCategory === "All"
            ? filteredBlogs
            : filteredBlogs.filter((blog) => blog.category === selectedCategory);

    // Handle like button click
    const handleLike = (blogId) => {
        setLikedBlogs(prev => ({
            ...prev,
            [blogId]: !prev[blogId] // Toggle like state
        }));
    };

    // Calculate likes count (original + user likes)
    const getLikeCount = (blog) => {
        return likedBlogs[blog.id] ? blog.likes + 1 : blog.likes;
    };

    return (
        <main className="min-h-screen py-10 px-4 bg-white">
            {/* Hero Banner */}
            <section className="relative mb-10">
                <Image
                    src="/blog/blog (2).jpg"
                    alt="Blog Banner"
                    width={1920}
                    height={600}
                    className="w-full h-[250px] md:h-[400px] object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-[#27272586] flex items-center justify-center rounded-xl">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Pet Care <span className="text-[#7BAE4B]">Blog</span>
                        </h1>
                        <p className="text-lg text-white max-w-2xl mx-auto">
                            Expert advice, tips, and the latest information on pet care, health, and training.
                        </p>
                    </div>
                </div>
            </section>

            {/* Search and Layout */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Sidebar */}
                <aside className="space-y-6 col-span-1 w-full md:sticky top-6 h-fit">
                    {/* Search */}
                    <div>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search blog..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full border rounded-lg px-4 py-2 shadow focus:outline-none focus:border-[#7BAE4B] focus:ring-2 focus:ring-[#7BAE4B]"
                            />
                            <FaSearch className="absolute right-4 top-3 text-gray-400" />
                        </div>
                    </div>

                    {/* Categories */}
                    <div>
                        <h2 className="font-semibold text-lg mb-2 text-gray-800">
                            Categories
                        </h2>
                        <ul className="space-y-2">
                            {categories.map((category) => (
                                <li key={category}>
                                    <button
                                        onClick={() => setSelectedCategory(category)}
                                        className={`block w-full text-left px-4 py-2 rounded-lg ${selectedCategory === category
                                            ? "bg-[#7BAE4B] text-white"
                                            : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                                            }`}
                                    >
                                        {category}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Famous Blogs */}
                    <div>
                        <h2 className="font-semibold text-lg mb-2 text-gray-800">
                            Popular Blogs
                        </h2>
                        <ul className="space-y-4">
                            {blogs.slice(0, 3).map((blog) => (
                                <li key={blog.id} className="flex gap-3 items-center">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        width={80}
                                        height={80}
                                        className="rounded-lg object-cover"
                                    />
                                    <Link
                                        href={`/blogs/${blog.slug}`}
                                        className="text-sm font-medium transition-colors hover:text-[#7BAE4B] hover:underline"
                                    >
                                        {blog.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* Blog List */}
                <section className="md:col-span-3 md:mx-12">
                    {displayedBlogs.length > 0 ? (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            {displayedBlogs.map((blog) => (
                                <div
                                    key={blog.id}
                                    className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition group"
                                >
                                    <div className="overflow-hidden">
                                        <Image
                                            src={blog.image}
                                            alt={blog.title}
                                            width={800}
                                            height={400}
                                            className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-4 pt-2">
                                        <div className="flex items-center justify-between text-sm text-gray-500 gap-4 mb-2">
                                            <div className="flex gap-3">
                                                <span className="flex items-center">
                                                    <FaCalendarAlt className="mr-2 text-[#7BAE4B]" />
                                                    {blog.date}
                                                </span>
                                                <span className="flex items-center">
                                                    <FaUser className="mr-2 text-[#7BAE4B]" />
                                                    {blog.author}
                                                </span>
                                            </div>
                                            <div>
                                                <button
                                                    onClick={() => handleLike(blog.id)}
                                                    className="flex items-center font-semibold gap-0.5"
                                                >
                                                    <FaRegThumbsUp
                                                        className={`transition-colors duration-200 cursor-pointer text-lg ${likedBlogs[blog.id] ? "text-[#7BAE4B]" : "text-gray-400"}`}
                                                    />
                                                    {getLikeCount(blog)}
                                                </button>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                            {blog.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-3">
                                            {blog.content}
                                        </p>
                                        <Link
                                            href={`/blogs/${blog.slug}`}
                                            className="text-[#7BAE4B] hover:text-black transition-colors hover:underline text-sm font-medium"
                                        >
                                            Read More →
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-600">No blogs found.</p>
                    )}
                </section>
            </div>
        </main>
    );
}