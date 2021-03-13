const slider = document.querySelector('.slider');


const sliderImg    = document.querySelectorAll('.slider img');

// buttons

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

// counter  |  width size

let counter = 0;
const size = sliderImg[0].clientWidth;

//slider.style.transform = 'translateX('+( -size * counter )+'px)';
/*
next.addEventListener('click', function(){

    slider.style.transition = "transform 0.4 ease-in-out";
    counter++;
    slider.style.transform = 'translateX('+( -size * counter )+'px)';

});
*/
////////////////////////////////////////////////////////////////////////////////

const sld = document.querySelector('.sld');
const nx = document.querySelector('.right');
const pv = document.querySelector('.left');


nx.addEventListener('click', function(){

    if(counter < 3){
        counter++;
        sld.style.transform = 'translateX('+ (counter) * -25 +'%)';
    }
    
});

pv.addEventListener('click', function(){

    if(counter > 0){
        counter--;
        sld.style.transform = 'translateX('+ (counter) * -25 +'%)';
    }
    
});

document.querySelectorAll('.dw li').forEach(function(indicator,index){

    indicator.addEventListener('click', function(){

        counter = index;
        sld.style.transform = 'translateX('+ (counter) * -25 +'%)';
        document.querySelector('.dw .selector').classList.remove('selector');
        indicator.classList.add('selector');

    });

});   
