(function(){

// constante para seleccionar las sliders del DOM
const sliders = [...document.querySelectorAll('.testimony__body')];

// constante para seleccionar mi boton next del dom
const buttonNext = document.querySelector('#next');

// constante para seleccionar mi boton before del dom
const buttonBefore = document.querySelector('#before');

let value;

// cuando hago click al boton next cambia la posicion sumando 1
buttonNext.addEventListener('click', ()=>{
    changePosition(1);
});

// cuando hago click al boton de atras cambia la posicion sumando 1
buttonBefore.addEventListener('click', ()=>{
    changePosition(-1);
});

// currentTestimony lo creo para obtener mi slider actual
const changePosition = (add)=>{
   const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
   value = Number(currentTestimony);
   value += add;

   sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');
   if(value === sliders.length+1 || value === 0){
        value = value === 0 ? sliders.length : 1;
   }

   sliders[value-1].classList.add('testimony__body--show');

}
})()