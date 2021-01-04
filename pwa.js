// iVip PWA Version 2.0
// On install - caching the application shell
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('pwa-cache').then(function (cache) {
      // cache any static files that make up the application shell
      return cache.addAll([
        '/',
        'index.html',
        '/fr/index.html',
        '/pt-br/index.html',
        'bmi.html',
        'lucky-bet.html',
        'pomodoro.html',
        'russian-roulette.html',
        'stopwatch.html',
        'to-do.html',
        'calculator.html',
        'form-validation.html',
        'cpf-generator.html',
        'password-generator.html',
        '/assets/img/javascript-logo.jpg',
        '/assets/img/js-large.png',
        '/assets/img/bmi.png',
        '/assets/img/good-luck-lion.png',
        '/assets/img/icons-192.png',
        '/assets/img/icons-512.png',
        '/assets/img/pomodoro-timer.png',
        '/assets/img/stopwatch.png',
        '/assets/img/taurus-raging-bull.png',
        '/assets/img/todo.png',
        '/assets/img/brazilian-portuguese.png',
        '/assets/img/english.png',
        '/assets/img/french.png',
        '/assets/img/percentual.png',
        '/assets/img/valid.png',
        '/assets/img/cpf.png',
        '/assets/img/password.png',
        '/assets/favicon/favicon-32x32.png',
        '/assets/favicon/favicon-16x16.png',
        '/assets/js/menu.js',
        '/assets/js/menu-pt-br.js',
        '/assets/js/menu-fr.js',
        '/assets/js/calc.js',
        '/assets/js/date.js',
        '/assets/js/date-br.js',
        '/assets/js/date-fr.js',
        '/assets/js/bet.js',
        '/assets/js/bmi.js',
        '/assets/js/pomodoro.js',
        '/assets/js/russianRoulette.js',
        '/assets/js/stopwatch.js',
        '/assets/js/toDo.js',
        '/assets/js/validateCPF.js',
        '/assets/js/validateForm.js',
        '/assets/js/newPassword.js',
        '/assets/dist/js/bootstrap.bundle.min.js',
        '/assets/dist/css/bootstrap.min.css',
        '/assets/fontawesome/css/all.css',
        '/assets/css/style.css',
        '/assets/css/calculator.css',
        '/assets/fontawesome/webfonts/fa-brands-400.ttf',
        '/assets/fontawesome/webfonts/fa-brands-400.woff',
        '/assets/fontawesome/webfonts/fa-brands-400.woff2',
        'https://code.jquery.com/jquery-3.5.1.slim.min.js',
        'manifest.json',
        ]);
    })
  );
});

// On network request
self.addEventListener('fetch', function (event) {
  event.respondWith(
    // Try the cache
    caches.match(event.request).then(function (response) {
      //If response found return it, else fetch again
      return response || fetch(event.request);
    })
  );
});
