import React, { useState, useEffect } from 'react';
import { AlertTriangle, Siren } from 'lucide-react';

const UrgentAlertTicker = () => {
  const [currentAlert, setCurrentAlert] = useState(0);

  const urgentAlerts = [
    "🚨 CRITICAL: Flash flood warning issued for Manhattan - Evacuate immediately",
    "⛑️ URGENT: Medical assistance needed in Los Angeles wildfire zone",
    "🌪️ TORNADO WARNING: Dallas-Fort Worth area - Seek shelter now",
    "🔥 EVACUATION ORDER: Residents of Malibu Hills must leave immediately",
    "❄️ BLIZZARD ALERT: Emergency shelters open in Chicago area"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAlert((prev) => (prev + 1) % urgentAlerts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [urgentAlerts.length]);

  return (
    <div className="bg-red-600 text-white py-3 px-4 mb-6 rounded-xl shadow-lg border-l-4 border-red-800">
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0">
          <div className="flex items-center space-x-2">
            <Siren className="h-5 w-5 animate-pulse" />
            <span className="font-bold text-sm">URGENT ALERT</span>
          </div>
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="relative h-6">
            {urgentAlerts.map((alert, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === currentAlert
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-2'
                }`}
              >
                <p className="text-sm font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                  {alert}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="flex space-x-1">
            {urgentAlerts.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentAlert ? 'bg-white' : 'bg-red-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgentAlertTicker;