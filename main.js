$(document).ready(function () {
    $.ajax({
        url: 'https://randomuser.me/api/?results=9',
        dataType: 'json',
        success: function (data) {
            for (var i = 0; i < data.results.length; i++) {
                //console.log(data.results[i].user.name.first);
                var div = $('<div class="col-11 col-sm-5 col-md-5 col-lg-3 m-4 l-collab__person h-resetPaddingBs">')
                    .append("<div class='l-collab__person__holderImg'><img src=" + data.results[i].picture.large + "></div>")
                    .append("<div class='l-collab__person__name'>" + data.results[i].name.first + " " + data.results[i].name.last + "</div>")                            
                    .append("<div class='l-collab__person__user hold'> @" + data.results[i].login.username + "</div>")
                    .append("<div class='hold'><i class='fas fa-envelope'></i> <a href=mailto:"+ data.results[i].email +">" + data.results[i].email + "</a></div>")
                    .append("<div class='hold'><i class='fas fa-phone'></i> <a href=tel:"+ data.results[i].cell +">" + data.results[i].cell + "</a></div>")
                    .append("<div class='hold'><i class='fas fa-map-marker-alt'></i> <a href=https://maps.google.com/?q="+ data.results[i].location.coordinates.latitude + "," + data.results[i].location.coordinates.longitude +" target='_blank'>" + data.results[i].location.city + ", " + data.results[i].location.state + "</a></div>")
                $("#ListaColaboradores").append(div);
            }
        }
    });
});