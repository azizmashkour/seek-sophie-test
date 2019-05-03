<template>
  <div class="row no-gutters align-items-center features-border last-border">
    <div class="col-lg-2 col-sm-12 text-center">
      <img width="121" height="80" src="../../../assets/images/mountain.jpg" alt="Logo">
    </div>
    <div class="col-lg-6 daily-short-content">
      <div class="features-title pl-0 mb-0">
        <div class="title-container">
          <h4 class="first-title">Trek Finder Tours</h4>
        </div>
      </div>
      <div class="features-experiences pl-0 mb-0 py-2">
        <div class="stars-container">
          <i class="fas fa-star pr-1"></i>
          <span class="stars-number">4.93</span>
          <span class="stars">(58)</span>
        </div>
        <div class="experience-container">
          <i class="fas fa-hourglass"></i>9 years experience
        </div>
        <div class="language-container">
          <i class="far fa-comments"></i>Speaks English, Bahasa
        </div>
      </div>
      <p
        class="features-details p-0"
      >“Popular local guide, highly reliable, wonderful guides who really take care of their guests.”</p>
    </div>
    <div class="col-lg-4 d-flex align-items-center">
      <div class="col-lg-10 col-sm-10 pl-0 pr-0">
        <ul class="rating mb-0">
          <li>
            <span class="amount-container">US$452</span>
          </li>
          <li class="pb-2">Per person</li>
          <li>Includes Meals & Accommodation,</li>
          <li>Transport, Free cancellation</li>
        </ul>
      </div>
      <div class="col-lg-2 col-3">
        <i
          class="fas fa-chevron-down feature-collapse"
          data-toggle="collapse"
          href="#whats-included-trek"
        ></i>
      </div>
    </div>
    <div class="row">
      <div class="collapse" id="whats-included-trek">
        <div class="row services d-flex px-3">
          <div class="col-lg-8 d-flex align-items-center ml-auto">
            <div class="row">
              <div class="col-lg-7 col-sm-12 desc-responsive">
                <h5 class="mb-4 mt-2">WHAT’S INCLUDED</h5>
                <div class="row">
                  <div class="col-lg-1 col-sm-12">
                    <i class="fas fa-bed"></i>
                  </div>
                  <div class="col-lg-10 col-sm-12">
                    <p>1 night dormitory accommodation at Laban Rata Resthouse</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-1 col-sm-12">
                    <i class="fas fa-truck"></i>
                  </div>
                  <div class="col-lg-10 col-sm-12">
                    <p>Pick up at your hotel in Kota Kinabalu town at 6am on the activity start date and drop-off at 5pm on the following day at your hotel.</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-1 col-sm-12">
                    <i class="fas fa-utensils"></i>
                  </div>
                  <div class="col-lg-10 col-sm-12">
                    <p>Meals provided</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-5">
                <h5 class="mb-4 mt-2">EXTRAS</h5>
                <ul class="highlights p-0">
                  <li>
                    <i class="fas fa-check"></i> Entrance fees
                  </li>
                  <li>
                    <i class="fas fa-check"></i> Insurance
                  </li>
                  <li>
                    <i class="fas fa-check"></i> State park guide
                  </li>
                  <li>
                    <i class="fas fa-check"></i> Climbing permit
                  </li>
                  <li>
                    <i class="fas fa-check"></i> Certificate of completion
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-sm-12 view-details">
            <button type="button" class="btn btn-outline-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    $(".collapse")
      .on("shown.bs.collapse", function() {
        $(this)
          .closest(".no-gutters")
          .find(".feature-collapse")
          .removeClass("fa-chevron-down")
          .addClass("fa-chevron-up");
      })
      .on("hidden.bs.collapse", function() {
        $(this)
          .closest(".no-gutters")
          .find(".feature-collapse")
          .removeClass("fa-chevron-up")
          .addClass("fa-chevron-down");
      });
  }
};
</script>
