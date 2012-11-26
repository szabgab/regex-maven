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

var current_quiz = -1;
var quizes = [
    {
        "cases" : [ ["one", "f"], ["two", "f"], ["three", "t"], ["four", "f" ] ],
        "regex" : "(.)\\1"
    },
    {
        "cases" : [ ["xx", "f"], ["xxx", "f"], ["xxxx", "t"], ["xxxxx", "t" ] ],
        "regex" : "x{4}"
    },
    {
        "cases" : [ ["#1#", "t"], ["#11#", "f"], ["##", "f"], ["#.#", "t" ] ],
        "regex" : "#[1-5.]#"
    },
    {
        "cases" : [ ["#1#", "f"], ["#a#", "t"], ["#ab#", "f"], ["#aa#", "f" ], ["##", "f"] ],
        "regex" : "#[abc]#"
    },
    {
        "cases" : [ ["#1#", "f"], ["#a#", "t"], ["#ab#", "t"], ["#aa#", "t" ], ["##", "f"] ],
        "regex" : "#[abc]+#"
    },
    {
        "cases" : [ ["#1#", "f"], ["#a#", "t"], ["#ab#", "t"], ["#aa#", "t" ], ["##", "t"] ],
        "regex" : "#[abc]*#"
    },
    {
        "cases" : [ ["#1#", "f"], ["#a#", "t"], ["#ab#", "f"], ["#aa#", "t" ], ["##", "f"] ],
        "regex" : "#([abc])\\1?#"
    }
];

function show_quiz() {
    current_quiz++;
    if (current_quiz >= quizes.length) {
        $( "#nomore" ).popup( "open" )
        return;
    }
    var q = quizes[current_quiz];

    var question = "Which one or more of strings are matched by the following regex? <b>" + q["regex"] + "</b>";
    var quiz = '<input type="hidden" name="count" id="count" value="' + q["cases"].length + '" />\n';
    for (var i = 0; i < q["cases"].length; i++) {
        quiz += '<input type="hidden" id="expected-' + i + '" value="' + (q["cases"][i][1] == 't' ? 'true' : 'false')  + '" />\n';
        quiz += '<input type="checkbox" name="checkbox-' + i + '" id="checkbox-mini-' + i + '" class="custom" data-mini="true" /><label for="checkbox-mini-' + i + '">' + q["cases"][i][0] + '</label>\n';
    }

    $('#question').html(question);
    $('#quiz').html(quiz).trigger('create');
}


function run_regex() {
    var pattern = document.getElementById('regex').value;
    var text  = document.getElementById('txt').value;
    try {
        var re = new RegExp(pattern);
    } catch(e) {
        $('#result').html( '' + e );
        return;
    }
    // text.search(pattern)
    var result = text.match( re );
    if (result) {
        $('#result').html( result[0] );
    } else {
        $('#result').html( 'No match' );
    }
}


