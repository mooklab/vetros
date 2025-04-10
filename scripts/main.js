
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

textareas = document.querySelectorAll('textarea').forEach(textarea => {
    autosize(textarea)
})

function autosize(element) {
    element.style.height = 'auto'
    element.style.height = (element.scrollHeight + 2) + "px"
}

const validateCyr = (element, event) => {
    element.value = element.value.replace(/[^а-яА-ЯёЁ]/g, '')
}
const validateLat = (element, event) => {
    element.value = element.value.replace(/[^a-zA-Z0-9\s\.,!@?-]/g, '');
}

const validateEmail = (form, event) => {
    emailInput = form.querySelector('input[type=email')
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/
    if (re.test(emailInput.value)) {
        form.reset()
        form.closest('dialog').classList.add('success')
    } else {
        emailInput.classList.add('error')
        emailInput.closest('fieldset').querySelector('span').textContent = 'В E-mail адресе не хватает точки'
    }
}

const upload = (element) => {
    file = element.files[0]
    console.log(element.files)
    if (file) {
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
