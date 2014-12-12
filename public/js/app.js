$(document).ready(function(){
  // results();
  var doors = '<div id="door-left">' +
    '<img id="door-image-left" src="images/door-left.jpg"></div>' +
    '<div id="door-right">' +
    '<img id="door-image" src="images/door-right.jpg"></div>';
  $('.main-body').append(doors);
  $('#door-image').click(function(e) {
    e.preventDefault();
    clickTwo();
    return false;
  });
});

function clickTwo() {
  $('#door-image').off()
  $('#door-image').click(function(e) {
    e.preventDefault();
    console.log('clickQuitTwo')
    clearTimeout(timeout);
    clickQuit();
    return false;
  });
  var timeout = setTimeout( function() {
    $('#door-image').off()
    $('#door-image').click(function(e) {
      e.preventDefault();
      console.log('clickTwo')
      clearTimeout(timeout);
      clickThree();
      return false;
    });
  }, 1000);
}

function clickThree() {
  $('#door-image').off()
  $('#door-image').click(function(e) {
    e.preventDefault();
    console.log('clickThree')
    clearTimeout(timeout);
    clickFour();
    return false;
  });
  var timeout = setTimeout( function() {
    $('#door-image').off()
    $('#door-image').click(function(e) {
      e.preventDefault();
      console.log('clickQuitThree')
      clearTimeout(timeout);
      clickQuit();
      return false;
    });
  }, 1000);
}

function clickFour() {
  $('#door-image').off()
  $('#door-image').click(function(e) {
    e.preventDefault();
    console.log('clickQuitFour')
    clearTimeout(timeout);
    clickQuit();
    return false;
  });
  var timeout = setTimeout( function() {
    $('#door-image').off()
    $('#door-image').click(function(e) {
      e.preventDefault();
      console.log('clickFour')
      clearTimeout(timeout);
      clickOpen();
      return false;
    });
  }, 1000);
}

function clickOpen(){
  $("#door-left").animate({"left": "-=1000"}, 3000);
  $("#door-right").animate({"left": "+=1000"}, 3000);
  var timeout = setTimeout( function() {
      $('.main-body').empty();
      welcome();
      return false;
  }, 2000);
}

function clickQuit(){
  $('#door-image').off();
}

function welcome() {
  var homePage = '<div class="top-bar"> </div><div class="hidden-text">' + 
    '<div class="overlay" id="overlay-left">' +
    '<h2>Welcome</h2>' +
    '<h3>Date Idea Speakeasy will let you in on the best date ideas in NYC. Tell me a little about what you\'re looking for and I\'ll create the perfect date.</h3>' +
    '</div></div><div class="hidden-text">' +
    '<div class="overlay" id="overlay-right">' +
    '<a href="#" id="begin"><h2>Let\'s Begin</h2></a></div></div>';
  $('.main-body').append(homePage);
  $('#begin').click(function(e) {
    e.preventDefault();
    var dateTypeAnswer = questionDateType(); 
    return false;
  });
}


function questionDateType() {
  $('html').css('background', 'url(images/cinemagraph-candle2.gif)  no-repeat center center fixed');
  $('html').css('-webkit-background-size', 'cover');
  $('html').css('-moz-background-size', 'cover');
  $('html').css('-o-background-size', 'cover');
  $('html').css('background-size', 'cover');  
  $('.main-body').empty(); 
  var questionTypeDisplay = '<div class="center">' +
    '<h1>Which of these interests do you share most?</h1>' +
    '<br>' +
    '<button class="btn" id="art">Art</button>' +
    '<button class="btn" id="music">Music</button>' +
    '<button class="btn" id="nature">Nature</button>' +
    '<br>' +
    '<button class="btn" id="animals">Animals</button>' +
    '<button class="btn" id="sports">Sports</button></div>';
  $('.main-body').append(questionTypeDisplay);
  $('#art').click(function(e) {
    e.preventDefault();
    dateType = 'art';
    console.log(dateType); 
    questionDrinks();
  });
  $('#music').click(function(e) {
    e.preventDefault();
    dateType = 'music';
    console.log(dateType); 
    questionDrinks();
  });
  $('#nature').click(function(e) {
    e.preventDefault();
    dateType = 'nature';
    console.log(dateType); 
    questionDrinks();
  });
  $('#animals').click(function(e) {
    e.preventDefault();
    dateType = 'animals';
    console.log(dateType); 
    questionDrinks();
  });
  $('#sports').click(function(e) {
    e.preventDefault();
    dateType = 'sports';
    console.log(dateType); 
    questionDrinks();
  });
};

