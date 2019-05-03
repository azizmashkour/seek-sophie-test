<template>
  <section id="daily-program" class="pb-4">
    <nav>
      <div class="nav nav-tabs border-0" id="nav-tab" role="tablist">
        <a
          class="nav-item nav-link px-3-2 active mr-2 text-black"
          id="nav-regular1-tab"
          data-toggle="tab"
          href="#nav-regular1"
          role="tab"
          aria-controls="nav-regular1"
          aria-selected="true"
        >3 days regular descent</a>
        <a
          class="nav-item nav-link px-3-2 mr-2"
          id="nav-regular2-tab"
          data-toggle="tab"
          href="#nav-regular2"
          role="tab"
          aria-controls="nav-regular2"
          aria-selected="false"
        >2 days regular descent</a>
        <a
          class="nav-item nav-link px-3-2 mr-2"
          id="nav-regular3-tab"
          data-toggle="tab"
          href="#nav-regular3"
          role="tab"
          aria-controls="nav-regular3"
          aria-selected="false"
        >2 days walk the torg</a>
        <a
          class="nav-item nav-link px-3-2"
          id="nav-regular4-tab"
          data-toggle="tab"
          href="#nav-regular4"
          role="tab"
          aria-controls="nav-regular4"
          aria-selected="false"
        >2 days low’s peak</a>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div
        class="tab-pane container no-gutters mx-auto fade show active"
        id="nav-regular1"
        role="tabpanel"
        aria-labelledby="nav-regular1-tab"
      >
        <div class="regular-content">
          <dayly-carousel/>

          <div class="featured-guide">
            <h3 class="mt-5 mb-4">FEATURED GUIDES</h3>
            <dayly-river/>
            <dayly-nasalis/>
            <dayly-trek/>
          </div>
        </div>
      </div>

      <div
        class="tab-pane fade"
        id="nav-regular2"
        role="tabpanel"
        aria-labelledby="nav-regular2-tab"
      >...</div>

      <div
        class="tab-pane fade"
        id="nav-regular3"
        role="tabpanel"
        aria-labelledby="nav-regular3-tab"
      >...</div>

      <div
        class="tab-pane fade"
        id="nav-regular4"
        role="tabpanel"
        aria-labelledby="nav-regular3-tab"
      >...</div>
    </div>
  </section>
</template>

<script>
import DaylyCarousel from './DaylyCarousel.vue'
import DaylyNasalis from './DaylyNasalis.vue'
import DaylyRiver from './DaylyRiver.vue'
import DaylyTrek from './DaylyTrek.vue'

export default {
  components: {
    DaylyCarousel,
    DaylyNasalis,
    DaylyRiver,
    DaylyTrek
  }
}
</script>

<style lang="scss">
#daily-program {
  background: #f5f5f5;
  nav {
    display: flex;
    justify-content: center;
    background: #fff;
    .nav-link {
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      text-transform: uppercase;
      color: #666666;
      border: 1px solid #e5e5e5;
      box-sizing: border-box;
      border-radius: 0;
      border-bottom: 0;
      padding: 0.75rem;
    }
    .px-3-2 {
      padding: 1.2rem !important;
    }
    .text-black {
      color: #000000 !important;
    }
  }
  .tab-content {
    background: #f5f5f5;
    margin: 2rem 4rem;
    .regular-content {
      background: #fff;
      padding: 2rem;
      h2 {
        font-weight: bold;
        font-size: 21px;
        line-height: 30px;
        text-transform: uppercase;
      }
      .fitness-levels li {
        list-style: none;
        display: inline;
        margin: 0.2rem;
      }
      ul li i {
        margin: 0.2rem;
        color: #007bfb;
      }
      .fitness-levels li:last-child {
        font-style: italic;
        font-weight: normal;
        font-size: 14px;
        line-height: 24px;
      }
      p {
        font-size: 16px;
        line-height: 28px;
        color: #222222;
        font-style: normal;
        font-weight: normal;
        padding: 0 2rem 0 0;
      }
      h3 {
        font-size: 16px;
        line-height: normal;
        text-transform: uppercase;
        font-weight: bold;
      }
      .highlights li {
        list-style: none;
        font-size: 14px;
        line-height: 24px;
        margin-top: 1rem;
      }
      .highlights-o {
        li i {
          color: #27ae60;
        }
      }
      .features-title {
        display: flex;
        padding-top: 1rem;
        .title-container {
          padding-top: 0.3rem;
          padding-right: 1rem;
          h4 {
            font-size: 21px;
          }
        }
        .btn-container {
          .btn {
            font-size: 0.8rem;
            padding: 0.1rem 0.7rem;
            margin-top: 0.4rem;
          }
        }
      }
      .features-experiences {
        display: flex;
        font-weight: 400;
        font-size: 13px;
        color: #666666;
        .fa-star {
          color: #007bfb;
        }
        .stars-container {
          font-size: 14px;
          .stars,
          span {
            font-weight: bold;
            color: #007bfb;
          }
          .stars {
            font-weight: 400;
          }
          .no-reviews {
            color: #007bfb;
            font-weight: 400;
          }
          i {
            color: #007bfb;
          }
        }
        .experience-container {
          font-size: 14px;
          margin: 0 1rem;
          i {
            color: #007bfb;
          }
          i {
            margin-right: 0.5rem;
          }
        }
        .language-container {
          font-size: 14px;
          i {
            margin-right: 0.5rem;
            color: #007bfb;
          }
        }
      }
      .featured-guide {
        .feature-collapse {
          cursor: pointer;
        }
        .first-border {
          border-radius: 5px 5px 0px 0px;
        }
        .last-border {
          border-bottom: 1px solid #e5e5e5;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
        }
        .features-details {
          font-weight: bold;
          font-size: 13px;
          line-height: 22px;
          color: #212529;
        }
        .rating {
          text-align: right;
          list-style: none;
          li:nth-child(3n),
          li:nth-child(4n) {
            color: #219653;
          }
          li {
            .amount-container {
              font-size: 18px;
              color: #007bfb;
            }
          }
        }
        h4.first-title {
          color: #000000;
        }
        li {
          font-size: 12px;
          line-height: 1.5;
          color: #666666;
        }
      }
      .features-border {
        border-top: 1px solid #e5e5e5;
        box-sizing: border-box;
        border-right: 1px solid #e5e5e5;
        border-left: 1px solid #e5e5e5;
      }
      .features-border:last-child {
        border-bottom: 1px solid #e5e5e5;
        border-radius: 0px 0px 5px 5px;
      }
      .services {
        list-style: none;
        display: block;
        li {
          font-size: 14px;
          line-height: 20px;
        }
        p {
          font-size: 14px;
          line-height: 20px;
        }
        i {
          color: #007bfb;
        }
      }
      h5 {
        font-weight: bold;
        font-size: 14px;
        line-height: 20px;
      }
      .btn-outline-primary {
        margin-top: 1.5rem;
        font-weight: bold;
        font-size: 14px;
        line-height: normal;
        text-align: center;
        text-transform: uppercase;
        color: #007bfb;
        box-sizing: border-box;
        border-radius: 3px;
        padding: 0.8rem 1rem;
      }
      .btn-outline-primary:hover {
        background-color: #fff;
      }
    }
  }
}
</style>
