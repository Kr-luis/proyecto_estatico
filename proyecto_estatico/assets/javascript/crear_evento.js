function addProject() {

  var titulo = document.getElementById('titulo').value;
  var Ubicacion = document.getElementById('Ubicacion').value;
  var Etiquetas = document.getElementById('Etiquetas').value;
  var Descripcion = document.getElementById('Descripcion').value;

  var projectElement = document.createElement('div');
  projectElement.className = 'col-md-4';
  projectElement.innerHTML = `
      <div class="card mb-4">
        <div class="card-body">
          <h5 class="card-title">${titulo}</h5>
          <p class="card-text">Ubicacion: ${Ubicacion}</p>
          <p class="card-text">Etiquetas: ${Etiquetas}</p>
          <p class="card-text">Descripcion: ${Descripcion}</p>
          <a href="comentarios.html" class="btn btn-primary" target="_blank">Añadir al carrito</a>
          <a href="carrito.html" class="btn btn-primary" target="_blank">Comentarios</a>
        </div>
      </div>
    `;

  document.getElementById('projectList').appendChild(projectElement);


  document.getElementById('projectForm').reset();
}




