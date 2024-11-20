import React from 'react';
import { Link } from 'react-router-dom';
import { Video, Wand2, Upload, Tag } from 'lucide-react';

export function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">
          Transform Your Videos into
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600"> Engaging GIFs</span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Create, customize, and share GIFs with AI-powered captions and tags. Perfect for content creators and social media enthusiasts.
        </p>
        <div className="flex justify-center gap-6">
          <Link
            to="/dashboard"
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Start Creating
          </Link>
          <Link
            to="/pricing"
            className="px-8 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition"
          >
            View Pricing
          </Link>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard
          icon={<Video className="w-8 h-8 text-indigo-600" />}
          title="Video Processing"
          description="Upload videos from multiple sources including YouTube and Google Photos"
        />
        <FeatureCard
          icon={<Wand2 className="w-8 h-8 text-indigo-600" />}
          title="AI Enhancement"
          description="Auto-generate captions and tags using advanced AI models"
        />
        <FeatureCard
          icon={<Upload className="w-8 h-8 text-indigo-600" />}
          title="Easy Sharing"
          description="Direct upload to GIPHY and download options for your GIFs"
        />
        <FeatureCard
          icon={<Tag className="w-8 h-8 text-indigo-600" />}
          title="Custom Branding"
          description="Add watermarks, captions, and customize text styles"
        />
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
      <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}