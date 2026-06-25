
import { PiEngineBold } from "react-icons/pi";
import { GiAndromedaChain, GiAutoRepair, GiCarWheel, GiSuspensionBridge } from "react-icons/gi";
import { TbSteeringWheelFilled } from "react-icons/tb";
import { FaWind } from "react-icons/fa";
import { GiElectricalCrescent } from "react-icons/gi";
import { FcDataProtection } from "react-icons/fc";
import { Droplet } from "lucide-react";
import { GrHostMaintenance, GrUpgrade } from "react-icons/gr";
import { MdOutlineCleaningServices } from "react-icons/md";
  export const carServicesAPI = [
  {
    id: "engine-performance",
    title: "Engine & Performance",
    
    catagory: "Car Repair",
    image:"https://media.istockphoto.com/id/1350239751/photo/car-diagnostic-service-and-electronics-repair.jpg?s=612x612&w=0&k=20&c=6xSgzMp9KJJ8lN0hC1UcuqXuuZMLNFCgCkcju-Q0BTU=",
      desc: "Unlock peak engine efficiency with precision diagnostics, tuning and performance upgrades.",
    icon: <PiEngineBold/>,
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
    image:"https://t3.ftcdn.net/jpg/03/08/32/76/240_F_308327638_ZrCnGQLLk8IT9Ck0gnWhjQdjDmdqxlrM.jpg",
    desc:"Ensure confident stopping power through comprehensive brake inspection and repair.",
    icon: <GiCarWheel/>,
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
        image:"https://t4.ftcdn.net/jpg/01/29/75/91/240_F_129759159_ziC7X6c2xPYohha3XHhtjDgAQfbmeGxU.jpg",
    catagory: "Car Repair",
    desc:"Experience smoother rides and sharper control with expert suspension solutions.",
   icon: <TbSteeringWheelFilled/>,
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
        image:"https://t3.ftcdn.net/jpg/20/04/63/78/240_F_2004637849_bK2ccaVMAoeUvmJqfOKeO3NZbhWvn6LR.jpg",
    catagory: "Car Repair",
    desc:"Stay cool and protect your engine with advanced cooling system maintenance.",
   icon: <FaWind/>,
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
        image:"https://t4.ftcdn.net/jpg/07/36/15/71/240_F_736157195_WJkCpvOoMh3jja7DUjQT5ChrsPHVGOLQ.jpg",
    catagory: "Car Repair",
    icon: <GiElectricalCrescent/>,desc:"Reliable electrical diagnostics and repairs for modern vehicle technology.",
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
        image:"https://t4.ftcdn.net/jpg/03/09/26/47/240_F_309264799_quQ68kZAMUppexILlI8NIKdW38fi2txj.jpg",
    catagory: "Car Repair",desc:"Preserve your vehicle's appearance with premium detailing and protective treatments",
   icon: <FcDataProtection/>,
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
        image:"https://t4.ftcdn.net/jpg/12/71/40/01/240_F_1271400122_q5z8Z5tJAwHkwS9L5nMA10UGsZcXOnwa.jpg",
    catagory: "Car Repair",desc:"Extend component life through professional fluid replacement and lubrication services.",
   icon: <Droplet />,
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
        image:"https://t3.ftcdn.net/jpg/08/34/67/08/240_F_834670831_9s5AmMneN02Up6J5kvlklQaJYpkf4BWz.jpg",
    title: "General Maintenance",desc:"Prevent costly repairs with scheduled maintenance and comprehensive inspections.",
    catagory: "Car Repair",
   icon: <GrHostMaintenance/>,
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
        image:"https://t3.ftcdn.net/jpg/08/52/79/38/240_F_852793857_2FGG0B3mAhTcjHM17ZHlaKUeYDmUYzXm.jpg",
    catagory: "Car Repair",
    desc:"Restore your vehicle's original appearance with expert bodywork and paint correction.",
   icon: <GiAutoRepair/>,
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
    title: "Engine & Performance", desc: "Maximize motorcycle performance with advanced diagnostics, tuning and engine optimization.",
    catagory: "Motorcycle Repair",
    image:"https://t4.ftcdn.net/jpg/19/67/20/23/240_F_1967202309_8U9j4BQCmi4k9HaseDkyY7acGAslQQ4u.jpg",
    icon: <PiEngineBold/>,
    services: [
      { name: "Engine Diagnostics", img:"https://t4.ftcdn.net/jpg/19/67/20/23/240_F_1967202309_8U9j4BQCmi4k9HaseDkyY7acGAslQQ4u.jpg", price: 800 },
      { name: "Engine Tuning",img:"https://t3.ftcdn.net/jpg/11/34/39/64/240_F_1134396434_gLC0qPacaaBb4qJD4U3wSGmCnfDigjsL.jpg", price: 2500 },
      { name: "ECU Remapping", img:"https://media.istockphoto.com/id/2220314447/photo/motorcycle-system-diagnostic-scanning-for-faults-across-engine-electrical-and-sensor-modules.jpg?s=2048x2048&w=is&k=20&c=2rwyrMGUfdoR8G1tsgPRVE1j2ASv8WaW9GaFTdmHkX4=",price: 6000 },
      { name: "Engine Overhaul", img:"https://t3.ftcdn.net/jpg/19/58/31/10/240_F_1958311021_zvXSP40obNE3lSuv7Gh5cTsU8Cu9Wclg.jpg",price: 18000 },
      { name: "Fuel Injection Service",img:"https://t4.ftcdn.net/jpg/10/12/70/95/240_F_1012709511_p6blanbEDMGLAe6wRc9mt7SyRPcycoNL.jpg", price: 2000 },
      { name: "Engine Oil Change",img:"https://t3.ftcdn.net/jpg/06/92/84/04/240_F_692840438_hSaTkKI2sPyfMYJ9hhLISanVjrwC0v4I.jpg", price: 700 },
      
    ]
  },

  {
    id: "brake-system",
    title: "Brake System",
     image:"https://t4.ftcdn.net/jpg/12/89/57/99/240_F_1289579926_wCxO2PJTq8OwAHreXO3FfHHgTUNcesae.jpg",
    catagory: "Motorcycle Repair",desc:"Ensure safe and responsive braking with complete brake inspection and maintenance.",
   icon: <GiCarWheel/>,
    services: [
      { name: "Brake Pad Replacement", img:"https://t4.ftcdn.net/jpg/12/89/57/99/240_F_1289579926_wCxO2PJTq8OwAHreXO3FfHHgTUNcesae.jpg",price: 1200 },
      { name: "Brake Disc Service",img:"https://t3.ftcdn.net/jpg/13/08/48/12/240_F_1308481286_5PBbseVrmvnjJc7w8bpJot96SwY9onhW.jpg", price: 1500 },
      { name: "Brake Fluid Change",img:"https://t4.ftcdn.net/jpg/10/70/11/39/240_F_1070113993_hstc3LMcZdErUen2VTr41KwKmecsbiZR.jpg", price: 500 },
      { name: "ABS Check",img:"https://t3.ftcdn.net/jpg/15/12/07/22/240_F_1512072296_SBotZ77QSRPmlNDTIlIJ5QohwL0WhpVb.jpg", price: 800 },
      { name: "Brake Caliper Service",img:"https://t4.ftcdn.net/jpg/20/15/40/29/240_F_2015402907_5zIDxbbNM3gSAgBwFDxoOJHDV1wBvq9k.jpg", price: 1000 },
      { name: "Brake Noise Fixing",img:"https://t4.ftcdn.net/jpg/05/63/86/51/240_F_563865129_kiFTEm9gGrWYJhsTLkPfHYUccNRf8Tp5.jpg", price: 400 }
    ]
  },

  {
    id: "suspension-setup",
    title: "Suspension Setup",
    image:"https://t3.ftcdn.net/jpg/02/62/54/90/240_F_262549025_T6UJjT7z4IpyQ6uglCmihVoMO0TI7NXR.jpg",
    catagory: "Motorcycle Repair",desc:"Improve comfort, stability and cornering performance through expert suspension tuning.",
   icon: <GiSuspensionBridge/>,
    services: [
      { name: "Front Fork Service",img:"https://t3.ftcdn.net/jpg/02/62/54/90/240_F_262549025_T6UJjT7z4IpyQ6uglCmihVoMO0TI7NXR.jpg", price: 1500 },
      { name: "Rear Shock Absorber Repair", img:"https://t4.ftcdn.net/jpg/20/69/34/71/240_F_2069347130_uUSlTzTZILKONe56XMqmZELqVS6NX2Sb.jpg",price: 2500 },
      { name: "Suspension Tuning",img:"https://t4.ftcdn.net/jpg/20/41/22/55/240_F_2041225530_q4CDcfZ0Cm8k9HV0zueIG4bXtylF0A2y.jpg", price: 1800 },
      { name: "Oil Seal Replacement", img:"https://t4.ftcdn.net/jpg/04/60/17/63/240_F_460176320_LKvR3NC9m1K7wY4cYLRMEDItGimbro0c.jpg",price: 1200 },
      
    ]
  },

  {
    id: "electrical-system",
    title: "Electrical System",
    image:"https://t4.ftcdn.net/jpg/15/40/90/31/240_F_1540903152_Xm270qa5Q5JJ0NoDNBvTv1oCEQPh0iqF.jpg",
    catagory: "Motorcycle Repair",desc:"Professional electrical diagnostics and repairs for batteries, wiring and sensors.",
   icon: <GiElectricalCrescent/>,
    services: [
      { name: "Battery Testing",img:"https://t4.ftcdn.net/jpg/15/40/90/31/240_F_1540903152_Xm270qa5Q5JJ0NoDNBvTv1oCEQPh0iqF.jpg", price: 300 },
      { name: "Wiring Repair",img:"https://t3.ftcdn.net/jpg/15/85/90/42/240_F_1585904251_iAmvCSc8qSTqNm6mbHvxHcxj9v8VTEsz.jpg", price: 1200 },
      { name: "Starter Motor Service",img:"https://t4.ftcdn.net/jpg/05/13/46/19/240_F_513461993_UfHDwPIxTBCa0Fk7VTU3sYliKDh4BVZc.jpg", price: 1500 },
      { name: "Lighting System Fix", img:"https://t4.ftcdn.net/jpg/17/01/86/65/240_F_1701866517_fyBzYaqvBo42dUJG9dzsI9XjliBxJMFv.jpg",price: 800 },
      { name: "Sensor Diagnostics",img:"https://t4.ftcdn.net/jpg/20/16/09/99/240_F_2016099957_6Yyv1AVVHRTGaKeQTRN81bzDgYAFE5X0.jpg", price: 600 }
    ]
  },

  {
    id: "chain-transmission",
    title: "Chain & Transmission",desc:"Maintain smooth power delivery with chain, sprocket and transmission servicing.",
    catagory: "Motorcycle Repair",
    image:"https://t4.ftcdn.net/jpg/20/65/35/13/240_F_2065351301_kBMEulMANjxzLNHNcAbcqrIHzxSjlp9L.jpg",
   icon: <GiAndromedaChain/>,
    services: [
      { name: "Chain Cleaning",img:"https://t4.ftcdn.net/jpg/20/65/35/13/240_F_2065351301_kBMEulMANjxzLNHNcAbcqrIHzxSjlp9L.jpg", price: 300 },
      { name: "Chain Lubrication",img:"https://t3.ftcdn.net/jpg/20/61/23/64/240_F_2061236469_YM5aWkMEx1czmzHgCQhZ2Vj05boud15o.jpg", price: 200 },
      { name: "Chain Replacement",img:"https://t3.ftcdn.net/jpg/06/48/44/54/240_F_648445402_ZouezdjxF8XCmZliCPQvTIXl6CYvhDqJ.jpg", price: 1500 },
      { name: "Sprocket Replacement", img:"https://t4.ftcdn.net/jpg/15/61/54/15/240_F_1561541531_rCxnR5YJ2JzsKSNHvxtNihhJNtrQGFw6.jpg",price: 2000 },
      { name: "Gear Box Service",img:"https://t4.ftcdn.net/jpg/19/41/50/35/240_F_1941503563_LW1vFmAiGO2U8yqWI4LHbqxXfDjg1oq5.jpg", price: 3500 }
    ]
  },

  {
    id: "tyre-wheel",
    title: "Tyre & Wheel",desc:"Enhance grip, balance and road safety with tyre and wheel maintenance services.",
    catagory: "Motorcycle Repair",
    image:"https://t4.ftcdn.net/jpg/03/91/56/21/240_F_391562150_gtfAkIR2m4GKGjcJbo4rKi7QwWvQ4tsa.jpg",
 icon: <GiCarWheel/>,
    services: [
      { name: "Tyre Replacement",img:"https://t4.ftcdn.net/jpg/03/91/56/21/240_F_391562150_gtfAkIR2m4GKGjcJbo4rKi7QwWvQ4tsa.jpg", price: 500 },
      { name: "Wheel Balancing", img:"https://t4.ftcdn.net/jpg/02/87/37/15/240_F_287371537_VzhYvTtRzF85Lup2CtAECVxIgSYYOGRk.jpg",price: 400 },
      { name: "Wheel Alignment",img:"https://t3.ftcdn.net/jpg/02/22/20/24/240_F_222202422_olU63Rrgski89CX5Pw7CVPv4MrbkNbW1.jpg", price: 600 },
      { name: "Puncture Repair",img:"https://t4.ftcdn.net/jpg/16/57/92/47/240_F_1657924737_8oV9DhFGuO6C9s0t7TXhqYc6L00cICbs.jpg", price: 150 },
      { name: "Rim Inspection",img:"https://t4.ftcdn.net/jpg/09/90/99/27/240_F_990992786_E21HSb6zfNoPuUGHaXiOBKs316pDJQQe.jpg", price: 300 }
    ]
  },

  {
    id: "accesories-mod",
    title: "Accessories & Modification",desc:"Customize your motorcycle with premium accessories, lighting and performance upgrades.",
    catagory: "Motorcycle Repair",
    image:"https://t4.ftcdn.net/jpg/20/60/52/05/240_F_2060520582_PJeCrSd2dTNI1gBPjXCqhAjyovfWtO2D.jpg",
icon: <GrUpgrade/>,
    services: [
      { name: "Exhaust Upgrade",img:"https://t4.ftcdn.net/jpg/20/60/52/05/240_F_2060520582_PJeCrSd2dTNI1gBPjXCqhAjyovfWtO2D.jpg", price: 3000 },
      { name: "LED Light Setup",img:"https://t3.ftcdn.net/jpg/17/63/30/22/240_F_1763302270_aepHEkg7agoat866Bj08hWB03Q64HjSv.jpg", price: 1000 },
      { name: "Handle Bar Customization",img:"https://as1.ftcdn.net/v2/jpg/18/68/91/32/1000_F_1868913273_lxBtIrkYBWzs0z5jzSQCH8dfyX77R1TR.jpg", price: 1500 },
   
      { name: "Custom Body Kit",img:"https://images.pexels.com/photos/37501800/pexels-photo-37501800.jpeg", price: 5000 }
    ]
  },

  {
    id: "clean-detailing",
    title: "Cleaning & Detailing",desc:"Keep your motorcycle looking showroom fresh with professional detailing and protection.",
    catagory: "Motorcycle Repair",
    image:"https://t4.ftcdn.net/jpg/05/07/14/85/240_F_507148514_3yxNP7eUvWjxsoLIxvI18FQWfDgSaGts.jpg",
  icon: <MdOutlineCleaningServices/>,
    services: [
      { name: "Bike Washing",img:"https://t4.ftcdn.net/jpg/05/07/14/85/240_F_507148514_3yxNP7eUvWjxsoLIxvI18FQWfDgSaGts.jpg", price: 200 },
      { name: "Engine Cleaning", img:"https://images.pexels.com/photos/11536993/pexels-photo-11536993.jpeg",price: 800 },
      { name: "Chain Deep Clean", img:"https://images.pexels.com/photos/34240236/pexels-photo-34240236.jpeg",price: 500 },
      { name: "Polishing", img:"https://images.pexels.com/photos/4876631/pexels-photo-4876631.jpeg",price: 1200 },
      { name: "Ceramic Coating", img:"https://t4.ftcdn.net/jpg/10/36/60/87/240_F_1036608737_noZJTUQ5TuAWQYFgjgo2MpJ8PWW1gsyR.jpg",price: 6000 }
    ]
  },

  {
    id: "general-maintenance",
    title: "General Maintenance",desc:"Routine maintenance and inspections designed to keep your bike in peak condition.",
    catagory: "Motorcycle Repair",
    image:"https://t3.ftcdn.net/jpg/10/01/72/60/240_F_1001726059_qFhyLLHCJVezVaH4ueQmCP653aLN8By2.jpg",
  icon: <GrHostMaintenance />,
    services: [
      { name: "Full Bike Service",img:"https://t3.ftcdn.net/jpg/10/01/72/60/240_F_1001726059_qFhyLLHCJVezVaH4ueQmCP653aLN8By2.jpg", price: 2500 },
      { name: "Oil Change",img:"https://t3.ftcdn.net/jpg/07/13/38/32/240_F_713383209_fcnjlb3iWL0ZWvfdLSUaZbtIim1FqYWe.jpg", price: 700 },
      { name: "Filter Replacement",img:"https://t3.ftcdn.net/jpg/02/10/88/14/240_F_210881473_HSqZmXVzcpClSe5pGnjGqKAZLZlZcEck.jpg", price: 500 },
      { name: "Spark Plug Change", img:"https://t3.ftcdn.net/jpg/03/15/26/64/240_F_315266484_fJzI7aZE87GoIGel81soGn8pMUWMA7af.jpg",price: 400 },
      { name: "Periodic Inspection",img:"https://t4.ftcdn.net/jpg/10/01/72/49/240_F_1001724901_KbNeF6qYmSbESLaTDUFP5wo4ligjSQ7w.jpg", price: 800 }
    ]
  }
];


