import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 animate-fadeIn">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-primary">GoOne</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              {t('footer.tagline')}
            </p>
            <div className="space-y-2 mt-4 text-sm text-muted-foreground">
              <p>{t('footer.email')}: goone.app1@gmail.com</p>
              <p>{t('footer.whatsapp')}: +91 6374127764</p>
              <p>
                {t('footer.instagram')}: <a href="https://instagram.com/_go_one_" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">@_go_one_</a>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">{t('footer.product')}</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/features" className="hover:text-primary">{t('navbar.features')}</Link></li>
              <li><Link to="/solutions" className="hover:text-primary">{t('navbar.solutions')}</Link></li>
              <li><Link to="/pricing" className="hover:text-primary">{t('navbar.pricing')}</Link></li>
              <li><Link to="/download-app" className="hover:text-primary">{t('navbar.download')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary">{t('navbar.about')}</Link></li>
              <li><Link to="/careers" className="hover:text-primary">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Locations</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/tamilnadu/kallakurichi" className="hover:text-primary">Kallakurichi (கள்ளக்குறிச்சி)</Link></li>
              <li><Link to="/tamilnadu/tiruvannamalai" className="hover:text-primary">Tiruvannamalai (திருவண்ணாமலை)</Link></li>
              <li><Link to="/tamilnadu/villupuram" className="hover:text-primary">Villupuram (விழுப்புரம்)</Link></li>
              <li><Link to="/tamilnadu/chennai" className="hover:text-primary">Chennai (சென்னை)</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="hover:text-primary">Terms & Conditions</Link></li>
              <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} GoOne. {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
}
