import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

const ProjectCard = () => {
    return (
        <div className="w-96 h-96 relative rounded-xl overflow-hidden group transition-all duration-500">
            {/* Main Image - Always visible */}
            <img
                src="/api/placeholder/800/800"
                alt="Project preview"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay with details - Revealed on hover */}
            <div className="absolute inset-0 bg-black/80 flex flex-col justify-between p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Project Type Badge + Title */}
                <div>
          <span className="px-3 py-1.5 text-sm font-bold bg-red-700 text-white rounded-md inline-block mb-4">
            WEB PROJECT
          </span>

                    <h3 className="text-3xl font-extrabold text-white tracking-tight mb-2">
                        PORTFOLIO
                        <span className="text-red-500"> WEBSITE</span>
                    </h3>

                    <p className="text-neutral-300 text-lg mb-6 leading-relaxed">
                        A bold, interactive portfolio showcasing creative work with cutting-edge animations.
                    </p>
                </div>

                {/* Bottom section with tags and buttons */}
                <div>
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {['React', 'Tailwind', 'Motion', 'Next.js'].map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 bg-neutral-900 text-white text-sm font-medium rounded-md border border-neutral-700"
                            >
                {tech}
              </span>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                        <button className="flex-1 bg-red-700 hover:bg-red-600 text-white text-lg font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
                            <span>View Project</span>
                            <ArrowUpRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:translate-y-[-4px]" />
                        </button>
                        <button className="flex items-center justify-center bg-neutral-800 hover:bg-neutral-700 text-white text-lg font-bold py-3 px-4 rounded-lg transition-colors border border-neutral-700 hover:border-neutral-600 w-16">
                            <Github className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Project title that shows at the bottom of the image by default */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-2xl font-bold text-white">
                    Portfolio Website
                </h3>
            </div>
        </div>
    );
};

export default ProjectCard;