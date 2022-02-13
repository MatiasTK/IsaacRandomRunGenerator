const personajes = [
    {nombre: "Isaac", img: "src/img/isaac.png", allowed: true},
    {nombre: "Magdalene", img: "src/img/magdalene.png", allowed: true},
    {nombre: "Cain", img: "src/img/cain.png", allowed: true},
    {nombre: "Judas", img: "src/img/judas.png", allowed: true},
    {nombre: "Blue Baby", img: "src/img/bluebaby.png", allowed: true},
    {nombre: "Eve", img: "src/img/eve.png", allowed: true},
    {nombre: "Samson", img: "src/img/samson.png", allowed: true},
    {nombre: "Azazel", img: "src/img/azazel.png", allowed: true},
    {nombre: "Lazarus", img: "src/img/lazarus.png", allowed: true},
    {nombre: "Eden", img: "src/img/eden.png", allowed: true},
    {nombre: "The Lost", img: "src/img/lost.png", allowed: true},
    {nombre: "Lilith", img: "src/img/lilith.png", allowed: true},
    {nombre: "Keeper", img: "src/img/keeper.png", allowed: true},
    {nombre: "Apollyon", img: "src/img/apollyon.png", allowed: true},
    {nombre: "The Forgotten", img: "src/img/forgotten.png", allowed: true},
    {nombre: "Bethany", img: "src/img/bethany.png", allowed: true},
    {nombre: "Jacob & Essau", img: "src/img/jacobessau.png", allowed: true},
    {nombre: "Tainted Isaac", img: "src/img/tisaac.png", allowed: true},
    {nombre: "Tainted Magdalene", img: "src/img/tmagdalene.png", allowed: true},
    {nombre: "Tainted Cain", img: "src/img/tcain.png", allowed: true},
    {nombre: "Tainted Judas", img: "src/img/tjudas.png", allowed: true},
    {nombre: "Tainted Blue Baby", img: "src/img/tbluebaby.png", allowed: true},
    {nombre: "Tainted Eve", img: "src/img/teve.png", allowed: true},
    {nombre: "Tainted Samson", img: "src/img/tsamson.png", allowed: true},
    {nombre: "Tainted Azazel", img: "src/img/tazazel.png", allowed: true},
    {nombre: "Tainted Lazarus", img: "src/img/tlazarus.png", allowed: true},
    {nombre: "Tainted Eden", img: "src/img/teden.png", allowed: true},
    {nombre: "Tainted The Lost", img: "src/img/tlost.png", allowed: true},
    {nombre: "Tainted Lilith", img: "src/img/tlilith.png", allowed: true},
    {nombre: "Tainted Keeper", img: "src/img/tkeeper.png", allowed: true},
    {nombre: "Tainted Apollyon", img: "src/img/tapollyon.png", allowed: true},
    {nombre: "Tainted The Forgotten", img: "src/img/tforgotten.png", allowed: true},
    {nombre: "Tainted Bethany", img: "src/img/tbethany.png", allowed: true},
    {nombre: "Jacob (Tainted)", img: "src/img/tjacobessau.png", allowed: true},
]

const objetivos = [
    {nombre: "???", img: "src/img/bluebabyboss.png", allowed: true},
    {nombre: "The Lamb", img: "src/img/lamb.png", allowed: true},
    {nombre: "Mega Satan", img: "src/img/megasatan.png", allowed: true},
    {nombre: "Ultra Greed", img: "src/img/ultragreed.png", allowed: true},
    {nombre: "Delirium", img: "src/img/delirium.png", allowed: true},
    {nombre: "Mother", img: "src/img/mother.png", allowed: true},
    {nombre: "The Beast", img: "src/img/beast.png", allowed: true},
]

const objetivosOpcionales = [
    {nombre: "Boss Rush", img: "src/img/bossrush.png", allowed: true},
    {nombre: "Hush", img: "src/img/hush.png", allowed: true}
]

document.addEventListener("DOMContentLoaded", ()=>{

    generarRun();
    opciones();
});

function elegirPersonaje(){
    let eleccion = personajes[Math.floor(Math.random() * 34)];
    while(!eleccion.allowed){
        eleccion = personajes[Math.floor(Math.random() * 34)]
    }

    const imagen = document.querySelector(".character-image");
    imagen.innerHTML = '';
    const nuevaImagen = document.createElement("img");
    nuevaImagen.src = eleccion.img;
    
    imagen.appendChild(nuevaImagen);

    const nombre = document.querySelector(".character-name");
    nombre.innerHTML = '';
    const nuevoNombre = document.createElement("p");
    nuevoNombre.textContent = eleccion.nombre;
    if(eleccion.nombre.includes("Tainted")){
        nuevoNombre.classList.add("tainted");
    }

    nombre.appendChild(nuevoNombre);
}

function elegirObjetivo(){
    let eleccion = objetivos[Math.floor(Math.random() * 7)];
    while(!eleccion.allowed){
        eleccion = objetivos[Math.floor(Math.random() * 2)]
    }

    let eleccionOpcional = objetivosOpcionales[Math.floor(Math.random() * 2)];
    while(!eleccionOpcional.allowed){
        eleccionOpcional = objetivosOpcionales[Math.floor(Math.random() * 2)]
    }

    const objetivo = document.querySelector(".objectives");
    objetivo.innerHTML = ""

    const principal = document.createElement("p");
    const principalImagen = document.createElement("img");
    principalImagen.classList.add("completion-marks");

    principalImagen.src = eleccion.img;

    principal.innerHTML = principalImagen.outerHTML+eleccion.nombre;

    const opcional = document.createElement("p");
    const opcionalImagen = document.createElement("img");
    opcionalImagen.classList.add("completion-marks");

    opcionalImagen.src = eleccionOpcional.img;

    opcional.innerHTML = opcionalImagen.outerHTML+eleccionOpcional.nombre;
    
    objetivo.appendChild(principal);
    objetivo.appendChild(opcional);
}

function generarRun(){
    const boton = document.querySelector(".boton");

    boton.addEventListener("click", () => {
        elegirPersonaje();
        elegirObjetivo();
    });
}

function opciones(){
    const boton = document.querySelector(".options");

    boton.addEventListener("click",()=>{
        alert("WIP");
    });
}