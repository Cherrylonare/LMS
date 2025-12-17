
import React from "react";
import { Search, ArrowRight } from "lucide-react";

export default function HeroWithCourses() {
    return (
        <>
            {/* Hero Section - Only this part remains */}
            <section className="relative bg-gray-600 text-white py-14 mt-6">
                <div className="max-w-7xl mx-auto px-6 text-center space-y-4">

                    {/* Main Heading */}
                    <h1 className="text-4xl font-bold tracking-tight">
                        Find the Best Courses for You
                    </h1>

                    {/* Subheading */}
                    <p className="text-md text-blue-100 max-w-3xl mx-auto">
                        Discover, Learn, and Upskill with our wide range of courses
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto justify-center">
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    placeholder="Search Courses"
                                    className="w-full px-6 py-2 pl-12 mt-5 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-1 bg-white focus:ring-gray-900 shadow-lg"
                                />
                                <Search className="absolute left-4 top-1/2 mt-2 -translate-y-1/2 w-6 h-6 text-gray-500" />
                            </div>
                            <button className="px-10 py-2 mt-5 bg-white text-gray-600 font-bold rounded-full hover:bg-gray-100 transition shadow-lg">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Explore Button */}
                    <div className="pt-8">
                        <a
                            href="/courses"
                            className="inline-flex items-center gap-3 px-10 py-3 bg-white/20 backdrop-blur-md border-2 border-white/30 rounded-full font-semibold hover:bg-white/30 transition-all duration-300"
                        >
                            Explore Courses
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>

            {/* "Our Courses" section aur cards completely removed */}
        </>
    );
}