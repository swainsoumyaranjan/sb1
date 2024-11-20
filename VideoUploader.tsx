import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';

export function VideoUploader({ activeTab }: { activeTab: string }) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Handle file upload logic here
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'video/*': ['.mp4', '.mov', '.avi', '.webm']
    },
    maxFiles: 1
  });

  if (activeTab === 'youtube') {
    return (
      <div className="bg-gray-50 rounded-lg p-6">
        <input
          type="text"
          placeholder="Enter YouTube URL"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>
    );
  }

  if (activeTab === 'photos') {
    return (
      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
          Connect Google Photos
        </button>
      </div>
    );
  }

  return (
    <div
      {...getRootProps()}
      className={`bg-gray-50 border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition ${
        isDragActive ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'
      }`}
    >
      <input {...getInputProps()} />
      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
      {isDragActive ? (
        <p className="text-lg text-gray-600">Drop your video here...</p>
      ) : (
        <>
          <p className="text-lg text-gray-600 mb-2">
            Drag & drop your video here, or click to select
          </p>
          <p className="text-sm text-gray-500">
            Supports MP4, MOV, AVI, and WebM (max 100MB)
          </p>
        </>
      )}
    </div>
  );
}