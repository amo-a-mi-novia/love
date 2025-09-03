function mostrarDescripcion(idx) {
  document.querySelectorAll('.desc-cute').forEach((el, i) => {
    el.style.display = (i === idx && el.style.display !== 'block') ? 'block' : 'none';
  });
}