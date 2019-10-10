onmessage = function(e) {
  if(e.data.includes(" ") || e.data.length === 0) postMessage(false)
  else postMessage(true);
}
