export const formatAsCurrency = (value: number): string => {
  if (typeof value !== 'number') {
    throw Error('Value provider is not a number');
  }

  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(value);
};
