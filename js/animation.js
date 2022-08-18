window.onload = function() {
  document.getElementById("content").style.display = "block";
  document.getElementById("loading").style.display = "none";


  lax.init()

  lax.addDriver('scrollY', function () {
    return window.scrollY;
  }, { inertiaEnabled: true })

  lax.addElements('.slide .name', {
    scrollY: {
      scale: [
        ['elInY', 'elOutY'],
        [.25, 1.5]
      ]
    }
  })

  lax.addElements('.slide .character', {
    scrollY: {
      translateX: [
        ['elInY', 'elCenterY'],
        [0, 150],
        { inertia: 2 }
      ]
    }
  })

  lax.addElements('.slide .dialog', {
    scrollY: {
      opacity: [
        ['elInY', 'elCenterY'],
        [0, 1]
      ],
    }
  })
}