import React from 'react';
import { Search } from 'lucide-react';
import DisasterCard from './DisasterCard';
import { Disaster } from '../types';

interface DisasterListProps {
  disasters: Disaster[];
  isLoading?: boolean;
}

const DisasterList: React.FC<DisasterListProps> = ({ disasters, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md border border-gray-100 p-6 animate-pulse">
            <div className="h-6 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded mb-4 w-3/4"></div>
            <div className="h-20 bg-gray-200 rounded mb-4"></div>
            <div className="flex gap-2 mb-4">
              <div className="h-6 bg-gray-200 rounded-full w-16"></div>
              <div className="h-6 bg-gray-200 rounded-full w-20"></div>
            </div>
            <div className="h-10 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  if (disasters.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-16 text-center">
        <div className="text-gray-400 mb-6">
          <Search className="h-16 w-16 mx-auto" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">No disasters found</h3>
        <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
          Clear Filters
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {disasters.map((disaster) => (
        <DisasterCard key={disaster.id} disaster={disaster} />
      ))}
    </div>
  );
};

export default DisasterList;