function questionDrinks() {
  $('html').css('background', 'url(images/cinemagraph-shot.gif)  no-repeat center center fixed');
  $('html').css('-webkit-background-size', 'cover');
  $('html').css('-moz-background-size', 'cover');
  $('html').css('-o-background-size', 'cover');
  $('html').css('background-size', 'cover');
  $('.main-body').empty();
  var questionDrinksDisplay = '<div class="center" id="shade-dark">' +
    '<h1>Should alcohol be involved?</h1>' +
    '<br>' +
    '<button class="btn" id="alcohol-yes">Yes, Always</button>' +
    '<button class="btn" id="alcohol-no">No</button></div>';
  $('.main-body').append(questionDrinksDisplay);
  $('#alcohol-yes').click(function(e) {
    e.preventDefault();
    dateDrinks = 'yes';
    console.log(dateDrinks);
    questionRomance(); 
  });
  $('#alcohol-no').click(function(e) {
    e.preventDefault();
    dateDrinks = 'no';
    console.log(dateDrinks); 
    questionRomance();
  });
};

function questionRomance() {
  $('html').css('background', 'url(images/cinemagraph-kiss.gif)  no-repeat center center fixed');
  $('html').css('-webkit-background-size', 'cover');
  $('html').css('-moz-background-size', 'cover');
  $('html').css('-o-background-size', 'cover');
  $('html').css('background-size', 'cover');
  $('.main-body').empty();
  var questionRomanceDisplay = '<div class="center" id="shade-dark">' +
    '<h1>Should it be more romantic or more fun?</h1>' +
    '<br>' +
    '<button class="btn" id="romantic">Romantic</button>' +
    '<button class="btn" id="fun">Fun</button></div>';
  $('.main-body').append(questionRomanceDisplay);
  $('#romantic').click(function(e) {
    e.preventDefault();
    dateRomance = 'yes';
    console.log(dateRomance);
    questionHipster(); 
  });
  $('#fun').click(function(e) {
    e.preventDefault();
    dateRomance = 'no';
    console.log(dateRomance); 
    questionHipster();
  });
};

function questionHipster() {
  $('html').css('background', 'url(images/cinemagraph-dancer.gif)  no-repeat center center fixed');
  $('html').css('-webkit-background-size', 'cover');
  $('html').css('-moz-background-size', 'cover');
  $('html').css('-o-background-size', 'cover');
  $('html').css('background-size', 'cover');
  $('.main-body').empty();
  var questionHipsterDisplay = '<div class="center" id="shade-dark">' +
    '<h1>Are you a hipster (or live in Williamsburg)?</h1>' +
    '<br>' +
    '<button class="btn" id="hipster-yes">Hipster</button>' +
    '<button class="btn" id="hipster-no">Not a Hipster</button></div>';
  $('.main-body').append(questionHipsterDisplay);
  $('#hipster-yes').click(function(e) {
    e.preventDefault();
    dateHipster = 'yes';
    console.log(dateHipster);
    questionDateNum(); 
  });
  $('#hipster-no').click(function(e) {
    e.preventDefault();
    dateHipster = 'no';
    console.log(dateHipster); 
    questionDateNum();
  });
};

function questionDateNum() {
  $('html').css('background', 'url(images/cinemagraph-slow-dance.gif)  no-repeat center center fixed');
  $('html').css('-webkit-background-size', 'cover');
  $('html').css('-moz-background-size', 'cover');
  $('html').css('-o-background-size', 'cover');
  $('html').css('background-size', 'cover');
  $('.main-body').empty();
  var questionHipsterDisplay = '<div class="center" id="shade-dark">' +
    '<h1>How many dates have you two been on?</h1>' +
    '<br>' +
    '<button class="btn" id="first">This is the First</button>' +
    '<button class="btn" id="few">A Few</button>' +
    '<button class="btn" id="many">Many</button></div>';
  $('.main-body').append(questionHipsterDisplay);
  $('#first').click(function(e) {
    e.preventDefault();
    dateNum = 'first';
    console.log(dateNum);
    results(); 
  });
  $('#few').click(function(e) {
    e.preventDefault();
    dateNum = 'few';
    console.log(dateNum); 
    results();
  });
  $('#many').click(function(e) {
    e.preventDefault();
    dateNum = 'many';
    console.log(dateNum); 
    results();
  });
};

