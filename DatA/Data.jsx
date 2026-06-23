import {
  FiArrowRight,
  FiActivity,
  FiShield,
  FiWind,
  FiCpu,
  FiCheckCircle,
} from "react-icons/fi";

export const servicesData = {
    car: [
      {
        id: 1,
        icon: <FiActivity />,
        title: "Engine Diagnostics",
        desc: "ECU scanning, tuning and performance optimization.",
        features: ["ECU Scan", "Dyno Test", "Error Fix"],
      },
      {
        id: 2,
        icon: <FiCpu />,
        title: "Brake System",
        desc: "High performance brake setup and calibration.",
        features: ["ABS Check", "Pad Replace", "Fluid Service"],
      },
      {
        id: 3,
        icon: <FiWind />,
        title: "AC System",
        desc: "Cooling system repair and optimization.",
        features: ["Gas Refill", "Leak Test", "Cooling Tune"],
      },
      {
        id: 4,
        icon: <FiShield />,
        title: "Car Protection",
        desc: "Paint protection and detailing service.",
        features: ["Ceramic Coat", "PPF", "Detailing"],
      },
    ],
    bike: [
      {
        id: 1,
        icon: <FiActivity />,
        title: "Bike Tuning",
        desc: "Engine tuning for speed and performance.",
        features: ["Race Map", "RPM Tune", "Power Boost"],
      },
      {
        id: 2,
        icon: <FiCpu />,
        title: "Suspension",
        desc: "Smooth ride suspension setup.",
        features: ["Fork Oil", "Shock Setup", "Balance"],
      },
      {
        id: 3,
        icon: <FiWind />,
        title: "Exhaust",
        desc: "Performance exhaust upgrade.",
        features: ["Full Pipe", "Air Flow", "Sound Tune"],
      },
      {
        id: 4,
        icon: <FiShield />,
        title: "Bike Care",
        desc: "Full bike protection service.",
        features: ["Chain Clean", "Coating", "Wash"],
      },
    ],
  };


  export const carServicesAPI = [
  {
    id: "engine-performance",
    title: "Engine & Performance",
    catagory: "Car Repair",
    icon: "engine",
    services: [
      { name: "Engine Diagnostics", price: 1500 },
      { name: "Engine Tuning", price: 5000 },
      { name: "ECU Remapping", price: 12000 },
      { name: "Engine Overhaul", price: 35000 },
      { name: "Fuel Injection Service", price: 3000 },
      { name: "Engine Oil Change", price: 2500 },
      { name: "Timing Belt Replacement", price: 4500 },
      { name: "Compression Test", price: 1800 }
    ]
  },
  {
    id: "brake-system",
    title: "Brake System",
    catagory: "Car Repair",
    icon: "brake",
    services: [
      { name: "Brake Pad Replacement", price: 2500 },
      { name: "Brake Disc/Rotar Grinding", price: 2000 },
      { name: "Brake Fluid Change", price: 1200 },
      { name: "ABS System Check", price: 1800 },
      { name: "Brake Caliper Service", price: 2500 },
      { name: "Brake Noise Fixing", price: 1000 }
    ]
  },
  {
    id: "suspension-steering",
    title: "Suspension & Steering",
    catagory: "Car Repair",
    icon: "suspension",
    services: [
      { name: "Wheel Alignment", price: 1200 },
      { name: "Wheel Balancing", price: 1000 },
      { name: "Shock Absorber Replacement", price: 5000 },
      { name: "Steering Repair", price: 4000 },
      { name: "Suspension Bush Replacement", price: 2500 },
      { name: "Power Steering Service", price: 3000 }
    ]
  },
  {
    id: "ac-cooling",
    title: "AC & Cooling System",
    catagory: "Car Repair",
    icon: "ac",
    services: [
      { name: "AC Gas Refill", price: 2500 },
      { name: "AC Compressor Repair", price: 7000 },
      { name: "AC Cooling Performance Check", price: 1200 },
      { name: "Radiator Cleaning", price: 1800 },
      { name: "Coolant Replacement", price: 1500 },
      { name: "Leak Detection", price: 1000 }
    ]
  },
  {
    id: "electrical-system",
    title: "Electrical System",
    catagory: "Car Repair",
    icon: "electrical",
    services: [
      { name: "Battery Testing & Replacement", price: 800 },
      { name: "Alternator Repair", price: 3500 },
      { name: "Starter Motor Service", price: 2500 },
      { name: "Wiring Repair", price: 2000 },
      { name: "ECU Reset", price: 1500 },
      { name: "Sensor Diagnostics", price: 1200 }
    ]
  },
  {
    id: "detailing-protection",
    title: "Car Detailing & Protection",
    catagory: "Car Repair",
    icon: "detailing",
    services: [
      { name: "Exterior Washing", price: 500 },
      { name: "Interior Deep Cleaning", price: 3000 },
      { name: "Ceramic Coating", price: 15000 },
      { name: "Paint Protection Film (PPF)", price: 50000 },
      { name: "Scratch Removal", price: 2500 },
      { name: "Paint Correction", price: 8000 }
    ]
  },
  {
    id: "lubrication-fluids",
    title: "Lubrication & Fluids",
    catagory: "Car Repair",
    icon: "fluids",
    services: [
      { name: "Engine Oil Change", price: 2500 },
      { name: "Gear Oil Change", price: 1800 },
      { name: "Brake Oil Change", price: 1200 },
      { name: "Transmission Fluid Service", price: 3500 },
      { name: "Coolant Flush", price: 1500 }
    ]
  },
  {
    id: "general-maintenance",
    title: "General Maintenance",
    catagory: "Car Repair",
    icon: "maintenance",
    services: [
      { name: "Periodic Service (Full Service)", price: 5000 },
      { name: "Engine Inspection", price: 1500 },
      { name: "Filter Replacement (Air/Oil/Fuel)", price: 2000 },
      { name: "Spark Plug Replacement", price: 1800 },
      { name: "Belt Inspection", price: 800 }
    ]
  },
  {
    id: "body-repair",
    title: "Body & Repair Work",
    catagory: "Car Repair",
    icon: "body",
    services: [
      { name: "Denting & Painting", price: 10000 },
      { name: "Accident Repair", price: 15000 },
      { name: "Panel Replacement", price: 8000 },
      { name: "Rust Removal", price: 3000 },
      { name: "Body Alignment", price: 5000 }
    ]
  }
];

