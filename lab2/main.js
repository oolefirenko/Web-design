//module pattern
var textModule = (function( $ ) {

var text = document.getElementById('textArea').textContent;
var words = " ";

    //private method
    function separator(letter) {
        $("#list").empty();
        words = [];
        var text = document.getElementById('text').value;

        let firstLetter = 1;

        let t = text.split(' ');
        for (var i = 0; i < t.length; i++) {
            if (t[i][0] == letter || t[i][0] == letter.toUpperCase()) {
                words.push(t[i]);
            }
        }
    }

   $("#a_butt").click(function() {
       separator('a');
       $("#list").text(words);
   });

   $("#b_butt").click(function() {
       separator('b');
       $("#list").text(words);
   });

   $("#c_butt").click(function() {
       separator('c');
       $("#list").text(words);
   });

    $("#d_butt").click(function() {
       separator('d');
       $("#list").text(words);
   });

    $("#e_butt").click(function() {
       separator('e');
       $("#list").text(words);
   });

    $("#f_butt").click(function() {
       separator('f');
       $("#list").text(words);
   });

    $("#g_butt").click(function() {
       separator('g');
       $("#list").text(words);
   });

    $("#h_butt").click(function() {
       separator('h');
       $("#list").text(words);
   });

    $("#i_butt").click(function() {
       separator('i');
       $("#list").text(words);
   });

    $("#j_butt").click(function() {
       separator('j');
       $("#list").text(words);
   });

    $("#k_butt").click(function() {
       separator('k');
       $("#list").text(words);
   });

    $("#l_butt").click(function() {
       separator('l');
       $("#list").text(words);
   });

    $("#m_butt").click(function() {
       separator('m');
       $("#list").text(words);
   });

    $("#o_butt").click(function() {
       separator('o');
       $("#list").text(words);
   });

    $("#p_butt").click(function() {
       separator('p');
       $("#list").text(words);
   });

    $("#q_butt").click(function() {
       separator('q');
       $("#list").text(words);
   });

    $("#r_butt").click(function() {
       separator('r');
       $("#list").text(words);
   });

    $("#s_butt").click(function() {
       separator('s');
       $("#list").text(words);
   });

    $("#t_butt").click(function() {
       separator('t');
       $("#list").text(words);
   });

    $("#u_butt").click(function() {
       separator('u');
       $("#list").text(words);
   });

    $("#v_butt").click(function() {
       separator('v');
       $("#list").text(words);
   });

    $("#w_butt").click(function() {
       separator('w');
       $("#list").text(words);
   });

    $("#x_butt").click(function() {
       separator('x');
       $("#list").text(words);
   });

    $("#y_butt").click(function() {
       separator('y');
       $("#list").text(words);
   });

    $("#z_butt").click(function() {
       separator('z');
       $("#list").text(words);
   });

    return {
        //public method
        textSorting: function() {
            separator(' ');
        }
    };

})( jQuery );

textModule.textSorting();
