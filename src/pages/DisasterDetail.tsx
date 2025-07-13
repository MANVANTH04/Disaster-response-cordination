import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  Eye, 
  Camera, 
  MessageSquare, 
  Map, 
  FileText,
  ArrowLeft,
  Send
} from 'lucide-react';
import { mockDisasters, mockReports, mockResources, mockSocialPosts } from '../data/mockData';

const DisasterDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'images' | 'social' | 'map' | 'updates'>('images');
  const [newReport, setNewReport] = useState({ content: '', imageUrl: '' });

  const disaster = mockDisasters.find(d => d.id === id);
  const reports = mockReports.filter(r => r.disasterId === id);
  const resources = mockResources; // In a real app, filter by disaster location
  const socialPosts = mockSocialPosts;

  if (!disaster) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Disaster Not Found</h2>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'high':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-green-100 text-green-800 border-green-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-red-600 bg-red-50';
      case 'resolved':
        return 'text-green-600 bg-green-50';
      default:
        return 'text-yellow-600 bg-yellow-50';
    }
  };

  const getVerificationColor = (status: string) => {
    switch (status) {
      case 'verified':
        return 'bg-green-100 text-green-800';
      case 'fake':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  const handleSubmitReport = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    console.log('Submitting report:', newReport);
    setNewReport({ content: '', imageUrl: '' });
  };

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  const tabs = [
    { id: 'images', label: 'Verified Images', icon: Camera },
    { id: 'social', label: 'Social Media', icon: MessageSquare },
    { id: 'map', label: 'Resources', icon: Map },
    { id: 'updates', label: 'Official Updates', icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Dashboard</span>
        </Link>

        {/* Disaster Header */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{disaster.title}</h1>
              <div className="flex items-center space-x-4 text-gray-600 mb-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-1" />
                  <span>{disaster.location}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-1" />
                  <span>{formatTimestamp(disaster.timestamp)}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className={`px-4 py-2 rounded-full ${getStatusColor(disaster.status)}`}>
                <span className="font-medium capitalize">{disaster.status}</span>
              </div>
              <div className={`px-4 py-2 rounded-full border ${getSeverityColor(disaster.severity)}`}>
                <span className="font-medium">{disaster.severity.toUpperCase()}</span>
              </div>
            </div>
          </div>
          
          <p className="text-gray-700 mb-4">{disaster.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {disaster.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="p-6">
            {/* Images Tab */}
            {activeTab === 'images' && (
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-gray-900">Verified Images & Reports</h3>
                {reports.length === 0 ? (
                  <div className="text-center py-12">
                    <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">No verified images available yet</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reports.map((report) => (
                      <div key={report.id} className="bg-gray-50 rounded-lg p-4">
                        {report.imageUrl && (
                          <img
                            src={report.imageUrl}
                            alt="Disaster report"
                            className="w-full h-48 object-cover rounded-lg mb-4"
                          />
                        )}
                        <div className="flex items-center justify-between mb-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getVerificationColor(report.verificationStatus)}`}>
                            {report.verificationStatus}
                          </span>
                          <span className="text-xs text-gray-500">{formatTimestamp(report.timestamp)}</span>
                        </div>
                        <p className="text-gray-700">{report.content}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Social Media Tab */}
            {activeTab === 'social' && (
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-gray-900">Social Media Feed</h3>
                <div className="space-y-4">
                  {socialPosts.map((post) => (
                    <div key={post.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{post.author}</span>
                          <span className="text-sm text-gray-500 capitalize">on {post.platform}</span>
                          {post.verified && (
                            <CheckCircle className="h-4 w-4 text-blue-500" />
                          )}
                        </div>
                        <span className="text-xs text-gray-500">{formatTimestamp(post.timestamp)}</span>
                      </div>
                      <p className="text-gray-700 mb-2">{post.content}</p>
                      {post.imageUrl && (
                        <img
                          src={post.imageUrl}
                          alt="Social media post"
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Map Tab */}
            {activeTab === 'map' && (
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-gray-900">Emergency Resources</h3>
                <div className="bg-gray-100 rounded-lg p-8 text-center">
                  <Map className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Interactive map would be displayed here</p>
                  <p className="text-sm text-gray-500">Showing shelters, hospitals, and supply centers</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {resources.map((resource) => (
                    <div key={resource.id} className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-1">{resource.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{resource.location}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 capitalize">{resource.type.replace('_', ' ')}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          resource.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {resource.available ? 'Available' : 'Full'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Updates Tab */}
            {activeTab === 'updates' && (
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-gray-900">Official Updates</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-100 rounded-full p-2">
                        <FileText className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-900">FEMA Update</h4>
                        <p className="text-blue-800 text-sm mt-1">
                          Emergency declaration approved for affected areas. Federal assistance is now available.
                        </p>
                        <p className="text-xs text-blue-600 mt-2">2 hours ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-100 rounded-full p-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-green-900">Red Cross Update</h4>
                        <p className="text-green-800 text-sm mt-1">
                          Additional shelter capacity has been opened at the Community Center.
                        </p>
                        <p className="text-xs text-green-600 mt-2">4 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Submit Report Form */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Submit New Report</h3>
          <form onSubmit={handleSubmitReport} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Report Content
              </label>
              <textarea
                value={newReport.content}
                onChange={(e) => setNewReport({ ...newReport, content: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows={4}
                placeholder="Describe what you've observed..."
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image URL (optional)
              </label>
              <input
                type="url"
                value={newReport.imageUrl}
                onChange={(e) => setNewReport({ ...newReport, imageUrl: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Image will be verified by AI automatically
              </p>
              <button
                type="submit"
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send className="h-4 w-4" />
                <span>Submit Report</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DisasterDetail;