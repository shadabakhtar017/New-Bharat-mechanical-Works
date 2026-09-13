export interface ServiceCategory {
  id: string;
  title: string;
  badge: string;
  description: string;
  microcopy: string;
  items: string[];
  iconName: string;
  image: string;
}

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: "metal-fabrication",
    title: "Metal Fabrication",
    badge: "Core Expertise",
    description: "Custom metalwork built around your requirements — from heavy-duty security gates to ornate architectural doors.",
    microcopy: "Custom metalwork built around your requirements — from gates and doors to detailed fabrication.",
    items: [
      "Main Gates",
      "Designer Gates",
      "Sheet Gates",
      "Collapsible Gates",
      "Maharaja Gates",
      "Pipe Doors",
      "Designer Metal Doors",
      "Custom Metal Fabrication"
    ],
    iconName: "Shield",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "steel-works",
    title: "Steel Works",
    badge: "High Strength",
    description: "Strong, precise and practical steel solutions for residential, commercial and industrial projects.",
    microcopy: "Strong, precise and practical steel solutions for residential and commercial projects.",
    items: [
      "Steel Gates",
      "Steel Grills",
      "Steel Railings",
      "Custom Steel Fabrication",
      "Structural Steel Work",
      "Mild Steel Door Frames"
    ],
    iconName: "Wrench",
    image: "/src/assets/images/regenerated_image_1787159018359.jpg"
  },
  {
    id: "rolling-shutters",
    title: "Rolling Shutters",
    badge: "Security & Retail",
    description: "Robust and smooth-operating rolling shutters designed for commercial storefronts and secure warehouses.",
    microcopy: "Robust and secure rolling shutter solutions for shops, showrooms, and commercial properties.",
    items: [
      "Rolling Shutters",
      "Shop Shutters",
      "Motorized Shutters",
      "Custom Shutter Solutions"
    ],
    iconName: "Lock",
    image: "/src/assets/images/regenerated_image_1787159205260.webp"
  },
  {
    id: "aluminium-works",
    title: "Aluminium Works",
    badge: "Modern Living",
    description: "Clean, durable aluminium doors and windows designed for modern architectural spaces.",
    microcopy: "Clean, durable aluminium doors and windows designed for modern spaces.",
    items: [
      "Sliding Doors",
      "Sliding Windows",
      "Aluminium Windows",
      "Mosquito Net Windows",
      "Aluminium Frames",
      "Partition Systems"
    ],
    iconName: "Maximize2",
    image: "/src/assets/images/regenerated_image_1787159825825.webp"
  },
  {
    id: "glass-works",
    title: "Glass Works",
    badge: "Architectural Glass",
    description: "Sophisticated toughened glass railings, partitions, windows, and exterior shades.",
    microcopy: "Elegant glass installations for seamless transitions, railings, and exterior protection.",
    items: [
      "Glass Railings",
      "Glass Windows",
      "Glass Window Fitting",
      "Glass Shades",
      "Glass-Based Architectural Solutions"
    ],
    iconName: "Layout",
    image: "/src/assets/images/regenerated_image_1787159827075.webp"
  },
  {
    id: "wood-ply-works",
    title: "Wood & Plywood Works",
    badge: "Crafted Interiors",
    description: "Functional and refined wood, plywood and interior solutions tailored for your space.",
    microcopy: "Functional and refined wood, plywood and interior solutions for your space.",
    items: [
      "Plywood Doors",
      "Wooden Doors",
      "Wooden Door Frames",
      "Modern Kitchens",
      "Wood-Based Interior Work"
    ],
    iconName: "Home",
    image: "/src/assets/images/regenerated_image_1787159940959.jpg"
  },
  {
    id: "interior-works",
    title: "Interior Works",
    badge: "Complete Finish",
    description: "Comprehensive interior room works, false ceilings, custom curtains and acoustic room solutions.",
    microcopy: "Complete interior fitouts, ceilings, and customized decor installations.",
    items: [
      "Interior Room Work",
      "False Ceiling",
      "Curtain Design",
      "Vertical Curtains",
      "Sound-Controlled / Soundproof Room Solutions",
      "Decorative Interior Work"
    ],
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "upvc-works",
    title: "UPVC Works",
    badge: "Weatherproof",
    description: "Practical UPVC doors and windows engineered for thermal insulation and comfort.",
    microcopy: "Practical UPVC doors and windows designed for comfort and everyday use.",
    items: [
      "UPVC Sliding Windows",
      "UPVC Doors",
      "UPVC Door Frames",
      "UPVC Window Solutions"
    ],
    iconName: "Sun",
    image: "/src/assets/images/regenerated_image_1787160328604.jpg"
  },
  {
    id: "door-frame-solutions",
    title: "Door Frame Solutions",
    badge: "Solid Foundation",
    description: "Durable wooden, galvanized, mild steel, and UPVC door frames built for long-term stability.",
    microcopy: "Robust and precision-engineered door frames in multiple structural materials.",
    items: [
      "Wooden Door Frames",
      "Galvanized Door Frames",
      "Mild Steel Door Frames",
      "UPVC Door Frames"
    ],
    iconName: "Key",
    image: "/src/assets/images/regenerated_image_1787160622209.webp"
  },
  {
    id: "roof-shade-solutions",
    title: "Roof & Shade Solutions",
    badge: "Outdoor Protection",
    description: "Custom roof shades and architectural glass/metal shade structures for weather protection.",
    microcopy: "Durable structural roof shades and weather-proof canopies.",
    items: [
      "Roof Shades",
      "Glass Shades",
      "Custom Shade Structures",
      "Polycarbonate Sheds"
    ],
    iconName: "CloudRain",
    image: "/src/assets/images/regenerated_image_1787160767527.jpg"
  },
  {
    id: "pvc-solutions",
    title: "PVC Solutions",
    badge: "Moisture Resistant",
    description: "Waterproof PVC doors and custom interior partition solutions for bathrooms and utility areas.",
    microcopy: "Waterproof PVC doors and moisture-resistant utility solutions.",
    items: [
      "PVC Doors",
      "Custom PVC Door Solutions",
      "PVC Partitions"
    ],
    iconName: "Droplet",
    image: "/src/assets/images/regenerated_image_1787161250075.avif"
  }
];
