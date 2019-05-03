<template>
  <section id="slider">
    <div id="header-carousel-indicator" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#header-carousel-indicator" data-slide-to="0" class="active"></li>
        <li data-target="#header-carousel-indicator" data-slide-to="1"></li>
        <li data-target="#header-carousel-indicator" data-slide-to="2"></li>
        <li data-target="#header-carousel-indicator" data-slide-to="3"></li>
        <li data-target="#header-carousel-indicator" data-slide-to="4"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active carousel-one"></div>
        <div class="carousel-item carousel-two"></div>
        <div class="carousel-item carousel-three"></div>
        <div class="carousel-item carousel-four"></div>
        <div class="carousel-item carousel-five"></div>
      </div>
      <a
        class="carousel-control-prev"
        href="#header-carousel-indicator"
        role="button"
        data-slide="prev"
      >
        <i class="fas fa-chevron-left"></i>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#header-carousel-indicator"
        role="button"
        data-slide="next"
      >
        <i class="fas fa-chevron-right"></i>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.carousel-one {
  background: url("../../assets/images/sliders/bridge1.jpg") center center
    no-repeat;
  background-size: cover;
}
.carousel-two {
  background: url("../../assets/images/sliders/bridge6.jpg") center center
    no-repeat;
  background-size: cover;
}
.carousel-three {
  background: url("../../assets/images/sliders/bridge3.jpg") center center
    no-repeat;
  background-size: cover;
}
.carousel-four {
  background: url("../../assets/images/sliders/bridge4.jpg") center center
    no-repeat;
  background-size: cover;
}
.carousel-five {
  background: url("../../assets/images/sliders/bridge5.jpg") center center
    no-repeat;
  background-size: cover;
}

#daily-carousel-indicators2 {
  .carousel-one,
  .carousel-two,
  .carousel-three,
  .carousel-four,
  .carousel-five {
    min-height: 35vh;
  }
}

#header-carousel-indicator {
  .carousel-one,
  .carousel-two,
  .carousel-three,
  .carousel-four,
  .carousel-five {
    min-height: 63vh;
  }
}
</style>
