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
      { name: "Engine Diagnostics", img:"https://media.istockphoto.com/id/1350239751/photo/car-diagnostic-service-and-electronics-repair.jpg?s=612x612&w=0&k=20&c=6xSgzMp9KJJ8lN0hC1UcuqXuuZMLNFCgCkcju-Q0BTU=", price: 1500 },
      { name: "Engine Tuning",img:"https://media.istockphoto.com/id/1367581969/photo/mechanic-using-laptop-during-car-engine-diagnostic.jpg?s=612x612&w=0&k=20&c=Qn8i9uNXzIxRMv74KTQDdpAR-J7zGyh9RT5xP5h4sLU=", price: 5000 },
      { name: "ECU Remapping", img:"https://t3.ftcdn.net/jpg/18/76/01/70/240_F_1876017024_qqt4JekLiHqH6x26IIHpvIeh7eErNfDx.jpg", price: 12000 },
      { name: "Engine Overhaul", img:"https://t3.ftcdn.net/jpg/20/07/30/14/240_F_2007301484_Inf43P5kZx7n18P71SFK3dsWB4WsJqOo.jpg", price: 35000 },
      { name: "Fuel Injection Service", img:"https://t4.ftcdn.net/jpg/20/31/54/25/240_F_2031542558_FR1a6jehLJaorG2fpNLfsOpS1MIDuMyq.jpg", price: 3000 },
      { name: "Engine Oil Change", img:"https://t4.ftcdn.net/jpg/19/32/90/97/240_F_1932909711_FUmXLwqXU3018FYFxPe4WKEUabNB8tqp.jpg", price: 2500 },
      { name: "Timing Belt Replacement", img:"https://t3.ftcdn.net/jpg/03/29/38/44/240_F_329384498_KKb30lBX52wfd2fJnliRmNrCCegs82FI.jpg", price: 4500 },
      { name: "Compression Test", img:"https://t3.ftcdn.net/jpg/03/37/72/14/240_F_337721437_9yb5ziVxhdchZ35Tqg9luhIQ09e3YEsY.jpg", price: 1800 }
    ]
  },
  {
    id: "brake-system",
    title: "Brake System",
    catagory: "Car Repair",
    icon: "brake",
    services: [
      { name: "Brake Pad Replacement", img:"https://t3.ftcdn.net/jpg/03/08/32/76/240_F_308327638_ZrCnGQLLk8IT9Ck0gnWhjQdjDmdqxlrM.jpg", price: 2500 },
      { name: "Brake Disc/Rotar Grinding", img:"https://t4.ftcdn.net/jpg/04/19/31/93/240_F_419319334_cxnAfwLPuhGtPx6dTB7TlBEsodhkzrkR.jpg", price: 2000 },
      { name: "Brake Fluid Change",img:"https://t4.ftcdn.net/jpg/10/15/62/95/240_F_1015629596_otVEjhiQJfrEFxXvPbNGHtJeWQ1pvTFO.jpg", price: 1200 },
      { name: "ABS System Check",img:"https://t3.ftcdn.net/jpg/06/20/64/32/240_F_620643251_W0MKRrKfSc1Hw54Nlesa1CguhmvcPPva.jpg", price: 1800 },
      { name: "Brake Caliper Service",img:"https://t4.ftcdn.net/jpg/03/08/32/75/240_F_308327521_UNfTKQ9zY5gG4iVHpt7pDSqnjFIOsmJC.jpg", price: 2500 },
      { name: "Brake Noise Fixing",img:"https://t3.ftcdn.net/jpg/08/73/30/48/240_F_873304851_EXdcST87vhoCHj7nFM1oBpLBTPBe0EPe.jpg", price: 1000 }
    ]
  },
  {
    id: "suspension-steering",
    title: "Suspension & Steering",
    catagory: "Car Repair",
    icon: "suspension",
    services: [
      { name: "Wheel Alignment", img:"https://t4.ftcdn.net/jpg/01/29/75/91/240_F_129759159_ziC7X6c2xPYohha3XHhtjDgAQfbmeGxU.jpg", price: 1200 },
      { name: "Wheel Balancing",img:"https://t3.ftcdn.net/jpg/19/02/78/96/240_F_1902789681_TfTes7KJHSvfVRTSUB0CA99ku1FULV53.jpg", price: 1000 },
      { name: "Shock Absorber Replacement",img:"https://t4.ftcdn.net/jpg/20/62/73/75/240_F_2062737587_44C2XUJOXde1iDftUxCAOUMu9tzQRZf5.jpg", price: 5000 },
      { name: "Steering Repair",img:"https://t4.ftcdn.net/jpg/03/46/23/25/240_F_346232515_msAJO4glC8TnddLwaEcCGRtDLjssGMFt.jpg", price: 4000 },
      { name: "Suspension Bush Replacement",img:"https://t4.ftcdn.net/jpg/18/87/74/91/240_F_1887749106_yE6GAGmQYQas12xLTGReZoon51X9CzSe.jpg", price: 2500 },
      { name: "Power Steering Service",img:"https://t3.ftcdn.net/jpg/20/33/18/70/240_F_2033187003_dP8QAdRFUBMHmFEQFLwlOTazJrRrYIH5.jpg", price: 3000 }
    ]
  },
  {
    id: "ac-cooling",
    title: "AC & Cooling System",
    catagory: "Car Repair",
    icon: "ac",
    services: [
      { name: "AC Gas Refill",img:"https://t3.ftcdn.net/jpg/20/04/63/78/240_F_2004637849_bK2ccaVMAoeUvmJqfOKeO3NZbhWvn6LR.jpg", price: 2500 },
      { name: "AC Compressor Repair", img:"https://t4.ftcdn.net/jpg/11/09/86/27/240_F_1109862748_jlTx37enIurG233DEG2VhmA8GiMMZGMA.jpg", price: 7000 },
      { name: "AC Cooling Performance Check",img:"https://t3.ftcdn.net/jpg/15/29/11/64/240_F_1529116471_o0bWdyMu4Z0rz7eOxK4avQBtMF7uiMUt.jpg", price: 1200 },
      { name: "Radiator Cleaning",img:"https://t3.ftcdn.net/jpg/18/79/36/38/240_F_1879363855_zS5eBleHKJWREeOACyOJgvLa5ZOyLSwK.jpg", price: 1800 },
      { name: "Coolant Replacement",img:"https://t4.ftcdn.net/jpg/05/83/41/15/240_F_583411547_XnpR4kljuV6CGgYU1AQ2OAIjqB2BZT8v.jpg", price: 1500 },
      { name: "Leak Detection",img:"https://t4.ftcdn.net/jpg/05/25/36/95/240_F_525369510_lJzv9e4e44IiIsmIRHbLleM7cj7B4wLX.jpg", price: 1000 }
    ]
  },
  {
    id: "electrical-system",
    title: "Electrical System",
    catagory: "Car Repair",
    icon: "electrical",
    services: [
      { name: "Battery Testing & Replacement",img:"https://t4.ftcdn.net/jpg/07/36/15/71/240_F_736157195_WJkCpvOoMh3jja7DUjQT5ChrsPHVGOLQ.jpg", price: 800 },
      { name: "Alternator Repair", img:"https://t4.ftcdn.net/jpg/19/88/68/31/240_F_1988683156_vrSDdGMtq9477vFXHZR39mFLncTz8x8O.jpg", price: 3500 },
      { name: "Starter Motor Service",img:"https://t3.ftcdn.net/jpg/04/29/16/54/240_F_429165470_FQ1exxNCqeNMZ7P721TqFLfVPjP8E0HK.jpg", price: 2500 },
      { name: "Wiring Repair",img:"https://t4.ftcdn.net/jpg/11/44/27/75/240_F_1144277533_JaMmEhee0GUdaErkRVTeYjCSt4i3wcIy.jpg", price: 2000 },
      { name: "ECU Reset",img:"https://t4.ftcdn.net/jpg/16/48/74/85/240_F_1648748529_MAdx0XeD57I93RMlU3XRy8jG3rYmoOtG.jpg", price: 1500 },
      { name: "Sensor Diagnostics",img:"https://t3.ftcdn.net/jpg/19/95/07/24/240_F_1995072438_FFIMWfvmLy5YnndiYvbv0OBElcSYoG1n.jpg", price: 1200 }
    ]
  },
  {
    id: "detailing-protection",
    title: "Car Detailing & Protection",
    catagory: "Car Repair",
    icon: "detailing",
    services: [
      { name: "Exterior Washing",img:"https://t4.ftcdn.net/jpg/03/09/26/47/240_F_309264799_quQ68kZAMUppexILlI8NIKdW38fi2txj.jpg", price: 500 },
      { name: "Interior Deep Cleaning",img:"https://t3.ftcdn.net/jpg/18/80/78/90/240_F_1880789072_KESXGtcE5YLTe4Ryy9fMddAoag23Q3ro.jpg", price: 3000 },
      { name: "Ceramic Coating",img:"https://t4.ftcdn.net/jpg/19/04/95/81/240_F_1904958124_PNkNdN4P3t8OqGLi39u7mlHxQ6ionyr4.jpg", price: 15000 },
      { name: "Paint Protection Film (PPF)",img:"https://t3.ftcdn.net/jpg/19/00/59/44/240_F_1900594453_J8LbOqlsqPNQtczkLDSXL6yYlGXXy2CI.jpg", price: 50000 },
      { name: "Scratch Removal",img:"https://t4.ftcdn.net/jpg/19/06/74/83/240_F_1906748307_ZQ8V8PdqppuChFwy4jHbmoTNqfqkgOkN.jpg", price: 2500 },
      { name: "Paint Correction",img:"https://t4.ftcdn.net/jpg/20/58/73/15/240_F_2058731560_mGRBRiIHKfH77Dy9bHielF7ilgrbO3YB.jpg", price: 8000 }
    ]
  },
  {
    id: "lubrication-fluids",
    title: "Lubrication & Fluids",
    catagory: "Car Repair",
    icon: "fluids",
    services: [
      { name: "Engine Oil Change",img:"https://t4.ftcdn.net/jpg/12/71/40/01/240_F_1271400122_q5z8Z5tJAwHkwS9L5nMA10UGsZcXOnwa.jpg", price: 2500 },
      { name: "Gear Oil Change",img:"https://t4.ftcdn.net/jpg/08/14/94/37/240_F_814943741_5RqkROZE5GUGktxrX6mKie8TvZoUNV0T.jpg", price: 1800 },
      { name: "Brake Oil Change", img:"https://t3.ftcdn.net/jpg/04/45/06/24/240_F_445062416_ZUHrfpgYqqzoLe9v2KI5dLnkeVUrucPZ.jpg",price: 1200 },
      { name: "Transmission Fluid Service",img:"https://t3.ftcdn.net/jpg/20/55/10/98/240_F_2055109875_gZJde3p2Vk4VyLxSzFKuZYSaSgsswxe5.jpg", price: 3500 },
      { name: "Coolant Flush",img:"https://t4.ftcdn.net/jpg/09/65/89/91/240_F_965899137_yeNVYpXyME4pQruEjn4TDM88SADGnF7z.jpg", price: 1500 }
    ]
  },
  {
    id: "general-maintenance",
    title: "General Maintenance",
    catagory: "Car Repair",
    icon: "maintenance",
    services: [
      { name: "Periodic Service (Full Service)", img:"https://t3.ftcdn.net/jpg/08/34/67/08/240_F_834670831_9s5AmMneN02Up6J5kvlklQaJYpkf4BWz.jpg", price: 5000 },
      { name: "Engine Inspection",img:"https://t4.ftcdn.net/jpg/03/43/35/51/240_F_343355106_R4VBZlqdAtdp05gL4TYEMsjylTlvKY4c.jpg", price: 1500 },
      { name: "Filter Replacement (Air/Oil/Fuel)",img:"https://t3.ftcdn.net/jpg/05/63/02/74/240_F_563027488_IDfxRDQ3rekkfOEElrOEyP8sdiJAPh5C.jpg", price: 2000 },
      { name: "Spark Plug Replacement",img:"https://t4.ftcdn.net/jpg/10/88/53/73/240_F_1088537355_ddf6NiRD6sDy115BPhauzqtnWS1Ump8r.jpg", price: 1800 },
      { name: "Belt Inspection",img:"https://t3.ftcdn.net/jpg/20/41/11/96/240_F_2041119640_w4Y5gW4wqxpE0IqAML0f3ogpJcVnFbtW.jpg", price: 800 }
    ]
  },
  {
    id: "body-repair",
    title: "Body & Repair Work",
    catagory: "Car Repair",
    icon: "body",
    services: [
      { name: "Denting & Painting",img:"https://t3.ftcdn.net/jpg/08/52/79/38/240_F_852793857_2FGG0B3mAhTcjHM17ZHlaKUeYDmUYzXm.jpg", price: 10000 },
      { name: "Accident Repair", img:"https://t3.ftcdn.net/jpg/06/49/31/18/240_F_649311826_Thpto6mmlaGezH0ygt1YUrooKVJMSKOy.jpg",price: 15000 },
      { name: "Panel Replacement", img:"https://t3.ftcdn.net/jpg/20/06/92/56/240_F_2006925626_aEiurg5ZEK7Jflp4SbrY3GfrBlu1icta.jpg",price: 8000 },
      { name: "Rust Removal", img:"https://t3.ftcdn.net/jpg/12/45/68/94/240_F_1245689499_Tx24fkkm6OBTORrvtmlpPK7ZKiWAATH3.jpg",price: 3000 },
      { name: "Body Alignment",img:"https://t4.ftcdn.net/jpg/19/37/58/87/240_F_1937588703_o1gyy1wqwcyivtO5qxvKyvgP68IeHMi1.jpg", price: 5000 }
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
      { name: "Engine Diagnostics", img:"https://t4.ftcdn.net/jpg/19/67/20/23/240_F_1967202309_8U9j4BQCmi4k9HaseDkyY7acGAslQQ4u.jpg", price: 800 },
      { name: "Engine Tuning",img:"https://t3.ftcdn.net/jpg/11/34/39/64/240_F_1134396434_gLC0qPacaaBb4qJD4U3wSGmCnfDigjsL.jpg", price: 2500 },
      { name: "ECU Remapping", img:"https://media.istockphoto.com/id/2220314447/photo/motorcycle-system-diagnostic-scanning-for-faults-across-engine-electrical-and-sensor-modules.jpg?s=2048x2048&w=is&k=20&c=2rwyrMGUfdoR8G1tsgPRVE1j2ASv8WaW9GaFTdmHkX4=",price: 6000 },
      { name: "Engine Overhaul", img:"",price: 18000 },
      { name: "Fuel Injection Service",img:"", price: 2000 },
      { name: "Engine Oil Change",img:"", price: 700 },
      { name: "Compression Test",img:"", price: 1000 }
    ]
  },

  {
    id: "brake-system",
    title: "Brake System",
    catagory: "Motorcycle Repair",
    icon: "brake",
    services: [
      { name: "Brake Pad Replacement", img:"",price: 1200 },
      { name: "Brake Disc Service",img:"", price: 1500 },
      { name: "Brake Fluid Change",img:"", price: 500 },
      { name: "ABS Check",img:"", price: 800 },
      { name: "Brake Caliper Service",img:"", price: 1000 },
      { name: "Brake Noise Fixing",img:"", price: 400 }
    ]
  },

  {
    id: "suspension-setup",
    title: "Suspension Setup",
    catagory: "Motorcycle Repair",
    icon: "suspension",
    services: [
      { name: "Front Fork Service",img:"", price: 1500 },
      { name: "Rear Shock Absorber Repair", img:"",price: 2500 },
      { name: "Suspension Tuning",img:"", price: 1800 },
      { name: "Oil Seal Replacement", img:"",price: 1200 },
      { name: "Rider Weight Setup",img:"", price: 1000 }
    ]
  },

  {
    id: "electrical-system",
    title: "Electrical System",
    catagory: "Motorcycle Repair",
    icon: "electrical",
    services: [
      { name: "Battery Testing",img:"", price: 300 },
      { name: "Wiring Repair",img:"", price: 1200 },
      { name: "Starter Motor Service",img:"", price: 1500 },
      { name: "Lighting System Fix", img:"",price: 800 },
      { name: "Sensor Diagnostics",img:"", price: 600 }
    ]
  },

  {
    id: "chain-transmission",
    title: "Chain & Transmission",
    catagory: "Motorcycle Repair",
    icon: "chain",
    services: [
      { name: "Chain Cleaning",img:"", price: 300 },
      { name: "Chain Lubrication",img:"", price: 200 },
      { name: "Chain Replacement",img:"", price: 1500 },
      { name: "Sprocket Replacement", img:"",price: 2000 },
      { name: "Gear Box Service",img:"", price: 3500 }
    ]
  },

  {
    id: "tyre-wheel",
    title: "Tyre & Wheel",
    catagory: "Motorcycle Repair",
    icon: "wheel",
    services: [
      { name: "Tyre Replacement",img:"", price: 500 },
      { name: "Wheel Balancing", img:"",price: 400 },
      { name: "Wheel Alignment",img:"", price: 600 },
      { name: "Puncture Repair",img:"", price: 150 },
      { name: "Rim Inspection",img:"", price: 300 }
    ]
  },

  {
    id: "accesories-mod",
    title: "Accessories & Modification",
    catagory: "Motorcycle Repair",
    icon: "mod",
    services: [
      { name: "Exhaust Upgrade",img:"", price: 3000 },
      { name: "LED Light Setup",img:"", price: 1000 },
      { name: "Handle Bar Customization",img:"", price: 1500 },
      { name: "Windshield Install", img:"",price: 1200 },
      { name: "Custom Body Kit",img:"", price: 5000 }
    ]
  },

  {
    id: "clean-detailing",
    title: "Cleaning & Detailing",
    catagory: "Motorcycle Repair",
    icon: "detail",
    services: [
      { name: "Bike Washing",img:"", price: 200 },
      { name: "Engine Cleaning", img:"",price: 800 },
      { name: "Chain Deep Clean", img:"",price: 500 },
      { name: "Polishing", img:"",price: 1200 },
      { name: "Ceramic Coating", img:"",price: 6000 }
    ]
  },

  {
    id: "general-maintenance",
    title: "General Maintenance",
    catagory: "Motorcycle Repair",
    icon: "maintenance",
    services: [
      { name: "Full Bike Service",img:"", price: 2500 },
      { name: "Oil Change",img:"", price: 700 },
      { name: "Filter Replacement",img:"", price: 500 },
      { name: "Spark Plug Change", img:"",price: 400 },
      { name: "Periodic Inspection",img:"", price: 800 }
    ]
  }
];