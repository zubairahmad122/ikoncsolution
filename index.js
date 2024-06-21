// Initialize Locomotive Scroll
gsap.registerPlugin()
function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true,

      // for tablet smooth
      tablet: { smooth: true },

      // for mobile
      smartphone: { smooth: true }
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
          return arguments.length
              ? locoScroll.scrollTo(value, 0, 0)
              : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
          return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight
          };
      }
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

init();
// +++++++++++++ Locomotive

let Menu = document.getElementById("menu-icon");
let Cross = document.getElementById("cross-icon");
let Nav = document.querySelector("nav ul");

Menu.addEventListener("click",() =>{
Nav.classList.add("open");
heroContent()
})
Cross.addEventListener("click",() =>{
Nav.classList.remove("open");
})


function heroContent() {

const Main = document.getElementById("header");
const Cursor = document.getElementById("cursorH");


Main.addEventListener("mousemove",(dets) =>{
  gsap.to(Cursor,{
      x:dets.x,
      y:dets.y,
      duration:1,
      ease:"back.out"
  })
})

  const tl = gsap.timeline({
    defaults: {
      duration: 0.5,
      opacity: 0,
      ease: "power1.out"
    }
  });

  tl.from(".logo, nav li, nav button", {
    y: -30,
    delay: 0.5,
    stagger: 0.15,
  })
  .from("#hero-sec .left .sm-tit, #hero-sec .left h2, #hero-sec .left .h-desc, #hero-sec .left .h-btn-div", {
    x: -300,
    stagger: 0.2
  }, "-=0.5")
  .from("#hero-sec .right", {
    x: 30
  }, "-=0.3");
}


// Section 2 animations
function section2() {

  gsap.to(".ball1", {
    x: 700,
    rotate: 360,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: "#section2",
      scrub: 2,
      scroller: ".main",
      start: "top 40%",
      end: "bottom 70%",
    },
  });

  gsap.to(".sec2overimg", {
    width: "100%",
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: "#section2",
      scrub: true,
      scroller: ".main",
      start: "top 10%",
      end: "bottom 100%",
    },
  });

  gsap.from(".secbox", {
    opacity: 0,
    y: 100,
    scale:0.6,
    scrollTrigger: {
      trigger: "#section2",
      scroller: ".main",
      start: "top 20%",
      end: "center center",
      scrub: true,
    },
  });

  gsap.from(".sec2right h5, .sec2right h3, .sec2right p, .sec2right img", {
    opacity: 0,
    x: -200,
    scale: 0.5,
    duration: 1,
    stagger: 0.15,
    scrollTrigger: {
      scrub: true,
      trigger: "#section2",
      scroller: ".main",
      start: "top 30%",
      end: "bottom 100%",
    },
  });
}

function section3() {
  gsap.timeline({
    scrollTrigger: {
      trigger: "#section3",
      scrub: 2,
      scroller: ".main",
      start: "top 30%",
      end: "end 100%"
    }
  })
  .to(".main", {
    background: "#000",
    stagger: 0
  });

  gsap.from(".sec3header h1, .sec3header p", {
    y: 250,
    opacity: 0,
    stagger: 1,
    duration: 1,
    scrollTrigger: {
      trigger: "#section3",
      scrub: 2,
      scroller: ".main",
      start: "top 60%",
      end: "end 100%"
    }
  });

  gsap.from(".sec3wrapper .sec3left", {
    y: 250,
    opacity: 0,
    duration: 1,
    scale:0.5,
    stagger: 0.5,
    scrollTrigger: {
      trigger: "#section3",
      scrub: 2,
      scroller: ".main",
      start: "top -10%",
      end: "end 100%"
    }
  });
  gsap.from(".sec3wrapperright img", {
    y: 250,
    opacity: 0,
    duration: 1,
    scale:0.5,
    stagger: 0.5,
    scrollTrigger: {
      trigger: "#section3",
      scrub: 2,
      scroller: ".main",
      start: "top -70%",
      end: "end 100%",
    }
  });
  gsap.from(".cta", {
    y: 250,
    opacity: 0,
    duration: 1,
    scale:0.5,
    stagger: 0.5,
    scrollTrigger: {
      trigger: "#section3",
      scrub: 2,
      scroller: ".main",
      start: "top -100%",
      end: "end 100%",
    }
  });

  gsap.timeline({
    scrollTrigger: {
      trigger: "#section3",
      scrub: true,
      scroller: ".main",
      start: "top 20%",
      end: "bottom 100%",
    }
  })
  .to(".ballsec3", {
    x: 700,
    duration: 1,
    rotate: 360,
    opacity: 1,
    stagger: 0,
  })
  .to(".ballsec3b", {
    x: -700,
    duration: 1,
    rotate: 360,
    opacity: 1,
    stagger: 0,
    start: "top 40%",
    end: "bottom -130%",
     ease: "power1.inOut"
  });

  // Section 5 animations
  gsap.timeline({
    scrollTrigger: {
      trigger: "#section5",
      scrub: 2,
      scroller: ".main",
      start: "top -20%",
      end: "end 100%",
       ease: "power1.inOut"
    }
  })
  .to(".main", {
    background: "#FEFEFE",
     ease: "power1.inOut"
  });

  gsap.from(".sec5header h1, .sec5header p", {
    y: 250,
    opacity: 0,
    stagger: 1,
    duration: 1,
    scrollTrigger: {
      trigger: "#section5",
      scrub: 1,
      scroller: ".main",
      start: "top 0%",
      end: "end 100%",
       ease: "power1.inOut"
    }
  });

  gsap.from(".sec5lcard ul li", {
    y: 250,
    opacity: 0,
    duration: 2,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#section5",
      scrub: 3,
      scroller: ".main",
      start: "top -10%",
      end: "top 100%",
       ease: "power1.inOut"
    }
  });

  gsap.from(".sec5wrapperright img", {
    opacity: 0,
    scale: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: "#section5",
      scrub: 2,
      scroller: ".main",
      start: "top -130%",
      end: "end 100%",
       ease: "power1.inOut"
      
    }
  });
}

