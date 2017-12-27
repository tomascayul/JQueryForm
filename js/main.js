$(document).ready(function () {
	var user = {
		name: '',
		pass: ''
	};
	$('.name').on('change', function () {
		user.name = $(this).val();
	});
	$('.psw').on('change', function () {
		user.pass = $(this).val();
	});
	$('#formLogin').on('submit', function () {
		window.alert('submit formulario login : ');
	});
});