export const mechanicsAPI = [
  {
    id: 1,
    type:"Car",
    name: "Michael Anderson",
    role: "Senior Engine Specialist",
    image:
      "https://t4.ftcdn.net/jpg/07/37/77/91/240_F_737779195_7tb6dNCdaAZYKJUdfdEpkmbuzgXb8d0t.jpg",
    experience: "12+ Years",
    completedJobs: 2450,
    rating: 4.9,
    reviews: 1280,
    speciality: [
      "Engine Diagnostics",
      "ECU Tuning",
      "Performance Upgrade",
    ],
  },

 {
  id: 2,
  type: "Car",
  name: "David Wilson",
  role: "Brake System Specialist",
  image: "https://t3.ftcdn.net/jpg/20/38/06/82/240_F_2038068290_NSCRpNWEH9ygqqOvuwaZbwsZAUTceTW4.jpg",
  experience: "10+ Years",
  completedJobs: 2100,
  rating: 4.8,
  reviews: 1120,
  speciality: [
    "ABS Diagnostics",
    "Brake Repair",
    "Disc Replacement",
  ],
},
{
  id: 3,
  type: "Car",
  name: "Robert Johnson",
  role: "Suspension Expert",
  image: "https://t3.ftcdn.net/jpg/19/27/96/72/240_F_1927967246_KfEVzffuT4pP8tLqO3rKOdgiVNBrVKsr.jpg",
  experience: "11+ Years",
  completedJobs: 2300,
  rating: 4.9,
  reviews: 1360,
  speciality: [
    "Wheel Alignment",
    "Suspension Tuning",
    "Shock Absorber Repair",
  ],
},
{
  id: 4,
  type: "Car",
  name: "James Martinez",
  role: "Electrical Technician",
  image: "https://t4.ftcdn.net/jpg/18/59/32/75/240_F_1859327543_Co7IrwMx9Rk7xtmlVt4ZfvouQsJIZaBG.jpg",
  experience: "9+ Years",
  completedJobs: 1850,
  rating: 4.7,
  reviews: 980,
  speciality: [
    "ECU Programming",
    "Battery Systems",
    "Wiring Diagnostics",
  ],
},
{
  id: 5,
  type: "Bike",
  name: "Daniel Brown",
  role: "Motorcycle Engine Expert",
  image: "https://t3.ftcdn.net/jpg/20/24/19/18/240_F_2024191888_MPXsktZArQwnvLOQlSVd7NxifttjkOFJ.jpg",
  experience: "8+ Years",
  completedJobs: 1700,
  rating: 4.8,
  reviews: 890,
  speciality: [
    "Engine Rebuild",
    "Fuel Injection",
    "Performance Tuning",
  ],
},
{
  id: 6,
  type: "Bike",
  name: "Ryan Taylor",
  role: "Bike Suspension Specialist",
  image: "https://t3.ftcdn.net/jpg/06/39/22/74/240_F_639227497_VLsEzj7XJhrEYBMp9bPNYGgnEpuhYKR0.jpg",
  experience: "7+ Years",
  completedJobs: 1500,
  rating: 4.7,
  reviews: 820,
  speciality: [
    "Front Fork Service",
    "Rear Shock Repair",
    "Handling Setup",
  ],
},
{
  id: 7,
  type: "Bike",
  name: "Andrew Clark",
  role: "Transmission Specialist",
  image: "https://t4.ftcdn.net/jpg/06/51/89/69/240_F_651896964_qVg23mt1oXMlqbmqICp1IExAQK48Uyo9.jpg",
  experience: "9+ Years",
  completedJobs: 2050,
  rating: 4.9,
  reviews: 1240,
  speciality: [
    "Gearbox Repair",
    "Chain Drive Setup",
    "Clutch Service",
  ],
},
{
  id: 8,
  type: "Car",
  name: "Christopher Lee",
  role: "Performance Engineer",
  image: "https://t4.ftcdn.net/jpg/12/26/18/27/240_F_1226182758_LVMnTpoun1YQWMCxmigjhKXGCJ8ZoIZI.jpg",
  experience: "15+ Years",
  completedJobs: 3200,
  rating: 5.0,
  reviews: 1800,
  speciality: [
    "Turbo Setup",
    "Dyno Tuning",
    "Race Performance",
  ],
},
{
  id: 9,
  type: "Bike",
  name: "Kevin White",
  role: "Custom Bike Builder",
  image: "https://t3.ftcdn.net/jpg/11/18/68/70/240_F_1118687059_54IPe8uiPCOmFjGAMfLJ5ZkxKcmv0apD.jpg",
  experience: "12+ Years",
  completedJobs: 2400,
  rating: 4.9,
  reviews: 1420,
  speciality: [
    "Custom Fabrication",
    "Body Kits",
    "Exhaust Upgrades",
  ],
},
{
  id: 10,
  type: "Car",
  name: "Thomas Harris",
  role: "AC & Cooling Specialist",
  image: "https://t3.ftcdn.net/jpg/15/48/32/54/240_F_1548325432_c4lz48ftqKASHHETM5363Fr5g84G9rH9.jpg",
  experience: "13+ Years",
  completedJobs: 2800,
  rating: 4.8,
  reviews: 1560,
  speciality: [
    "AC Repair",
    "Radiator Service",
    "Cooling Diagnostics",
  ],
},
{
  id: 11,
  type: "Bike",
  name: "Jason Walker",
  role: "Electrical & ECU Specialist",
  image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
  experience: "10+ Years",
  completedJobs: 2200,
  rating: 4.9,
  reviews: 1310,
  speciality: [
    "ECU Mapping",
    "Sensor Diagnostics",
    "Electrical Repair",
  ],
},

  {
    id: 12,
    type: "Bike",
    name: "Ryan Mitchell",
    role: "Senior Engine Specialist",
    image: "https://t3.ftcdn.net/jpg/04/42/94/60/240_F_442946065_8BHf8jMXcTqYeW7Pt7ASmbnyYPmK8new.jpg",
    experience: "12+ Years",
    completedJobs: 2450,
    rating: 4.9,
    reviews: 1280,
    speciality: [
      "Engine Diagnostics",
      "Engine Tuning",
      "ECU Remapping",
    ],
  },

  {
    id: 13,
    type: "Bike",
    name: "Daniel Cooper",
    role: "Brake System Expert",
    image: "https://t4.ftcdn.net/jpg/17/73/06/97/240_F_1773069709_S9Vg3rhlfkiFYAMSsvDmac7w4dxDJqT3.jpg",
    experience: "10+ Years",
    completedJobs: 2100,
    rating: 4.8,
    reviews: 1040,
    speciality: [
      "Brake Pad Replacement",
      "ABS Check",
      "Brake Disc Service",
    ],
  },

  {
    id: 14,
    type: "Bike",
    name: "James Walker",
    role: "Suspension Technician",
    image: "https://t3.ftcdn.net/jpg/09/74/17/32/240_F_974173219_64DNCpYTQvipKDHgppfssQkWG68Mz2Pf.jpg",
    experience: "11+ Years",
    completedJobs: 1950,
    rating: 4.9,
    reviews: 980,
    speciality: [
      "Front Fork Service",
      "Suspension Tuning",
      "Rear Shock Repair",
    ],
  },

  {
    id: 15,
    type: "Bike",
    name: "David Scott",
    role: "Electrical Specialist",
    image: "https://t3.ftcdn.net/jpg/05/62/08/90/240_F_562089056_5WZANi3TxafULrqGmt1tvFlJWXuMs9Rv.jpg",
    experience: "9+ Years",
    completedJobs: 1750,
    rating: 4.8,
    reviews: 860,
    speciality: [
      "Battery Testing",
      "Wiring Repair",
      "Sensor Diagnostics",
    ],
  },

  {
    id: 16,
    type: "Bike",
    name: "Andrew Lewis",
    role: "Transmission Engineer",
    image: "https://t3.ftcdn.net/jpg/13/26/34/00/240_F_1326340089_yRfU3QLkzPYu2L6nu7UgVqtoAgTQ5mGI.jpg",
    experience: "13+ Years",
    completedJobs: 2600,
    rating: 5.0,
    reviews: 1430,
    speciality: [
      "Chain Replacement",
      "Gear Box Service",
      "Sprocket Replacement",
    ],
  },

  {
    id: 17,
    type: "Bike",
    name: "Kevin Martin",
    role: "Tyre & Wheel Specialist",
    image: "https://t3.ftcdn.net/jpg/01/99/28/66/240_F_199286665_8uovHdAFR7vZlfDnjgzWwq5qEpLgnX7m.jpg",
    experience: "8+ Years",
    completedJobs: 1620,
    rating: 4.7,
    reviews: 760,
    speciality: [
      "Wheel Alignment",
      "Wheel Balancing",
      "Tyre Replacement",
    ],
  },

  {
    id: 18,
    type: "Bike",
    name: "Christopher Lee",
    role: "Modification Expert",
    image: "https://t3.ftcdn.net/jpg/08/05/47/30/240_F_805473025_ar4WBK0RrmLYZ1rB8A7JwEOwkDD2LcqF.jpg",
    experience: "15+ Years",
    completedJobs: 3200,
    rating: 5.0,
    reviews: 1800,
    speciality: [
      "Exhaust Upgrade",
      "LED Setup",
      "Custom Body Kit",
    ],
  },

  {
    id: 19,
    type: "Bike",
    name: "Matthew Clark",
    role: "Detailing Specialist",
    image: "https://t3.ftcdn.net/jpg/01/80/19/54/240_F_180195440_lZxy5KleSTcP6UQm6fO4eRYhQJlqJdqu.jpg",
    experience: "9+ Years",
    completedJobs: 1900,
    rating: 4.9,
    reviews: 920,
    speciality: [
      "Ceramic Coating",
      "Bike Washing",
      "Engine Cleaning",
    ],
  },

  {
    id: 20,
    type: "Bike",
    name: "Robert Wilson",
    role: "Maintenance Supervisor",
    image: "https://t3.ftcdn.net/jpg/04/44/93/60/240_F_444936058_LBwo1q9xG4f2iF0zbWeWgUY2mJfAyD2g.jpg",
    experience: "14+ Years",
    completedJobs: 2850,
    rating: 4.9,
    reviews: 1560,
    speciality: [
      "Full Bike Service",
      "Oil Change",
      "Periodic Inspection",
    ],
  },
];



