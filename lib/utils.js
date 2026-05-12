export const statusColors = {
  Processing: 'bg-blue-100 text-blue-800',
  'In Transit': 'bg-ocean-100 text-ocean-700',
  Delayed: 'bg-yellow-100 text-yellow-800',
  'Customs Hold': 'bg-orange-100 text-orange-800',
  'Out for Delivery': 'bg-purple-100 text-purple-800',
  Delivered: 'bg-green-100 text-green-800'
};

export const statusOrder = ['Processing', 'In Transit', 'Customs Hold', 'Out for Delivery', 'Delivered'];

export const validateTrackingCode = (code) => /^OCN-\d{4}-\d{5}$/.test(code);

export const formatDate = (value) =>
  new Date(value).toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  });

export const formatDateTime = (value) =>
  new Date(value).toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

export const getProgressStep = (status) => {
  const map = {
    Processing: 1,
    'In Transit': 2,
    'Customs Hold': 3,
    Delayed: 3,
    'Out for Delivery': 4,
    Delivered: 5
  };
  return map[status] || 1;
};

export const getShipmentById = (id, shipments) => shipments.find((shipment) => shipment.id === id) || null;

export const getRegionFromRoute = (shipment) => {
  const route = `${shipment.origin.country} ${shipment.destination.country}`;
  if (/China|Japan|South Korea|Singapore|Malaysia|India|Vietnam|Thailand/.test(route) && /Germany|Netherlands|France|United Kingdom|Belgium|Spain/.test(route)) {
    return 'Asia-Europe';
  }
  if (/United States|Canada|Mexico/.test(route) && /China|Japan|South Korea|Singapore|India/.test(route)) {
    return 'Trans-Pacific';
  }
  if (/United States|Canada|Mexico/.test(route) && /Germany|Netherlands|France|United Kingdom|Belgium|Spain/.test(route)) {
    return 'Trans-Atlantic';
  }
  if (/United Arab Emirates|Saudi Arabia|Qatar|Oman/.test(route)) {
    return 'Middle East';
  }
  if (/Brazil|Chile|Argentina|Peru|Colombia/.test(route)) {
    return 'South America';
  }
  return 'Global';
};
