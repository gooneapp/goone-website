import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface WebsiteConfig {
  HERO_TITLE: string;
  HERO_SUBTITLE: string;
  HERO_DESCRIPTION: string;
  HERO_IMAGE_URL: string;
  APK_URL: string;
  FEATURES_TITLE: string;
  FEATURES_LIST: string[];
  PRICING_PLANS: Array<{ name: string; price: string; features: string[] }>;
  [key: string]: any;
}

interface WebsiteConfigContextType {
  config: WebsiteConfig | null;
  loading: boolean;
  error: Error | null;
}

const WebsiteConfigContext = createContext<WebsiteConfigContextType | undefined>(undefined);

export function WebsiteConfigProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<WebsiteConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchConfig() {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000/api/v1';
        const res = await fetch(`${apiUrl}/config/website`);
        if (!res.ok) throw new Error('Failed to fetch website config');
        const data = await res.json();
        if (data.success) {
          setConfig(data.data as WebsiteConfig);
        } else {
          throw new Error('Failed to fetch website config');
        }
      } catch (err: any) {
        console.error('Error fetching website config:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchConfig();
  }, []);

  return (
    <WebsiteConfigContext.Provider value={{ config, loading, error }}>
      {children}
    </WebsiteConfigContext.Provider>
  );
}

export function useWebsiteConfig() {
  const context = useContext(WebsiteConfigContext);
  if (context === undefined) {
    throw new Error('useWebsiteConfig must be used within a WebsiteConfigProvider');
  }
  return context;
}
