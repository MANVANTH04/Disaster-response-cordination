import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, MapPin, AlertTriangle, FileText, Users, Phone, Mail, Globe, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-white">DisasterWatch</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Real-time disaster monitoring and emergency response coordination platform. 
              Protecting communities through AI-powered verification and coordinated response efforts.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-slate-400">
                <Phone className="h-4 w-4" />
                <span className="text-sm">Emergency: 911</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <Mail className="h-4 w-4" />
                <span className="text-sm">support@disasterwatch.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link
                to="/"
                className="flex items-center space-x-2 text-slate-300 hover:text-blue-400 transition-colors group"
              >
                <Globe className="h-4 w-4 group-hover:text-blue-400" />
                <span>Dashboard</span>
              </Link>
              <Link
                to="/create-disaster"
                className="flex items-center space-x-2 text-slate-300 hover:text-blue-400 transition-colors group"
              >
                <AlertTriangle className="h-4 w-4 group-hover:text-blue-400" />
                <span>Create Disaster Report</span>
              </Link>
              <Link
                to="/submit-report"
                className="flex items-center space-x-2 text-slate-300 hover:text-blue-400 transition-colors group"
              >
                <FileText className="h-4 w-4 group-hover:text-blue-400" />
                <span>Submit Report</span>
              </Link>
              <Link
                to="/admin"
                className="flex items-center space-x-2 text-slate-300 hover:text-blue-400 transition-colors group"
              >
                <Users className="h-4 w-4 group-hover:text-blue-400" />
                <span>Admin Panel</span>
              </Link>
            </div>
          </div>

          {/* Column 3: Emergency Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Emergency Resources</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-slate-300">
                <MapPin className="h-4 w-4 text-red-400" />
                <span>Find Nearby Shelters</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <AlertTriangle className="h-4 w-4 text-orange-400" />
                <span>Active Alerts</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Users className="h-4 w-4 text-green-400" />
                <span>Volunteer Opportunities</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>Emergency Contacts</span>
              </div>
            </div>
            
            {/* Emergency Button */}
            <div className="pt-4">
              <button className="w-full flex items-center justify-center space-x-2 bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium">
                <AlertTriangle className="h-4 w-4" />
                <span>Report Emergency</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © 2024 DisasterWatch. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>by</span>
              <span className="text-blue-400 font-medium">Manvanth</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;