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
    '<a href="#" id="begin"><h2>Let\'s Begin</h2></a></div></div>' +
    '<div class="bottom-bar"><a href="#" id="dream" style="display:block; height:100%; width:100%;"></a></div>' +
    '<div class="below-bottom-bar"><a href="#" id="speakeasy-list" style="display:block; height:100%; width:100%;"></a></div>';
  $('.main-body').append(homePage);
  $('#begin').click(function(e) {
    e.preventDefault();
    var dateTypeAnswer = questionDateType(); 
    speakEasy = 'false';
    return false;
  });
  $('#speakeasy-list').click(function(ef) {
    ef.preventDefault();
    dateHipster = 'true';
    dateDrinks = 'true';
    dateRomance = 'true'; 
    speakEasy = 'true';
    results();
  });

  $('#dream').click(function(e) {
    e.preventDefault();
    dreamSequence();
    return false;
  });
}

function dreamSequence() {
  $('.main-body').fadeOut( 5000, function() {
    $('.main-body').fadeIn(1000);
    $('.main-body').empty();
    $('.main-body').css('height', '');
      var warpWorld = '<div id="wrapper">' +
                      '<div id="cloud-01">' +
                      '<div id="cloud-02">' +
                      '<div id="speakeasy-01">' +
                      '<div id="speakeasy-02">' +
                      '<div id="speakeasy-03">' +
                      '<div id="speakeasy-04">' +
                      '<div id="speakeasy-05">' +
                      '<div id="speakeasy-06">' +
                      '<div id="speakeasy-06">' +
                      '<div id="speakeasy-07">' +
                    // '<div id="mountains-03">' + 
                    // '<div id="ground">' +
                      '</div></div></div></div></div></div></div></div></div></div></div>'; 
      $('.main-body').append(warpWorld);
      $('.main-body').css('background', 'black url(../images/nightsky.jpg) no-repeat left -30px');
      $('.main-body').css('position', 'relative');
      $('#cloud-01').css({backgroundPosition: '1000px 100px'});
      $('#cloud-02').css({backgroundPosition: '1000px 300px'});
      $('#speakeasy-01').css({backgroundPosition: '2000px 100px'});
      $('#speakeasy-02').css({backgroundPosition: '2000px 200px'});
      $('#speakeasy-03').css({backgroundPosition: '2000px 300px'});
      $('#speakeasy-04').css({backgroundPosition: '2000px 100px'});
      $('#speakeasy-05').css({backgroundPosition: '2000px 200px'});
      $('#speakeasy-06').css({backgroundPosition: '2000px 400px'});
      $('#speakeasy-07').css({backgroundPosition: '2000px 300px'});
      $('#wrapper').css({height: '100%'});
      $('#wrapper').css({overflow: "hidden"});
      $('html').css({overflow: "hidden"});
      $('#cloud-01').css({height: '100%'});
      $('#cloud-02').css({height: '100%'});
      $('#speakeasy-01').css({height: '100%'});
      $('#speakeasy-02').css({height: '100%'});
      $('#speakeasy-03').css({height: '100%'});
      $('#speakeasy-04').css({height: '100%'});
      $('#speakeasy-05').css({height: '100%'});
      $('#speakeasy-06').css({height: '100%'});
      $('#speakeasy-07').css({height: '100%'});
      $('#speakeasy-01').css({opacity: '0.9'});
      $('#speakeasy-02').css({opacity: '0.97'});
      $('#speakeasy-03').css({opacity: '0.97'});
      $('#speakeasy-04').css({opacity: '0.97'});
      $('#speakeasy-05').css({opacity: '0.97'});
      $('#speakeasy-06').css({opacity: '0.97'});
      $('#speakeasy-07').css({opacity: '0.97'});
      // $( "#cloud-01" ).fadeIn( "slow" );
    // $('#mountains-03').css({backgroundPosition: '0 50px'});
    // $('#trees-04').css({backgroundPosition: '0 50px'});
    // $('#ground').css({backgroundPosition: 'left bottom'});
      $('.main-body').animate({backgroundPositionX: '-400px'}, 20000);
      $('#cloud-01').animate({backgroundPositionX: '-1000px'}, 20000);
      $('#cloud-02').animate({backgroundPositionX: '-1000px'}, 30000);
      $('#speakeasy-01').animate({backgroundPositionX: '-2000px'}, 40000);
      $('#speakeasy-02').animate({backgroundPositionX: '-2000px'}, 28000);
      $('#speakeasy-03').animate({backgroundPositionX: '-1500px'}, 22000);
      $('#speakeasy-04').animate({backgroundPositionX: '-1500px'}, 18000);
      $('#speakeasy-05').animate({backgroundPositionX: '-3000px'}, 55000);
      $('#speakeasy-06').animate({backgroundPositionX: '-1000px'}, 28000);
      $('#speakeasy-07').animate({backgroundPositionX: '-1000px'}, 10000);
      // $('#mountains-03').animate({backgroundPosition: '(-2500px 50px)'}, 20000);
      // $('#ground').animate({backgroundPosition: '(-5000px bottom)'}, 20000);
    // });
      // $('.main-body').fadeIn(1000);
    var timeout = setTimeout( function() {
      clearTimeout(timeout);
      console.log('time to wake up');
      blurry = 'true';
      $('.main-body').empty();
      $('.main-body').css('background', 'black url(images/cinemagraph-bar.gif)  no-repeat center center fixed');
      $('.main-body').css('-webkit-background-size', 'cover');
      $('.main-body').css('-moz-background-size', 'cover');
      $('.main-body').css('-o-background-size', 'cover');
      $('.main-body').css('background-size', 'cover');
      $('.main-body').css('-webkit-filter', 'blur(4px)');
      $('.main-body').css('height', '100%');
      $('.main-body').css('width', '100%');
      $('.main-body').css('position', 'abolute');
      $('.main-body').css('backgroundPositionX', '0px');
      welcome();
      return false;
  }, 30000);

  }); 
}


