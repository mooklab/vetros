
new Swiper('section.main div.swiper', {
    navigation: {
        prevEl: 'section.main div.swiper-navigation div.arrow:first-child',
        nextEl: 'section.main div.swiper-navigation div.arrow:last-child',
    },
})

new Swiper('section.safety div.swiper', {
    spaceBetween: 10,
    navigation: {
        prevEl: 'section.safety div.swiper-navigation div.arrow:first-child',
        nextEl: 'section.safety div.swiper-navigation div.arrow:last-child',
    },
    breakpoints: {
        960: {
            spaceBetween: 24,
        }
    }
})

new Swiper('section.products div.swiper', {
    spaceBetween: 10,
    navigation: {
        prevEl: 'section.products div.swiper-navigation div.arrow:first-child',
        nextEl: 'section.products div.swiper-navigation div.arrow:last-child',
    },
    breakpoints: {
        960: {
            spaceBetween: 24,
        }
    }
})

new Swiper('section.trust div.swiper', {
    slidesPerView: 2,
    spaceBetween: 10,
    grid: false,
    breakpoints: {
        640: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        960: {
            slidesPerView: 6,
            spaceBetween: 20,
            grid: {
                rows: 3,
                fill: 'row'
            },
        }
    }
})

textareas = document.querySelectorAll('textarea').forEach( textarea => {
    autosize(textarea)
})

function autosize (element) {
    element.style.height = 'auto'
    element.style.height = (element.scrollHeight + 2) + "px"
}

const validate = (event) => {
    const value = event.which
    console.log(value)
    value >= 1072 && value <= 1103 || value == 32 || value == 32 || value == 39 ? console.log(value) : event.preventDefault()
}

const upload = (element) => {
    file = element.files[0]
    console.log(element.files)
    if( file ) {
        element.nextElementSibling.innerHTML = element.files[0].name
        element.parentNode.classList.add("added")
    } else {
        element.parentNode.classList.remove("added")
    }
}

const resetUpload = (event, element) => {
    event.preventDefault()
    element.parentNode.classList.remove("added")
}

// let validation = (element) => {
//     form = element.closest('form')
//     element.nextElementSibling.nextElementSibling.textContent = element.validationMessage
//     form.classList.add('error')

//     form.addEventListener('click', (event) => {
//         form.classList.remove('error')
//     })
// }