var Ajax = {
    Get : function(url, query, callback) {
        jQuery.ajax({type: "POST", url: url, data: query, success: function(response) { callback(response); } });
    },
    Send : function(url, query) {
        jQuery.ajax({type: "POST", url: url, data: query});
    }
}
var Dialog = {
    Close : function() {
        $('#modalblanket').css('display','none');
        $('#dialog').css('display','none');
        $('#dialog .content').html('');
        $('#dialog .header .content').html('');
    },
    Open : function(width, height, posx, posy) {
        if (posx === 'center') {
           posx =  ($(window).width() / 2) - (width / 2);
        }
        if (posy === 'center') {
           posy =  ($(window).height() / 2) - (height / 2);
        }
        $('#dialog-close').click(function() { Dialog.Close(); });
        $('#modalblanket').css('display','block');
        $('#modalblanket').click(function() { Dialog.Close(); });
        $('#dialog').css({
            'display':'block',
            'height':height,
            'left':posx,
            'top':posy,
            'width':width,
        });
    }
}

var d = new Date();
var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function FixTimeLength(time) {
    if (time.toString().length == 1) {
        return '0' + time;
    } else {
        return time;
    }
}

function LastLogin() {
    if ($.cookie('last_login')){
        var last_login = $.cookie('last_login');
        $('#last-login').html('Last login: ' + last_login);
    } else {
        $('#last-login').html('Last login: Never');
    }
    var timestring = days[d.getDay()] + ' ' + months[d.getMonth()] + ' ' +  d.getDate() + ' ' + FixTimeLength(d.getHours()) + ':' + FixTimeLength(d.getMinutes()) + ':' + FixTimeLength(d.getSeconds()) + ' ' + d.getFullYear();
    $.cookie('last_login', timestring, { expires: 365 });
}

$(document).ready(function(){
    LastLogin();
    $('#terminal').terminal(function(command, term) {
        scommand = command.split(' ');
        if (scommand[0] === '') {
            term.echo('');
        }else if (scommand[0] === 'blog') {
            $('#dialog .header .content').html('Blog');
            $('#dialog div.content').html('<h2>First Post!</h2>So I\'ve finally decided to get my site up and running.  It\'s still a work in progress, but I hope to have it completely functional soon.'); 
            Dialog.Open(650, 600, 'center', 'center')
        } else if (scommand[0] === 'clear' || scommand[0] === 'cl') {
            $('#terminal').html();
        }else if (scommand[0] === 'git') {
            document.location = 'http://www.github.com/cvuletich';
        } else if (scommand[0] === 'help') {
            term.echo('\n' +
                '   blog         view my blog\n' +
                '   ping         contact me\n' +
                '   git          view my github account\n' +
                '   portfolio    view my portfolio\n' +
                '   resume       download my resume\n' +
                '   who          about me\n');
        }else if (scommand[0] === 'ping') {
            term.echo('\n' + 
                '   Email: cvuletich@me.com\n' +
                '   Phone: (708) 721-7212\n' +
                '   Twitter: @cvuletich\n\n');
        } else if (scommand[0] === 'portfolio') {
            $('#dialog .header .content').html('Portfolio');
            $('#dialog div.content').html('Coming soon!<br />');
            Dialog.Open(650, 600, 'center', 'center')
        }else if (scommand[0] === 'resume') {
            term.echo('');
        } else if (
            scommand[0] === 'cd' || 
            scommand[0] === 'chmod' || 
            scommand[0] === 'df' || 
            scommand[0] === 'ifconfig' || 
            scommand[0] === 'ls' || 
            scommand[0] === 'pwd' || 
            scommand[0] === 'rm') {
            term.echo(scommand[0] + ': Permission denied');
        }else if (scommand[0] === 'who') {
            term.echo('\n' + 
                '   Email: cvuletich@me.com\n' +
                '   Phone: (708) 721-7212\n' +
                '   Twitter: @cvuletich\n\n');
        } else {
            term.echo("cvsh: command not found: " + scommand[0]);
        }
    $("html, body").animate({ scrollTop: $(document).height() }, 0);
    }, { greetings: '' });
});
