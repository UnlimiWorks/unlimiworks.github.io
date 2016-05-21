'use strict'

// Easing animation using jquery plugin
$(function () {
  $('body').on('click', '.easing a:not(.dropdown-toggle)', function (event) {
    $('html, body').stop().animate({
      scrollTop: $($(event.currentTarget).attr('href')).offset().top
    }, 1000, 'easeInOutCirc')
    event.preventDefault()
  })
})

// Tracks active tab
$('body').scrollspy({
  target: '.navbar-fixed-top'
})

// Closes responsive menu item on click except for dropdowns
$('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function () {
  $('.navbar-toggle:visible').click()
})
