
function ajaxSearch() {
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "0310753a29ba4feea63b460306945a1e",
        'begin_date': "2000",
        'end_date': "2017"
    });
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(result) {
        console.log(result);
    }).fail(function(err) {
        throw err;
    });
}
