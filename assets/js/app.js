
/* Al tener "await" esta función debe ser async, lo agregué */
async function displayUser(url, username) {


  /* Name es una clase, agregué su . para que quedara en .name */
  const name = document.querySelector('.name');

  /* Blog es una clase, no un ID, cambié a .blog */
  const blog = document.querySelector('.blog');

  /*
  No encontré "location" dentro del HTMLAllCollection, lo cual me llevó a la conclusión de que no existe: "If no matches are found, null is returned."
  
  Lo agregaré en el HTML.
  */
  const location = document.querySelector('.location');

  /* Los nombres de las variables de todas las líneas arriba de este comentario no me parecen muy claros, así que los cambié. También las metí todas dentro de la función ya que no es necesario que sea variables globales. La url la convertí en un parámetro, y la otra variable la eliminé para reducir código */


  name.textContent = 'cargando...';

  /* Al ser una promesa, le agregué try y catch */
  try {
    const response = await fetch(`${url}/${username}`);
    console.log(data);
    name.textContent = '${data.name}';
    blog.textContent = '${data.blog}';
    location.textContent = '${data.location}';
  } catch (error) {
    /* Fusioné esta sección con la función de arriba y la coloqué en la sección de catch */
    console.log('OH NO!');
    console.log(error);
    n.textContent = `Algo salió mal: ${error}`
  }

}

displayUser('https://api.github.com', 'stolinski');
/* Removí el .catch porque puse la función en la sección de catch en su lugar */

/* Me he hecho al hábito de usar Shift + Alt + F así que el formato del documento también lo podría haber cambiado */
