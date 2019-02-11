jQuery(document).ready(function() {
	'use strict';
	$('#slider-carousel').carouFredSel({
		responsive: true,
		width: '100%',
		circular: true,
		scroll: {
			items: 1,
			duration: 500,
			pauseOnHover: true
		},
		auto: true,
		items: {
			visible: {
				min: 1,
				max: 1
			},
			height: 'variable'
		},
		pagination: {
			container: '.sliderpager',
			pageAnchorBuilder: false
		}
	});
	$(window).scroll(function() {
		var top = $(window).scrollTop();
		if (top >= 60) {
			$('header').addClass('secondary');
		} else if ($('header').hasClass('secondary')) {
			$('header').removeClass('secondary');
		}
	});

	$('#menu').slicknav({
		label: ''
	});
	$('a').smoothScroll();

	$('.animation').each(function() {
		var waypoint = new Waypoint({
			element: this,
			handler: function(direction) {
				var animation = $(this.element).attr('data-animation');
				$(this.element).css('opacity', '1');
				$(this.element).addClass('animated ' + animation);
			},
			offset: '75%'
		});
	});
});

var api = 'AIzaSyCySFnMFRYe1hjpNRYKmAlrwcWF20xR9Ak';

function initMap() {
	var latLng = {
		lat: 52.2292676,
		lng: 20.9722288
	};

	var map = new google.maps.Map(document.getElementById('mapa'), {
		center: latLng,
		zoom: 14
	});

	var contenido = '<h3>Tito Parra</h3>';

	var informacion = new google.maps.InfoWindow({
		content: contenido
	});

	var marker = new google.maps.Marker({
		position: latLng,
		map: map,
		title: 'Warszawa'
	});

	marker.addListener('click', function() {
		informacion.open(map, marker);
	});
}
