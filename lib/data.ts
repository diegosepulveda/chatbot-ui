export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  squareFeet: number;
  description: string;
  features: string[];
  images: string[];
  type: 'office' | 'retail' | 'industrial' | 'mixed-use' | 'warehouse';
  status: 'for-sale' | 'for-lease' | 'sold' | 'leased';
  featured: boolean;
  agent: {
    name: string;
    phone: string;
    email: string;
    image: string;
  };
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Premium Downtown Office Tower',
    location: 'Financial District, Los Angeles, CA',
    price: 15000000,
    squareFeet: 25000,
    description: 'Class A office space in the heart of the financial district. Features modern amenities, floor-to-ceiling windows, and panoramic city views. Recently renovated with state-of-the-art technology infrastructure.',
    features: ['24/7 Security', 'Fiber Optic Internet', 'Conference Facilities', 'Parking Garage', 'Fitness Center', 'LEED Certified'],
    images: [
      'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
      'https://images.pexels.com/photos/1098982/pexels-photo-1098982.jpeg',
      'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg'
    ],
    type: 'office',
    status: 'for-sale',
    featured: true,
    agent: {
      name: 'Sarah Johnson',
      phone: '(310) 555-1234',
      email: 'sarah@luxeestates.com',
      image: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg'
    }
  },
  {
    id: '2',
    title: 'Silicon Beach Tech Campus',
    location: 'Santa Monica, CA',
    price: 22000000,
    squareFeet: 45000,
    description: 'Modern tech campus designed for innovation and collaboration. Open floor plans, outdoor workspaces, and cutting-edge amenities make this perfect for growing tech companies.',
    features: ['Smart Building Systems', 'Creative Spaces', 'Rooftop Terrace', 'EV Charging', 'Bike Storage', 'On-site Cafe'],
    images: [
      'https://images.pexels.com/photos/1743373/pexels-photo-1743373.jpeg',
      'https://images.pexels.com/photos/265129/pexels-photo-265129.jpeg',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'
    ],
    type: 'office',
    status: 'for-lease',
    featured: true,
    agent: {
      name: 'Michael Chen',
      phone: '(310) 555-5678',
      email: 'michael@luxeestates.com',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg'
    }
  },
  {
    id: '3',
    title: 'Industrial Distribution Center',
    location: 'Commerce, CA',
    price: 8500000,
    squareFeet: 75000,
    description: 'Strategic location near major highways. High-ceiling warehouse space with modern loading docks, office space, and ample parking for trucks and employees.',
    features: ['Loading Docks', 'High Ceilings', 'Climate Control', 'Security System', 'Office Space', 'Truck Court'],
    images: [
      'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg',
      'https://images.pexels.com/photos/259957/pexels-photo-259957.jpeg',
      'https://images.pexels.com/photos/1267325/pexels-photo-1267325.jpeg'
    ],
    type: 'warehouse',
    status: 'for-sale',
    featured: true,
    agent: {
      name: 'Emily Rodriguez',
      phone: '(805) 555-9012',
      email: 'emily@luxeestates.com',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
    }
  },
  {
    id: '4',
    title: 'Mixed-Use Development',
    location: 'Culver City, CA',
    price: 18500000,
    squareFeet: 35000,
    description: 'Prime mixed-use property featuring ground-floor retail and upper-level office space. Excellent location in a rapidly growing area with high foot traffic.',
    features: ['Ground Retail', 'Office Space', 'Underground Parking', 'Modern Design', 'High Visibility', 'Transit Access'],
    images: [
      'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg',
      'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
      'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg'
    ],
    type: 'mixed-use',
    status: 'for-sale',
    featured: true,
    agent: {
      name: 'James Wilson',
      phone: '(323) 555-3456',
      email: 'james@luxeestates.com',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg'
    }
  },
  {
    id: '5',
    title: 'Retail Plaza',
    location: 'Pasadena, CA',
    price: 12500000,
    squareFeet: 28000,
    description: 'Well-maintained retail plaza in high-traffic area. Multiple units with excellent visibility and ample parking. Strong existing tenant mix.',
    features: ['Corner Location', 'Signage Rights', 'Large Parking', 'Updated HVAC', 'ADA Compliant', 'Loading Zone'],
    images: [
      'https://images.pexels.com/photos/582897/pexels-photo-582897.jpeg',
      'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg',
      'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg'
    ],
    type: 'retail',
    status: 'for-sale',
    featured: false,
    agent: {
      name: 'Jennifer Taylor',
      phone: '(949) 555-7890',
      email: 'jennifer@luxeestates.com',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg'
    }
  },
  {
    id: '6',
    title: 'Creative Office Loft',
    location: 'Arts District, Los Angeles, CA',
    price: 4500000,
    squareFeet: 12000,
    description: 'Converted industrial loft perfect for creative businesses. Original architectural details combined with modern updates. Includes private parking and outdoor space.',
    features: ['High Ceilings', 'Exposed Brick', 'Polished Concrete', 'Private Parking', 'Outdoor Space', 'Fiber Internet'],
    images: [
      'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg',
      'https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg',
      'https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg'
    ],
    type: 'office',
    status: 'for-sale',
    featured: false,
    agent: {
      name: 'David Kim',
      phone: '(213) 555-2345',
      email: 'david@luxeestates.com',
      image: 'https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg'
    }
  }
];

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find(property => property.id === id);
};

export const getFeaturedProperties = (): Property[] => {
  return properties.filter(property => property.featured);
};