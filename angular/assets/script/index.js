window.addEventListener("load", () => {
  // Particle
  // Таймер
  let timer;
  //
  let particlesCount = 40;
  function particle(v = 65) {
    particlesJS(
      "particles-js",

      {
        particles: {
          number: {
            value: v,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          color: {
            value: "#000000",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.16572100474277726,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 2,
            random: false,
            anim: {
              enable: false,
              speed: 11.988011988011989,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 220.96133965703635,
            color: "#ffffff",
            opacity: 1,
            width: 1.2626362266116362,
          },
          move: {
            enable: true,
            speed: 5,
            direction: "bottom-right",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
              mode: "repulse",
            },
            onclick: {
              enable: false,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }
    );
  }
  particle(particlesCount);
  window.addEventListener("resize", () => {
    createParticle();
  });
  window.addEventListener("focus", () => {
    particle(particlesCount);
  });
  // Новые частицы при resize
  function createParticle() {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      particle(particlesCount);
    }, 500);
  }

  // Typed js

  let options = {
    strings: ["", "web", "html", "css", "js", "git", "ts", "and", "more"],
    typeSpeed: 200,
    backSpeed: 200,
    loop: true,
    showCursor: true,
    cursorChar: "|",
    backDelay: 800,
    smartBackspace: false,
  };
  let typed = new Typed(".word", options);
  AOS.init();
});
