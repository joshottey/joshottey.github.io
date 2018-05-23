var app = new Vue({
  el: '#app',
  data: {
    projects: [
      {
        title: "Miles' ABCs",
        desc: "An interactive alphabet game I'm creating for my son, Miles. Uses event listeners, CSS transforms, etc. I plan to add sounds and images, too!",
        imgURL: "background-image:url(assets/images/MilesABC.png)",
        projURL: "https://joshottey.github.io/MilesABC",
        gitURL: "https://github.com/joshottey/MilesABC",
        visible: false
      },
      {
        title: "Pixel Art Maker",
        desc: "A project for the Grow With Google Scholarship thru Udacity. Create a grid canvas and draw pixel art! I incorporated my simple color picker here as well. Looking to add additional features soon!",
        imgURL: "background-image:url(assets/images/pixel_art.png)",
        projURL: "https://joshottey.github.io/PixelArtMaker",
        gitURL: "https://github.com/joshottey/PixelArtMaker",
        visible: false
      },
      {
        title: "Color Picker",
        desc: "A color picking tool I created after listening to a podcast about hexadecimals!",
        imgURL: "background-image:url(assets/images/color_picker.png)",
        projURL: "https://joshottey.github.io/ColorPicker",
        gitURL: "https://github.com/joshottey/ColorPicker",
        visible: false
      },
      {
        title: "Oprah Quotes",
        desc: "A simple quote machine using HTML, CSS, and JavaScript/jQuery. Pulls a random quote from a JSON file of things Oprah Winfrey said. One of my first ever projects for freeCodeCamp.org!",
        imgURL: "background-image:url(assets/images/oprah.jpg);background-size:cover;",
        projURL: "https://joshottey.github.io/OprahQuotes",
        gitURL: "https://github.com/joshottey/OprahQuotes",
        visible: false
      },
      {
        title: "Drizzle",
        desc: "An in-browser weather app using geolocation and the Weather Underground API. Coming soon!",
        imgURL: "",
        projURL: "https://joshottey.github.io/Drizzle",
        gitURL: "https://github.com/joshottey/Drizzle",
        visible: false
      }
    ]
  },
  methods: {
    show: function(proj) {
      if(!proj.visible) {
        proj.visible = true
      } else proj.visible = false
    }
  }
})
