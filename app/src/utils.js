
function round(value, decimals) {
  return value.toFixed(decimals).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

export default round;
