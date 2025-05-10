'use client'
const Carousel = () => {
  return (
    <div class="carousel">
      <div class="slideshow-container">
        <div class="slide">
          <img src="/carousel-img1.png" alt="preview images"/>
        </div>
        <div class="slide">
          <img src="/carousel-img2.png" alt="preview images"/>
        </div>
        <div class="slide">
          <img src="/carousel-img3.jpg" alt="preview images"/>
        </div>
        <div class="slide">
          <img src="/carousel-img4.jpg" alt="preview images"/>
        </div>
        <div class="slide">
          <img src="/carousel-img5.png" alt="preview images"/>
        </div>
      </div>
      <div>
        <text>MMUN is a ...</text>
      </div>
      <button class="carousel_button" onClick={slideshow_backwards}>&#10094;</button>
      <button class="carousel_button" onClick={slideshow_forwards}>&#10095;</button>
    </div>
  );
};

let index = 0;

function slideshow_backwards()
{
  show_slide((index -= 1));
}

function slideshow_forwards()
{
  show_slide((index += 1));
}

let place = 1;
// show_slide(place);


function show_slide(n)
{
  let slides = document.getElementsByClassName("slide");

  if (n > slides.length) { place = 1; }
  if (n < 1) { place = slides.length; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[place - 1].style.display = "block";
}

export default Carousel;
