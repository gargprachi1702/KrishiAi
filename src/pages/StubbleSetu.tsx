import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ShoppingBag, 
  Plus, 
  Search, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  Filter, 
  ArrowRight, 
  Wind, 
  TrendingUp,
  X,
  Info
} from "lucide-react";
import { cn } from "@/src/lib/utils";

interface Listing {
  id: number;
  cropType: string;
  quantity: string;
  location: string;
  price: string;
  farmerName: string;
  date: string;
  image: string;
}

const initialListings: Listing[] = [
  {
    id: 1,
    cropType: "Paddy Stubble",
    quantity: "500kg",
    location: "Ludhiana, Punjab",
    price: "₹2/kg",
    farmerName: "Gurpreet Singh",
    date: "2 hours ago",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    cropType: "Wheat Straw",
    quantity: "1200kg",
    location: "Amritsar, Punjab",
    price: "₹3.5/kg",
    farmerName: "Harman Preet",
    date: "5 hours ago",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    cropType: "Maize Residue",
    quantity: "800kg",
    location: "Karnal, Haryana",
    price: "₹1.8/kg",
    farmerName: "Rajesh Kumar",
    date: "1 day ago",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=400"
  }
];

export default function StubbleSetu() {
  const [listings, setListings] = useState<Listing[]>(initialListings);
  const [isAddingListing, setIsAddingListing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [newListing, setNewListing] = useState({
    cropType: "",
    quantity: "",
    location: "",
    price: "",
    farmerName: ""
  });

  const handleAddListing = (e: React.FormEvent) => {
    e.preventDefault();
    const listing: Listing = {
      id: Date.now(),
      ...newListing,
      date: "Just now",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=400"
    };
    setListings([listing, ...listings]);
    setIsAddingListing(false);
    setNewListing({ cropType: "", quantity: "", location: "", price: "", farmerName: "" });
  };

  const filteredListings = listings.filter(l => 
    l.cropType.toLowerCase().includes(searchTerm.toLowerCase()) || 
    l.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold"
        >
          <Wind size={18} />
          <span>Combat Stubble Burning</span>
        </motion.div>
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 tracking-tight">
          Stubble Setu Marketplace
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Connecting farmers with industrial buyers to turn crop residue into revenue. 
          Stop burning, start earning.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: "Total Stubble Traded", value: "45,000+ Tons", icon: TrendingUp, color: "text-green-600" },
          { label: "CO2 Emissions Saved", value: "12,000+ Tons", icon: Wind, color: "text-blue-600" },
          { label: "Active Farmers", value: "8,500+", icon: CheckCircle2, color: "text-orange-600" }
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm text-center space-y-4"
          >
            <div className={cn("w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto", stat.color)}>
              <stat.icon size={24} />
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Action Bar */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-white p-6 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/50">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search by crop or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
          />
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <button className="flex-grow md:flex-grow-0 px-6 py-4 bg-gray-50 text-gray-600 border border-gray-100 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-100 transition-all">
            <Filter size={18} />
            Filters
          </button>
          <button 
            onClick={() => setIsAddingListing(true)}
            className="flex-grow md:flex-grow-0 px-8 py-4 bg-primary text-white rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
          >
            <Plus size={18} />
            Sell Stubble
          </button>
        </div>
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredListings.map((listing, i) => (
          <motion.div
            key={listing.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all overflow-hidden flex flex-col"
          >
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={listing.image} 
                alt={listing.cropType} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-primary shadow-sm">
                {listing.date}
              </div>
            </div>

            <div className="p-8 space-y-6 flex-grow">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900">{listing.cropType}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin size={14} className="text-primary" />
                  {listing.location}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-50">
                <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Quantity</div>
                  <div className="text-lg font-bold text-gray-900">{listing.quantity}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Price</div>
                  <div className="text-lg font-bold text-primary">{listing.price}</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                    <ShoppingBag size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase">Farmer</div>
                    <div className="text-sm font-bold text-gray-900">{listing.farmerName}</div>
                  </div>
                </div>
                <button className="p-3 bg-primary/10 text-primary rounded-xl hover:bg-primary hover:text-white transition-all shadow-sm">
                  <Phone size={20} />
                </button>
              </div>

              <button className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-800 transition-all shadow-xl shadow-gray-900/10">
                Contact Farmer
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Listing Modal */}
      <AnimatePresence>
        {isAddingListing && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAddingListing(false)}
              className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl p-8 lg:p-12 space-y-8"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h2 className="text-3xl font-bold text-gray-900">Sell Your Stubble</h2>
                  <p className="text-sm text-gray-500">Fill in the details to list your crop residue.</p>
                </div>
                <button 
                  onClick={() => setIsAddingListing(false)}
                  className="p-2 bg-gray-50 text-gray-400 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleAddListing} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Crop Type</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Paddy Stubble"
                      value={newListing.cropType}
                      onChange={(e) => setNewListing({...newListing, cropType: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Quantity</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. 500kg"
                      value={newListing.quantity}
                      onChange={(e) => setNewListing({...newListing, quantity: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Location</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Ludhiana, Punjab"
                      value={newListing.location}
                      onChange={(e) => setNewListing({...newListing, location: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Price</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. ₹2/kg"
                      value={newListing.price}
                      onChange={(e) => setNewListing({...newListing, price: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Farmer Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Your Name"
                    value={newListing.farmerName}
                    onChange={(e) => setNewListing({...newListing, farmerName: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>

                <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 flex gap-3">
                  <Info size={18} className="text-blue-500 flex-shrink-0" />
                  <p className="text-[10px] text-blue-800 leading-relaxed">
                    By listing your stubble, you are contributing to a cleaner environment. 
                    Buyers will contact you directly via the platform.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
                >
                  Post Listing
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
