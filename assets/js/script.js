let logo = document.getElementById("logo")

function hide() {
    logo.classList.toggle("spinning");
}
logo.onclick = spin;

flip = 0;

function spin() {
    let pos = flip;
    let id = null;
    id = setInterval(frame, 5);
    function frame() {
        if (pos == flip + 180) {
            clearInterval(id);
            flip = pos;
        }
        else {
            pos++;
        logo.style.transform = "rotate3d(0, 1, 0," + pos + "deg)";
        }
    }
}

function loading() {
    let posx = flip + 1;
    let posy = 1;
    let vert = 0;
    let id = null;
    id = setInterval(frame, 5);

    function frame() {
        if (vert == 2) {
            clearInterval(id);
            flip = 3*posx;
        } else if (vert % 2 == 0) {
            if (posx % 120 == 0) {
                vert++;
                posy++;
            } else {
                logo.style.transform = "rotate3d(0, 1, 0," + 3* posx + "deg)";
                posx++;
            }
        } else {
            if (posy % 180 == 0) {
                vert++;
                posx++;
            } else {
                logo.style.transform = "rotate3d(1, 0, 0," + 2* posy + "deg)";
                posy++;
            }
        }
    }
}

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 4,
          "size_min": 1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "bubble"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 8,
          "duration": 1,
          "opacity": 8,
          "speed": 2
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
  }

);

loading();