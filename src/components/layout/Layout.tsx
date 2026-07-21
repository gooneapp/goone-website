import { Outlet } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from './Footer';
import { FaWhatsapp } from 'react-icons/fa';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/916374127764" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[99] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="h-8 w-8" />
      </a>
    </div>
  );
}
