// Navbar

let menu = document.querySelector(".nav-menu");
menu.innerHTML = `

<!-- Menu -->
<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
<!-- Menu Logo -->
<a class="navbar-brand" href="index.html"><img src="../assets/img/javascript-logo.jpg" width="33" height="33" alt="JavaScript Logo"
    class="logo-nav"></a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
  aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarsExampleDefault">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle text-light" href="#" id="projects" data-toggle="dropdown" aria-haspopup="true"
        aria-expanded="false">Portefeuille</a>
      <div class="dropdown-menu" aria-labelledby="dropdown01">
        <a class="dropdown-item" href="../bmi.html">JS Indice de Masse Corporelle (IMC)</a>
        <a class="dropdown-item" href="../russian-roulette.html">JS Roulette Russe</a>
        <a class="dropdown-item" href="../lucky-bet.html">JS Jeu D'Animaux</a>
        <a class="dropdown-item" href="../stopwatch.html">JS Chronomètre</a>
        <a class="dropdown-item" href="../pomodoro.html">JS Pomodoro Technique</a>
        <a class="dropdown-item" href="../to-do.html">JS Liste de Tâches</a>
        <a class="dropdown-item" href="../calculator.html">JS Calculatrice</a>
        <a class="dropdown-item" href="../percentual.html">JS Calculateur de Pourcentage</a>
        <a class="dropdown-item" href="../form-validation.html">JS Validation de Formulaire (CPF)</a>
      </div>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle text-light" href="#" id="references" data-toggle="dropdown" aria-haspopup="true"
        aria-expanded="false">Références</a>
      <div class="dropdown-menu" aria-labelledby="dropdown01">
        <a class="dropdown-item" href="https://developer.mozilla.org/fr/docs/Web/JavaScript">MDN JS</a>
        <a class="dropdown-item" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide">MDN JS
        Guider</a>
        <a class="dropdown-item" href="https://www.w3schools.com/js/default.asp">W3 JS Tutorial</a>
        <a class="dropdown-item" href="https://www.w3schools.com/jsref/default.asp">W3 JS and HTML DOM</a>
      </div>
    </li>
    <a class="nav-link text-light" href="https://codepen.io/v1t03r">CodePen <em class="fab fa-codepen"></em></a>
    <a class="nav-link text-light" href="https://api.whatsapp.com/send?phone=5581999931107">Whatsapp <em class="fab fab fab fa-whatsapp"></em></a>
    <a class="nav-link text-light" href="https://github.com/v1t03r">GitHub <em class="fab fab fa-github"></em></a>
    <a class="nav-link text-light" href="https://www.linkedin.com/in/v1t03r/">LinkedIn <em class="fab fab fa-linkedin"></em></a>
  </ul>
  <span id="date" class="text-muted"></span>
  <a class="nav-link" href="index.html"><img src="../assets/img/french.png" width="33" height="33" alt="Français"></a>
  <a class="nav-link" href="../index.html"><img src="../assets/img/english.png" width="33" height="33" alt="English"></a>
  <a class="nav-link" href="../pt-br/index.html"><img src="../assets/img/brazilian-portuguese.png" width="33" height="33" alt="Português"></a>
</div>
</nav>

`;