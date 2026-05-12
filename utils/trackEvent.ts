// utils/trackEvent.ts

export const trackMetaEvent = (eventName: string, options: any = {}) => {
  if (typeof window !== 'undefined') {
    // Agar fbq available hai toh direct fire karo
    if ((window as any).fbq) {
      (window as any).fbq('track', eventName, options);
      console.log(`✅ Meta Pixel: Fired [${eventName}]`, options);
    } else {
      // Agar fbq load hone mein time lag raha hai, toh thoda wait karke fire karo
      console.log('⏳ Meta Pixel loading, retrying event...');
      setTimeout(() => {
        if ((window as any).fbq) {
          (window as any).fbq('track', eventName, options);
          console.log(`✅ Meta Pixel: Fired [${eventName}] after delay`, options);
        } else {
          console.error('❌ Meta Pixel still not found!');
        }
      }, 1500); // 1.5 second ka delay
    }
  }
};