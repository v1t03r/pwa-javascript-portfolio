function clock() {
  function createHoursFromSeconds(seconds) {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  const clock = document.querySelector('.clock');
  let seconds = 0;
  let timer;

  function startClock() {
    timer = setInterval(function() {
      seconds++;
      clock.innerHTML = createHoursFromSeconds(seconds);
    }, 1000);
  }

  document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('clear')) {
      clearInterval(timer);
      clock.innerHTML = '00:00:00';
      clock.classList.remove('paused');
      segundos = 0;
    }

    if (el.classList.contains('start')) {
      clock.classList.remove('paused');
      clearInterval(timer);
      startClock();
    }

    if (el.classList.contains('pause')) {
      clearInterval(timer);
      clock.classList.add('paused');
    }
  });
}
clock();