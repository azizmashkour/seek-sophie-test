<template>
  <section id="header">
    <div class="contact-us">
      <a href="#">Contact us</a> - guaranteed reponse without 1 hour
    </div>
    <div class="container px-0">
      <nav class="navbar navbar-expand-lg navbar-light px-0 py-3">
        <a class="navbar-brand" href="#">
          <img src="../../assets/images/logo.png" alt="Logo" class="img-responsive">
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Destinations
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Hiking</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Wildlife</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Diving</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Culture</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Magazine</a>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <form class="form-inline relative-form">
                <input
                  class="form-control header-search mx-5"
                  type="search"
                  placeholder="Find an adventure"
                  aria-label="Search"
                >
                <i class="fas fa-search"></i>
              </form>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-w-100" href="#">
                us$
                <i class="fas fa-suitcase"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#header {
  .navbar-brand {
    img {
      height: auto;
      width: 100%;
      max-width: 120px;
    }
  }
  .contact-us {
    background: #000;
    text-align: center;
    color: #fff;
    font-size: 13px;
    padding: 0.5rem 0;
    font-weight: 100;
    a {
      color: #fff;
      text-decoration: underline;
      padding-left: 0.7rem;
    }
  }
  .navbar-collapse {
    .nav-link-w-100 {
      font-weight: 400 !important;
    }
    .nav-link {
      text-transform: uppercase;
      padding: 0 1rem;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 2.5rem;
      color: #212529;
      i {
        font-size: 1.4rem;
      }
    }
    .header-search {
      border: 1px solid #ebebeb;
      border-radius: 2px;
    }
    input.header-search::-webkit-input-placeholder,
    .form-control::-webkit-input-placeholder {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      color: #666666;
    }
    input.header-search::-moz-placeholder,
    .form-control::-moz-placeholder {
      /* Firefox 19+ */
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      color: #666666;
    }
    input.header-search:-ms-input-placeholder,
    .form-control::-moz-placeholder {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      color: #666666;
    }
    .relative-form {
      position: relative;
      i {
        position: absolute;
        right: 20%;
      }
    }
  }
}
</style>
