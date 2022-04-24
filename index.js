//Esperamos a que esté cargada la ventana para poder acceder al elemento "file"
window.onload = function()
{
    //Comprueba que la API File es soportada por el navegador que se maneja
    if (window.File && window.FileReader && window.FileList) 
    {
        console.log("Todas las APIs soportadas");
    } 
    else 
    {
        alert("La API de FILE no es soportada en este navegador.");
    }
    //Cuando se lanza el evento "change" cargamos el video elegido. 
    document.getElementById("archivo").addEventListener("change", cargarVideo, false);
};

//Función para cargar un video elegido por el usuario a partir de la API file
function cargarVideo(evt) 
{
    let archivo = evt.target.files[0]; // Elemento de video
    let lector = new FileReader();
    let span = document.getElementById("mensaje-carga");

    lector.onload = (function(video)
    {
        let videoElement = document.getElementById("video");
        videoElement.src = video.target.result;
        span.innerHTML +=  "<br>" + "El video se ha cargado " + new Date().toLocaleTimeString();
    });
    lector.readAsDataURL(archivo);
    span.innerHTML = "El video se está cargando " + new Date().toLocaleTimeString();
}