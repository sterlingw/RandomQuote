/***
 * 
 */
var rq = new RandomQuote(document.getElementById('quote'));

rq.setQuote();

// set background color
rq.setBackgroundColor(rq.getRandom(rq.colors));