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


