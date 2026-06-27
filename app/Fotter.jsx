import React from 'react'

const Fotter = () => {
  return (
   <footer className="bg-zinc-950 border-t border-blue-900/50 pt-16 pb-8 relative">
  <div className="max-w-360 mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      
      {/* Brand Column */}
      <div>
        <h2 className="text-3xl font-black tracking-wide text-white" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
          PRIME <span className="text-blue-400">MECHANICS</span>
        </h2>
        <p className="text-zinc-400 mt-3 leading-relaxed">
          Premium Automotive Care in Dhaka since 2018. 
          Expert service with genuine parts and guaranteed results.
        </p>
        
        <div className="flex gap-4 mt-6">
          {['facebook', 'instagram', 'youtube', 'whatsapp'].map((social) => (
            <a 
              key={social}
              href="#" 
              className="w-9 h-9 rounded-full bg-zinc-900 border border-blue-900 hover:border-blue-400 flex items-center justify-center text-zinc-400 hover:text-blue-400 transition-all"
            >
              {social === 'facebook' && '📘'}
              {social === 'instagram' && '📷'}
              {social === 'youtube' && '▶️'}
              {social === 'whatsapp' && '💬'}
            </a>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-blue-400 uppercase text-sm tracking-widest mb-5">Quick Links</h3>
        <ul className="space-y-3 text-zinc-300">
          <li><a href="#" className="hover:text-blue-400 transition">Book a Service</a></li>
          <li><a href="#" className="hover:text-blue-400 transition">Service Packages</a></li>
          <li><a href="#" className="hover:text-blue-400 transition">Our Gallery</a></li>
          <li><a href="#" className="hover:text-blue-400 transition">Video Workshop</a></li>
          <li><a href="#" className="hover:text-blue-400 transition">Contact Us</a></li>
        </ul>
      </div>

      {/* Services */}
      <div>
        <h3 className="text-blue-400 uppercase text-sm tracking-widest mb-5">Our Services</h3>
        <ul className="space-y-3 text-zinc-300">
          <li><a href="#" className="hover:text-blue-400 transition">Engine Overhaul</a></li>
          <li><a href="#" className="hover:text-blue-400 transition">Brake & Suspension</a></li>
          <li><a href="#" className="hover:text-blue-400 transition">Car Detailing</a></li>
          <li><a href="#" className="hover:text-blue-400 transition">Bike Service</a></li>
          <li><a href="#" className="hover:text-blue-400 transition">Oil Change & Maintenance</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="text-blue-400 uppercase text-sm tracking-widest mb-5">Get In Touch</h3>
        
        <div className="space-y-4 text-zinc-300">
          <div className="flex items-start gap-3">
            <span className="text-blue-400 mt-1">📍</span>
            <div>
              <p>Mirpur-10, Dhaka, Bangladesh</p>
              <p className="text-sm text-zinc-500">Opposite Mirpur Stadium</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-blue-400">📞</span>
            <div>
              <p>+880 17XX-XXXXXX</p>
              <p>+880 19XX-XXXXXX</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-blue-400">✉️</span>
            <p>info@primemechanics.com</p>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-xs text-blue-400/70">Est. 2018 • Dhaka</p>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
      <p>© 2026 Prime Mechanics. All Rights Reserved.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-zinc-300 transition">Privacy Policy</a>
        <a href="#" className="hover:text-zinc-300 transition">Terms of Service</a>
      </div>
      <p>Made with ❤️ for Bangladeshi Drivers</p>
    </div>
  </div>
</footer>
  )
}

export default Fotter