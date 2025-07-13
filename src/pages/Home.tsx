import React, { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import HeroHeader from '../components/HeroHeader';
import StatsBanner from '../components/StatsBanner';
import FilterBar from '../components/FilterBar';
import DisasterList from '../components/DisasterList';
import UrgentAlertTicker from '../components/UrgentAlertTicker';
import RecentReportsSlider from '../components/RecentReportsSlider';
import ResourceStatsBar from '../components/ResourceStatsBar';
import NewsletterCTA from '../components/NewsletterCTA';
import LiveFeed from '../components/LiveFeed';
import { mockDisasters } from '../data/mockData';
import { Disaster } from '../types';

const Home = () => {
  const [disasters] = useState<Disaster[]>(mockDisasters);
  const [filteredDisasters, setFilteredDisasters] = useState<Disaster[]>(mockDisasters);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    applyFilters(filter, searchTerm);
  };

  const handleSearchChange = (search: string) => {
    setSearchTerm(search);
    applyFilters(selectedFilter, search);
  };

  const applyFilters = (filter: string, search: string) => {
    let filtered = disasters;

    // Apply filter
    if (filter !== 'all') {
      filtered = filtered.filter(disaster => 
        disaster.status === filter || 
        disaster.severity === filter ||
        disaster.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
      );
    }

    // Apply search
    if (search.trim()) {
      filtered = filtered.filter(disaster =>
        disaster.title.toLowerCase().includes(search.toLowerCase()) ||
        disaster.location.toLowerCase().includes(search.toLowerCase()) ||
        disaster.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredDisasters(filtered);
  };

  const activeCriticalCount = disasters.filter(d => d.status === 'active' && d.severity === 'critical').length;
  const activeCount = disasters.filter(d => d.status === 'active').length;
  const resolvedCount = disasters.filter(d => d.status === 'resolved').length;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Header */}
      <HeroHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Urgent Alert Ticker */}
        <UrgentAlertTicker />

        {/* Stats Banner */}
        <StatsBanner 
          activeCount={activeCount}
          resolvedCount={resolvedCount}
          activeCriticalCount={activeCriticalCount}
        />

        {/* Alert Banner */}
        {activeCriticalCount > 0 && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="p-2 bg-red-100 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-900 mb-1">Critical Alert</h3>
                <p className="text-red-800">
                  {activeCriticalCount} critical disaster{activeCriticalCount > 1 ? 's' : ''} requiring immediate attention
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Filter Bar */}
        <FilterBar
          searchTerm={searchTerm}
          selectedFilter={selectedFilter}
          onSearchChange={handleSearchChange}
          onFilterChange={handleFilterChange}
        />

        {/* Recent Reports Slider */}
        <RecentReportsSlider />

        {/* Resource Stats Bar */}
        <ResourceStatsBar />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Disasters Grid */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Active Disasters ({filteredDisasters.length})
                  </h2>
                  <p className="text-gray-600">Real-time disaster tracking and monitoring</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600 font-medium">Live Updates</span>
                </div>
              </div>
            </div>
            
            <DisasterList disasters={filteredDisasters} />
          </div>

          {/* Live Feed Sidebar */}
          <div className="lg:col-span-1">
            <LiveFeed />
          </div>
        </div>

        {/* Newsletter CTA */}
        <NewsletterCTA />
      </div>
    </div>
  );
};

export default Home;