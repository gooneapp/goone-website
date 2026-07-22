import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });
  const { language, setLanguage, t } = useLanguage();

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove('dark');
      setIsDark(false);
    } else {
      root.classList.add('dark');
      setIsDark(true);
    }
  };

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
          <Link to="/features" className="transition-colors hover:text-primary">{t('navbar.features')}</Link>
          <Link to="/solutions" className="transition-colors hover:text-primary">{t('navbar.solutions')}</Link>
          <Link to="/pricing" className="transition-colors hover:text-primary">{t('navbar.pricing')}</Link>
          <Link to="/about" className="transition-colors hover:text-primary">{t('navbar.about')}</Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')} 
            className="text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-primary/20 hover:bg-primary/5 hover:text-primary transition-all flex items-center gap-1"
            aria-label="Toggle language / மொழியை மாற்று"
          >
            🌐 {language === 'en' ? 'தமிழ்' : 'English'}
          </button>
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-muted transition-colors" aria-label="Toggle dark mode">
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            {t('navbar.contact')}
          </Link>
          <Link to="/download-app" className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
            {t('navbar.download')}
          </Link>
        </div>

        <div className="md:hidden flex items-center space-x-3">
          <button 
            onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')} 
            className="text-[10px] font-semibold px-2 py-1.5 rounded-lg border border-primary/20 hover:bg-primary/5 hover:text-primary transition-all flex items-center gap-0.5"
            aria-label="Toggle language / மொழியை மாற்று"
          >
            🌐 {language === 'en' ? 'தமிழ்' : 'English'}
          </button>
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-muted transition-colors" aria-label="Toggle dark mode">
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="container md:hidden py-4 border-b">
          <nav className="flex flex-col space-y-4">
            <Link to="/features" onClick={() => setIsOpen(false)}>{t('navbar.features')}</Link>
            <Link to="/solutions" onClick={() => setIsOpen(false)}>{t('navbar.solutions')}</Link>
            <Link to="/pricing" onClick={() => setIsOpen(false)}>{t('navbar.pricing')}</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>{t('navbar.about')}</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>{t('navbar.contact')}</Link>
            <Link to="/download-app" className="font-semibold text-primary" onClick={() => setIsOpen(false)}>{t('navbar.download')}</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
