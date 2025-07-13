import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

const RecentReportsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const recentReports = [
    {
      id: '1',
      title: 'NYC Flood Documentation',
      location: 'Manhattan, NY',
      timestamp: '2 hours ago',
      imageUrl: 'https://images.pexels.com/photos/1446799/pexels-photo-1446799.jpeg',
      status: 'verified',
      reporter: 'Emergency Services'
    },
    {
      id: '2',
      title: 'Wildfire Progression',
      location: 'Los Angeles, CA',
      timestamp: '4 hours ago',
      imageUrl: 'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg',
      status: 'pending',
      reporter: 'Local Resident'
    },
    {
      id: '3',
      title: 'Tornado Damage Assessment',
      location: 'Dallas, TX',
      timestamp: '6 hours ago',
      imageUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
      status: 'verified',
      reporter: 'FEMA Team'
    },
    {
      id: '4',
      title: 'Hurricane Preparation',
      location: 'Miami, FL',
      timestamp: '8 hours ago',
      imageUrl: 'https://images.pexels.com/photos/1446799/pexels-photo-1446799.jpeg',
      status: 'verified',
      reporter: 'Red Cross'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, recentReports.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, recentReports.length - 2)) % Math.max(1, recentReports.length - 2));
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-red-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Recent Verified Reports</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
        >
          {recentReports.map((report) => (
            <div key={report.id} className="w-1/3 flex-shrink-0 px-2">
              <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative">
                  <img
                    src={report.imageUrl}
                    alt={report.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(report.status)}`}>
                    {getStatusIcon(report.status)}
                    <span className="capitalize">{report.status}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">{report.title}</h4>
                  <p className="text-xs text-gray-600 mb-2">{report.location}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{report.reporter}</span>
                    <span>{report.timestamp}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: Math.max(1, recentReports.length - 2) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentReportsSlider;