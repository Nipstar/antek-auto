/**
 * Google Analytics utility functions
 * Handles initialization and page view tracking
 */

// Initialize Google Analytics with gtag script
export const initializeGoogleAnalytics = (gtagId: string) => {
  if (!gtagId || gtagId === 'G-XXXXXXXXXX') {
    console.warn('Google Analytics ID not configured');
    return;
  }

  // Load gtag script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`;
  document.head.appendChild(script1);

  // Initialize gtag
  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gtagId}', {
      'page_path': window.location.pathname,
      'anonymize_ip': true
    });
  `;
  document.head.appendChild(script2);

  console.log('Google Analytics initialized with ID:', gtagId);
};

// Track page views (call this when route changes)
export const trackPageView = (path: string) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('config', import.meta.env.VITE_GOOGLE_ANALYTICS_ID, {
      'page_path': path,
    });
  }
};

// Track custom events
export const trackEvent = (eventName: string, eventData?: Record<string, string | number | boolean>) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, eventData || {});
  }
};

// Extend window interface for gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}
