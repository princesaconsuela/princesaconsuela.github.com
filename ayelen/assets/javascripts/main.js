
let links = document.querySelectorAll(".close");
//recorrerlos
links.forEach(function(link){
    //agregar un evento click a cada uno de ellos
    link.addEventListener("click", function(ev){
        ev.preventDefault();
        let content = document.querySelector('.content ');

        //quitarle las clases de animacion q ya tienen
        content.classList.remove("fadeInDown");
        content.classList.remove("animated");

        //agregarle clases para animar su salida fadeOutuo
        content.classList.add("fadeOutUp");
        content.classList.add("animated");

        setTimeout(function(){//setTimeout retrasa el redireccionamiento
            location.href = "index.html"; //location.href para q nos redirija
        },600);
        //setInterval
        

    return false;
    })
})


//console.log("holi mundo");
//dom
//let table = document.querySelector(".table");ocument.querySelector es para trabajar con elementos de css
//console.log(table);con este procedimiento solo puede seleccionarse un elemto a la vez

/*let link = document.querySelectorAll("a");
link.forEach(function(){
    .log(link);
});*/

/*let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
   td.addEventListener('click', function(){
     console.log(this);
   })
});*/

//obtener los elemntos de la clase .close
/*let links = document.querySelectorAll(".close");

//recorrerlos
links.forEach(function(close){
    //agregar un evento click a cada uno de los elementos
    link.addEventListener("click", function(){
        console.log();

    })
});

//agregar un elemento click a cada uno de ellos

/*let iconos = document.querySelectorAll("i");
iconos.forEach(function(icono){
    icono.classList.remove("fa-star"); quitar clase
})*/


