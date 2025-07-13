import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, AlertTriangle, CheckCircle, Eye } from 'lucide-react';
import { Disaster } from '../types';

interface DisasterCardProps {
  disaster: Disaster;
}

const DisasterCard: React.FC<DisasterCardProps> = ({ disaster }) => {
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
        return 'text-red-600';
      case 'resolved':
        return 'text-green-600';
      default:
        return 'text-yellow-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <AlertTriangle className="h-4 w-4" />;
      case 'resolved':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Eye className="h-4 w-4" />;
    }
  };

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{disaster.title}</h3>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{disaster.location}</span>
            </div>
            <div className="flex items-center text-gray-500 mb-4">
              <Clock className="h-4 w-4 mr-1" />
              <span className="text-sm">{formatTimestamp(disaster.timestamp)}</span>
            </div>
          </div>
          <div className={`flex items-center space-x-1 px-3 py-1 rounded-full border ${getStatusColor(disaster.status)}`}>
            {getStatusIcon(disaster.status)}
            <span className="text-sm font-medium capitalize">{disaster.status}</span>
          </div>
        </div>

        <p className="text-gray-700 mb-4 line-clamp-3">{disaster.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {disaster.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
          <span
            className={`px-3 py-1 text-xs font-medium rounded-full border ${getSeverityColor(disaster.severity)}`}
          >
            {disaster.severity.toUpperCase()}
          </span>
        </div>

        <Link
          to={`/disaster/${disaster.id}`}
          className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default DisasterCard;