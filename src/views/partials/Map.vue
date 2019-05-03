<template>
  <section id="maps">
    <div class="row no-gutters">
      <div class="col-md-12 col-lg-8 col-xl-9 map-container">
        <div id="map" class="map-responsive"></div>
      </div>
      <div class="col-md-5 col-lg-4 col-xl-3 topics-container">
        <div class="related-topics px-3 pt-3">
          <h4 class="top-adventures pr-5">Top adventures near mount kinabalu climb</h4>
          <div class="overflow-single">
            <div class="row align-items-center py-3">
              <div class="col-lg-4 pr-0">
                <img src="../../assets/images/map/tree.jpg" class="w-100">
                <div class="travel-pic">
                  <i class="fas fa-heart"></i>
                  <span>Traveller’s Pick!</span>
                </div>
              </div>
              <div class="col-lg-8">
                <h3 class="first-map-title">1. Kiulu White Water Rafting</h3>
                <div class="row no-gutters">
                  <div class="col-lg-6">
                    <i class="fas fa-star"></i>
                    <span class="pl-2 stars">4.93</span>
                    <span class="stars-number stars">(58)</span>
                  </div>
                  <div class="col-lg-6">
                    <i class="fas fa-map-marker-alt"></i>
                    <span class="miles pl-1">2km away</span>
                  </div>
                  <div class="col-lg-12">
                    <i class="far fa-clock"></i>
                    <span class="pl-2 published-date">0.5 day to 3 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="overflow-single">
            <div class="row align-items-center py-3">
              <div class="col-lg-4 pr-0">
                <img src="../../assets/images/map/tree.jpg" class="w-100">
                <div class="bucket-list">
                  <i class="fas fa-map-marker"></i>
                  <span>Bucketlist</span>
                </div>
              </div>
              <div class="col-lg-8">
                <h3>2. Danum Valley Trek</h3>
                <div class="row no-gutters">
                  <div class="col-lg-6">
                    <i class="fas fa-star"></i>
                    <span class="pl-2 stars">4.93</span>
                    <span class="stars-number stars">(58)</span>
                  </div>
                  <div class="col-lg-6">
                    <i class="fas fa-map-marker-alt"></i>
                    <span class="miles pl-1">2km away</span>
                  </div>
                  <div class="col-lg-12">
                    <i class="far fa-clock"></i>
                    <span class="pl-2 published-date">0.5 day to 3 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="overflow-single">
            <div class="row align-items-center py-3">
              <div class="col-lg-4 pr-0">
                <img src="../../assets/images/map/tree.jpg" class="w-100">
              </div>
              <div class="col-lg-8">
                <h3>3. Mabul Dives</h3>
                <div class="row no-gutters">
                  <div class="col-lg-6">
                    <i class="fas fa-star"></i>
                    <span class="pl-2 stars">4.93</span>
                    <span class="stars-number stars">(58)</span>
                  </div>
                  <div class="col-lg-6">
                    <i class="fas fa-map-marker-alt"></i>
                    <span class="miles pl-1">2km away</span>
                  </div>
                  <div class="col-lg-12">
                    <i class="far fa-clock"></i>
                    <span class="pl-2 published-date">0.5 day to 3 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="overflow-single">
            <div class="row align-items-center py-3">
              <div class="col-lg-4 pr-0">
                <img src="../../assets/images/map/tree.jpg" class="w-100">
              </div>
              <div class="col-lg-8">
                <h3>4. Kinabalu Snorkelling</h3>
                <div class="row no-gutters">
                  <div class="col-lg-6">
                    <i class="fas fa-star"></i>
                    <span class="pl-2 stars">4.93</span>
                    <span class="stars-number stars">(58)</span>
                  </div>
                  <div class="col-lg-6">
                    <i class="fas fa-map-marker-alt"></i>
                    <span class="miles pl-1">2km away</span>
                  </div>
                  <div class="col-lg-12">
                    <i class="far fa-clock"></i>
                    <span class="pl-2 published-date">0.5 day to 3 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="overflow-single border-0">
            <div class="row align-items-center py-3">
              <div class="col-lg-4 pr-0">
                <img src="../../assets/images/map/tree.jpg" class="w-100">
              </div>
              <div class="col-lg-8 map-contents">
                <h3>5. Kinabalu Dives</h3>
                <div class="row no-gutters">
                  <div class="col-lg-6">
                    <i class="fas fa-star"></i>
                    <span class="pl-2 stars">4.93</span>
                    <span class="stars-number stars">(58)</span>
                  </div>
                  <div class="col-lg-6">
                    <i class="fas fa-map-marker-alt"></i>
                    <span class="miles pl-1">2km away</span>
                  </div>
                  <div class="col-lg-12">
                    <i class="far fa-clock"></i>
                    <span class="pl-2 published-date">0.5 day to 3 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <p class="view-all-adventures pt-2 px-3">
              View all adventures in Sabah, Malaysia
              <i class="fas fa-chevron-right"></i>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div id="content" class="for-maps" ref="infoWindow">
      <div id="map-carousel-indicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#map-carousel-indicators" data-slide-to="0" class="active"></li>
          <li data-target="#map-carousel-indicators" data-slide-to="1"></li>
          <li data-target="#map-carousel-indicators" data-slide-to="2"></li>
          <li data-target="#map-carousel-indicators" data-slide-to="3"></li>
          <li data-target="#map-carousel-indicators" data-slide-to="4"></li>
          <li data-target="#map-carousel-indicators" data-slide-to="5"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../../assets/images/magazines/image-1.jpg" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img src="../../assets/images/magazines/image-1.jpg" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img src="../../assets/images/magazines/image-1.jpg" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img src="../../assets/images/magazines/image-1.jpg" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img src="../../assets/images/magazines/image-1.jpg" class="d-block w-100">
          </div>
          <div class="carousel-item">
            <img src="../../assets/images/magazines/image-1.jpg" class="d-block w-100">
          </div>
        </div>
      </div>
      <div class="description-container">
        <h1 id="firstHeading" class="firstHeading">Kiulu White Water Rafting</h1>
        <div id="bodyContent">
          "Meander down the river with friends."
          <p>
            <span class="dollars-currency">$</span> From US$31
          </p>
          <span class="map-category">
            <i class="fas fa-heart"></i> Traveller’s Pick!
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    var markers = [];
    var locations = [
      [1, "Title 1", 41.338, 19.788],
      [2, "Title 2", 41.38, 19.8165],
      [3, "Title 3", 41.345, 19.8152],
      [4, "Title 4", 41.3, 19.92]
    ];
    var contentString = this.$refs.infoWindow;

    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: { lat: 41.327546, lng: 19.818698 }
    });

    setMarkers(map);

    function setMarkers(map) {
      for (var i = 0; i < locations.length; i++) {
        var location = locations[i];
        var locationInfowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var marker = new google.maps.Marker({
          position: { lat: location[2], lng: location[3] },
          map: map,
          title: location[1],
          infowindow: locationInfowindow,
          icon:
            "https://seek-sophie-app.herokuapp.com/images/markers/numerize-" +
            location[0] +
            ".svg"
        });

        markers.push(marker);

        google.maps.event.addListener(marker, "click", function() {
          hideAllInfoWindows(map);
          this.infowindow.open(map, this);
        });
      }
    }

    function hideAllInfoWindows(map) {
      markers.forEach(function(marker) {
        marker.infowindow.close(map, marker);
      });
    }
  }
};
</script>

