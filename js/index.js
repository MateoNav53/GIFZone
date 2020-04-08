$(document).ready(function () {
    
    $('#search-button').click(getData);

    function getData(event){
        event.preventDefault();
        var input = encodeURIComponent($('#search-input').val().trim())   
        var xhr = $.get("https://api.giphy.com/v1/gifs/search?q="+input+"&api_key=5hAFzhlPwnIpT4XY2vkt69nnzDYTE530&limit=30");
        xhr.done(function(response) {
            console.log('success, got data!', response);
            var gifs = response.data
            $('#gifs').empty();
            for (gif of gifs){
                $('#gifs').append("<img src='"+gif.images.original.url+"'>");
            };
    });
    };
});