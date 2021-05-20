const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agreagar-imagen')
const contenedorLight = document.querySelector('.imagen-light')

magenes.forEach(magen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen( imagen.getAtribute('src'))

    

    })

})


 contenedorLight.addEventListener('click', ()=>{
     if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImages') 
     }
})



const aparecerImagen = (imagen)=>{
    imagenLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImages')

}
    
