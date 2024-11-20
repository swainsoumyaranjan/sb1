import React from 'react';
import { Settings, Type, Image, Tag } from 'lucide-react';

export function ConversionSettings() {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <Settings className="w-5 h-5 text-gray-500" />
        <h3 className="text-lg font-semibold">Conversion Settings</h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center gap-2">
              <Type className="w-4 h-4" />
              <span>Caption</span>
            </div>
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            rows={3}
            placeholder="Enter caption for your GIF..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center gap-2">
              <Image className="w-4 h-4" />
              <span>Watermark</span>
            </div>
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Enter watermark text..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>Tags</span>
            </div>
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Enter tags separated by commas..."
          />
        </div>

        <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
          Convert to GIF
        </button>
      </div>
    </div>
  );
}