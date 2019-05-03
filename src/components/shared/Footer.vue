<template>
  <div class="pt-4" id="footer">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-2 mb-3 mb-lg-0">
          <ul class="list-unstyled list-spaced">
            <li class="mb-1">
              <h5 class="text-uppercase">Destinations</h5>
            </li>
            <li class="py-1">
              <a href="#">Malaysia</a>
            </li>
            <li class="py-1">
              <a href="#">Indonesia</a>
            </li>
            <li class="py-1">
              <a href="#">Srilanka</a>
            </li>
            <li class="py-1">
              <a href="#">Vietnam</a>
            </li>
            <li class="py-1">
              <a href="#">View all destinations</a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-lg-3 mb-3 mb-lg-0">
          <ul class="list-unstyled list-spaced">
            <li class="mb-1">
              <h5 class="text-uppercase">Explore adventures</h5>
            </li>
            <div class="row no-gutters">
              <div class="col-lg-5">
                <li class="py-1">
                  <a href="#">Diving</a>
                </li>
                <li class="py-1">
                  <a href="#">Hiking</a>
                </li>
                <li class="py-1">
                  <a href="#">Wildlife</a>
                </li>
                <li class="py-1">
                  <a href="#">Diving</a>
                </li>
                <li class="py-1">
                  <a href="#">Culture</a>
                </li>
              </div>
              <div class="col-lg-7">
                <li class="py-1">
                  <a href="#">Bucket lists</a>
                </li>
                <li class="py-1">
                  <a href="#">Off-the-beaten tracks</a>
                </li>
              </div>
            </div>
          </ul>
        </div>
        <div class="col-12 col-lg-2 mb-3 mb-lg-0">
          <ul class="list-unstyled list-spaced">
            <li class="mb-1">
              <h5 class="text-uppercase">Seek Sophie</h5>
            </li>
            <li class="py-1">
              <a href="#">Who we are</a>
            </li>
            <li class="py-1">
              <a href="#">Magazine</a>
            </li>
            <li class="py-1">
              <a href="#">Personal Travel Stylist</a>
            </li>
            <li class="py-1">
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-lg-4 mb-3 mb-lg-0 ml-auto">
          <ul class="list-unstyled list-spaced">
            <div class="row no-gutters">
              <div class="col-lg-3 footer-img">
                <img src="../../assets/images/magazines/footer-book.svg" alt="logo">
              </div>
              <div class="col-lg-9">
                <li class="mb-1">
                  <h5 class="text-uppercase">Stay Updated</h5>
                </li>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div class="input-group mb-2 mr-sm-2">
                  <input
                    type="text"
                    class="form-control search-input"
                    placeholder="Your email here"
                  >
                  <div class="input-group-prepend">
                    <div class="input-group-text border-0 bg-primary text-white btn-signup">Sign up</div>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-center copy-rights py-3">
      <div class>
        <span>&#169; Seek Sophie 2019</span>
        <a href="#" class="px-3">Privacy Policy</a>
        <a href="#">Terms of use</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#footer,
.copy-rights {
  border-top: 1px solid rgb(204, 204, 204);
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;

  a {
    color: #212529;
  }
}

#footer {
  .list-spaced {
    p {
      font-family: "Lato";
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      color: #212529;
    }
    li > h5 {
      font-family: "Lato";
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 23px;
      color: #212529;
    }
    li > a {
      font-family: "Lato";
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      color: #555555;
    }
    .form-control {
      border: 1px solid #ebebeb;
      border-radius: 2px;
    }
    .btn-signup {
      font-family: "Lato";
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
    }
    input.search-input::-webkit-input-placeholder,
    .form-control::-webkit-input-placeholder {
      font-family: "Lato";
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      color: #666666;
    }
    input.search-input::-moz-placeholder,
    .form-control::-moz-placeholder {
      /* Firefox 19+ */
      font-family: "Lato";
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      color: #666666;
    }
    input.search-input:-ms-input-placeholder,
    .form-control::-moz-placeholder {
      font-family: "Lato";
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      color: #666666;
    }
  }
}
</style>
