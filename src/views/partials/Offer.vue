<template>
  <section id="offer" class="container text-center">
    <h2>Mount Kinabalu Climb</h2>
    <div class="about">
      <ul class="text-center mb-4 p-0">
        <li>
          <i class="fas fa-map-marker-alt ml-0"></i>Sabah, Malaysia
        </li>
        <li>
          <i class="far fa-clock"></i>2 - 3 days
        </li>
        <li>
          <img src="../../assets/images/icons/missing-enabled.svg" class="px-2 pb-1">Beginners to Advanced
          <i class="fas fa-question-circle text-muted ml-0"></i>
        </li>
        <li>
          <i class="fas fa-euro-sign"></i>US$356 ~ $650
        </li>
      </ul>
      <div class="row">
        <div class="col-lg-12">
          <div class="offer-description col-lg-8 p-lg-0 mx-auto">
            <p>
              A climb up the famed UNESCO World Heritage site of Mt Kinabalu takes you through several dramatically different landscapes over the course of 24 hours.
              Dense Borneo rainforest gives way to an enchanted bonsai-like forest, to zen-rock garden and finally to the dramatic moonscape at the summit where it feels
              like you are walking on the surface of the moon.
            </p>
            <p>
              <b>Best time to visit:</b>
              <br>October / March. Avoid monsoon season from November - February.
            </p>
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
#offer {
  h2 {
    font-weight: normal;
    font-size: 3rem;
    line-height: 3rem;
    color: #000;
    margin: 2rem 0;
  }
  .offer-description {
    line-height: 1.75rem;
    color: #000;
    margin-bottom: 2rem;
    p {
      margin-bottom: 2rem;
    }
  }
  .about {
    .text-muted {
      font-size: 0.8rem;
    }
    ul li {
      list-style: none;
      display: inline;
      margin: 0.5rem;
      font-style: normal;
      font-weight: normal;
      font-size: 0.875rem;
      line-height: 1.3125rem;
      color: #333;
      i {
        margin: 0.5rem;
        color: #007bfb;
        font-size: 1.1rem;
      }
      .fa-map-marker-alt {
        font-size: 1.3rem;
      }
      .fa-dollar-sign {
        font-weight: 100;
      }
      span {
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
