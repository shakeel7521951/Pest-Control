import blogs from "@/app/lib/blogs";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaCalendarAlt, FaUser } from "react-icons/fa";
import ReviewsSection from "@/app/components/Reviews/Review";




export default function BlogDetail({ params }) {
    const blog = blogs.find((item) => item.slug === params.slug);

    if (!blog) return notFound();


    return (
        <main className="py-16 px-4 bg-[#f9f9f9] min-h-screen">
            <div className="container mx-auto max-w-4xl">
                {/* Back link */}
                <div className="mb-6">
                    <Link
                        href="/blogs"
                        className="text-[#7BAE4B] hover:text-[#679640] flex items-center gap-2 text-sm font-medium"
                    >
                        <FaArrowLeft /> Back to Blog
                    </Link>
                </div>

                {/* Image */}
                <div className="rounded-xl overflow-hidden mb-8 shadow-sm">
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        width={1200}
                        height={600}
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Info */}
                <div className="mb-4 flex items-center text-sm text-gray-500 gap-6">
                    <span className="flex items-center">
                        <FaCalendarAlt className="mr-2 text-[#7BAE4B]" />
                        {blog.date}
                    </span>
                    <span className="flex items-center">
                        <FaUser className="mr-2 text-[#7BAE4B]" />
                        {blog.author}
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-[#1E2A38] mb-6">
                    {blog.title}
                </h1>

                {/* Content */}
                <article className="prose prose-lg prose-gray max-w-none text-gray-700">
                    {blog.content.split("\n").map((para, i) => (
                        <p key={i}>{para}</p>
                    ))}
                </article>
            </div>


            <div className="max-w-5xl mx-auto mt-12">
                <ReviewsSection/>
            </div>
        </main>
    );
}
