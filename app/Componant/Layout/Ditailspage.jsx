"use client";

export default function ProductDetails({ product }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_#60a5fa_0%,_#1e293b_35%,_#020617_75%,_#000000_100%)] text-white">

      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400" />

      {/* Hero Section */}
      <section className="max-w-360 mx-auto px-4 lg:px-12 py-14">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Product Image */}
          <div className="relative group">
            <div className="absolute -inset-[2px] bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-400 rounded-3xl blur-[2px] opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[480px] object-cover block"
              />
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0f0f1a]/90 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute top-5 left-5 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[11px] font-bold text-cyan-300 tracking-widest uppercase">
              {product.NameCatagory}
            </div>
          </div>

          {/* Product Info */}
          <div className="pt-2">

            {/* Title */}
            <h1 className="text-3xl lg:text-[28px] font-black   text-white mb-4">
              {product.title}
            </h1>

            <p className="text-slate-400 text-base leading-relaxed mb-8 border-l-4 border-indigo-500/50 pl-4">
              {product.model}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { label: "Brand", value: product.brand },
                { label: "Company", value: product.company },
                { label: "Type", value: product.type },
              ].map((tag) => (
                <span
                  key={tag.label}
                  className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[13px]"
                >
                  <span className="text-slate-500">{tag.label}: </span>
                  <span className="text-slate-200 font-semibold">{tag.value}</span>
                </span>
              ))}
            </div>

            {/* Price box */}
            <div className="p-6 bg-gradient-to-br from-indigo-950/80 to-violet-950/60 rounded-2xl mb-6 relative overflow-hidden border border-indigo-500/20">
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <p className="text-slate-400 text-[11px] font-bold tracking-[0.15em] uppercase mb-2">
                Unit Price
              </p>
              <h2 className="text-5xl font-black tracking-tight mb-3 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                {product.price}
              </h2>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                <p className="text-emerald-400 text-sm font-medium">
                  Customization {product.customization}
                </p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 mb-7">
              {[
                { label: "MOQ", value: product.moq },
                { label: "Warranty", value: product.warranty },
                { label: "Origin", value: product.origin },
                { label: "Weight", value: product.specification },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 bg-white/5 border border-white/8 rounded-xl hover:border-indigo-400/40 hover:bg-indigo-500/5 transition-all duration-200"
                >
                  <p className="text-slate-500 text-[11px] font-bold tracking-widest uppercase mb-1">
                    {stat.label}
                  </p>
                  <p className="text-slate-100 font-bold text-[15px]">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="w-full py-4 px-8 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 transition-all duration-300 rounded-xl text-white text-[15px] font-bold tracking-wide shadow-xl shadow-indigo-900/40 hover:shadow-indigo-700/50 hover:-translate-y-0.5">
              Request Quotation →
            </button>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-12">
        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      </div>

      {/* Specifications */}
      <PremiumSection title="Product Specifications" label="TECH SPECS">
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { title: "Material", value: product.material },
            { title: "Technics", value: product.technics },
            { title: "Displacement", value: product.displacement },
            { title: "Layout", value: product.layout },
            { title: "Cooling System", value: product.coolingSystem },
            { title: "Trademark", value: product.trademark },
            { title: "Transport Package", value: product.transportPackage },
            { title: "Production Capacity", value: product.productionCapacity },
          ].map((item) => (
            <DarkCard key={item.title} title={item.title} value={item.value} />
          ))}
        </div>
      </PremiumSection>

      {/* Applications */}
      <PremiumSection title="Applications" label="USE CASES">
        <div className="flex flex-wrap gap-3">
          {product.application?.map((item, index) => (
            <span
              key={index}
              className="px-5 py-2.5 bg-violet-500/10 border border-violet-400/20 rounded-xl text-violet-300 text-sm font-semibold hover:bg-violet-500/20 hover:border-violet-400/40 transition-all"
            >
              {item}
            </span>
          ))}
        </div>
      </PremiumSection>

      {/* OE Numbers */}
      <PremiumSection title="OE Numbers" label="REFERENCE">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {product.oeNumber?.map((oe, index) => (
            <div
              key={index}
              className="p-3.5 bg-white/4 border border-white/8 rounded-xl text-center text-slate-400 text-[13px] font-mono tracking-wide hover:border-indigo-400/30 hover:text-slate-200 transition-all"
            >
              {oe}
            </div>
          ))}
        </div>
      </PremiumSection>

      {/* Packaging */}
      <PremiumSection title="Packaging Details" label="DIMENSIONS">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <DarkCard title="Length" value={product.packageSize?.length} />
          <DarkCard title="Width" value={product.packageSize?.width} />
          <DarkCard title="Height" value={product.packageSize?.height} />
          <DarkCard title="Gross Weight" value={product.packageGrossWeight} />
        </div>
      </PremiumSection>

      {/* Lead Time */}
      <PremiumSection title="Lead Time" label="DELIVERY">
        <div className="bg-white/4 border border-white/8 rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-950/80 to-violet-950/60 border-b border-indigo-500/20">
                <th className="py-4 px-6 text-left text-indigo-300 text-[11px] font-bold tracking-[0.12em] uppercase">
                  Quantity (Units)
                </th>
                <th className="py-4 px-6 text-left text-indigo-300 text-[11px] font-bold tracking-[0.12em] uppercase">
                  Delivery Time
                </th>
              </tr>
            </thead>
            <tbody>
              {product.leadTime?.map((item, index) => (
                <tr
                  key={index}
                  className={`border-b border-white/5 hover:bg-indigo-500/5 transition-colors ${index % 2 !== 0 ? "bg-white/[0.02]" : ""}`}
                >
                  <td className="py-4 px-6 text-slate-400 text-sm">{item.quantity}</td>
                  <td className="py-4 px-6 text-slate-100 text-sm font-semibold">{item.days}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PremiumSection>

      <div className="h-20" />
    </div>
  );
}

function PremiumSection({ title, label, children }) {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-12 py-12">
      <div className="flex items-end gap-4 mb-7">
        <div>
          <p className="text-indigo-400 text-[10px] font-black tracking-[0.2em] uppercase mb-1">
            {label}
          </p>
          <h2 className="text-2xl font-black text-white tracking-tight">{title}</h2>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent mb-1" />
      </div>
      {children}
    </section>
  );
}

function DarkCard({ title, value }) {
  return (
    <div className="p-4 bg-white/5 border border-white/8 rounded-xl hover:border-indigo-400/40 hover:bg-indigo-500/5 transition-all duration-200">
      <p className="text-slate-500 text-[10px] font-black tracking-[0.12em] uppercase mb-1.5">
        {title}
      </p>
      <p className="text-slate-100 font-bold text-[15px]">{value}</p>
    </div>
  );
}
