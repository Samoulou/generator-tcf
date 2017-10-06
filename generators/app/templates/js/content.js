/*const api_page = 'https://thecomputerfirm.herokuapp.com/api/pages/beaulac/';
const api_article = 'https://thecomputerfirm.herokuapp.com/api/articles/beaulac/';

function getContent(page) {

  if(page != "none") {
    NProgress.start();
    $.ajax({
      url: api_page + page,
      // url:'http://localhost:8080/api/pages',

      success: function(data) {
        NProgress.done();
        var contentArray = $('.content');
        //  console.log(contentArray);
        var elementArray = [];
        for (var i = 0; i < data[0].content.sections.length; i++) {
          for (var y = 0; y < data[0].content.sections[i].elements.length; y++) {
            //  elementArray.push(data[0].content.sections[i].elements[y]);
            populateContentFromName(data[0].content.sections[i].elements[y], contentArray);
          }
        }
        //  populateContentFromArrayElement(elementArray,contentArray);
        //  console.log(elementArray);
      },
      error: function( jqXhr, textStatus, errorThrown ){
          NProgress.done();
          console.log( errorThrown );
      }
    });
  }


  $.ajax( {
    url:'https://thecomputerfirm.herokuapp.com/api/company/beaulac/',
    // url:'http://localhost:8080/api/portfolios/beaulac',


    success:function(data) {
      $('.content-website').html(data[0].website);
      $('.content-companyName').html(data[0].companyName);
      $('.content-adresseLine1').html(data[0].adresseLine1);
      $('.content-adresseLine2').html(data[0].adresseLine2);
      $('.content-zip').html(data[0].zip);
      $('.content-city').html(data[0].city);
      $('.content-state').html(data[0].state);
      $('.content-country').html(data[0].country);
      $('.content-info').html(data[0].info);
      $('.content-phone1').html(data[0].phone1);
      $('.content-phone1').attr('href','tel:'+data[0].phone1);
      $('.content-phone2').html(data[0].phone2);
      $('.content-phone2').attr('href','tel:'+data[0].phone2);
      $('.content-fax').html(data[0].fax);
      $('.content-email1').html(data[0].email1);
      $('.content-email1').attr('href','mailto:'+data[0].email1);
      $('.content-email2').html(data[0].email2);
      $('.content-email2').attr('href','mailto:'+data[0].email2);
      $('.content-facebook').html(data[0].facebook);
      $('.content-linkedin').html(data[0].linkedin);
      $('.content-instagram').html(data[0].instagram);
      $('.content-twitter').html(data[0].twitter);
      $('.content-pinterest').html(data[0].pinterest);
    }
  });



}



function populateContentFromArrayElement(elementArray, contentArray) {
  for (var i = 0; i < elementArray.length; i++) {
    for (var y = 0; y < contentArray.length; y++) {
      if (contentArray[i].id === elementArray[y].content) {

        $('#' + contentArray[i].id).html(elementArray[y].value);
      };
    }
  }
}

function populateContentFromName(element, contentArray) {

  for (var i = 0; i < contentArray.length; i++) {
    if (contentArray[i].id === element.content) {

      $('#' + contentArray[i].id).html(element.value);
    };
  }
}
*/
