$('#Iframe').load(function () {
  $('iframe').contents().find('body').css({"min-height": "100", "overflow" : "hidden"});
  setInterval( "$('iframe').height($('iframe').contents().find('body').height() + 20)", 1 );
});
