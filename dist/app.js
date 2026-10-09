const rent = document.getElementById('rent');
const rate = document.getElementById('rate');
function updateEstimate() {
 const r = Number(rent.value), fx = Number(rate.value);
 document.getElementById('rentLabel').textContent = '£' + r.toLocaleString('en-GB');
 document.getElementById('rateLabel').textContent = '₦' + fx.toLocaleString('en-GB') + ' / £1';
 document.getElementById('equivalent').textContent = '₦' + (r * fx).toLocaleString('en-GB');
}
rent.addEventListener('input', updateEstimate);
rate.addEventListener('input', updateEstimate);
updateEstimate();
