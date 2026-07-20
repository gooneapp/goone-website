import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="GoOne Logo" className="h-8 w-auto object-contain" />
            <span className="text-2xl font-bold text-primary hidden sm:inline-block">GoOne</span>
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link to="/features" className="transition-colors hover:text-primary">Features</Link>
          <Link to="/solutions" className="transition-colors hover:text-primary">Solutions</Link>
          <Link to="/pricing" className="transition-colors hover:text-primary">Pricing</Link>
          <Link to="/about" className="transition-colors hover:text-primary">About</Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact Sales
          </Link>
          <Link to="/download-app" className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
            Download App
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="container md:hidden py-4 border-b">
          <nav className="flex flex-col space-y-4">
            <Link to="/features" onClick={() => setIsOpen(false)}>Features</Link>
            <Link to="/solutions" onClick={() => setIsOpen(false)}>Solutions</Link>
            <Link to="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Sales</Link>
            <Link to="/download-app" className="font-semibold text-primary" onClick={() => setIsOpen(false)}>Download App</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
