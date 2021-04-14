$(() => {
  $('#search').on('click', (event) => {
    event.preventDefault()
    // console.log('body was clicked');

    const inputSpecies = $(event.target).text()
    const userInput = $('input[type="text"]')

    $.ajax ({
      url: `https://hotline.whalemuseum.org/api.json?species=${inputSpecies}`

    }).then (
        (data) => {
          for(let i = 0; i < 5; i++) {
          const $list = $('<div>')

          $('body').append($list)

          const $getData = $('<div>')
          const $species = $('<div>')

          $species.html(data[i].species)
          $getData.html($species)
          $('body').append($getData)


          }
        console.log(data)
        },
        () => {
        console.log('data didnt load')
  })
})
    $(document).ready(function(){
      $('.next').on('click', function(){
        console.log('clicked');
        let currentImg = $('.first');
        let nextImg = currentImg.next()
        console.log(nextImg);

        if(nextImg.length) {
          currentImg.removeClass('first')
          nextImg.addClass('first')
    }
  })
})
      $('.prev').on('click', function(){
        console.log('clicked');
        let currentImg = $('.first');
        let prevImg = currentImg.prev();
        // console.log(prevImg);
        if(prevImg.length) {
          currentImg.removeClass('first')
          prevImg.addClass('first')
    }
  })
})
