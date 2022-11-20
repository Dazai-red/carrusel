const row = document.querySelector('.carousel-with-images .carousel-container');
const items = document.querySelectorAll('.carousel-with-images .carousel-item');

const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');


// ------ -----Event listener for the right arrow ----- -----
rightArrow.addEventListener('click', () => {
    // offsetWidth property returns the viewable width of an element (in pixels) including padding, border and scrollbar
    // obtiene el scroll actual derecho de la fila lo suma con su offsetwidth 
    row.scrollLeft += row.offsetWidth;
    
    const dotActive = document.querySelector('.active');

    if(dotActive.nextSibling){
        dotActive.nextSibling.classList.add('active');
        dotActive.classList.remove('active');
    }

});

// ------ -----Event listener for the left arrow ----- -----
leftArrow.addEventListener('click', () => {   
    row.scrollLeft -= row.offsetWidth;// obtiene el scroll actual izquierdo de la fila y resta su offsetwidth 
    const dotActive = document.querySelector('.active');
    if(dotActive.previousSibling){
        dotActive.previousSibling.classList.add('active');
        dotActive.classList.remove('active');
    }
});

// ------ ----- pagination ----- -----

// Math.ceil para redondear hacía arriba en el caso de que sobren items
const numberOfPages = Math.ceil(items.length / 5); //entre 5 porque queremos tener 5 elementos por página
for(let i = 0; i< numberOfPages; i++){
    const dot = document.createElement('button');
    dot.classList.add('dots');
    if(i===0){
        dot.classList.add('active');
    }
        
    document.querySelector('.carousel-with-images .dots-container').appendChild(dot);
    dot.addEventListener('click', (e)=>{
        row.scrollLeft = i * row.offsetWidth;

        document.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
    });
}

// ------ ----- Hover items ----- -----
items.forEach((item) => {
    item.addEventListener('mouseenter', (e) =>{
        const element = e.currentTarget;
        setTimeout(() => {
            items.forEach(item => item.classList.remove('hover'));
            element.classList.add('hover');
        }, 300);
    
    });

});

row.addEventListener('mouseleave', ()=> {
    items.forEach(item => item.classList.remove('hover'));
});