function section4() {
  // Section 4 animations
  gsap.timeline({
      scrollTrigger: {
        trigger: "#section4",
        scrub: 2, // Smaller scrub value for smoother animation
        scroller: ".main",
        start: "top 30%",
        end: "end 100%"
      },
      // ease: "power1.inOut" // Add an easing function for smoothness
    })
    .to(".main", {
      background: "#0B163F",
    })
    .to(".mainsec4 video", {
      width: "100%",
      duration: 2,
      opacity:1,
    });

  // Section 6 animations
  gsap.from(".sec6header h1, .sec6header p", {
    y: 250,
    opacity: 0,
    stagger: 1,
    duration: 1,
    scrollTrigger: {
      trigger: "#section6",
      scrub: 2,
      scroller: ".main",
      start: "top 0%",
      end: "end 100%",
       ease: "power1.inOut"
    }
  });
  gsap.timeline({
    scrollTrigger: {
      trigger: "#section6",
      scrub: 1,
      scroller: ".main",
      start: "top 259%",
      end: "bottom 100%"
    }
  })
  .to(".section6", {
    background: "#121847",
    stagger: 0
  })

  gsap.from("#sec6card", {
    y: 240,
    scale: 0,
    opacity: 0,
    duration:2,
    scrollTrigger: {
      trigger: "#section6",
      scroller: ".main",
      start: "top -10%",
      scrub: 0.5,
      end: "end 100%"
    }
  },"h");

  gsap.from("#section6b", {
      y: 240,
      scale: 0,
    opacity: 0,
    duration:2,
    scrollTrigger: {
      trigger: "#section6",
      scroller: ".main",
      start: "top -10%",
      scrub: 0.5,
      end: "end 100%"
  },
},);

// +++++++++++ sec 7 +++++++++++ 

gsap.timeline({
scrollTrigger: {
  trigger: "#section7",
  scrub: 4,
  scroller: ".main",
  start: "top 0%",
  end: "end 100%"
}
})

gsap.from(".sec7card", {
y: 240,
scale: 0,
opacity: 0,
duration:2,
scrollTrigger: {
  trigger: "#section7",
  scroller: ".main",
  start: "top -40%",
  scrub: 1,
  end: "end 100%"
}
},"h");
gsap.from(".title h2,.title h1", {
y: 240,
scale: 0,
opacity: 0,
duration:2,
stagger:1,
scrollTrigger: {
  trigger: "#section7",
  scroller: ".main",
  start: "top -100%",
  scrub: 1,
  end: "end 100%"
}
});
gsap.from(".tech-icons div", {
y: 40,
scale: 0,
opacity: 0,
scrollTrigger: {
  trigger: "#section7",
  scroller: ".main",
  start: "top -120%",
  scrub: 0.1,
  end: "end 100%"
}
},);
gsap.from(".container .btn", {
y: 40,
scale: 0,
opacity: 0,
scrollTrigger: {
  trigger: "#section7",
  scroller: ".main",
  start: "top -150%",
  scrub: 0.1,
  end: "end 100%"
}
},);

}





heroContent();

section2();
section3();
section4();