function results() {
  $('html').css('background', 'url(images/cinemagraph-champagne.gif)  no-repeat center center fixed');
  $('html').css('-webkit-background-size', 'cover');
  $('html').css('-moz-background-size', 'cover');
  $('html').css('-o-background-size', 'cover');
  $('html').css('background-size', 'cover');
  $('.main-body').empty();
  // var selectionPage = "<div id='filters'><select id='area'><option value=''>Brooklyn</option><option>Central Park</option><option>Chinatown</option></select><select id='price'><option value=''>$</option><option>$$</option><option>$$$</option></select></div><ul id='ideas'></ul>"
  // var selectionPage = "<div class='center' id='shade-darkest'><h2 style='color: lightgrey'>Here are some ideas I think you'll like!</h2><ul id='ideas'></ul><br><br><a href='#' id='try-again' style='font-size: 1.6em; color: lightgrey'>(Don\'t like these ideas? Try Again)</a></div>";
  // var selectionPage = '<ul class="accordion" id="accordion">' + 
  var selectionPage = '<div class="center" id="shade-darkest"><br><p style="color: lightgrey; font-size: 4em; margin: 40px">Here are some ideas I think you\'ll like!</p><ul class="accordion" id="accordion"></ul><br><h4 style="color: lightgrey"></h4></div>' 
  //                     '<li class="bg1">' +
  //                     '<div class="heading">Heading</div>' +
  //                     '<div class="bgDescription"></div>' +
  //                     '<div class="description">' +
  //                     '<h2>Heading</h2>' +
  //                     '<p>Some descriptive text</p>' +
  //                     '<a href="#">more ?</a>' +
  //                     '</div></li>' +
  //                     '<li class="bg1">' +
  //                     '<div class="heading">Heading</div>' +
  //                     '<div class="bgDescription"></div>' +
  //                     '<div class="description">' +
  //                     '<h2>Heading</h2>' +
  //                     '<p>Some descriptive text</p>' +
  //                     '<a href="#">more ?</a>' +
  //                     '</div></li></ul>';
  $('.main-body').append(selectionPage);
  // $('#try-again').click(function(e) {
  //   e.preventDefault();
  //   questionDateType();
  // });
   createBackbone();
    var timeout = setTimeout( function() {
      addSlider();
      $('html').css('background-color', 'rgba(0,0,0,0.8)');
      timeToGo();
      return false;
    }, 300);    
  // $('#accordion > li').hover(
  //       function () {
  //           var $this = $(this);
  //           $this.stop().animate({'height':'280px'},500);
  //           $('.heading',$this).stop(true,true).fadeOut();
  //           $('.bgDescription',$this).stop(true,true).slideDown(500);
  //           $('.description',$this).stop(true,true).fadeIn();
  //       },
  //       function () {
  //           var $this = $(this);
  //           $this.stop().animate({'height':'85px'},1000);
  //           $('.heading',$this).stop(true,true).fadeIn();
  //           $('.description',$this).stop(true,true).fadeOut(500);
  //           $('.bgDescription',$this).stop(true,true).slideUp(700);
  //       }
  //   );

}

function addSlider() {
    $('#accordion > li').hover(
        function () {
            var $this = $(this);
            $this.stop().animate({'height':'260px'},500);
            $('.heading',$this).stop(true,true).fadeOut();
            $('.bgDescription',$this).stop(true,true).slideDown(500);
            $('.description',$this).stop(true,true).fadeIn();
        },
        function () {
            var $this = $(this);
            $this.stop().animate({'height':'80px'},1000);
            $('.heading',$this).stop(true,true).fadeIn();
            $('.description',$this).stop(true,true).fadeOut(500);
            $('.bgDescription',$this).stop(true,true).slideUp(700);
        }
    );
};

function timeToGo() {
  var timeout = setTimeout( function() {
      closeDoors();
      return false;
    }, 20000); 
}

function closeDoors() {
    var doors = '<div id="door-left" style="left: -1000px">' +
    '<img id="door-image-left" src="images/door-left.jpg"></div>' +
    '<div id="door-right" style="left: 1000px">' +
    '<img id="door-image" src="images/door-right.jpg"></div>';
  $('.main-body').append(doors);
  $("#door-left").animate({"left": "+=1000"}, 3000);
  $("#door-right").animate({"left": "-=1000"}, 3000);
}



function createBackbone() {
  var Idea = Backbone.Model.extend({});

  var IdeaList = Backbone.Collection.extend({
    model: Idea,
    url: 'https://peaceful-castle-9762.herokuapp.com/ideas'
  });
  var IdeaView = Backbone.View.extend({
    tagName: 'li',
    template: _.template($("#idea-template").html()),
    // events: {
    //  "click" : "toggleDetails"
    // },
    render: function(){
     this.$el.html( this.template({ idea: this.model.toJSON()}));
     return this;
    },
    // toggleDetails: function(){
    //   this.$el.find('.details').slideToggle();
    // }
  })

  var IdeaListView = Backbone.View.extend({
    initialize: function() {
     this.listenTo( this.collection, 'reset', this.render );
    },
    render: function() {
      this.$el.empty();
      var that = this;
      this.collection.each(function(idea) {
        var view = new IdeaView({model: idea});
        that.$el.append(view.render().$el);
      });
    }
  })

  // function getParams(){
  //   return {
  //    area: $('#area').val(),
  //    price: $('#price').val()
  //   }
  // }

  function getParams(){
    return {
     hipster: 'true'
    }
  }


  $(function(){
    ideaList = new IdeaList();
    ideaListView = new IdeaListView({
      collection: ideaList,
      el: "#accordion"
    })
    ideaList.fetch({reset: true});

    // $('select').on('change', function(e){
     ideaList.fetch({
       reset: true,
       data: getParams()
      });
    // })

  })
}



 