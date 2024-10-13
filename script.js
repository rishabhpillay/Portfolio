
function st_lm() {
  gsap.registerPlugin(ScrollTrigger);


  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });






  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}










function opencover(){

  var ca = gsap.timeline();
  ca.from("#opencover #blackcover .text h1 span ",{
      x: "100vw",
  
      stagger: .3  ,
      opacity: 0,
      // delay: .2, 
  
      duration: .5,
      ease: Expo.easeINOut,
  
  
    }).to("#opencover #blackcover .text h1",{
  
      y:"100",
      delay:.5,
      duration: .3,
      ease: Expo.easeINOut,
    
  
  
  
    }).to("#blackcover,#greencover",{
  
      height:"0%",
      delay:.5,
      stagger: .1 ,

      duration: .8,
      ease: Expo.easeINOut,
      onComplete: function () {
        document.querySelector("#opencover  ").style.display = "none";
      }
})

  }

function navAnime(){

  document.querySelectorAll(".nav_a")
    .forEach(function (text) {
      text.addEventListener("mouseenter", function (dets) {

        gsap.to(dets.target.children[1], {
          width: "0%",
          left: "100%",
          ease: Expo.easeINOut,
          duration: .2,
          stagger: .1,
          onComplete: function () {
            dets.target.children[1].style.left = "0";
          }
        })
      })
    
    
    text.addEventListener("mouseleave", function (dets) {

      gsap.to(dets.target.children[1], {
        width: "100%",
        left: "0%",
        ease: Expo.easeINOut,
        duration: .2,
        stagger: .1,
        
      })
    })
  })
}
function section_1Anime(){
  var s1a = gsap.timeline();
  s1a.from("#section_1 #top #top_left h1 ,#section_1 #bottem #bottem_right h1 ",{
      y: "100",
  
      stagger: .3  ,
      opacity: 0,
      delay: 4, 
  
      duration: .5,
      ease: Expo.easeINOut,
    })
    .from("#section_1 #bottem #bottem_left h1 ",{
      x: "100",
  
      stagger: .3  ,
      opacity: 0,
      // delay: , 
  
      duration: .5,
      ease: Expo.easeINOut,
    })
    .from("#section_1 #top #top_right h4  ",{
      y: "100",
  
      stagger: .3  ,
      opacity: 0,
      // delay: , 
  
      duration: .5,
      ease: Expo.easeINOut,
    })
}

function section_2Anime(){



  gsap.to("#section_2 #s2_right #s2_rPhoto1",{
    scrollTrigger : {
                          trigger:"#section_2",
                          scroller: "#main",
                          start:"top 100%",
                          end:"top -35%",
                          scrub : 1,
                          markers:true,
                          scrub:true
      
                      },

    // y: 40,
    rotate: "-7deg",
    stagger: 0,
    // opacity: 0,
    duration: 10,
    

    ease: Expo.easeINOut
  })
  gsap.to("#section_2 #s2_right #s2_rPhoto2",{
    scrollTrigger : {
                          trigger:"#section_2",
                          scroller: "#main",
                          start:"top 98%",
                          end:"top -35%",
                          scrub : 1,
                          markers:true,
                          scrub:true
      
                      },

    // y: 40,
    rotate: "3deg",
    stagger: 0,
    // opacity: 0,
    duration: 15,
    

    ease: Expo.easeINOut
  })
  gsap.to("#section_2 #s2_right #s2_rPhoto3",{
    scrollTrigger : {
                          trigger:"#section_2",
                          scroller: "#main",
                          start:"top 96%",
                          end:"top -35  %",
                          scrub : 1,
                          markers:true,
                          scrub:true
      
                      },

    // y: 40,
    rotate: "5deg",
    stagger: 0,
    // opacity: 0,
    duration: 15,
    

    ease: Expo.easeINOut
  })


  document.querySelectorAll("#section_2 #s2_right .photo .in_photo")
    .forEach(function (photo) {
      photo.addEventListener("mouseenter", function (dets) {

        gsap.to(dets.target.children[0], {
          width: "100%",
          height:"100%",
          // left: "100%",
          ease: Expo.easeINOut,
          duration: .2,
          stagger: .1,
          // onComplete: function () {
          //   dets.target.children[0].style.width = "0";
          // }
        })
      })
    
    
    photo.addEventListener("mouseleave", function (dets) {

      gsap.to(dets.target.children[0], {
        width: "0%",
        height:"100%",

        // left: "0%",
        ease: Expo.easeINOut,
        duration: .2,
        stagger: .1,
        
      })
    })
  })
  
}




















opencover()
st_lm()
navAnime()
section_1Anime()
section_2Anime()
