'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Video, videoAPI } from '@/utils/api';
import { Upload, CheckCircle, XCircle, Clock, Trash2, LogOut, User } from 'lucide-react';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  // Load videos on mount
  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = async () => {
    try {
      setLoading(true);
      const response = await videoAPI.getAll() as { videos: Video[] };
      setVideos(response.videos);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to load videos');
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('video/')) {
      setError('Please select a video file');
      return;
    }

    if (file.size > 100 * 1024 * 1024) { // 100MB
      setError('File size must be less than 100MB');
      return;
    }

    try {
      setUploading(true);
      setError('');
      await videoAPI.upload(file);
      await loadVideos(); // Refresh list
      
      // Clear the input
      e.target.value = '';
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to upload video');
    } finally {
      setUploading(false);
    }
  };

  const handleApprove = async (videoId: string) => {
    try {
      await videoAPI.approve(videoId);
      await loadVideos();
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to approve video');
    }
  };

  const handleReject = async (videoId: string) => {
    try {
      await videoAPI.reject(videoId);
      await loadVideos();
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to reject video');
    }
  };

  const handleDelete = async (videoId: string) => {
    if (!confirm('Are you sure you want to delete this video?')) return;
    
    try {
      await videoAPI.delete(videoId);
      await loadVideos();
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to delete video');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'approved': return 'text-green-600 bg-green-100';
      case 'rejected': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'approved': return <CheckCircle className="w-4 h-4" />;
      case 'rejected': return <XCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Veqlyx Demo</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <User className="w-4 h-4" />
                <span>{user?.name}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  user?.role === 'creator' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {user?.role}
                </span>
              </div>
              <button
                onClick={logout}
                className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {/* Upload Section (Editor Only) */}
        {user?.role === 'editor' && (
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Upload Video</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">Select a video file to upload</p>
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleFileUpload}
                  disabled={uploading}
                  className="hidden"
                />
                <span className={`inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white ${
                  uploading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700'
                } transition-colors`}>
                  {uploading ? 'Uploading...' : 'Choose File'}
                </span>
              </label>
              <p className="text-xs text-gray-500 mt-2">Max file size: 100MB</p>
            </div>
          </div>
        )}

        {/* Videos List */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              {user?.role === 'creator' ? 'All Videos' : 'My Videos'}
            </h2>
          </div>

          {loading ? (
            <div className="flex items-center justify-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : videos.length === 0 ? (
            <div className="text-center py-12">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No videos uploaded yet</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {videos.map((video) => (
                <div key={video.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-sm font-medium text-gray-900">{video.filename}</h3>
                        <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(video.status)}`}>
                          {getStatusIcon(video.status)}
                          <span className="capitalize">{video.status}</span>
                        </div>
                      </div>
                      <div className="mt-1 text-sm text-gray-500">
                        {video.uploader && (
                          <span>Uploaded by {video.uploader.name} • </span>
                        )}
                        <span>
                          {new Date(video.created_at).toLocaleDateString()} at{' '}
                          {new Date(video.created_at).toLocaleTimeString()}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      {/* Creator Actions */}
                      {user?.role === 'creator' && video.status === 'pending' && (
                        <>
                          <button
                            onClick={() => handleApprove(video.id)}
                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
                          >
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Approve
                          </button>
                          <button
                            onClick={() => handleReject(video.id)}
                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
                          >
                            <XCircle className="w-3 h-3 mr-1" />
                            Reject
                          </button>
                        </>
                      )}

                      {/* Delete Action */}
                      {(user?.role === 'creator' || video.uploaded_by === user?.id) && (
                        <button
                          onClick={() => handleDelete(video.id)}
                          className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                        >
                          <Trash2 className="w-3 h-3 mr-1" />
                          Delete
                        </button>
                      )}

                      {/* View Video Link */}
                      <a
                        href={video.s3_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1.5 border border-blue-300 text-xs font-medium rounded-md text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors"
                      >
                        View
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}