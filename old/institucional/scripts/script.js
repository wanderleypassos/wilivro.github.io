var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-19331610-2']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

function muda()
{
  //document.getElementById('cartao').innerHTML = "";
  document.getElementById('cartao').style.display = "none";
}
function animacao(){
  $('.imgs').animate({
    left: '226px',
  }, 1000);

  $('#texto1_1').animate({
    top:'51px'
  },1000);
  $('#texto1_2').animate({
    left:'79px'
  },1000);
  $('#texto1_3').animate({
    top:'89px'
  },1000);

  $('#texto2_1').animate({
    top:'51px'
  },1000);
  $('#texto2_2').animate({
    left:'42px'
  },1000);

  $('#texto3_1').animate({
    top:'40px'
  },1000)
  $('#texto3_2').animate({
    left:'79px'
  },1000);
  $('#texto3_3').animate({
    top:'76px'
  },1000);

  $('#texto4_1').animate({
    top:'51px'
  },1000);
  $('#texto4_2').animate({
    left:'107px'
  },1000);
  $('#texto4_3').animate({
    top:'85px'
  },1000);



  $("#bloco1").hover(
    function () {
      $('#texto1_1').animate({
        top: '30px',
      }, 500)
      .animate({
        top:'51px'
      },500);
      $('#texto1_2').animate({
        left: '35px',
      }, 500)
      .animate({
        left:'79px'
      },500);
      $('#texto1_3').animate({
        top: '101px',
      }, 500)
      .animate({
        top:'89px'
      },500); 
    },function(){}
  );
  $("#bloco2").hover(
    function () {
      $('#texto2_1').animate({
        top: '28px',
      }, 500)
      .animate({
        top:'47px'
      },500);
      $('#texto2_2').animate({
        left: '20px',
      }, 500)
      .animate({
        left:'42px'
      },500);

    },function(){}
  );
  $("#bloco3").hover(
    function () {
      $('#texto3_1').animate({
        top: '20px',
      }, 500)
      .animate({
        top:'40px'
      },500);
      $('#texto3_2').animate({
        left: '35px',
      }, 500)
      .animate({
        left:'79px'
      },500);
      $('#texto3_3').animate({
        top: '94px',
      }, 500)
      .animate({
        top:'76px'
      },500); 
    },function(){}
  );
  $("#bloco4").hover(
    function () {
      $('#texto4_1').animate({
        top: '27px',
      }, 500)
      .animate({
        top:'51px'
      },500);
      $('#texto4_2').animate({
        left: '64px',
      }, 500)
      .animate({
        left:'107px'
      },500);
      $('#texto4_3').animate({
        top: '100px',
      }, 500)
      .animate({
        top:'85px'
      },500); 
    },function(){}
  );
  //$('#div_adind_01').click(function(){

  $('#txt01_header').fadeIn(5000);

  //})
  //$('#div_adind_01').click(function(){
  $("#foto_top").fadeIn(150);
  $('#foto_top').animate({
    width:'200px',
    height:'170px',
    margin:'6px 3px',
    opacity:'1'
  },700)
  $('#logo').sprite({
    fps:30,
    no_of_frames:120,
    on_frame: { 
      119: function(obj) { 
        $(obj).goToFrame(65);

      }
    }
  })

}


