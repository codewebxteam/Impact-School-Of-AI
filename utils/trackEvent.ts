// utils/trackEvent.ts

export const trackMetaEvent = (eventName: string, options: any = {}) => {
  if (typeof window === 'undefined') return;

  const fireEvent = () => {
    (window as any).fbq('track', eventName, options);
    console.log(`✅ Meta Pixel: Fired [${eventName}]`, options);
  };

  // Agar fbq turant available hai toh direct fire karo
  if ((window as any).fbq) {
    fireEvent();
  } else {
    console.log(`⏳ Meta Pixel loading, retrying event [${eventName}]...`);
    let attempts = 0;
    
    // Har 1 second mein check karega, maximum 5 times (5 seconds tak)
    const intervalId = setInterval(() => {
      attempts++;
      if ((window as any).fbq) {
        fireEvent();
        clearInterval(intervalId); // Fire ho gaya toh interval stop kar do
      } else if (attempts >= 5) {
        console.error(`❌ Meta Pixel still not found after 5 attempts. Failed to fire [${eventName}].`);
        clearInterval(intervalId); // 5 baar ke baad haar maan lo
      }
    }, 1000);
  }
};

/**
 * 🛒 Sales (Purchase) track karne ke liye dedicated helper function
 * @param value Course ya product ka price
 * @param currency Default 'INR' hai
 */
export const trackPurchase = (value: number, currency: string = 'INR') => {
  trackMetaEvent('Purchase', {
    value: value,
    currency: currency,
  });
};