<style lang="scss">
#maps {
  .for-maps {
    display: none;
  }

  border-top: 1px solid #ccc;
  .gm-style-iw button {
    display: none !important;
  }
  .gm-style .gm-style-iw-c {
    border-radius: 0 !important;
  }
  #content {
    width: 14rem;
    height: 15rem;
    .description-container {
      position: absolute;
      bottom: 0;
      .map-category {
        position: absolute;
        top: -188px;
        right: -16px;
        background-color: #df3c31;
        padding: 0.25rem;
        color: #fff;
      }
    }
    #map-carousel-indicators {
      height: 11rem;
      position: absolute;
      top: 0;
      left: 0;
      .carousel-indicators {
        bottom: 10px !important;
      }
      .carousel-inner {
        .carousel-item {
          min-height: auto !important;
        }
      }
    }
  }
}
.map-container {
  height: 720px;
  width: 100%;
  .map-responsive {
    width: 100%;
    min-height: 100%;
    position: relative;
  }
}
.overflow-single {
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  .first-map-title {
    color: #212529;
  }
  i {
    color: #007bfb;
  }
  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: normal;
    color: #007bfb;
  }
  .stars {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    color: #007bfb;
  }
  .stars-number {
    font-weight: 400;
  }
  .miles {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #333333;
  }
  .published-date {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #333333;
  }
  .travel-pic {
    background-color: #de1010;
    line-height: 1;
    text-align: center;
    i {
      color: #fff;
      font-size: 9px;
    }
    span {
      font-style: normal;
      font-weight: bold;
      font-size: 10px;
      line-height: 17px;
      color: #ffffff;
      transform: matrix(1, 0, 0, 1, 0, 0);
    }
  }
  .bucket-list {
    background-color: rgb(0, 158, 86);
    line-height: 1;
    text-align: center;
    i {
      color: #fff;
      font-size: 9px;
    }
    span {
      font-style: normal;
      font-weight: bold;
      font-size: 10px;
      line-height: 17px;
      color: #ffffff;
      transform: matrix(1, 0, 0, 1, 0, 0);
    }
  }
}
.related-topics {
  overflow-y: auto;
  height: 720px;
  min-width: 25%;

  .top-adventures {
    font-size: 21px;
    font-weight: bold;
    line-height: 32px;
    text-transform: uppercase;
    color: #212529;
  }
}
.firstHeading {
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: normal;
  color: #007bfb;
}
#bodyContent {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: normal;
  color: #000000;
}
.dollars-currency {
  color: #007bfb;
}
.map-img {
  max-width: 40% !important;
  width: 100%;
}
.carousel-indicators {
  li {
    width: 10px !important;
    height: 10px !important;
    border-radius: 100%;
    background-color: transparent !important;
    border: 2px solid #fff;
    border-top: 2px solid #fff !important;
    border-bottom: 2px solid #fff !important;
  }
  li.active {
    background-color: #fff !important;
    background-clip: border-box !important;
  }
}
.view-all-adventures {
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  color: #007bfb;
  border-top: 1px solid #cccccc;
  width: 100%;
}

#map {
  .for-maps {
    display: block;
  }
}
</style>
