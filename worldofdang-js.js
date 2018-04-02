jQuery(document).ready(function($) {

  var heightOfContainer = $('body').width();
  //console.log(heightOfContainer);

  $('div img').mouseenter(function() {

    heightOfContainer = $('body').width();
    //console.log(heightOfContainer);

    imageZoomEffect(heightOfContainer);

  });
})


function imageZoomEffect(heightOfContainer) {

  jQuery(document).ready(function($) {

    if (heightOfContainer > 768) {

      $('.product img').addimagezoom({ // single image zoom
        zoomrange: [3],

        magnifiersize: [300, 300],
        magnifierpos: 'right',
        cursorshade: false,
        largeimage: 'Koala.jpg' //<-- No comma after last option!
      });

      $('.fjords img').addimagezoom({ // single image zoom
        zoomrange: [3],
        magnifiersize: [300, 300],
        magnifierpos: 'right',
        cursorshade: false,
        largeimage: 'fjords.jpg' //<-- No comma after last option!
      });
    } else {

      $('.zoomtracker').remove();

    }

  });
}
