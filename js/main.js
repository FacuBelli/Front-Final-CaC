document.getElementById("header").innerHTML = `<nav class="navbar navbar-expand-sm navbar-light bg-light">
<div class="container" id="container">
  <a class="navbar-brand" href="index.html"><img src="/img/logo.jpg" alt="" id="logo"></a>
  <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
    aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavId">
    <ul class="navbar-nav me-auto mt-2 mt-lg-0">
      <li class="nav-item">
        <a class="nav-link active" href="index.html" aria-current="page">Home<span class="visually-hidden">(current)</span></a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Crud</a>
        <div class="dropdown-menu" aria-labelledby="dropdownId">
          <a class="dropdown-item" href="productos.html">Productos</a>
        </div>
      </li>
    </ul>
  </div>
</div>
</nav>`

document.getElementById("footer").innerHTML =`<section class="footer">
<h4>Gaming4Gamers&reg; es una marca registrada. Todos los derechos reservados-2023</h4>
</section>`