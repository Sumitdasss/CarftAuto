"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { carPartsAPI } from "../../DatA/Data";
import useStore from "../Componant/Layout/Store/store";
export default function ShopPage() {
    const {addTocart}=useStore()
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedFuel, setSelectedFuel] = useState("");
  const [selectedOrigin, setSelectedOrigin] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [sortOption, setSortOption] = useState("relevance");
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 15000]);
  const [isFilterOpen, setIsFilterOpen] = useState(false); // Mobile filter drawer

  const itemsPerPage = 9;

  const categories = useMemo(() => [...new Set(carPartsAPI.map((item) => item.NameCatagory).filter(Boolean))], []);
  const fuels = useMemo(() => [...new Set(carPartsAPI.map((item) => item.fuel).filter(Boolean))], []);
  const origins = useMemo(() => [...new Set(carPartsAPI.map((item) => item.origin).filter(Boolean))], []);
  const types = useMemo(() => [...new Set(carPartsAPI.map((item) => item.type).filter(Boolean))], []);
  const materials = useMemo(() => [...new Set(carPartsAPI.map((item) => item.bodyMaterial || item.material).filter(Boolean))], []);
const getPrice = (price) => {
  if (!price) return 0;

  const priceString = String(price);

  const match = priceString.match(/[\d,]+(\.\d+)?/);

  if (!match) return 0;

  return Number(match[0].replace(/,/g, ""));
};
  const searchTerm = search.toLowerCase().trim();

