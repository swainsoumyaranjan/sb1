import React, { useState } from 'react';
import { Upload, Youtube, Image as ImageIcon, Settings } from 'lucide-react';
import { VideoUploader } from '../components/VideoUploader';
import { ConversionSettings } from '../components/ConversionSettings';
import { useAuthStore } from '../stores/authStore';

export function Dashboard() {
  const [activeTab, setActiveTab] = useState<'upload' | 'youtube' | 'photos'>('upload');
  const user = useAuthStore((state) => state.user);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Video to GIF Converter</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Welcome, {user?.name}</span>
            <Settings className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
          </div>
        </div>

        <div className="flex gap-4 mb-8">
          <TabButton
            active={activeTab === 'upload'}
            onClick={() => setActiveTab('upload')}
            icon={<Upload className="w-5 h-5" />}
            label="Upload Video"
          />
          <TabButton
            active={activeTab === 'youtube'}
            onClick={() => setActiveTab('youtube')}
            icon={<Youtube className="w-5 h-5" />}
            label="YouTube URL"
          />
          <TabButton
            active={activeTab === 'photos'}
            onClick={() => setActiveTab('photos')}
            icon={<ImageIcon className="w-5 h-5" />}
            label="Google Photos"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <VideoUploader activeTab={activeTab} />
          </div>
          <div>
            <ConversionSettings />
          </div>
        </div>
      </div>
    </div>
  );
}

function TabButton({ active, onClick, icon, label }: { 
  active: boolean; 
  onClick: () => void; 
  icon: React.ReactNode; 
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
        active
          ? 'bg-indigo-600 text-white'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}