function questionDateType() {
  $('.main-body').fadeOut( 1000, function() {
    $('.main-body').empty();
    $('.main-body').css('background', 'black url(images/cinemagraph-candle2.gif)  no-repeat center center fixed');
    $('.main-body').css('-webkit-background-size', 'cover');
    $('.main-body').css('-moz-background-size', 'cover');
    $('.main-body').css('-o-background-size', 'cover');
    $('.main-body').css('background-size', 'cover');  
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
   $('.main-body').fadeIn(1000);
  }); 
};

function questionDrinks() {
  $('.main-body').fadeOut( 1000, function() {
    $('.main-body').empty(); 
    $('.main-body').css('background', 'url(images/cinemagraph-shot.gif)  no-repeat center center fixed');
    $('.main-body').css('-webkit-background-size', 'cover');
    $('.main-body').css('-moz-background-size', 'cover');
    $('.main-body').css('-o-background-size', 'cover');
    $('.main-body').css('background-size', 'cover');
  
    var questionDrinksDisplay = '<div class="center" id="shade-dark">' +
     '<h1>Should alcohol be involved?</h1>' +
     '<br>' +
     '<button class="btn" id="alcohol-yes">Yes, Always</button>' +
     '<button class="btn" id="alcohol-no">No</button></div>';
   $('.main-body').append(questionDrinksDisplay);
   $('#alcohol-yes').click(function(e) {
     e.preventDefault();
     dateDrinks = 'true';
     console.log(dateDrinks);
     questionRomance(); 
   });
   $('#alcohol-no').click(function(e) {
     e.preventDefault();
     dateDrinks = 'false';
     console.log(dateDrinks); 
     questionRomance();
   });
   $('.main-body').fadeIn(1000);
  });
};

function questionRomance() {
  $('.main-body').fadeOut( 1000, function() {
    $('.main-body').css('background', 'url(images/cinemagraph-kiss.gif)  no-repeat center center fixed');
    $('.main-body').css('-webkit-background-size', 'cover');
    $('.main-body').css('-moz-background-size', 'cover');
    $('.main-body').css('-o-background-size', 'cover');
    $('.main-body').css('background-size', 'cover');
    $('.main-body').empty();
    var questionRomanceDisplay = '<div class="center" id="shade-dark">' +
     '<h1>Should it be more romantic or more fun?</h1>' +
     '<br>' +
     '<button class="btn" id="romantic">Romantic</button>' +
     '<button class="btn" id="fun">Fun</button></div>';
    $('.main-body').append(questionRomanceDisplay);
    $('#romantic').click(function(e) {
     e.preventDefault();
     dateRomance = 'true';
     console.log(dateRomance);
     questionHipster(); 
    });
    $('#fun').click(function(e) {
     e.preventDefault();
     dateRomance = 'false';
     console.log(dateRomance); 
     questionHipster();
    });
   $('.main-body').fadeIn(1000);
  });
};

