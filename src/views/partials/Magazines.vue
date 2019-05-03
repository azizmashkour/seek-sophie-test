<template>
  <section id="magazines">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="magazine-title">From the magazine</h2>
        </div>
        <div class="col-sm-12 col-lg-3 mb-3 mb-lg-0">
          <div class="card border-0">
            <img src="../../assets/images/magazines/image-1.jpg" class="card-img-top">
            <div class="card-body pb-4 pt-3 px-3">
              <p class="card-text">10 things we wish we knew before climbing Mt Kinabalu</p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-lg-3 mb-3 mb-lg-0">
          <div class="card border-0">
            <img src="../../assets/images/magazines/image-2.jpg" class="card-img-top">
            <div class="card-body pb-4 pt-3 px-3">
              <p class="card-text">Best food to try in Kota Kinabalu: Sago Worms?</p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-lg-3 mb-3 mb-lg-0">
          <div class="card border-0">
            <img src="../../assets/images/magazines/image-3.jpg" class="card-img-top">
            <div class="card-body pb-4 pt-3 px-3">
              <p class="card-text">6 incredible adventures near Kota Kinabalu</p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-lg-3 mb-3 mb-lg-0">
          <div class="card border-0">
            <img src="../../assets/images/magazines/image-4.jpg" class="card-img-top">
            <div class="card-body pb-2 pt-2 px-3">
              <p
                class="card-text"
              >The many hidden treasures beneath the rough facade of Kota Kinabalu town</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
#magazines {
  background-color: rgb(245, 245, 245);
  padding: 3rem 0;
  border-top: 1px solid #ccc;
  .card {
    border-radius: 0;
  }
  h2 {
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    text-transform: uppercase;
    color: #000;
    margin: 0 0 1.5rem;
  }
  .col-md-3-1 {
    flex: 0 0 25%;
    max-width: 23%;
    .card-img-top {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
    .card-text {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #212529;
    }
  }
}
</style>
