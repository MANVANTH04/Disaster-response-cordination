import React from 'react';
import { AlertTriangle, Shield, Users, TrendingUp, Clock, CheckCircle } from 'lucide-react';

interface StatsBannerProps {
  activeCount: number;
  resolvedCount: number;
  activeCriticalCount: number;
}

const StatsBanner: React.FC<StatsBannerProps> = ({ activeCount, resolvedCount, activeCriticalCount }) => {
  const stats = [
    {
      icon: AlertTriangle,
      value: activeCount,
      label: 'Active Disasters',
      color: 'text-red-300',
      bgColor: 'bg-red-50',
      iconBg: 'bg-red-100'
    },
    {
      icon: Shield,
      value: '24/7',
      label: 'Response Teams',
      color: 'text-green-300',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-100'
    },
    {
      icon: CheckCircle,
      value: resolvedCount,
      label: 'Resolved Cases',
      color: 'text-blue-300',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100'
    },
    {
      icon: Users,
      value: '1.2K',
      label: 'Volunteers',
      color: 'text-purple-300',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-100'
    },
    {
      icon: Clock,
      value: '< 5min',
      label: 'Avg Response',
      color: 'text-orange-300',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-100'
    },
    {
      icon: TrendingUp,
      value: '98%',
      label: 'Success Rate',
      color: 'text-emerald-300',
      bgColor: 'bg-emerald-50',
      iconBg: 'bg-emerald-100'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className={`${stat.bgColor} rounded-xl p-4 text-center hover:shadow-md transition-all duration-300 hover:scale-105`}
            >
              <div className={`${stat.iconBg} rounded-lg p-2 w-fit mx-auto mb-3`}>
                <Icon className={`h-6 w-6 ${stat.color.replace('300', '600')}`} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsBanner;