window.addEventListener('DOMContentLoaded', (event) => {

    //set index to first slide
    let slideIndex = 0
    
    //get all slides
    const slides = document.querySelectorAll('.slide')

    const toggleActiveSlide = (index) =>{        
        slides[index].classList.toggle('active')
        console.log(slides)
    }

    //load initial state
    toggleActiveSlide(slideIndex)


    window.back = () =>{
        toggleActiveSlide(slideIndex)
        slideIndex--

        if(slideIndex < 0){
            slideIndex = slides.length - 1
        }

        toggleActiveSlide(slideIndex)
    }

    window.next = () =>{
        toggleActiveSlide(slideIndex)
        slideIndex++

        if(slideIndex > slides.length - 1){
            slideIndex = 0
        }

        toggleActiveSlide(slideIndex)
    }

    const autoSlide = () => {
        next()
        setTimeout(autoSlide, 4000)
    }
    
    autoSlide();



});