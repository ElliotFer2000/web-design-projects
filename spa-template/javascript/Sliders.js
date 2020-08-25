
let Glide = null


function getSlider(slider) {
    const id = slider.id

    switch (id) {
        case "services": {

            const glideServicesSection = new Glide(slider, {
                type: 'slider',
                perView: 4,
                focusAt: 0,
                gap: 5,
                bound: true,
                rewind: false,
                breakpoints: {
                    992: {
                        perView: 3
                    },
                    601: {
                        perView: 2
                    }
                }
            })

            glideServicesSection.mount()

            break;
        }

        case "testimonials": {

            const glideTestimonialsSection = new Glide(slider, {
                type: 'carousel',
                focusAt: 0,
                perView: 1,
                hoverpause: true,
                autoplay: 2500
            })

            glideTestimonialsSection.mount()

            break;
        }

    }
}

function Sliders(elements, GlideConstructor) {
    Glide = GlideConstructor
    Object.values(elements).map(getSlider);
}


export { Sliders }