export const carPartsAPI = [
{
    id: 1,
    NameCatagory: "Engine-parts",
    title: "Wholesale Price Kta19 Diesel Engine Parts 3088303 Motor Auto Cylinder Block for Cummins",
    model: "KTA19",
    image: "https://image.made-in-china.com/43f34j00GaDjeBHgCcbO/Wholesale-Price-Kta19-Diesel-Engine-Parts-3088303-Motor-Auto-Cylinder-Block-for-Cummins.webp",

    type: "Cylinder block",
    partName: "cylinder block",
    engineModel: "KTA19 KTA38",
    engineType: "Diesel Engine",
    fuel: "Diesel",

    price: 4990,
    customization: "Available",
    quality: "Brand New",
    bodyMaterial: "iron",
    material: "iron",

    warranty: "3 Months",

    oeNumber: [
      "3088303"
    ],

    specification: "Standard",
    origin: "china",
    hsCode: "8409999100",

    moq: "1",

    transportPackage: "Standard carton (on request)",
    deliveryTime: "5-7 Days",
    weight: "Standard",

    leadTime: [
      {
        quantity: "1-2 Sets",
        days: "15 Days"
      },
      {
        quantity: "3-20 Sets",
        days: "35 Days"
      },
      {
        quantity: ">20 Sets",
        days: "Negotiable"
      }
    ]
  },
 
  {
    id: 2,
    NameCatagory: "Engine-parts",
    title: "Factory Price New Cummins M11 Cylinder Block Diesel Engine Parts 10.8L Inline 6 OEM 3803717 4060393 for Heavy Truck Excavator Generator Motor",
    model: "M11",
    image: "https://image.made-in-china.com/43f34j00uEgSKsrIYeka/Factory-Price-New-Cummins-M11-Cylinder-Block-Diesel-Engine-Parts-10-8L-Inline-6-OEM-3803717-4060393-for-Heavy-Truck-Excavator-Generator-Motor.webp",

    type: "Engine block",
    company: "Cummins",
    brand: "Cummins",

    price: 2000,
    customization: "Available",

    material: "Iron",
    technics: "Casting",

    warranty: "12 Months",
    afterSalesService: "Standard",

    oeNumber: [
      "3803717",
      "4060393",
      "3064223",
      "3800717"
    ],

    displacement: "10.8L",

    application: [
      "Heavy Truck",
      "Excavator",
      "Generator"
    ],

    layout: "Vertical Inline 6-Cylinder",
    coolingSystem: "Water-Cooled 4-Stroke",

    specification: "301kg",

    origin: "China",

    moq: "1 PCS",

    transportPackage: "Wooden Box",

    trademark: "Komotashi",

    productionCapacity: "100 PCS/Month",

    packageSize: {
      length: "113cm",
      width: "65cm",
      height: "69cm"
    },

    packageGrossWeight: "315kg",

    leadTime: [
      {
        quantity: "1-2 Sets",
        days: "15 Days"
      },
      {
        quantity: "3-20 Sets",
        days: "35 Days"
      },
      {
        quantity: ">20 Sets",
        days: "Negotiable"
      }
    ]
  },

  {
    id: 3,
    NameCatagory: "Engine-parts",
    title: "Factory Price K19 Kta19 Diesel Engine Spare Parts Cylinder Head Assy 3068401 3072438 3081070 3640321 3646324 3646323 3811985 Cylinder Head for Cummins",
    model: "3646324 3811985 3811988 3068401 3072438 3081070",
    image: "https://image.made-in-china.com/43f34j00nbBvhNYklQcM/Factory-Price-K19-Kta19-Diesel-Engine-Spare-Parts-Cylinder-Head-Assy-3068401-3072438-3081070-3640321-3646324-3646323-3811985-Cylinder-Head-for-Cummins.webp",

    type: "Cylinder Head",
    partNumber: "3811985 4915442",
    company: "Cummins",
    brand: "Cummins",
    trademark: "TuoHang",

    price: 100,
    customization: "Available",
    feature: "100% Brand New",

    material: "Aluminum Alloy",
    technics: "Casting",

    warranty: "6months",
    afterSalesService: "Standard",
    installationMethod: "Fixed",

    oeNumber: [
      "3803717",
      "4060393",
      "3064223",
      "3800717"
    ],

    displacement: "10.8L",
    engineModel: "Kta19 Kta38 Kta50",
    fuelType: "Diesel",

    application: [
      "Heavy Truck",
      "Excavator",
      "Generator"
    ],
    applicableIndustries: "Engineering Machinery, Construction Works",

    layout: "Vertical Inline 6-Cylinder",
    coolingSystem: "Water-Cooled 4-Stroke",

    specification: "STD",
    origin: "China",
    hsCode: "8409999100",

    moq: "1 PCS",
    inStock: "Avaliable",
    shipment: "by Express/Air/Sea",
    universalFitment: "Yes",
    productionCapacity: "5000000/Year",

    transportPackage: "as Customer Request",
    packageSize: {
      length: "30.00cm",
      width: "25.00cm",
      height: "30.00cm"
    },
    packageGrossWeight: "20.000kg",

    deliveryTime: "3-5 Working Days",
    leadTime: [
      {
        quantity: "1-2 Sets",
        days: "15 Days"
      },
      {
        quantity: "3-20 Sets",
        days: "35 Days"
      },
      {
        quantity: ">20 Sets",
        days: "Negotiable"
      }
    ]
  },
  {
  id: 4,
  NameCatagory: "Engine-parts",
  title: "Best Price Engine Cylinder Head 51031006299 51031006410 51031006427 51031006468 for Man Engine",
  model: "MC 07, MC 11, MC 13,51031006299 51031006410 510310",
  image: "https://image.made-in-china.com/43f34j00hBTcemMECvrp/Best-Price-Engine-Cylinder-Head-51031006299-51031006410-51031006427-51031006468-for-Man-Engine.webp",

  type: "Engine block",
  company: "Cummins",
  brand: "Cummins",

  price: 1000,
  customization: "Available",

  material: "Iron",
  technics: "Casting",

  warranty: "12 Months",
  afterSalesService: "Standard",

  oeNumber: [
    "3803717",
    "4060393",
    "3064223",
    "3800717"
  ],

  displacement: "10.8L",

  application: [
    "Heavy Truck",
    "Excavator",
    "Generator"
  ],

  layout: "Vertical Inline 6-Cylinder",
  coolingSystem: "Water-Cooled 4-Stroke",

  specification: "301kg",

  origin: "China",

  moq: "1 PCS",

  transportPackage: "Wooden Box",

  trademark: "Komotashi",

  productionCapacity: "100 PCS/Month",

  packageSize: {
    length: "113cm",
    width: "65cm",
    height: "69cm"
  },

  packageGrossWeight: "315kg",

  leadTime: [
    {
      quantity: "1-2 Sets",
      days: "15 Days"
    },
    {
      quantity: "3-20 Sets",
      days: "35 Days"
    },
    {
      quantity: ">20 Sets",
      days: "Negotiable"
    }
  ]
},
{
    id: 5,
    NameCatagory: "Engine-parts",
    title: "Piston for Daihatsu Dk20/Dk20e/DC17/De18 Ship Marine Engine",
    model: "P-FT031-00",
    image: "https://image.made-in-china.com/43f34j00QbLoHJRmhPzi/Piston-for-Daihatsu-Dk20-Dk20e-DC17-De18-Ship-Marine-Engine.webp",

    type: "Piston",
    engineName: "N45 Engine",
    company: "Daihatsu",
    brand: "Daihatsu",
    trademark: "Henweit",

    price: 600,
    customization: "Available",
    quality: "OE Quality",
    characters: "Alfin",
    surface: "Graphite",

    material: "Aluminum",
    technics: "Casting",

    warranty: "1 Year",
    afterSalesService: "Standard",

    oeNumber: [
      "8094740",
      "504208873",
      "0102700",
      "4026960",
      "2855531",
      "4089453"
    ],

    displacement: "10.8L",

    application: [
      "Heavy Truck",
      "Excavator",
      "Generator",
      "Ship Marine Engine"
    ],

    layout: "Vertical Inline 6-Cylinder",
    coolingSystem: "Water-Cooled 4-Stroke",

    specification: "Standard",
    origin: "China",

    moq: "1 PCS",

    transportPackage: "Henweit Packing",

    productionCapacity: "350000 PCS Per Year",

    packageSize: {
      length: "113cm",
      width: "65cm",
      height: "69cm"
    },

    packageGrossWeight: "315kg",

    leadTime: [
      {
        quantity: "1-2 Sets",
        days: "15 Days"
      },
      {
        quantity: "3-20 Sets",
        days: "35 Days"
      },
      {
        quantity: ">20 Sets",
        days: "Negotiable"
      }
    ]
  },
  {
    id: 6,
    NameCatagory: "Engine-parts",
    title: "40269600 Light Commercial Piston Kit and N45 Euro 5 Engine Rebuild OEM-Grade",
    model: "P-FT031-00",
    image: "https://image.made-in-china.com/43f34j00BiPCJHnUyMoS/40269600-Light-Commercial-Piston-Kit-and-N45-Euro-5-Engine-Rebuild-OEM-Grade.webp",

    type: "Piston Kit",
    engineName: "N45 Engine",
    company: "Henweit",
    brand: "Henweit",
    trademark: "Henweit",

    price: 110,
    customization: "Available",
    quality: "OE Quality",
    characters: "Alfin",
    surface: "Graphite",

    material: "Aluminum",
    technics: "Casting",

    warranty: "1 Year",
    afterSalesService: "Standard",

    oeNumber: [
      "8094740",
      "504208873",
      "0102700",
      "4026960",
      "2855531",
      "4089453"
    ],

    displacement: "10.8L",

    application: [
      "Light Commercial",
      "Heavy Truck",
      "Excavator",
      "Generator"
    ],

    layout: "Vertical Inline 6-Cylinder",
    coolingSystem: "Water-Cooled 4-Stroke",

    specification: "Standard",
    origin: "China",

    moq: "1 PCS",

    transportPackage: "Henweit Packing",

    productionCapacity: "350000 PCS Per Year",

    packageSize: {
      length: "113cm",
      width: "65cm",
      height: "69cm"
    },

    packageGrossWeight: "315kg",

    leadTime: [
      {
        quantity: "1-2 Sets",
        days: "15 Days"
      },
      {
        quantity: "3-20 Sets",
        days: "35 Days"
      },
      {
        quantity: ">20 Sets",
        days: "Negotiable"
      }
    ]
  },
{
    id: 7,
    NameCatagory: "Engine-parts",
    title: "High Quality Component Npr Bronze Piston Ring in Various Types and Materials to Suit Each Application",
    model: "Standard size or Customized Size",
    image: "https://image.made-in-china.com/43f34j00ymuBcPiMwCok/High-Quality-Component-Npr-Bronze-Piston-Ring-in-Various-Types-and-Materials-to-Suit-Each-Application.webp",

    type: "Transmission piston ring",
    company: "SJ",
    brand: "SJ",
    trademark: "SJ",

    price: 20,
    customization: "Available",
    certification: "ISO9001",
    color: "Black",
    
    pressure: "0~0.05Mpa",
    temperature: "-35~220°C",

    material: "Cast iron",
    technics: "Casting",

    warranty: "1 Year",
    afterSalesService: "Standard",

    oeNumber: [
      "8094740",
      "504208873",
      "0102700",
      "4026960",
      "2855531",
      "4089453"
    ],

    displacement: "10.8L",

    application: [
      "Any Excavator"
    ],
    relatedBrands: [
      "Komatsu",
      "Hitachi",
      "Sumitomo",
      "Doosan",
      "Daewoo",
      "Hyundai",
      "Caterpillar",
      "Volvo",
      "Kato"
    ],

    layout: "Vertical Inline 6-Cylinder",
    coolingSystem: "Water-Cooled 4-Stroke",

    specification: "Standard",
    origin: "China",

    moq: "100PCS",

    transportPackage: "SJ PACKING",
    deliveryTime: "2-5 Days",

    productionCapacity: "350000 PCS Per Year",

    packageSize: {
      length: "113cm",
      width: "65cm",
      height: "69cm"
    },

    packageGrossWeight: "315kg",

    leadTime: [
      {
        quantity: "1-2 Sets",
        days: "15 Days"
      },
      {
        quantity: "3-20 Sets",
        days: "35 Days"
      },
      {
        quantity: ">20 Sets",
        days: "Negotiable"
      }
    ]
  },
{
    id: 8,
    NameCatagory: "Engine-parts",
    title: "CTPR Piston Ring Suitable For VOLVO MD60 98.43mm 08-405500-10",
    model: "Standard size or Customized Size",
    image: "https://image.made-in-china.com/43f34j00SRhBcDgdlKpN/CTPR-Piston-Ring-Suitable-For-VOLVO-MD60-98-43mm-08-405500-10.webp",

    type: "Oil-control Ring",
    company: "CTPR",
    brand: "CTPR",
    trademark: "CTPR",

    price: 20,
    customization: "Custom Size / Design",
    certification: "ISO 9001/CE",
    surfaceTreatment: "Chrome",
    performance: "Temperature resistance / Pressure Rating",

    material: "Steel",
    build: "Steel",
    technics: "Casting",

    warranty: "24 Months",
    afterSalesService: "1 Year Gurantee",

    oeNumber: [
      "08-405500-10"
    ],

    displacement: "10.8L",
    engineType: "Diesel",

    application: [
      "Excavator",
      "Tractor",
      "Truck",
      "Car"
    ],
    category: [
      "Automotive",
      "Industrial",
      "Motorcycle"
    ],
    relatedBrands: [
      "Volvo"
    ],

    layout: "Vertical Inline 6-Cylinder",
    coolingSystem: "Water-Cooled 4-Stroke",

    specification: "2.385+3. 160+4.747",
    origin: "Guangzhou, China",

    moq: "100PCS",

    transportPackage: "Paper Carton",
    deliveryTime: "2-5 Days",

    productionCapacity: "350000 PCS Per Year",

    packageSize: {
      length: "113cm",
      width: "65cm",
      height: "69cm"
    },

    packageGrossWeight: "315kg",

    leadTime: [
      {
        quantity: "1-2 Sets",
        days: "15 Days"
      },
      {
        quantity: "3-20 Sets",
        days: "35 Days"
      },
      {
        quantity: ">20 Sets",
        days: "Negotiable"
      }
    ]
  },
{
    id: 9,
    NameCatagory: "Engine-parts",
    title: "Diesel Engine Parts Isde-6D6.7 Crankshaft OEM Number 4934862",
    model: "ISDE-6D6.7",
    image: "https://image.made-in-china.com/43f34j00aQqBMrtdaLkl/Diesel-Engine-Parts-Isde-6D6-7-Crankshaft-OEM-Number-4934862.webp",

    type: "Crankshaft",
    company: "CTPR",
    brand: "CTPR",
    trademark: "CTPR",

    price: 280,
    customization: "Custom Size / Design",
    certification: "ISO 9001/CE",
    surfaceTreatment: "Chrome",
    performance: "Temperature resistance / Pressure Rating",

    material: "Steel",
    build: "Steel",
    technics: "Casting",

    warranty: "24 Months",
    afterSalesService: "1 Year Gurantee",

    oeNumber: [
      "4934862",
      "5301008",
      "5301010",
      "5301009"
    ],

    displacement: "6.7L",
    engineType: "Diesel",

    application: [
      "Excavator",
      "Tractor",
      "Truck",
      "Car"
    ],
    category: [
      "Automotive",
      "Industrial",
      "Motorcycle"
    ],
    relatedBrands: [
      "Volvo"
    ],

    layout: "Vertical Inline 6-Cylinder",
    coolingSystem: "Water-Cooled 4-Stroke",

    specification: "Standard",
    origin: "Guangzhou, China",

    moq: "100PCS",

    transportPackage: "Paper Carton",
    deliveryTime: "7-15 Days after Prepayment",

    productionCapacity: "350000 PCS Per Year",

    packageSize: {
      length: "113cm",
      width: "65cm",
      height: "69cm"
    },

    packageGrossWeight: "315kg",

    leadTime: [
      {
        quantity: "1-2 Sets",
        days: "15 Days"
      },
      {
        quantity: "3-20 Sets",
        days: "35 Days"
      },
      {
        quantity: ">20 Sets",
        days: "Negotiable"
      }
    ]
  },
{
    id: 10,
    NameCatagory: "Engine-parts",
    title: "Excellent quality Aftermarket Engine Spare Parts Crankshaft 3306 2W7458",
    model: "3306",
    image: "https://image.made-in-china.com/43f34j00AuNGdwRaETpm/Excellent-quality-Aftermarket-Engine-Spare-Parts-Crankshaft-3306-2W7458.webp",

    type: "Crankshaft",
    company: "DIRON",
    brand: "DIRON",
    trademark: "DIRON",

    price: 130,
    customization: "Custom Size / Design",
    certification: "ISO 9001/CE",
    surfaceTreatment: "Chrome",
    performance: "Temperature resistance / Pressure Rating",

    material: "Iron",
    build: "Iron",
    technics: "Casting",

    warranty: "24 Months",
    afterSalesService: "1 Year Gurantee",

    oeNumber: [
      "2W7458"
    ],

    displacement: "6.7L",
    engineType: "Diesel",

    application: [
      "Excavator",
      "Tractor",
      "Truck",
      "Car"
    ],
    category: [
      "Automotive",
      "Industrial",
      "Motorcycle"
    ],
    relatedBrands: [
      "Caterpillar"
    ],

    layout: "Vertical Inline 6-Cylinder",
    coolingSystem: "Water-Cooled 4-Stroke",

    specification: "Standard",
    origin: "Henan",
    hsCode: "84099991",

    moq: "100PCS",

    transportPackage: "Wooden Box",
    deliveryTime: "7-15 Days after Prepayment",

    productionCapacity: "5000PCS/Year",

    packageSize: {
      length: "113cm",
      width: "65cm",
      height: "69cm"
    },

    packageGrossWeight: "315kg",

    leadTime: [
      {
        quantity: "1-2 Sets",
        days: "15 Days"
      },
      {
        quantity: "3-20 Sets",
        days: "35 Days"
      },
      {
        quantity: ">20 Sets",
        days: "Negotiable"
      }
    ]
  },
{
    id: 11,
    NameCatagory: "Engine-parts",
    title: "Heavy Duty OEM Quality Diesel Gasoline High Precision Automotive Turbo Engine Auto Camshaft 24100-27000",
    model: "24100-27000",
    image: "https://image.made-in-china.com/43f34j00QmMBKFgzSkos/Heavy-Duty-OEM-Quality-Diesel-Gasoline-High-Precision-Automotive-Turbo-Engine-Auto-Camshaft-24100-27000.webp",

    type: "Camshaft",
    company: "Hyundai/Kia", // Based on the standard 24100-27000 2.0 Crdi part number pattern
    brand: "Original Standard",
    trademark: "OEM Available",

    price: 15,
    customization: "Custom Size / Design",
    precision: "High Precision",
    quality: "Original Standard",

    material: "Steel",
    technics: "Casting / Forging + CNC Machining",

    warranty: "24 Months",
    afterSalesService: "1 Year Gurantee",

    oeNumber: [
      "24100-27000"
    ],

    displacement: "2.0L",
    engineModel: "2.0 Crdi Diesel Engine",
    engineType: "Diesel / Gasoline",

    application: [
      "Engine Valve Train Parts",
      "Automotive"
    ],
    category: [
      "Automotive"
    ],

    layout: "Vertical Inline 4-Cylinder", // Typical layout for 2.0 Crdi engines
    specification: "standard",
    origin: "China",
    hsCode: "8409992000",

    moq: "1 PCS",

    transportPackage: "Carton, Wooden Case, Pallet According to Customer's",
    deliveryTime: "7-15 Days after Prepayment",

    productionCapacity: "1000PCS Per Month",

    packageSize: {
      length: "40.00cm",
      width: "10.00cm",
      height: "10.00cm"
    },

    packageGrossWeight: "7.000kg",

    leadTime: [
      {
        quantity: "1-1 Pieces",
        days: "15 Days"
      },
      {
        quantity: ">1 Pieces",
        days: "To be negotiated"
      }
    ]
  },
{
    id: 12,
    NameCatagory: "Engine-parts",
    title: "Brand New Car Spare Parts Auto Camshaft for Peugeot 405 309 205",
    model: "0801. N2",
    image: "https://image.made-in-china.com/43f34j00DFvlUZcWkjRJ/Brand-New-Car-Spare-Parts-Auto-Camshaft-for-Peugeot-405-309-205.webp",

    type: "Camshaft",
    company: "Peugeot/Citroen", 
    brand: "OEM Standard",
    trademark: "Neutral/Customized",

    price: 509,
    customization: "Custom Size / Design",
    condition: "100%New",
    quality: "OEM Standard",

    material: "Steel",
    technics: "Casting / Forging + CNC Machining",

    warranty: "24 Months",
    afterSalesService: "1 Year Gurantee",

    oeNumber: [
      "0801n2",
      "93091000",
      "Cp15009"
    ],

    engineCode: [
      "B2a",
      "Bfz",
      "Bdy"
    ],
    engineNumber: "K9K",

    application: [
      "Engine Valve Train Parts",
      "Automotive"
    ],
    applicableModels: [
      "For PEUGEOT",
      "For CITROEN BX VISA ZX"
    ],
    category: [
      "Automotive"
    ],
    relatedBrands: [
      "Peugeot",
      "Citroen"
    ],

    specification: "OEM Standard",
    origin: "China",

    moq: "1 PCS",

    transportPackage: "Carton",
    deliveryTime: "7-15 Days after Prepayment",

    productionCapacity: "50000 Pieces Per Month",

    packageSize: {
      length: "40.00cm",
      width: "5.00cm",
      height: "5.00cm"
    },

    packageGrossWeight: "1.000kg",

    leadTime: [
      {
        quantity: "1-1 Pieces",
        days: "15 Days"
      },
      {
        quantity: ">1 Pieces",
        days: "To be negotiated"
      }
    ]
  },
{
    id: 13,
    NameCatagory: "Engine-parts",
    title: "High Performance 1 0-1 5L Automobile Silent Transfer Case Engine Timing Chain Kits for Motorcycle Parts",
    model: "SC3-9-0",
    image: "https://image.made-in-china.com/43f34j00esMvlJyEMuoP/High-Performance-1-0-1-5L-Automobile-Silent-Transfer-Case-Engine-Timing-Chain-Kits-for-Motorcycle-Parts.webp",

    type: "Camshaft",
    company: "Peugeot/Citroen", 
    brand: "OEM Standard",
    trademark: "Neutral/Customized",

    price: 35,
    customization: "Custom Size / Design",
    condition: "100%New",
    quality: "OEM Standard",

    material: "Steel",
    technics: "Casting / Forging + CNC Machining",

    warranty: "24 Months",
    afterSalesService: "1 Year Gurantee",

    oeNumber: [
      "0801n2",
      "93091000",
      "Cp15009"
    ],

    engineCode: [
      "B2a",
      "Bfz",
      "Bdy"
    ],
    engineNumber: "K9K",

    application: [
      "Conveyer Equipment",
      "Packaging Machinery",
      "Electric Cars",
      "Motorcycle",
      "Agricultural Machinery",
      "Car",
      "Automobile",
    ],
    applicableModels: [
      "For PEUGEOT",
      "For CITROEN BX VISA ZX"
    ],
    category: [
      "Automotive"
    ],
    relatedBrands: [
      "Peugeot",
      "Citroen"
    ],

    specification: "OEM Standard",
    origin: "China",

    moq: "1 PCS",

    transportPackage: "Carton",
    deliveryTime: "7-15 Days after Prepayment",

    productionCapacity: "50000 Pieces Per Month",

    packageSize: {
      length: "40.00cm",
      width: "5.00cm",
      height: "5.00cm"
    },

    packageGrossWeight: "1.000kg",

    leadTime: [
      {
        quantity: "1-1 Pieces",
        days: "15 Days"
      },
      {
        quantity: ">1 Pieces",
        days: "To be negotiated"
      }
    ]
  },
{
    id: 14,
    NameCatagory: "Engine-parts",
    title: "High Performance 1 0-1 5L Automobile Silent Transfer Case Engine Timing Chain Kits for Motorcycle Parts",
    model: "SC3-9-0",
    image: "https://image.made-in-china.com/43f34j00esMvlJyEMuoP/High-Performance-1-0-1-5L-Automobile-Silent-Transfer-Case-Engine-Timing-Chain-Kits-for-Motorcycle-Parts.webp",

    type: "Timing Chain",
    company: "Peugeot/Citroen", 
    brand: "OEM Standard",
    trademark: "Neutral/Customized",

    price: 60,
    customization: "Custom Size / Design",
    condition: "100%New",
    quality: "OEM Standard",

    material: "Steel",
    technics: "Casting / Forging + CNC Machining",

    warranty: "24 Months",
    afterSalesService: "1 Year Gurantee",

    oeNumber: [
      "0801n2",
      "93091000",
      "Cp15009"
    ],

    engineCode: [
      "B2a",
      "Bfz",
      "Bdy"
    ],
    engineNumber: "K9K",

    application: [
      "Conveyer Equipment",
      "Packaging Machinery",
      "Electric Cars",
      "Motorcycle",
      "Agricultural Machinery",
      "Car",
      "Automobile",
    ],
    applicableModels: [
      "For PEUGEOT",
      "For CITROEN BX VISA ZX"
    ],
    category: [
      "Automotive"
    ],
    relatedBrands: [
      "Peugeot",
      "Citroen"
    ],

    specification: "OEM Standard",
    origin: "China",

    moq: "1 PCS",

    transportPackage: "Carton",
    deliveryTime: "7-15 Days after Prepayment",

    productionCapacity: "50000 Pieces Per Month",

    packageSize: {
      length: "40.00cm",
      width: "5.00cm",
      height: "5.00cm"
    },

    packageGrossWeight: "1.000kg",

    leadTime: [
      {
        quantity: "1-1 Pieces",
        days: "15 Days"
      },
      {
        quantity: ">1 Pieces",
        days: "To be negotiated"
      }
    ]
  },
{
    id: 15,
    NameCatagory: "Engine-parts",
    title: "Rubber Industrial Timing Belt Htd Std",
    model: "MXL XL L H XH XXH T2.5 T5 T10 T20 2M 3M 5M 8M",
    image: "https://image.made-in-china.com/43f34j00sENYUrycCbki/Rubber-Industrial-Timing-Belt-Htd-Std.webp",

    type: "Toothed Belt / Timing Belt",
    company: "CNFULO",
    brand: "CNFULO",
    trademark: "CNFULO",

    price: 80,
    customization: "Custom Size / Design",
    condition: "100%New",
    features: [
      "Flame-Retardant",
      "Anti-Static",
      "Oil-Distributed",
      "Cold-Resistant",
      "Corrosion-Resistant",
      "Heat-Resistant",
      "Alkali-Resistant",
      "Skid-Resistance",
      "Wear-Resistant",
      "Acid-Resistant",
      "High Temperature-Resistance"
    ],
    materialFeature: "Heat Oil Cold Fire Resistant",

    material: "Rubber",
    structure: "Roller Chain",
    detachableChainType: "Joe Buried Conveyor Chains",

    warranty: "24 Months",
    afterSalesService: "1 Year Gurantee",

    oeNumber: [],

    application: [
      "Transmission Chain",
      "Transpor",
      "Conveyer Equipment",
      "Packaging Machinery",
      "Electric Cars",
      "Motorcycle",
      "Agricultural Machinery",
      "Car",
      "Automobile"
    ],

    specification: "Complete",
    origin: "Zhejiang",
    hsCode: "40103500",

    moq: "1 PCS",

    transportPackage: "Carton",
    deliveryTime: "7-15 Days after Prepayment",

    productionCapacity: "10 million PCS/Year",

    packageSize: {
      length: "450.00cm",
      width: "350.00cm",
      height: "250.00cm"
    },

    packageGrossWeight: "1.000kg",

    leadTime: [
      {
        quantity: "1-1 Pieces",
        days: "15 Days"
      },
      {
        quantity: ">1 Pieces",
        days: "To be negotiated"
      }
    ]
  },
{
    id: 16,
    NameCatagory: "Engine-parts",
    title: "Durable Engine Torque Strut Mount for Mitsubishi Outlander Mn101572",
    model: "MN101572",
    image: "https://image.made-in-china.com/43f34j00pyztWuhrqYqk/Durable-Engine-Torque-Strut-Mount-for-Mitsubishi-Outlander-Mn101572.webp",

    type: "Engine Mount / Torque Strut Mount",
    component: "Upper Junction Plate",
    company: "MNK",
    brand: "MNK",
    trademark: "MNK",

    price: 65,
    customization: "Custom Size / Design",
    condition: "100%New",
    certification: "SGS",
    color: "Black",

    bodyMaterial: "Steel",
    shockReducingRubberMaterial: "NR",
    material: "Iron and Rubber",

    warranty: "24 Months",
    afterSalesService: "1 Year Gurantee",

    oeNumber: [
      "MN101572"
    ],

    applicableModels: [
      "Mitsubishi Outlander",
      "Mitsubishi Lancer",
      "Mitsubishi Galant",
      "Mitsubishi Asx"
    ],
    category: [
      "Automotive"
    ],
    relatedBrands: [
      "Mitsubishi"
    ],

    specification: "SGS",
    size: "Standard",
    origin: "China",
    hsCode: "87089999",

    moq: "1 PCS",

    transportPackage: "Neutral Plastic Bag and Neutral Outer Carton",
    deliveryTime: "7-15 Days after Prepayment",

    productionCapacity: "50000PCS/Year",

    packageSize: {
      length: "450.00cm",
      width: "350.00cm",
      height: "250.00cm"
    },

    packageGrossWeight: "1.000kg",

    leadTime: [
      {
        quantity: "1-1 Pieces",
        days: "15 Days"
      },
      {
        quantity: ">1 Pieces",
        days: "To be negotiated"
      }
    ]
  }

];