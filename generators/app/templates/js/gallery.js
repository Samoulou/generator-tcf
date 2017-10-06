$(document).ready(function() {
    // NProgress.start();

    $(this).scrollTop(0);

    $.ajax( {
      url:'https://thecomputerfirm.herokuapp.com/api/portfoliospublished/maridor/',
      // url:'http://localhost:8080/api/portfolios/maridor/',

      success:function(data) {
        // NProgress.done();
        data.sort(function(a, b){
        var dateA=new Date(a.date), dateB=new Date(b.date)
        return dateB-dateA; //sort by date ascending
        })
        console.log(data);
        var length = data.length;
        if(data.length > 6){
          length = 6;
        }
        for(var i = 0 ; i < length ; i++){
          var date = new Date(data[i].date);
          var arrayImages =  data[i].images;
            $('#portfolio-items').append(
              '<div class="col-xs-12 col-sm-6 col-md-4" style="padding-right: 0px; padding-left: 0px;">'+
                '<div class="portfolio-item">'+
                  '<div class="hover-bg"> <a href="./portfolio.html?id='+i+'" title="'+data[i].name+'" data-lightbox-gallery="gallery1">'+
                    '<div class="hover-text">'+
                      '<h4>'+data[i].name+'</h4>'+
                    '</div>'+
                    '<div class="portfolio-item-img" style="background-image:url('+arrayImages[0]+');">'+
                    '</div>'+
                    '</a> </div>'+
                '</div>'+
              '</div>'
            );
        }


    }
  });
});
