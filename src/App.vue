<template>
  <div id="app">
    <Header/>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import { Footer, Header } from "./components";
import { Main } from "./views";

export default {
  name: "app",
  components: {
    Footer,
    Header,
    Main
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lato:300i,400,700");
// @import "~bootstrap-vue/src/index.scss";

html {
  font-size: 16px;
}
body {
  font-family: "Lato", sans-serif !important;
  font-size: 1rem;
  line-height: 1.75rem;
}

.carousel-control-next i,
.carousel-control-prev i {
  font-size: 35px;
  color: #fff;
}

.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #495057;
  background-color: #f5f5f5 !important;
  border-color: #f5f5f5 !important;
}
.card-img-top {
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
}

/**
 * 4.0 Media Queries
 * ----------------------------------------------------------------------------
 */

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
}

@media (max-width: 767.98px) {
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
}

@media (min-width: 768px) {
}

@media (min-width: 783px) {
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
  .nav-item {
    font-size: 2rem;
  }
  .carousel-one,
  .carousel-two,
  .carousel-three,
  .carousel-four,
  .carousel-five {
    height: 20vh !important;
    min-height: 40vh !important;
  }
  .tab-content {
    margin: 0 !important;
  }
  #header {
    .contact-us {
      font-size: 2rem;
    }
  }
  #footer {
    a,
    h5,
    .list-spaced p,
    .copy-rights span {
      font-size: 2rem !important;
      line-height: 1.2 !important;
    }
  }
  #offer {
    .offer-title {
      font-size: 5rem;
      margin-bottom: 4rem;
      margin-top: 4rem;
    }
    .about ul li {
      font-size: 2.5rem;
      display: block;
    }
    .offer-description {
      p {
        font-size: 2.5rem;
        line-height: 1.5;
      }
      span {
        font-size: 3rem;
      }
    }
  }
  #faqs {
    #faq-carousel-indicators {
      padding: 3rem !important;
      margin-top: 3rem;
      h3 {
        font-size: 2.5rem;
        margin-bottom: 2rem;
      }
      p {
        font-size: 2.5rem;
        line-height: 1.2;
        small {
          font-size: 2.5rem;
        }
      }
      .carousel-indicators li {
        width: 2rem !important;
        height: 2rem !important;
        border-radius: 100%;
      }
    }
    .faq-title {
      font-size: 2rem;
    }
    .panel-group {
      .panel {
        .faq-answer {
          font-size: 2rem;
          line-height: 1.5;
        }
        .panel-heading {
          .panel-title {
            a {
              span {
                font-size: 2.5rem;
              }
              i {
                font-size: 2rem;
              }
            }
          }
        }
      }
    }
  }
  #magazines {
    .magazine-title {
      font-size: 3rem;
      margin-bottom: 5rem;
      margin-top: 2rem;
    }
    .card {
      margin-bottom: 5rem;
    }
    .card-text {
      font-size: 2.5rem;
    }
  }
  #daily-program {
    #whats-included-two {
      .services {
        text-align: center !important;
        h5 {
          font-size: 2rem !important;
        }
        i {
          font-size: 8rem !important;
          padding: 2rem 0;
        }
      }
    }
    #feature-collapse {
      h5 {
        font-size: 2rem;
        text-align: center;
      }
    }
    .view-details {
      text-align: center;
      button {
        font-size: 2rem !important;
        margin-bottom: 2rem;
      }
    }
    .desc-responsive {
      text-align: center;
      padding: 0 5rem;
      i {
        font-size: 8rem;
        padding: 2rem 0;
      }
    }
    .features-border {
      .text-center {
        padding: 2rem;
        img {
          width: 50%;
        }
      }
      .daily-short-content {
        text-align: center;
      }
      i.fa-chevron-down,
      i.fa-chevron-up {
        font-size: 3rem;
      }
    }
    h2,
    h3 {
      font-size: 2rem !important;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
    p {
      font-size: 2rem !important;
      line-height: 1.2 !important;
    }
    ul li {
      font-size: 2rem !important;
    }
    .extra {
      text-align: center;
    }
    .highlights {
      li {
        line-height: 1.2 !important;
      }
    }
    .features-title li h4 {
      font-size: 2rem !important;
      color: #000 !important;
    }
    .features-title,
    .features-experiences {
      display: block !important;
    }
  }
  #maps {
    .related-topics {
      overflow-y: initial !important;
      height: initial !important;
      padding: 0 5rem;
    }
    .topics-container {
      display: none;
    }
    .view-all-adventures {
      margin: 2rem;
      font-size: 3rem;
      text-align: center;
    }
    .overflow-single {
      text-align: center;
      h3,
      .stars,
      i,
      span {
        font-size: 2rem;
        line-height: 2;
      }
      .bucket-list,
      .travel-pic {
        width: 50%;
        margin: auto;
        padding: 1rem;
      }
    }
  }
}

@media (min-width: 992px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}
</style>