const filteredProducts = useMemo(() => {
  let result = carPartsAPI.filter((item) => {
    const priceNum = getPrice(item.price);

    const matchesSearch =
      !searchTerm ||
      item.title?.toLowerCase().includes(searchTerm) ||
      item.partName?.toLowerCase().includes(searchTerm) ||
      item.model?.toLowerCase().includes(searchTerm) ||
      item.engineModel?.toLowerCase().includes(searchTerm) ||
      item.type?.toLowerCase().includes(searchTerm);

    const matchesCategory =
      !selectedCategory ||
      item.NameCatagory === selectedCategory;

    const matchesFuel =
      !selectedFuel ||
      item.fuel === selectedFuel;

    const matchesOrigin =
      !selectedOrigin ||
      item.origin === selectedOrigin;

    const matchesType =
      !selectedType ||
      item.type === selectedType;

    const matchesMaterial =
      !selectedMaterial ||
      item.bodyMaterial === selectedMaterial ||
      item.material === selectedMaterial;

    const matchesPrice =
      priceNum >= priceRange[0] &&
      priceNum <= priceRange[1];

    return (
      matchesSearch &&
      matchesCategory &&
      matchesFuel &&
      matchesOrigin &&
      matchesType &&
      matchesMaterial &&
      matchesPrice
    );
  });

  switch (sortOption) {
    case "price-low":
      result.sort(
        (a, b) => getPrice(a.price) - getPrice(b.price)
      );
      break;

    case "price-high":
      result.sort(
        (a, b) => getPrice(b.price) - getPrice(a.price)
      );
      break;

    case "newest":
      result.sort((a, b) => b.id - a.id);
      break;

    default:
      break;
  }

  return result;
}, [
  searchTerm,
  selectedCategory,
  selectedFuel,
  selectedOrigin,
  selectedType,
  selectedMaterial,
  priceRange,
  sortOption,
]);
  useEffect(() => setCurrentPage(1), [search, selectedCategory, selectedFuel, selectedOrigin, selectedType, selectedMaterial, sortOption, priceRange]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 200, behavior: "smooth" });
  };

  const resetFilters = () => {
    setSearch(""); setSelectedCategory(""); setSelectedFuel("");
    setSelectedOrigin(""); setSelectedType(""); setSelectedMaterial("");
    setPriceRange([0, 15000]); setSortOption("relevance");
    setIsFilterOpen(false);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#0f4c75,_#081c2c,_#020617,_#000000)] text-slate-100">
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
              Engine Parts Shop
            </h1>
            <p className="text-slate-400">Premium Heavy Duty Diesel Components</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 bg-slate-800 border border-slate-600 hover:bg-slate-700 px-5 py-3 rounded-2xl text-sm font-medium"
            >
              <span>Filters</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M3 8h18M3 12h18M3 16h18" />
              </svg>
            </button>

            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-slate-800 border border-slate-600 rounded-2xl px-5 py-3 text-sm focus:border-violet-500"
            >
              <option value="relevance">Sort: Relevance</option>
              <option value="price-low">Price: Low → High</option>
              <option value="price-high">Price: High → Low</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 relative">
          
          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="bg-slate-800/90 border border-slate-600 rounded-3xl p-6 sticky top-6 backdrop-blur-xl">
              <FilterContent 
                search={search} setSearch={setSearch}
                selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
                selectedFuel={selectedFuel} setSelectedFuel={setSelectedFuel}
                selectedOrigin={selectedOrigin} setSelectedOrigin={setSelectedOrigin}
                selectedType={selectedType} setSelectedType={setSelectedType}
                selectedMaterial={selectedMaterial} setSelectedMaterial={setSelectedMaterial}
                priceRange={priceRange} setPriceRange={setPriceRange}
                categories={categories} fuels={fuels} origins={origins} types={types} materials={materials}
                resetFilters={resetFilters}
              />
            </div>
          </div>

          {/* Mobile Filter Drawer */}
          <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${isFilterOpen ? 'visible' : 'invisible'}`}>
            <div className={`fixed inset-0 bg-black/70 transition-opacity ${isFilterOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsFilterOpen(false)} />
            
            <div className={`fixed left-0 top-0 bottom-0 w-80 bg-[#0a0f1c] border-r border-slate-600 transform transition-transform duration-300 ${isFilterOpen ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto`}>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold">Filters</h2>
                  <button onClick={() => setIsFilterOpen(false)} className="text-slate-400 hover:text-white">
                    ✕
                  </button>
                </div>

                <FilterContent 
                  search={search} setSearch={setSearch}
                  selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
                  selectedFuel={selectedFuel} setSelectedFuel={setSelectedFuel}
                  selectedOrigin={selectedOrigin} setSelectedOrigin={setSelectedOrigin}
                  selectedType={selectedType} setSelectedType={setSelectedType}
                  selectedMaterial={selectedMaterial} setSelectedMaterial={setSelectedMaterial}
                  priceRange={priceRange} setPriceRange={setPriceRange}
                  categories={categories} fuels={fuels} origins={origins} types={types} materials={materials}
                  resetFilters={resetFilters}
                />
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="lg:col-span-9">
            <p className="text-slate-400 mb-6">
              Showing <span className="text-emerald-400 font-semibold">{filteredProducts.length}</span> products
            </p>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-24 text-slate-400">No products found.</div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {paginatedProducts.map((product) => (
                    <div
                      key={product.id}
                      className="group bg-slate-800 border border-slate-600 hover:border-violet-500/70 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/10"
                    >
                      <div className="relative h-60 bg-slate-900 flex items-center justify-center overflow-hidden p-4">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        {product.origin && (
                          <span className="absolute top-4 right-4 text-[10px] font-mono font-bold tracking-widest px-3 py-1.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-black shadow-md">
                            {product.origin.toUpperCase()}
                          </span>
                        )}
                        {product.quality && (
                          <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 bg-emerald-500 text-black rounded-2xl">
                            {product.quality}
                          </span>
                        )}
                      </div>

                      <div className="p-5">
                        <h3 className="font-semibold text-[15px] leading-tight line-clamp-3 mb-4 text-slate-100 group-hover:text-white transition-colors min-h-[66px]">
                          {product.title}
                        </h3>

                        <div className="flex justify-between items-end mb-5">
                          <div>
                            <p className="text-xs text-slate-400">STARTING FROM</p>
                            <p className="text-2xl font-bold text-emerald-400 tracking-tighter">
                           {product.price }
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Link href={`/DitailPage/${product.id}`} className="flex-1">
                            <button className="w-full py-3.5 bg-slate-700 hover:bg-slate-600 rounded-2xl text-sm font-medium transition-all active:scale-95">
                              View Details
                            </button>
                          </Link>
                          <button onClick={()=>addTocart(product)} className="flex-1 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-2xl text-sm font-medium transition-all active:scale-95">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-12 flex justify-center gap-3 flex-wrap">
                    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}
                      className="px-6 py-3 bg-slate-800 border border-slate-600 rounded-2xl hover:bg-slate-700 disabled:opacity-50 transition">
                      ← Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-11 h-11 rounded-2xl font-medium transition-all ${
                          currentPage === page ? "bg-violet-600 text-white" : "bg-slate-800 border border-slate-600 hover:bg-slate-700"
                        }`}
                      >
                        {page}
                      </button>
                    ))}

                    <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}
                      className="px-6 py-3 bg-slate-800 border border-slate-600 rounded-2xl hover:bg-slate-700 disabled:opacity-50 transition">
                      Next →
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Filter Component
function FilterContent({ 
  search, setSearch, priceRange, setPriceRange,
  selectedCategory, setSelectedCategory, selectedFuel, setSelectedFuel,
  selectedOrigin, setSelectedOrigin, selectedType, setSelectedType,
  selectedMaterial, setSelectedMaterial,
  categories, fuels, origins, types, materials, resetFilters
}) {
  return (
    <>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search parts, model, OEM..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-slate-900 border border-slate-600 rounded-2xl px-5 py-3.5 text-sm focus:border-violet-500"
        />
      </div>

      <div className="mb-8">
        <label className="block text-sm font-medium mb-3 text-slate-300">Price Range (USD)</label>
        <div className="flex justify-between text-xs mb-2 text-slate-400">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
        <input
          type="range"
          min="0"
          max="15000"
          step="50"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
          className="w-full accent-violet-500"
        />
      </div>

      {[
        { label: "Category", value: selectedCategory, setter: setSelectedCategory, options: categories },
        { label: "Part Type", value: selectedType, setter: setSelectedType, options: types },
        { label: "Fuel Type", value: selectedFuel, setter: setSelectedFuel, options: fuels },
        { label: "Origin", value: selectedOrigin, setter: setSelectedOrigin, options: origins },
        { label: "Material", value: selectedMaterial, setter: setSelectedMaterial, options: materials },
      ].map(({ label, value, setter, options }) => (
        <div key={label} className="mb-6">
          <label className="block text-sm font-medium mb-2 text-slate-300">{label}</label>
          <select
            value={value}
            onChange={(e) => setter(e.target.value)}
            className="w-full bg-slate-900 border border-slate-600 rounded-2xl px-4 py-3.5 text-sm focus:border-violet-500"
          >
            <option value="">All {label}</option>
            {options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>
      ))}

      <button
        onClick={resetFilters}
        className="w-full mt-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-2xl text-sm font-medium transition"
      >
        Clear All Filters
      </button>
    </>
  );
}