// const api_page = 'https://thecomputerfirm.herokuapp.com/api/pages/beaulac/';
// const api_article = 'https://thecomputerfirm.herokuapp.com/api/articles/beaulac/';

// const api_team = 'http://localhost:8080/api/personspublished/beaulac';
const api_team = 'https://thecomputerfirm.herokuapp.com/api/personspublished/beaulac';

function getContentTeam(language) {

  $.ajax({
    url: api_team,

    success: function(data) {
      // TODO: retrieve all categories => create array
      var categories = [
        "Le conseil d'administration",
        "Le comité de direction",
        "Organe de révision",
        "Conseil juridique",
      ];
      var categoriesEnglish = [
        "BOARD OF DIRECTORS",
        "MANAGEMENT COMMITTEE",
        "AUDITOR",
        "LEGAL ADVISOR",
      ];

      data.sort(function(a, b) {
        return b.highlight - a.highlight; //sort by highlight
      })

      var color = "golden"; // blue - golden : switch for each categorie
      var textLanguage = ["Langues pratiquées", "Spoken languages"];
      //loop categories
      for(var i = 0 ; i < categories.length; i++) {
        // switch color for css
        if(color === "blue"){
          color = "golden";
        } else {
          color = "blue";
        }
        // creation of row string for each categorie
        var categorieToDisplay = categories[i];
        if(language === 1){
          categorieToDisplay = categoriesEnglish[i];
        }
        var row =
        '<div class="row section-ctn">'+
          '<div class="col-md-offset-2 col-md-3 col-sm-offset-2 col-sm-8 section-h2">'+
            '<h2 class="wow fadeInUp">'+ categorieToDisplay +'</h2>'+
          '</div>' + '<div class="col-md-offset-1 col-md-4 col-sm-offset-2 col-sm-8 section-main">';
        // loop person
        for(var y = 0; y < data.length; y++){
          //loop multiple categories for a person
          var array = [""];
          if(data[y].titles[language]) {
              array = data[y].titles[language].split(',');
          }



          for(var x = 0; x < data[y].categories.length; x++){
            if(data[y].categories[x] === categories[i]){
              var title = "";
              if(array[x]){
                  title = array[x];
              }
              row = row +   '<div class="list-element wow fadeIn team-member" data-wow-duration="1s">';

              row = row +
                '<div class="list-element-main">'+
                  '<h4 class="'+color+'-text">'+ data[y].name +'</h4>'+
                  '<p>'+ title +'</p>'+
                '</div>'+  '<div class="list-element-desc-ctn">';
              // images
              if(data[y].images[0] && data[y].images[0] != "http://placehold.it/350x200"){
                row = row + '<img src="'+ data[y].images[0] +'" class="img-responsive">';
              }
              // descriptions
              if(data[y].descriptions[language]){
                row = row + '<p>'+ data[y].descriptions[language] +'</p>';
              }
              // languages
              if(data[y].languages[language]){
                row = row + '<p><span class="'+color+'-text">'+ textLanguage[language] +': </span>'+ data[y].languages[language] +'</p>';
              }
              // email1
              if(data[y].email1){
                row = row + '<p><span class="'+color+'-text">Email: </span>'+ data[y].email1 +'</p>';
              }
              if(data[y].email2){
                row = row + '<p><span class="'+color+'-text">Email: </span>'+ data[y].email2 +'</p>';
              }
              if(data[y].phone1){
                row = row + '<p><span class="'+color+'-text">Phone: </span>'+ data[y].phone1 +'</p>';
              }
              if(data[y].phone2){
                row = row + '<p><span class="'+color+'-text">Phone: </span>'+ data[y].phone2 +'</p>';
              }
              if(data[y].fax){
                row = row + '<p><span class="'+color+'-text">Fax: </span>'+ data[y].fax +'</p>';
              }
              row = row + '</div>'+ '</div>';

            } // end if
          } // end loop person categorie
        } // end loop person
        row = row + '</div></div>';
        $('#container-team').append(row);
      } // end loop categories

    }
  });

}