export const bikeServicesAPI = [
  {
    id: "engine-performance",
    title: "Engine & Performance",
    catagory: "Motorcycle Repair",
    icon: "engine",
    services: [
      { name: "Engine Diagnostics", price: 800 },
      { name: "Engine Tuning", price: 2500 },
      { name: "ECU Remapping", price: 6000 },
      { name: "Engine Overhaul", price: 18000 },
      { name: "Fuel Injection Service", price: 2000 },
      { name: "Engine Oil Change", price: 700 },
      { name: "Compression Test", price: 1000 }
    ]
  },

  {
    id: "brake-system",
    title: "Brake System",
    catagory: "Motorcycle Repair",
    icon: "brake",
    services: [
      { name: "Brake Pad Replacement", price: 1200 },
      { name: "Brake Disc Service", price: 1500 },
      { name: "Brake Fluid Change", price: 500 },
      { name: "ABS Check", price: 800 },
      { name: "Brake Caliper Service", price: 1000 },
      { name: "Brake Noise Fixing", price: 400 }
    ]
  },

  {
    id: "suspension-setup",
    title: "Suspension Setup",
    catagory: "Motorcycle Repair",
    icon: "suspension",
    services: [
      { name: "Front Fork Service", price: 1500 },
      { name: "Rear Shock Absorber Repair", price: 2500 },
      { name: "Suspension Tuning", price: 1800 },
      { name: "Oil Seal Replacement", price: 1200 },
      { name: "Rider Weight Setup", price: 1000 }
    ]
  },

  {
    id: "electrical-system",
    title: "Electrical System",
    catagory: "Motorcycle Repair",
    icon: "electrical",
    services: [
      { name: "Battery Testing", price: 300 },
      { name: "Wiring Repair", price: 1200 },
      { name: "Starter Motor Service", price: 1500 },
      { name: "Lighting System Fix", price: 800 },
      { name: "Sensor Diagnostics", price: 600 }
    ]
  },

  {
    id: "chain-transmission",
    title: "Chain & Transmission",
    catagory: "Motorcycle Repair",
    icon: "chain",
    services: [
      { name: "Chain Cleaning", price: 300 },
      { name: "Chain Lubrication", price: 200 },
      { name: "Chain Replacement", price: 1500 },
      { name: "Sprocket Replacement", price: 2000 },
      { name: "Gear Box Service", price: 3500 }
    ]
  },

  {
    id: "tyre-wheel",
    title: "Tyre & Wheel",
    catagory: "Motorcycle Repair",
    icon: "wheel",
    services: [
      { name: "Tyre Replacement", price: 500 },
      { name: "Wheel Balancing", price: 400 },
      { name: "Wheel Alignment", price: 600 },
      { name: "Puncture Repair", price: 150 },
      { name: "Rim Inspection", price: 300 }
    ]
  },

  {
    id: "accesories-mod",
    title: "Accessories & Modification",
    catagory: "Motorcycle Repair",
    icon: "mod",
    services: [
      { name: "Exhaust Upgrade", price: 3000 },
      { name: "LED Light Setup", price: 1000 },
      { name: "Handle Bar Customization", price: 1500 },
      { name: "Windshield Install", price: 1200 },
      { name: "Custom Body Kit", price: 5000 }
    ]
  },

  {
    id: "clean-detailing",
    title: "Cleaning & Detailing",
    catagory: "Motorcycle Repair",
    icon: "detail",
    services: [
      { name: "Bike Washing", price: 200 },
      { name: "Engine Cleaning", price: 800 },
      { name: "Chain Deep Clean", price: 500 },
      { name: "Polishing", price: 1200 },
      { name: "Ceramic Coating", price: 6000 }
    ]
  },

  {
    id: "general-maintenance",
    title: "General Maintenance",
    catagory: "Motorcycle Repair",
    icon: "maintenance",
    services: [
      { name: "Full Bike Service", price: 2500 },
      { name: "Oil Change", price: 700 },
      { name: "Filter Replacement", price: 500 },
      { name: "Spark Plug Change", price: 400 },
      { name: "Periodic Inspection", price: 800 }
    ]
  }
];