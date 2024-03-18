const tickerText = document.querySelectorAll('.ticker__text');

function moveTicker() {
  tickerText.forEach(text => {
    const firstSpan = text.querySelector('span');
    const spanWidth = firstSpan.offsetWidth;

    if (text.scrollLeft >= spanWidth) {
      text.scrollLeft -= spanWidth;
    } else {
      text.scrollLeft = spanWidth;
    }
  });
}

setInterval(moveTicker, 50);