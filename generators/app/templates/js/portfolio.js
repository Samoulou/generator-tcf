function gup( name, url ) {
  if (!url) url = location.href;
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( url );
  return results == null ? null : results[1];
};

$(document).ready(function() {
    NProgress.start();

    $(this).scrollTop(0);

    $.ajax( {
      url:'https://thecomputerfirm.herokuapp.com/api/portfoliospublished/maridor/',
      // url:'http://localhost:8080/api/portfolios/maridor',

      success:function(data) {
        NProgress.done();
        data.sort(function(a, b){
        var dateA=new Date(a.date), dateB=new Date(b.date)
        return dateB-dateA; //sort by date ascending
        })
        var parameter = gup('id');
        var uri = window.location.href.split('?')[0];
        var id = 0;
        var past = 0 ;
        var next = 0;
        if(!parameter || !Number.isInteger(parameter) || parameter >= data.length){
          past = 0;
          next = 1;
          // console.log("a");
        }
        if(parameter != null && parameter < data.length && parameter.length > 0 && parameter != 0){
          id = parameter;
          past = parameter--;
          next = parameter++;
          // console.log("b");
        }

        $("#realisation-previous").attr("href", uri + "?id=" + past);
        $("#realisation-next").attr("href", uri + "?id=" + next);

        // console.log(data);
        var date = new Date(data[id].date);
        // TODO: change titre
        $('#portfolio-name').html(data[id].name);
        // TODO: change date
        $('#portfolio-date').html(date.getFullYear());
        // TODO: change style
        $('#portfolio-style').html(data[id].style);
        // TODO: change prestation
        $('#portfolio-prestations').html(data[id].prestations.join(', '));
        // TODO: change paragraphe
        $('#portfolio-paragraphe').html(data[id].paragraphes[0]);
        // TODO: change carouselle item
        var arrayImages =  data[id].images;
        for(var i = 0 ; i < arrayImages.length ; i++){
          if(i === 0){
            $('#portfolio-carousel').append('<div class="item active" style="background-image:url('+ arrayImages[i] +');"></div>');
          } else {
            $('#portfolio-carousel').append('<div class="item" style="background-image:url('+ arrayImages[i] +');"></div>');
          }
        }
        // TODO: change images
        $("#before-img").css("background-image", "url("+ data[id].oldImage +")");


    }
  });
});
