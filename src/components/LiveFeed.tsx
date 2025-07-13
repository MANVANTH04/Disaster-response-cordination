import React, { useState, useEffect } from 'react';
import { AlertTriangle, Clock, CheckCircle, Info } from 'lucide-react';
import { LiveUpdate } from '../types';
import { mockLiveUpdates } from '../data/mockData';

const LiveFeed = () => {
  const [updates, setUpdates] = useState<LiveUpdate[]>(mockLiveUpdates);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      const newUpdate: LiveUpdate = {
        id: Date.now().toString(),
        title: 'Live Update',
        content: 'New emergency update received',
        timestamp: new Date().toISOString(),
        type: 'update',
        severity: 'medium'
      };
      setUpdates(prev => [newUpdate, ...prev].slice(0, 10));
    }, 30000); // Add new update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'alert':
        return <AlertTriangle className="h-4 w-4" />;
      case 'resolved':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Info className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string, severity: string) => {
    if (type === 'alert' && severity === 'critical') {
      return 'bg-red-50 border-red-200 text-red-800';
    }
    if (type === 'alert') {
      return 'bg-orange-50 border-orange-200 text-orange-800';
    }
    if (type === 'resolved') {
      return 'bg-green-50 border-green-200 text-green-800';
    }
    return 'bg-blue-50 border-blue-200 text-blue-800';
  };

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 h-full">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Live Updates</h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">Live</span>
          </div>
        </div>

        <div className="space-y-3 max-h-96 overflow-y-auto">
          {updates.map((update) => (
            <div
              key={update.id}
              className={`p-4 rounded-lg border ${getTypeColor(update.type, update.severity)}`}
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  {getTypeIcon(update.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm">{update.title}</h4>
                  <p className="text-sm mt-1">{update.content}</p>
                  <div className="flex items-center mt-2 text-xs opacity-75">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{formatTimestamp(update.timestamp)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveFeed;