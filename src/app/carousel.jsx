const Carousel = () => {
  return (
    <div>
      <div class="slideshow-container">
        <div class="slide">
          <img src="carousel-img1.png" />
        </div>
        <div class="slide">
          <img src="carousel-img2.png" />
        </div>
        <div class="slide">
          <img src="carousel-img2.png" />
        </div>
        <div class="slide">
          <img src="carousel-img3.png" />
        </div>
        <div class="slide">
          <img src="carousel-img4.png" />
        </div>
      </div>
      <button class="carousel_button" onClick={slideshow_backwards}>
        (-
      </button>
      <button class="carousel_button" onClick={slideshow_forewards}>
        -)
      </button>
    </div>
  );
};

let index = 0;

slideshow_backwards();
{
  show_slide((index -= 1));
}

slideshow_backwards();
{
  show_slide((index += 1));
}

let place = 1;
show_slide(n);
{
  let slides = document.getElementsByClassName("slideshow-container");

  if (n > slides.length) {
    place = 1;
  } else if (n < 1) {
    place = slides.length;
  }
  slides[place - 1].style.display("block");
}

export default Carousel;
