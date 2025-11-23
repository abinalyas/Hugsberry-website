import React from 'react';
import Navbar from './components/Navbar';
import HugsberryLogo from './components/HugsberryLogo';
import AnimatedHugsberryLogo from './components/AnimatedHugsberryLogo';
import ProductCard from './components/ProductCard';
import { PRODUCTS, TESTIMONIALS, INSTAGRAM_URL } from './constants';
import { ArrowRight, Star, Leaf, Heart, Instagram, Recycle, Droplets, Sun } from 'lucide-react';
import { getAssetPath } from './utils/paths';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-hugsberry-cream">
      <Navbar />

      {/* --- HERO SECTION: HERITAGE & ORGANIC --- */}
      <header className="relative pt-28 pb-16 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements - Soft Organic Blobs */}
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-hugsberry-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-hugsberry-blue/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 -z-10"></div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Hero Content */}
            <div className="flex-1 text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-hugsberry-green/20 text-hugsberry-green font-bold text-sm shadow-sm mb-6">
                 <Leaf size={16} />
                 <span>Ethical. Handmade. Culturally Rooted.</span>
              </div>
              
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-hugsberry-navy leading-[0.95] mb-8 tracking-tight">
                Roots <br/>
                Woven with <br/>
                <span className="text-hugsberry-green">Pure Love</span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-600 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Premium organic kidswear inspired by our heritage. From festive favorites to everyday essentials, made for your little one's big adventures.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href={INSTAGRAM_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 rounded-full bg-hugsberry-navy text-white font-bold text-base md:text-lg shadow-xl shadow-blue-900/10 hover:bg-hugsberry-green hover:shadow-green-200 hover:-translate-y-1 transition-all duration-300"
                >
                  <Instagram className="mr-2" size={24} />
                  Shop on Instagram
                </a>
              </div>
            </div>

            {/* Hero Image Composition */}
            <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
               <div className="relative aspect-square">
                 {/* Main Image Frame */}
                 <div className="absolute inset-4 bg-hugsberry-green/20 rounded-[3rem] rotate-6"></div>
                 <div className="absolute inset-4 bg-white rounded-[3rem] -rotate-3 border-2 border-hugsberry-cream"></div>
                 
                <img 
                  src={getAssetPath("/images/IMG_3101.jpg")} 
                  alt="Indian Baby in Ethnic Wear" 
                  className="absolute inset-0 w-full h-full object-cover rounded-[3rem] shadow-2xl z-10"
                />
                 
                 {/* Floating Sticker */}
                 <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 md:p-5 rounded-full shadow-xl flex flex-col items-center justify-center w-28 h-28 md:w-36 md:h-36 rotate-12 border-4 border-hugsberry-cream">
                    <span className="font-display font-bold text-2xl md:text-3xl text-hugsberry-navy">100%</span>
                    <span className="text-xs font-bold text-hugsberry-green uppercase tracking-wider text-center">Homegrown</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- VALUE PROPS STRIP (ECO BADGES) --- */}
      <div className="bg-white border-y border-gray-100 py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
           <div className="flex flex-wrap justify-center md:justify-between gap-10 text-center md:text-left">
              
              {/* Badge 1: Organic */}
              <div className="flex flex-col md:flex-row items-center gap-4 group">
                 <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-hugsberry-green flex items-center justify-center text-hugsberry-green bg-hugsberry-green/5 group-hover:bg-hugsberry-green group-hover:text-white transition-colors duration-300">
                   <Leaf size={28} className="md:w-8 md:h-8" strokeWidth={1.5} />
                 </div>
                 <div className="text-center md:text-left">
                   <p className="font-bold text-hugsberry-navy text-base md:text-lg">100% Organic</p>
                   <p className="text-sm text-gray-500">Certified GOTS Cotton</p>
                 </div>
              </div>

              {/* Badge 2: Handmade */}
              <div className="flex flex-col md:flex-row items-center gap-4 group">
                 <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-hugsberry-pink flex items-center justify-center text-hugsberry-pink bg-hugsberry-pink/5 group-hover:bg-hugsberry-pink group-hover:text-white transition-colors duration-300">
                   <Heart size={28} className="md:w-8 md:h-8" strokeWidth={1.5} />
                 </div>
                 <div className="text-center md:text-left">
                   <p className="font-bold text-hugsberry-navy text-base md:text-lg">Ethically Handmade</p>
                   <p className="text-sm text-gray-500">Fair wages for artisans</p>
                 </div>
              </div>

              {/* Badge 3: Eco-Friendly */}
              <div className="flex flex-col md:flex-row items-center gap-4 group">
                 <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-hugsberry-blue flex items-center justify-center text-hugsberry-blue bg-hugsberry-blue/5 group-hover:bg-hugsberry-blue group-hover:text-white transition-colors duration-300">
                   <Recycle size={28} className="md:w-8 md:h-8" strokeWidth={1.5} />
                 </div>
                 <div className="text-center md:text-left">
                   <p className="font-bold text-hugsberry-navy text-base md:text-lg">Plastic-Free</p>
                   <p className="text-sm text-gray-500">Sustainable Packaging</p>
                 </div>
              </div>
              
              {/* Badge 4: Safe */}
              <div className="flex flex-col md:flex-row items-center gap-4 group">
                 <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-hugsberry-yellow flex items-center justify-center text-hugsberry-yellow bg-hugsberry-yellow/5 group-hover:bg-hugsberry-yellow group-hover:text-hugsberry-navy transition-colors duration-300">
                   <Sun size={28} className="md:w-8 md:h-8" strokeWidth={1.5} />
                 </div>
                 <div className="text-center md:text-left">
                   <p className="font-bold text-hugsberry-navy text-base md:text-lg">Skin Safe</p>
                   <p className="text-sm text-gray-500">Azo-free non-toxic dyes</p>
                 </div>
              </div>

           </div>
        </div>
      </div>

      {/* --- SHOPPING SECTION: SINGLE COLLECTION --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-hugsberry-green font-bold tracking-widest uppercase text-sm mb-2 block">Small Batch • Big Love</span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-hugsberry-navy mb-4">
            Fresh from the <span className="relative inline-block px-2 z-10">
              Loom
              <div className="absolute bottom-2 left-0 w-full h-3 bg-hugsberry-yellow/60 -z-10 -rotate-2"></div>
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From heritage smocked dresses to cozy winter essentials. Discover our curated range for 0-5 years.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-16 text-center">
           <a 
             href={INSTAGRAM_URL} 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-flex items-center gap-2 text-lg md:text-xl font-bold text-hugsberry-navy hover:text-hugsberry-green transition-colors border-b-2 border-hugsberry-navy hover:border-hugsberry-green pb-1"
           >
             See Full Catalog on Instagram <ArrowRight size={24} />
           </a>
        </div>
      </section>

      {/* --- PROMO BANNER (Newborn Focus) --- */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto bg-hugsberry-navy rounded-[3rem] p-8 md:p-12 relative overflow-hidden text-white shadow-2xl shadow-blue-900/20">
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
             <div>
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-bold mb-4">Bestseller</div>
                <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                  The Welcome Baby Kit
                </h2>
                <p className="text-white/80 text-base md:text-lg mb-6 max-w-md">
                  A curated set of our softest organic cotton jhablas and nappies. The perfect gift for a new Indian mom. Use code <span className="font-mono font-bold text-hugsberry-yellow">HELLO-BABY</span> in DM.
                </p>
             </div>
             <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="inline-block bg-hugsberry-yellow text-hugsberry-navy font-bold px-10 py-5 rounded-full shadow-lg hover:scale-105 transition-transform whitespace-nowrap">
               Order via DM
             </a>
           </div>
           
           {/* Abstract Decoration */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-hugsberry-green/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
        </div>
      </section>

      {/* --- ABOUT / VISION SECTION --- */}
      <section className="py-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center shadow-sm border border-gray-100">
               <div className="w-full md:w-1/2">
                  <div className="grid grid-cols-2 gap-4">
                    <img className="rounded-2xl w-full h-48 object-cover -translate-y-4 shadow-md" src={getAssetPath("/images/IMG_3103.jpg")} alt="Cotton Fabric Texture" />
                    <img className="rounded-2xl w-full h-48 object-cover translate-y-4 shadow-md" src={getAssetPath("/images/IMG_3102.jpg")} alt="Indian Baby playing" />
                  </div>
               </div>
               <div className="w-full md:w-1/2 space-y-6">
                  {/* Animated Logo Here */}
                  <AnimatedHugsberryLogo className="w-48 md:w-64 mb-4 origin-left" />
                  
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-hugsberry-navy">
                    Made for the future you want to create.
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Hugsberry was born from a simple wish: to blend timeless Indian aesthetics with modern ethical standards. We design premium-quality kidswear using organic materials like cotton and bamboo, celebrating our shared heritage while ensuring absolute comfort for every child.
                  </p>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    Our USP? Culturally rooted designs, hygienic handmade production, and sustainable packaging that cares for the world they will grow up in.
                  </p>
                  <div className="pt-4">
                     <p className="font-display font-bold text-lg md:text-xl text-hugsberry-navy mb-2">Why Hugsberry?</p>
                     <ul className="space-y-3">
                       <li className="flex items-center gap-2 text-gray-600">
                         <Droplets size={18} className="text-hugsberry-blue" />
                         <span>Hypoallergenic Organic Fabrics</span>
                       </li>
                       <li className="flex items-center gap-2 text-gray-600">
                         <Leaf size={18} className="text-hugsberry-green" />
                         <span>Culturally Rooted Designs</span>
                       </li>
                       <li className="flex items-center gap-2 text-gray-600">
                         <Sun size={18} className="text-hugsberry-yellow" />
                         <span>Transparent "Behind the Stitch" Story</span>
                       </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center mb-12">
           <h2 className="font-display text-2xl md:text-3xl font-bold text-hugsberry-navy mb-4">Moms Trust <span className="text-hugsberry-green">Hugsberry</span></h2>
           <p className="text-gray-500">Hear from modern Indian parents who love us</p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
           {TESTIMONIALS.map(testimonial => (
             <div key={testimonial.id} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
                <div className="flex text-hugsberry-yellow mb-4">
                   {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-hugsberry-navy font-medium leading-relaxed mb-6">"{testimonial.content}"</p>
                <div className="flex items-center gap-3 border-t border-gray-5 pt-4">
                   <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
                   <div className="text-left">
                      <h4 className="font-bold text-sm text-hugsberry-navy">{testimonial.name}</h4>
                      <span className="text-xs text-gray-400">{testimonial.role}</span>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-hugsberry-navy text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 mt-auto">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="text-center md:text-left">
               <div className="bg-white/10 p-4 rounded-2xl inline-block mb-4">
                 <HugsberryLogo size="md" className="brightness-0 invert" />
               </div>
               <p className="text-gray-300 text-sm max-w-xs mx-auto md:mx-0">
                 Handmade with love in India. Sustainable, culturally rooted, and safe for your little explorer.
               </p>
            </div>
            
            <div>
               <a 
                 href={INSTAGRAM_URL} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center gap-3 bg-white text-hugsberry-navy px-8 py-3 rounded-full font-bold hover:bg-hugsberry-yellow transition-colors"
               >
                 <Instagram size={20} />
                 @hugs.berry
               </a>
            </div>
         </div>

         <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
            <p>© 2024 Hugsberry. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default App;