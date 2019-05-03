<template>
  <div class="row">
    <div class="col-lg-5">
      <div id="daily-carousel-indicators2" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#daily-carousel-indicators2" data-slide-to="0" class="active"></li>
          <li data-target="#daily-carousel-indicators2" data-slide-to="1"></li>
          <li data-target="#daily-carousel-indicators2" data-slide-to="2"></li>
          <li data-target="#daily-carousel-indicators2" data-slide-to="3"></li>
          <li data-target="#daily-carousel-indicators2" data-slide-to="4"></li>
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
          href="#daily-carousel-indicators2"
          role="button"
          data-slide="prev"
        >
          <i class="fas fa-chevron-left"></i>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#daily-carousel-indicators2"
          role="button"
          data-slide="next"
        >
          <i class="fas fa-chevron-right"></i>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <div class="col-lg-7">
      <h2>3 day Regular Descent</h2>
      <ul class="fitness-levels p-0">
        <li class="icon-enabled">
          <img src="../../../assets/images/icons/missing-enabled.svg" class="pr-2">
        </li>
        <li>
          <img src="../../../assets/images/icons/missing-disabled.svg" class="pr-2">
        </li>
        <li>
          <img src="../../../assets/images/icons/missing-disabled.svg" class="pr-2">
        </li>
        <li>Suitable for all levels of fitness.</li>
      </ul>
      <p>
        This is the regular climb up Mt Kinabalu, comprising a 8.5km trek (one way) to reach the summit at 4095m.
        This allows you an extra day in Kinabalu Park so that you can take your time for the climb.
      </p>
      <h3>Highlights</h3>
      <ul class="highlights p-0 highlights-o">
        <li>
          <i class="fas fa-check"></i> Additional night’s accommodation on the first day at Kinabalu Park HQ, less rushed morning
        </li>
        <li>
          <i class="fas fa-check"></i> Breathtaking sunrise at the summit
        </li>
        <li>
          <i class="fas fa-check"></i> Trek 20km over 2 days
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>
