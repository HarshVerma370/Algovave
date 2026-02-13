
import React from 'react';
import { ShoppingCart, Star, Plus, ArrowRight } from 'lucide-react';

const products = [
  {
    name: "Algovave Kinetic Tee",
    price: "$34.00",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=400&auto=format&fit=crop",
    category: "Apparel",
    badge: "Bestseller"
  },
  {
    name: "3D Abstract Preset Pack",
    price: "$49.00",
    image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=400&auto=format&fit=crop",
    category: "Digital Assets",
    badge: "New"
  },
  {
    name: "Wave Designer Hoodie",
    price: "$68.00",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=400&auto=format&fit=crop",
    category: "Apparel",
    badge: "Premium"
  },
  {
    name: "Glassmorphic UI Kit",
    price: "$29.00",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop",
    category: "Digital Assets",
    badge: "Sale"
  }
];

const Merchandise: React.FC = () => {
  return (
    <section id="merchandise" className="space-y-16 py-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-block px-4 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-black uppercase tracking-widest">
            The Collection
          </div>
          <h2 className="text-5xl md:text-6xl font-black dark:text-white text-zinc-900 leading-tight">
            ALGOVAVE <span className="text-primary italic">SHOP</span>
          </h2>
          <p className="text-lg text-zinc-500 max-w-lg">
            Exclusive digital tools and high-quality apparel for the modern innovator.
          </p>
        </div>
        <button className="group bg-primary text-white px-10 py-5 rounded-2xl font-black text-lg transition-all flex items-center gap-3 shadow-[0_20px_40px_rgba(99,102,241,0.2)] hover:shadow-primary/30">
          Open Marketplace <ShoppingCart size={22} className="group-hover:rotate-12 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map((product, idx) => (
          <div key={idx} className="group flex flex-col h-full">
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-white/5 shadow-lg group-hover:shadow-2xl transition-all duration-500">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay elements */}
              <div className="absolute top-6 left-6">
                <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-black/90 text-black dark:text-white text-[10px] font-black uppercase tracking-widest backdrop-blur-md">
                  {product.badge}
                </span>
              </div>
              
              <div className="absolute top-6 right-6">
                 <button className="p-3 glass rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-500">
                   <Star size={18} className="text-amber-400 fill-amber-400" />
                 </button>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <button className="w-full py-4 bg-white text-black rounded-2xl font-black flex items-center justify-center gap-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 shadow-2xl hover:bg-primary hover:text-white">
                  Add to Cart <Plus size={20} />
                </button>
              </div>
            </div>
            
            <div className="mt-6 space-y-2 px-2">
              <div className="flex justify-between items-center">
                <p className="text-[10px] uppercase tracking-widest text-primary font-black">{product.category}</p>
                <p className="font-black text-xl dark:text-white text-zinc-900">{product.price}</p>
              </div>
              <h3 className="font-bold text-lg dark:text-zinc-200 text-zinc-700 leading-tight group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <div className="pt-2 flex items-center gap-1 text-primary text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                View Details <ArrowRight size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Newsletter / CTA */}
      <div className="glass mt-20 p-12 rounded-[3rem] border border-white/5 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="space-y-2 text-center lg:text-left">
          <h3 className="text-3xl font-black dark:text-white text-zinc-900">Get Early Access</h3>
          <p className="text-zinc-500">Be the first to know about new drops and digital assets.</p>
        </div>
        <div className="flex w-full lg:w-auto gap-4">
          <input 
            type="email" 
            placeholder="your@email.com" 
            className="flex-grow lg:w-80 bg-zinc-100 dark:bg-zinc-800 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary outline-none transition-all dark:text-white"
          />
          <button className="bg-zinc-900 dark:bg-white text-white dark:text-black px-8 py-4 rounded-2xl font-black whitespace-nowrap hover:scale-105 transition-transform">
            Join Waitlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default Merchandise;
