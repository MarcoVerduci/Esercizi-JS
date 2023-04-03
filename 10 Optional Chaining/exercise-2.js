const order = {};

if (!(order && order.customer && order.customer.address && order.customer.address.city) === true) {
  console.log('City is required');
}