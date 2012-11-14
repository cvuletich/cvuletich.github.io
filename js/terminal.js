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
var Portfolio = {
  Index : 0,
  Load : function() {
    var link = '';
    $('#portfolio-image').html('<img src="img/portfolio/' + Portfolio.Pages[Portfolio.Index].image + '" />');
    if (Portfolio.Pages[Portfolio.Index].link) {
      link = '<span class="portfolio-link"> (<a href="' + Portfolio.Pages[Portfolio.Index].link + '" target="_blank">Link</a>)</span>';
    }
    $('#portfolio-project').html(Portfolio.Pages[Portfolio.Index].project + link);
    $('#portfolio-technologies').html('<strong>Technologies: </strong> ' + Portfolio.Pages[Portfolio.Index].technologies);
    $('#portfolio-role').html('<strong>Role: </strong> ' + Portfolio.Pages[Portfolio.Index].role);
    $('#portfolio-synopsis').html('<strong>Synopsis:</strong>' + Portfolio.Pages[Portfolio.Index].synopsis);
  },
  Pages : [
    {
      'project' : 'DFCB Pulse',
      'image' : 'pulse.jpg',
      'role' : 'Senior Developer @ DraftFCB',
      'technologies' : 'Python (Facebook, Twitter, Instagram, Flickr APIs), PHP, MySQL, JavaScript (jQuery), CSS3, HTML',
      'synopsis' : ''
    },
    {
      'project' : 'USPS Everywhere Locator',
      'image' : 'uspseverywhere.jpg',
      'role' : 'Senior Developer @ DraftFCB',
      'technologies' : 'PHP, MySQL, JavaScript (jQuery, Google Maps API), CSS3, HTML',
      'synopsis' : ''
    },
    {
      'project' : 'VW Bluetooth Checker',
      'link' : 'http://web.vw.com/bluetoothchecker/',
      'image' : 'vwbluetooth.jpg',
      'role' : 'Senior Developer @ DraftFCB',
      'technologies' : 'PHP, Javascript, CSS3, HTML',
      'synopsis' : ''
    },
    {
      'project' : 'Kenworth PartsInsider',
      'link' : 'http://www.kenworthpartsinsider.com',
      'image' : 'kenworthpartsinsider.jpg',
      'role' : 'Senior Developer @ DraftFCB',
      'technologies' : 'Tomcat/JSP, Mssql, Javascript (jQuery), CSS3, HTML',
      'synopsis' : ''
    },
    {
      'project' : 'Peterbilt PartsInsider',
      'link' : 'http://www.peterbiltpartsinsider.com',
      'image' : 'peterbiltpartsinsider.jpg',
      'role' : 'Senior Developer @ DraftFCB',
      'technologies' : 'Tomcat/JSP, Mssql, Javascript (jQuery), CSS3, HTML',
      'synopsis' : ''
    },
    {
      'project' : 'TRP Parts',
      'link' : 'http://www.trpparts.com',
      'image' : 'trp.jpg',
      'role' : 'Senior Developer @ DraftFCB',
      'technologies' : 'PHP (Drupal), Javascript, CSS3, HTML',
      'synopsis' : ''
    },
    {
      'project' : 'TRP Parts Mobile',
      'link' : 'http://m.trpparts.com',
      'image' : 'trpmobile.jpg',
      'role' : 'Senior Developer @ DraftFCB',
      'technologies' : 'PHP (Drupal), Javascript (jQuery, jQuery Mobile), CSS3, HTML',
      'synopsis' : ''
    },
    {
      'project' : 'Cox Walking Dead Watch Party',
      'image' : 'coxwalkingdead.jpg',
      'role' : 'Senior Developer @ DraftFCB',
      'technologies' : 'PHP, Javascript (jQuery), CSS3, HTML',
      'synopsis' : ''
    },
    {
      'project' : 'Cox Hattery\'s Press Site',
      'link' : 'http://cox.draftfcb.net/press',
      'image' : 'coxpress.jpg',
      'role' : 'Senior Developer @ DraftFCB',
      'technologies' : 'Javascript (jQuery), CSS3, HTML',
      'synopsis' : ''
    },
    {
      'project' : 'DraftFCB Employee Directory App',
      'image' : 'employeedirectory.jpg',
      'role' : 'Senior Developer @ DraftFCB',
      'technologies' : 'PHP, Mssql, Javascript (jQuery, jQuery Mobile), CSS3, HTML',
      'synopsis' : ''
    },
    {
      'project' : 'Electronic Arts Mass Effect 3 Press Site',
      'image' : 'eamasseffect3.jpg',
      'role' : 'Senior Developer @ DraftFCB',
      'technologies' : 'Javascript (jQuery), CSS3, HTML',
      'synopsis' : ''
    },
    {
      'project' : 'FancyChatter (side project)',
      'link' : 'http://www.fancychatter.com',
      'image' : 'fancychatter.jpg',
      'role' : 'Developer',
      'technologies' : 'PHP, MySQL, Javascript (jQuery), CSS3, HTML',
      'synopsis' : ''
    },
    {
      'project' : '10pix (side project)',
      'image' : '10pix.jpg',
      'role' : 'Developer',
      'technologies' : 'PHP, MySQL, Javascript (jQuery), CSS3, HTML',
      'synopsis' : ''
    },
    {
      'project' : 'Soundbar (open source)',
      'link' : 'https://github.com/cvuletich/soundbar',
      'image' : 'soundbar.jpg',
      'role' : 'Senior Developer @ DraftFCB',
      'technologies' : 'Javascript (jQuery), CSS3, HTML',
      'synopsis' : ''
    }
  ],
  Next : function() {
    Portfolio.Index++;
    if (Portfolio.Index === Portfolio.Pages.length) {
      Portfolio.Index = 0;
    }
    Portfolio.Load();
  },
  Previous : function() {
    Portfolio.Index--;
    if (Portfolio.Index < 0) {
      Portfolio.Index = Portfolio.Pages.length - 1;
    }
    Portfolio.Load();
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
                '   ping         email me\n' +
                '   git          view my github account\n' +
                '   portfolio    view my portfolio\n' +
                '   resume       download my resume\n' +
                '   who          about me\n');
        }else if (scommand[0] === 'ping') {
            document.location = 'mailto:cvuletich@gmail.com';
        } else if (scommand[0] === 'portfolio') {
            $('#dialog .header .content').html('Portfolio');
            $('#dialog div.content').html('<div id="portfolio-project"></div><div id="portfolio-image"></div><div id="portfolio-previous" onclick="Portfolio.Previous()">&laquo; Prev</div><div id="portfolio-next" onclick="Portfolio.Next()">Next &raquo;</div><div id="portfolio-role"></div><div id="portfolio-technologies"></div><div id="portfolio-synopsis"></div>');
            Portfolio.Load();
            Dialog.Open(650, 600, 'center', 'center')
        }else if (scommand[0] === 'resume') {
            term.echo('cvsh: résumé coming soon');
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
                '   Email: cvuletich@gmail.com\n' +
                '   LinkedIn: (<a href="http://www.linkedin.com/profile/view?id=14219944" target="_blank">Link</a>)\n' +
                '   Google+: (<a href="https://plus.google.com/112175147650443826014/posts" target="_blank">Link</a>)\n' +
                '   Twitter: <a href="https://twitter.com/#!/cvuletich" cvuletichtarget="_blank">@cvuletich</a>\n\n');
        } else {
            term.echo("cvsh: command not found: " + scommand[0]);
        }
    $("html, body").animate({ scrollTop: $(document).height() }, 0);
    }, { greetings: '' });
});