function questionHipster() {
  $('.main-body').fadeOut( 1000, function() {
    $('.main-body').css('background', 'url(images/cinemagraph-dancer.gif)  no-repeat center center fixed');
    $('.main-body').css('-webkit-background-size', 'cover');
    $('.main-body').css('-moz-background-size', 'cover');
    $('.main-body').css('-o-background-size', 'cover');
    $('.main-body').css('background-size', 'cover');
    $('.main-body').empty();
    var questionHipsterDisplay = '<div class="center" id="shade-dark">' +
     '<h1>Are you a hipster (or live in Williamsburg)?</h1>' +
     '<br>' +
     '<button class="btn" id="hipster-yes">Hipster</button>' +
     '<button class="btn" id="hipster-no">Not a Hipster</button></div>';
    $('.main-body').append(questionHipsterDisplay);
    $('#hipster-yes').click(function(e) {
     e.preventDefault();
     dateHipster = 'true';
     console.log(dateHipster);
     questionDateNum(); 
     });
    $('#hipster-no').click(function(e) {
     e.preventDefault();
     dateHipster = 'false';
     console.log(dateHipster); 
     questionDateNum();
    });
   $('.main-body').fadeIn(1000);
  });
};

function questionDateNum() {
  $('.main-body').fadeOut( 1000, function() {
    $('.main-body').css('background', 'url(images/cinemagraph-slow-dance.gif)  no-repeat center center fixed');
    $('.main-body').css('-webkit-background-size', 'cover');
    $('.main-body').css('-moz-background-size', 'cover');
    $('.main-body').css('-o-background-size', 'cover');
    $('.main-body').css('background-size', 'cover');
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
   $('.main-body').fadeIn(1000);
  });
};

function results() {
  $('.main-body').fadeOut( 1000, function() {
    $('.main-body').css('background', 'url(images/cinemagraph-champagne.gif)  no-repeat center center fixed');
    $('.main-body').css('-webkit-background-size', 'cover');
    $('.main-body').css('-moz-background-size', 'cover');
    $('.main-body').css('-o-background-size', 'cover');
    $('.main-body').css('background-size', 'cover');
    $('.main-body').empty();
    if (speakEasy === 'false'){ 
      var selectionPage = '<div class="center" id="shade-darkest">' +
                       '<br>' +
                       '<p style="color: lightgrey; font-size: 4em; margin: 40px;">Here are some ideas I think you\'ll like!</p>' +
                       '<ul class="accordion" id="accordion"></ul>' +
                       '<br>' +
                       '<h4 style="color: lightgrey"></h4></div>'; 
      } else {
            var selectionPage = '<div class="center" id="shade-darkest">' +
                       '<br>' +
                       '<p style="color: lightgrey; font-size: 4em; margin: 40px;">Here are the best speakeasies in nyc!</p>' +
                       '<ul class="accordion" id="accordion"></ul>' +
                       '<br>' +
                       '<h4 style="color: lightgrey"></h4></div>';  
      }

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
     }, 1400); 
     $('.main-body').fadeIn(1000);
  });   
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
    }, 40000); 
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
      // addslider();
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
     hipster: dateHipster,
     drinks: dateDrinks,
     romantic: dateRomance,
     speakeasy: speakEasy
    }
  }


  $(function(){
    ideaList = new IdeaList();
    ideaListView = new IdeaListView({
      collection: ideaList,
      el: "#accordion"
    })
    // ideaList.fetch({reset: true});

    // $('select').on('change', function(e){
      ideaList.fetch({
       reset: true,
       data: getParams()
      });
    // })

  })
}



 