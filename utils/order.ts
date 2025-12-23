export const generateOrderId = () => {
  const date = new Date();
  const dateStr = date.toISOString().slice(2, 10).replace(/-/g, "");
  const random = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");
  return `ORD-${dateStr}-${random}`;
};

export const isValidPakistaniPhone = (phone: string) =>
  /^03\d{9}$/.test(phone.replace(/\s|-/g, ""));
