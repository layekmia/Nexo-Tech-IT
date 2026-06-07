export type Product = {
  id: string;
  logoText: string;
  logoIconColor: string;
  title: string;
  description: string;
  link: string;
  image: string;
  bgColor: string;
  btnColor: string;
  btnHoverColor: string;
};

export const productsData: Product[] = [
  {
    id: "shopcart",
    logoText: "shopcart",
    logoIconColor: "bg-[#10b981]", // emerald
    title: "Powerful E-Commerce Shopping Platform",
    description: "Launch your multi-vendor marketplace or single-store brand with advanced product tracking, payment gateways, and order management.",
    link: "https://shopcart.nexotechit.com/",
    image: "/products/shopcart.png", // Placeholder
    bgColor: "bg-[#dcfce7]",
    btnColor: "bg-[#10b981]",
    btnHoverColor: "hover:bg-[#059669]",
  },
  {
    id: "smartbebsha",
    logoText: "smartbebsha",
    logoIconColor: "bg-[#6366f1]", // indigo
    title: "Smart Inventory & POS System",
    description: "Automate your stock management, track multi-warehouse inventory, and handle retail checkout smoothly with our POS integration.",
    link: "https://smartbebsha.nexotechit.com/",
    image: "/products/softora.png", // Placeholder
    bgColor: "bg-[#e0e7ff]",
    btnColor: "bg-[#6366f1]",
    btnHoverColor: "hover:bg-[#4f46e5]",
  },
  {
    id: "school-management",
    logoText: "smartschool",
    logoIconColor: "bg-[#0ea5e9]", // light blue
    title: "Complete School Administration Portal",
    description: "A centralized digital solution that streamlines student enrollment, class management, attendance tracking, and administrative tasks.",
    link: "https://smartschool1.vercel.app/",
    image: "/products/school.png",
    bgColor: "bg-[#e0f2fe]",
    btnColor: "bg-[#0ea5e9]",
    btnHoverColor: "hover:bg-[#0284c7]",
  },
  {
    id: "lms",
    logoText: "eduflow",
    logoIconColor: "bg-[#5f5cf3]", // purple
    title: "The All-in-one Learning Management System",
    description: "Build, market, and sell online courses, memberships, communities, coaching, and digital products from a single platform.",
    link: "https://eduflow.nexotechit.com/",
    image: "/products/edu_flow.png", // Placeholder
    bgColor: "bg-[#e0dffe]",
    btnColor: "bg-[#5f5cf3]",
    btnHoverColor: "hover:bg-[#4b48d6]",
  },
  {
    id: "ridex",
    logoText: "ridex",
    logoIconColor: "bg-[#059669]", // Emerald 600
    title: "Next-Gen Ride Sharing & Instant Logistics",
    description: "Get where you need to go with ease. A powerful ride-hailing platform featuring live driver tracking, secure digital payments, and optimized route mapping for faster city travel.",
    link: "https://ridex-ride-sharing.vercel.app/",
    image: "/products/ridex.png",
    bgColor: "bg-[#F2CBB3]", // Green 50 (I noticed the comment said Green 50 but the hex is an orange tint, left as is)
    btnColor: "bg-[#FF9554]",
    btnHoverColor: "hover:bg-[#F2640A]",
  },
  {
    id: "natours",
    logoText: "natours",
    logoIconColor: "bg-[#10b981]", // emerald
    title: "Travel & Tour Booking Engine",
    description: "Allow customers to discover exciting travel packages, book their trips online, and manage their itineraries seamlessly.",
    link: "https://natours.nexotechit.com/",
    image: "/products/natours.png", // Placeholder
    bgColor: "bg-[#dcfce7]",
    btnColor: "bg-[#10b981]",
    btnHoverColor: "hover:bg-[#059669]",
  }

];