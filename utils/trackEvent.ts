export const trackMetaEvent = (eventName: string, data = {}) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, data);
  } else {
    console.warn("Meta Pixel is not loaded yet or blocked by an adblocker.");
  }
};