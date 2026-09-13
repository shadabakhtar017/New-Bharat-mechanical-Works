export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  location: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Custom Main Gate & Boundary Grills",
    category: "Gates",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    description: "Heavy-duty laser-cut metal main gate paired with matching boundary wall grills, engineered for maximum security and grand aesthetic appeal.",
    location: "Residential Villa, South Delhi"
  },
  {
    id: "proj-2",
    title: "Structural Steel Staircase & Railings",
    category: "Steel Work",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    description: "Architectural mild steel staircase structure with minimalist handrails, combining industrial robustness with modern interior elegance.",
    location: "Commercial Office Complex"
  },
  {
    id: "proj-3",
    title: "Toughened Glass Balcony Railing",
    category: "Glass",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    description: "Frameless toughened glass railing system with stainless steel spigots, offering unobstructed panoramic views and superior weather resistance.",
    location: "Luxury Penthouse"
  },
  {
    id: "proj-4",
    title: "Aluminium Sliding Windows & Facade",
    category: "Aluminium",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    description: "High-performance slim-profile aluminium sliding doors and sound-insulated windows with integrated mosquito mesh.",
    location: "Modern Residential Project"
  },
  {
    id: "proj-5",
    title: "Acoustic False Ceiling & Wood Panelling",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    description: "Custom wooden wall slats, acoustic ceiling baffles, and warm ambient lighting integration for a executive boardroom.",
    location: "Corporate Headquarters"
  },
  {
    id: "proj-6",
    title: "Automated Commercial Rolling Shutters",
    category: "Shutters",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1000&q=80",
    description: "Heavy-gauge motorized rolling shutters with manual override and secure locking mechanisms for retail showrooms.",
    location: "High Street Retail Arcade"
  },
  {
    id: "proj-7",
    title: "Teak Wood Designer Doors & Frames",
    category: "Doors",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=1000&q=80",
    description: "Handcrafted solid wood main entrance door with customized brass hardware and termite-resistant treated door frames.",
    location: "Private Residence"
  },
  {
    id: "proj-8",
    title: "Polycarbonate & Steel Roof Canopy",
    category: "Steel Work",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18f86f6?auto=format&fit=crop&w=1000&q=80",
    description: "Custom-welded structural steel shed covered with UV-stabilized polycarbonate sheets for all-weather vehicle parking.",
    location: "Residential Society"
  }
];
