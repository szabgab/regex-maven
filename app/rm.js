//var btn_learn = document.querySelector('button#btn-learn');
//function goto_learn() {
//    h1.classList.toggle('large');
//}
//btn_learn.addEventListener('click', goto_learn );

// var pages = document.querySelector('#pages');
// pages.classList.contains('left')
// var pages = document.querySelector('#pages');
//
//

//function show_cheat_all() {
//    var h1  = document.querySelector('h1');
//
//}
//
//function load_cheat() {
//    var cheat_all = document.querySelector('button#cheat-all');
//    cheat_all.addEventListener('click', show_cheat_all );
//}

// $('div.ui-page').live("swipeleft", function(){
//     var nextpage = $(this).next('div[data-role="page"]');
//     // swipe using id of next page if exists
//     if (nextpage.length > 0) {
//         $.mobile.changePage(nextpage, 'slide');
//     }
// });
//
// $('div.ui-page').live("swiperight", function(){
//     var prevpage = $(this).prev('div[data-role="page"]');
//     // swipe using id of next page if exists
//     if (prevpage.length > 0) {
//         $.mobile.changePage(prevpage, 'slide', true);
//     }
// });

function check_quiz() {
    var c = document.getElementById('count');
    for (var i = 0; i < c.value; i++) {
        var user_id = 'checkbox-mini-' + i;
        var expected_id = 'expected-' + i;
        var user = document.getElementById(user_id).checked ? 'true' : 'false';
        var expected = document.getElementById(expected_id).value;
        if (user !== expected) {
            //alert(i + ' ' + user + ' ' + expected);
            $( "#failure" ).popup( "open" )
            break;
        }
    }
    $( "#success" ).popup( "open" )
}

var quizes = {
    "cases" : [ ["#1#", "t"], ["#11#", "f"], ["##", "f"], ["#.#", "t" ] ],
    "regex" : "#[1-5.]#"
   };

function show_quiz() {
    var question = "Which one or more of strings are matched by the following regex? <b>" + quizes["regex"] + "</b>";
    var quiz = '<input type="hidden" name="count" id="count" value="' + quizes["cases"].length + '" />\n';
    for (var i = 0; i < quizes["cases"].length; i++) {
        quiz += '<input type="hidden" id="expected-' + i + '" value="' + (quizes["cases"][i][1] == 't' ? 'true' : 'false')  + '" />\n';
        quiz += '<input type="checkbox" name="checkbox-' + i + '" id="checkbox-mini-' + i + '" class="custom" data-mini="true" /><label for="checkbox-mini-' + i + '">' + quizes["cases"][i][0] + '</label>\n';
    }

    $('#question').html(question);
    $('#quiz').html(quiz).trigger('create');
}



