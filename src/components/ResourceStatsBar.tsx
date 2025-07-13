import React from 'react';
import { Home, Guitar as Hospital, Truck, MapPin, Users, Shield } from 'lucide-react';

const ResourceStatsBar = () => {
  const resources = [
    {
      icon: Home,
      count: 12,
      label: 'Shelters',
      available: 8,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      progressColor: 'bg-blue-600'
    },
    {
      icon: Hospital,
      count: 5,
      label: 'Hospitals',
      available: 5,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      progressColor: 'bg-red-600'
    },
    {
      icon: Truck,
      count: 8,
      label: 'Supply Centers',
      available: 6,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      progressColor: 'bg-green-600'
    },
    {
      icon: MapPin,
      count: 15,
      label: 'Evacuation Points',
      available: 12,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      progressColor: 'bg-orange-600'
    },
    {
      icon: Users,
      count: 240,
      label: 'Volunteers',
      available: 180,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      progressColor: 'bg-purple-600'
    },
    {
      icon: Shield,
      count: 18,
      label: 'Response Teams',
      available: 15,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      progressColor: 'bg-indigo-600'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Emergency Resources Available</h3>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-600 font-medium">Real-time Status</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {resources.map((resource, index) => {
          const Icon = resource.icon;
          const availabilityPercentage = (resource.available / resource.count) * 100;
          
          return (
            <div
              key={index}
              className={`${resource.bgColor} rounded-xl p-4 hover:shadow-md transition-all duration-300 hover:scale-105`}
            >
              <div className="flex items-center justify-between mb-3">
                <Icon className={`h-6 w-6 ${resource.color}`} />
                <span className="text-xs text-gray-600 font-medium">
                  {resource.available}/{resource.count}
                </span>
              </div>
              
              <div className="mb-2">
                <div className="text-2xl font-bold text-gray-900">{resource.count}</div>
                <div className="text-sm text-gray-600 font-medium">{resource.label}</div>
              </div>

              {/* Availability Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`${resource.progressColor} h-2 rounded-full transition-all duration-300`}
                  style={{ width: `${availabilityPercentage}%` }}
                ></div>
              </div>
              
              <div className="text-xs text-gray-600 mt-1">
                {availabilityPercentage.toFixed(0)}% Available
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex items-center space-x-2 text-blue-800">
          <Shield className="h-4 w-4" />
          <span className="text-sm font-medium">
            All resources are coordinated with local emergency services and updated in real-time
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResourceStatsBar;