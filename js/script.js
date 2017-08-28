//index page---------------------------------------------------------------------------------------------------------------------------------------------------

if (document.getElementById("index-page"))
{
// modal window
	var modalContent = document.querySelector(".modal-content"),
		modalWindow = document.querySelector(".modal-window"),
		feedbackBtn = document.querySelector(".feedback-btn"),
		modalClose = modalContent.querySelector(".modal-close"),
		nameInFocus = modalContent.querySelector("#name-in-focus");

	feedbackBtn.addEventListener("click", function(evt)
	{
		evt.preventDefault();
		modalContent.classList.add("modal-show");
		nameInFocus.focus();
	});

	modalClose.addEventListener("click", function()
	{
		modalContent.classList.remove("modal-show");
	});

	modalContent.addEventListener("click", function(event)
	{
		event.stopPropagation();
		modalContent.classList.remove("modal-show");
	});

	modalWindow.addEventListener("click", function(event)
	{
		event.stopPropagation();
	});


// interactive map
	function initMap()
	{
		var LatLng = {lat: 59.93858424, lng: 30.32290441};

		var map = new google.maps.Map(document.getElementById("map"),
		{
			zoom: 16,
			center: LatLng
		});

		var image = "img/map/pin-new.png";

		var marker = new google.maps.Marker
		({
			position: LatLng,
			map: map,
			icon: image
		});
	}
}