function cariPilem() {
    $('#daftar-pilem').html('');
    $.ajax({
        url: 'http://www.omdbapi.com/',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey' : 'fe4a6af7',
            's': $('#input-pencarian').val()
        },
        success: function (result) {
            if (result.Response == "True") {
                let pilem = result.Search;
                $.each(pilem, function (i, data) {
                    $('#daftar-pilem').append(`
                        <div class="col-md-4">
                            <div class="card mb-3">
                                <img src="`+ data.Poster + `" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">`+ data.Title +`</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">`+ data.Year +`</h6>
                                <a href="#" class="card-link see-detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="`+ data.imdbID +`">Detail</a>
                                </div>
                            </div>
                        </div>
                    `);
                });
                $('#input-pencarian').val('');
            }else{
                $('#daftar-pilem').html('<h1 class="text-center">'+ result.Error +'</h1>')
            }
        }
    });
}

$('#pencarian-button').on('click', function () {
    cariPilem();
    // $.getJSON('http://www.omdbapi.com/?apikey=fe4a6af7&')
});

$('#input-pencarian').on('keyup', function (e) {
    if(e.keyCode === 13) {
        cariPilem();
    }
});

$('#daftar-pilem').on('click', '.see-detail', function () {
    $.ajax({
        url: 'http://www.omdbapi.com/',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey' : 'fe4a6af7',
            'i': $(this).data('id')
        },
        success: function (pilem) {
            if( pilem.Response === "True" ) {
                $('.modal-body').html(`
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-4">
                                <img src="`+ pilem.Poster +`" class="img-fluid">
                            </div>
                            <div class="col-md-8">
                                <ul class="list-group">
                                    <li class="list-group-item"><h3>`+ pilem.Title +`</h3></li>
                                    <li class="list-group-item">Rilis : `+ pilem.Released +`</li>
                                    <li class="list-group-item">Genre : `+ pilem.Genre +`</li>
                                    <li class="list-group-item">Sutradara : `+ pilem.Director +`</li>
                                    <li class="list-group-item">Pemeran : `+ pilem.Actors +`</li>
                                    <li class="list-group-item">Rating : `+ (pilem.Ratings.length > 0 ? pilem.Ratings[0].Value : 'N/A') +`</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `);
            }
        }
    })
});