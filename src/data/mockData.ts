import { Disaster, DisasterReport, Resource, LiveUpdate, SocialMediaPost } from '../types';

export const mockDisasters: Disaster[] = [
  {
    id: '1',
    title: 'NYC Flood Emergency',
    location: 'Manhattan, New York',
    tags: ['flood', 'urgent', 'evacuation'],
    timestamp: '2024-01-15T14:30:00Z',
    description: 'Severe flooding in lower Manhattan due to heavy rainfall and storm surge.',
    latitude: 40.7128,
    longitude: -74.0060,
    severity: 'critical',
    status: 'active'
  },
  {
    id: '2',
    title: 'California Wildfire',
    location: 'Los Angeles County, CA',
    tags: ['wildfire', 'air quality', 'evacuation'],
    timestamp: '2024-01-14T09:15:00Z',
    description: 'Fast-moving wildfire threatening residential areas in LA County.',
    latitude: 34.0522,
    longitude: -118.2437,
    severity: 'high',
    status: 'active'
  },
  {
    id: '3',
    title: 'Texas Tornado Warning',
    location: 'Dallas-Fort Worth, TX',
    tags: ['tornado', 'severe weather', 'shelter'],
    timestamp: '2024-01-13T16:45:00Z',
    description: 'Tornado warning issued for Dallas-Fort Worth metroplex.',
    latitude: 32.7767,
    longitude: -96.7970,
    severity: 'high',
    status: 'monitoring'
  },
  {
    id: '4',
    title: 'Miami Hurricane Prep',
    location: 'Miami-Dade County, FL',
    tags: ['hurricane', 'preparation', 'supplies'],
    timestamp: '2024-01-12T11:20:00Z',
    description: 'Category 3 hurricane approaching Florida coast, preparation underway.',
    latitude: 25.7617,
    longitude: -80.1918,
    severity: 'medium',
    status: 'active'
  }
];

export const mockReports: DisasterReport[] = [
  {
    id: '1',
    disasterId: '1',
    content: 'Water level rising rapidly on 14th Street. Multiple cars stranded.',
    imageUrl: 'https://images.pexels.com/photos/1446799/pexels-photo-1446799.jpeg',
    timestamp: '2024-01-15T15:00:00Z',
    verified: true,
    verificationStatus: 'verified'
  },
  {
    id: '2',
    disasterId: '1',
    content: 'Subway stations flooded in lower Manhattan. Service suspended.',
    timestamp: '2024-01-15T14:45:00Z',
    verified: false,
    verificationStatus: 'pending'
  }
];

export const mockResources: Resource[] = [
  {
    id: '1',
    name: 'Emergency Shelter A',
    type: 'shelter',
    location: 'Community Center, 123 Main St',
    latitude: 40.7589,
    longitude: -73.9851,
    capacity: 200,
    available: true
  },
  {
    id: '2',
    name: 'Manhattan General Hospital',
    type: 'hospital',
    location: '456 Hospital Ave',
    latitude: 40.7831,
    longitude: -73.9712,
    available: true
  }
];

export const mockLiveUpdates: LiveUpdate[] = [
  {
    id: '1',
    title: 'Emergency Alert',
    content: 'Evacuation order issued for Zone A residents',
    timestamp: '2024-01-15T15:30:00Z',
    type: 'alert',
    severity: 'critical'
  },
  {
    id: '2',
    title: 'Resource Update',
    content: 'Additional shelter space available at Community Center',
    timestamp: '2024-01-15T15:15:00Z',
    type: 'update',
    severity: 'medium'
  }
];

export const mockSocialPosts: SocialMediaPost[] = [
  {
    id: '1',
    platform: 'twitter',
    author: '@nyc_resident',
    content: 'Streets completely flooded in Financial District. Avoid the area! #NYCFlood',
    timestamp: '2024-01-15T14:55:00Z',
    imageUrl: 'https://images.pexels.com/photos/1446799/pexels-photo-1446799.jpeg',
    verified: false
  },
  {
    id: '2',
    platform: 'facebook',
    author: 'Sarah Johnson',
    content: 'Emergency services are doing an amazing job helping people evacuate safely.',
    timestamp: '2024-01-15T14:40:00Z',
    verified: true
  }
];