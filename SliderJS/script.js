const images = [
    {
        url: "./img/banner_1_admiral.jpg",
        title: "Rostov-on-Don, Admiral",
        city: "Rostov-on-Don<br> LCD admiral",
        area: "81 m2",
        time: "3.5 months",
        cost: "upon request",
    },

    {
        url: "./img/banner_2_thieves.jpg",
        title: "Sochi Thieves",
        city: "Sochi<br> Thieves",
        area: "105 m2",
        time: "4 months",
        cost: "upon request",
    },

    {
        url: "./img/banner_3_patriotic.jpg",
        title: "Rostov-on-Don Patriotic",
        city: "Rostov-on-Don<br> Patriotic",
        area: "93 m2",
        time: "3 months",
        cost: "upon request",
    },
];

function initSlider() {
    if (!images || !images.length) return;

    const sliderImages = document.querySelector(".slider__images");
    const sliderArrows = document.querySelector(".projects__nav");
    const sliderDots = document.querySelector(".projects__nav-dots");
    const sliderTitle = document.querySelector(".slider__titles");
    const infoCity = document.querySelector(".projects__description-info-city");
    const infoArea = document.querySelector(".projects__description-info-area");
    const infoTime = document.querySelector(".projects__description-info-time");

    initImages();
    initArrows();

    function initImages() {
        images.forEach((image, index) => {
            const imageDiv = `<div class="image n${index} ${index === 0 ? "active" : ""
                }" style="background-image:url(${images[index].url
                });" data-index="${index}"></div>`;
            sliderImages.innerHTML += imageDiv;

            const dotsDiv = `<div class="projects__nav-dots-item n${index} ${index === 0 ? "dot__active" : ""
                }" data-index="${index}"></div>`;
            sliderDots.innerHTML += dotsDiv;

            sliderDots.querySelectorAll(".projects__nav-dots-item").forEach((dot) => {
                dot.addEventListener("click", function () {
                    moveSlider(this.dataset.index);
                });
            });

            const titlesDiv = `<div class="slider__title n${index} ${index === 0 ? "title__active" : ""
                }" data-index="${index}">${images[index].title}</div>`;
            sliderTitle.innerHTML += titlesDiv;

            sliderTitle.querySelectorAll(".slider__title").forEach((title) => {
                title.addEventListener("click", function () {
                    moveSlider(this.dataset.index);
                });
            });

            const cityDiv = `<p class="cards__text n${index} ${index === 0 ? "cards__active" : ""
                }" data-index="${index}">${images[index].city}</p>`;
            infoCity.innerHTML += cityDiv;

            const areaDiv = `<p class="cards__text n${index} ${index === 0 ? "cards__active" : ""
                }" data-index="${index}">${images[index].area}</p>`;
            infoArea.innerHTML += areaDiv;

            const timeDiv = `<p class="cards__text n${index} ${index === 0 ? "cards__active" : ""
                }" data-index="${index}">${images[index].time}</p>`;
            infoTime.innerHTML += timeDiv;
        });
    }

    function initArrows() {
        sliderArrows.querySelectorAll(".projects__nav-arrow").forEach(arrow => {
            arrow.addEventListener("click", function () {
                const curNumber = +sliderImages.querySelector(".active").dataset.index;
                let nextNumber;

                if (arrow.classList.contains("left")) {
                    nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
                } else {
                    nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
                }

                moveSlider(nextNumber);
            });
        });
    }
    function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(".n" + num).classList.add("active");
        sliderDots.querySelector(".dot__active").classList.remove("dot__active");
        sliderDots.querySelector(".n" + num).classList.add("dot__active");
        sliderTitle.querySelector(".title__active").classList.remove("title__active");
        sliderTitle.querySelector(".n" + num).classList.add("title__active");
        infoCity.querySelector(".cards__active").classList.remove("cards__active");
        infoCity.querySelector(".n" + num).classList.add("cards__active");
        infoArea.querySelector(".cards__active").classList.remove("cards__active");
        infoArea.querySelector(".n" + num).classList.add("cards__active");
        infoTime.querySelector(".cards__active").classList.remove("cards__active");
        infoTime.querySelector(".n" + num).classList.add("cards__active");
    }
}

document.addEventListener("DOMContentLoaded", initSlider);