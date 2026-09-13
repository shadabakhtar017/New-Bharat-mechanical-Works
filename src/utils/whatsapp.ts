import { BUSINESS_CONFIG } from '../config/businessConfig';

export const createWhatsAppLink = (message: string): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodedMessage}`;
};

export const openGeneralWhatsApp = () => {
  const message = "Hello New Bharat Mechanical Works, I found your website and would like to know more about your services.";
  window.open(createWhatsAppLink(message), '_blank');
};

export const openServiceWhatsApp = (serviceName: string) => {
  const message = `Hello New Bharat Mechanical Works, I am interested in your ${serviceName} service. Please share details and pricing.`;
  window.open(createWhatsAppLink(message), '_blank');
};

export const openProjectWhatsApp = (projectName: string, category: string) => {
  const message = `Hello New Bharat Mechanical Works, I saw your project "${projectName}" (${category}) on your website and would like to discuss a similar requirement.`;
  window.open(createWhatsAppLink(message), '_blank');
};

export const openQuoteWhatsApp = () => {
  const message = "Hello New Bharat Mechanical Works, I would like to request a quote for my upcoming project requirements.";
  window.open(createWhatsAppLink(message), '_blank');
};

export const openFormWhatsApp = (name: string, service: string, phone: string, details: string) => {
  const message = `Hello New Bharat Mechanical Works,\n\nI would like to enquire about a project.\n\nName: ${name}\nService: ${service}\nPhone: ${phone}\nRequirement: ${details}`;
  window.open(createWhatsAppLink(message), '_blank');
};
