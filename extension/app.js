/***
 * RandomQuote
 *
 */

var RandomQuote = new RandomQuote(),
    url = RandomQuote.getImage();

RandomQuote.setQuote(RandomQuote.getQuote(RandomQuote.getQuotes()));

if (!navigator.isOnline) {
    RandomQuote.getImageFromApi(function(response){
        if (response.large_url) {
            url = response.large_url;
        } else if (response) {
            url = response.url;
        }

        RandomQuote.setImage(url);
    });
} else {
    RandomQuote.setImage(url);
}