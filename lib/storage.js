const SHIPMENTS_KEY = 'oceanus_shipments';

export const getShipments = () => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(SHIPMENTS_KEY);
  return stored ? JSON.parse(stored) : null;
};

export const saveShipments = (data) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(SHIPMENTS_KEY, JSON.stringify(data));
};

export const initShipments = (fallback) => {
  const existing = getShipments();
  if (!existing) saveShipments(fallback);
  return existing || fallback;
};

export const loadShipments = (fallback) => initShipments(fallback);

export const updateShipment = (id, updates, fallback) => {
  const shipments = initShipments(fallback);
  const next = shipments.map((shipment) => (shipment.id === id ? { ...shipment, ...updates } : shipment));
  saveShipments(next);
  return next.find((shipment) => shipment.id === id) || null;
};

export const deleteShipment = (id, fallback) => {
  const shipments = initShipments(fallback);
  const next = shipments.filter((shipment) => shipment.id !== id);
  saveShipments(next);
  return next;
};

export const getShipmentByCode = (code, fallback) => {
  const shipments = initShipments(fallback);
  return shipments.find((shipment) => shipment.id.toUpperCase() === code.toUpperCase()) || null;
};
