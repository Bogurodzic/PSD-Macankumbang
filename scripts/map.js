var map;
var chapel = {lat: 50.211241, lng: -5.482673}
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: chapel,
        zoom: 17
	});
    var marker = new google.maps.Marker({
        position: chapel,
        map: map
    });
}