$(document).ready(function () {
  let activeElement = undefined;

  function setActive(element, isFirst = true) {
    if (element === undefined) {
      activeElement = undefined
      return
    }

    element = $(element)

    if (activeElement !== undefined) {
      if (activeElement.data('tab') === element.data('tab')) {
        return
      }

      $(activeElement).removeClass('active')
    }

    activeElement = element
    $(activeElement).addClass('active')

    const index = element.index()

    if (isFirst) {
      $('.main__slide-wrapper').hide()
      $('.main__slide-wrapper').eq(index).fadeIn(300);
    }
    else {
      $('.main__slide-wrapper').hide()
      $('.main__slide-wrapper').eq(index).show()
    }
  }

  setActive($('.main__menu-item:first'), false)

  $('.main__menu-item').click(function (event) {

    setActive(event.currentTarget)
  });
});



