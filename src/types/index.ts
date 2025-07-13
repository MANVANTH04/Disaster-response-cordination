export interface Disaster {
  id: string;
  title: string;
  location: string;
  tags: string[];
  timestamp: string;
  description: string;
  latitude?: number;
  longitude?: number;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'active' | 'resolved' | 'monitoring';
}

export interface DisasterReport {
  id: string;
  disasterId: string;
  content: string;
  imageUrl?: string;
  timestamp: string;
  verified: boolean;
  verificationStatus: 'pending' | 'verified' | 'fake';
}

export interface Resource {
  id: string;
  name: string;
  type: 'shelter' | 'hospital' | 'supply_center' | 'evacuation_point';
  location: string;
  latitude: number;
  longitude: number;
  capacity?: number;
  available: boolean;
}

export interface LiveUpdate {
  id: string;
  title: string;
  content: string;
  timestamp: string;
  type: 'alert' | 'update' | 'resolved';
  severity: 'low' | 'medium' | 'high' | 'critical';
}

export interface SocialMediaPost {
  id: string;
  platform: 'twitter' | 'facebook' | 'instagram';
  author: string;
  content: string;
  timestamp: string;
  imageUrl?: string;
  verified: boolean;
}