const {data, close} = useApi(TARGET);

try {
  const orderId = data.selected[0]?.id;
  
  const response = await fetch(`/api/orders/${orderId}/fulfill`, {
    method: 'POST',
  });
  
  const result = await response.json();
  
  if (!response.ok) {
    throw new Error(result.error || 'Fulfillment failed');
  }
  
  console.log('Order fulfilled:', result);
  close();
} catch (error) {
  console.error('Error fulfilling order:', error.message);
}
