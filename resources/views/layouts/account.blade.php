<!DOCTYPE html>
<html lang="en-us" id="extr-page">

	<head>
		<meta charset="utf-8">
		<title> ShareRide </title>
		<meta name="description" content="">
		<meta name="author" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

		<!-- #CSS Links -->
		<!-- Basic Styles -->
		<link href="{{ asset('css/app.css') }}" rel="stylesheet">
		<!-- <link rel="stylesheet" type="text/css" media="screen" href="{{ asset('css/bootstrap.min.css') }}">
		<link rel="stylesheet" type="text/css" media="screen" href="{{ asset('css/font-awesome.min.css') }}"> -->

		<!--  Styles : Caution! DO NOT change the order -->
		<link rel="stylesheet" type="text/css" media="screen" href="{{ asset('css/smartadmin-production-plugins.min.css')  }}">
		<link rel="stylesheet" type="text/css" media="screen" href="{{ asset('css/smartadmin-production.min.css')  }}">
		<link rel="stylesheet" type="text/css" media="screen" href="{{ asset('css/smartadmin-skins.min.css')  }}">

		<!--  RTL Support -->
		<link rel="stylesheet" type="text/css" media="screen" href="{{ asset('css/smartadmin-rtl.min.css')  }}">

		<!-- We recommend you use "your_style.css" to override 
		specific styles this will also ensure you retrain your customization with each  update.
		<link rel="stylesheet" type="text/css" media="screen" href="css/your_style.css"> -->

		<!-- Demo purpose only: goes with demo.js, you can delete this css when designing your own WebApp -->
		<link rel="stylesheet" type="text/css" media="screen" href="{{ asset('css/demo.min.css') }}">

		<!-- #FAVICONS -->
		<link rel="shortcut icon" href="img/favicon/favicon.ico" type="image/x-icon">
		<link rel="icon" href="img/favicon/favicon.ico" type="image/x-icon">

		<!-- #GOOGLE FONT -->
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,300,400,700">

		
	</head>

	<body class="animated fadeInDown">

		<header id="header">

			<div id="logo-group">
				<span id="logo"> <i class="icon-append fa fa-taxi"></i>ShareRide<!-- <img src="{{ asset('img/logo.png') }}" alt="ShareRide " >  --></span>
			</div>
			
			@yield('title')

			

		</header>

		<div id="main" role="main">

			<!-- MAIN CONTENT -->

			<div id="content" class="container">

				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-7 col-lg-8 hidden-xs hidden-sm ">
						<div class="row">
						<div class="col-xs-12 col-sm-12 hidden-sm-down">
						<h1 class="txt-color-red login-header-big">ShareRide Cyton Coding Challenge</h1>
						<div class="hero">

							<div class="pull-left login-desc-box-l">
								<h4 class="paragraph-header">Enabling riders to find and reserve rides</h4>
								<div class="login-app-icons">
									<a href="javascript:void(0);" class="btn btn-danger btn-sm">Give Ride</a>
									<a href="javascript:void(0);" class="btn btn-danger btn-sm">Get Ride</a>
								</div>
							</div>

							<img src="img/demo/iphoneview.png" class="pull-right display-image" alt="" style="width:210px">

						</div>
						</div>
						</div>

						<div class="row">
							<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
								<h5 class="about-heading">About ShareRide</h5>
								<p>
									A user registers to become a participant. The user will have the ability to either give a ride or get a ride.
								</p>
							</div>
							<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
								<h5 class="about-heading">How it works</h5>
								<p>
									A user looking for a ride will see a list of the rides available with the origin, destination, space available, driver and they can book the ride. When they book a ride, they get a confirmation email.
								</p>
							</div>
						</div>

					</div>
					<div class="col-xs-12 col-sm-12 col-md-5 col-lg-4">
						<div class="well no-padding">

							@yield('content')

						</div>

						<h5 class="text-center"> - Or sign in using -</h5>

						<ul class="list-inline text-center ">
							<li class="list-inline-item">
								<a href="javascript:void(0);" class="btn btn-primary btn-circle"><i class="fa fa-facebook"></i></a>
							</li>
							<li class="list-inline-item">
								<a href="javascript:void(0);" class="btn btn-info btn-circle"><i class="fa fa-twitter"></i></a>
							</li>
							<li class="list-inline-item">
								<a href="javascript:void(0);" class="btn btn-warning btn-circle"><i class="fa fa-linkedin"></i></a>
							</li>
						</ul>

					</div>
				</div>
			</div>

		</div>

		<!--================================================== -->

		<!-- PACE LOADER - turn this on if you want ajax loading to show (caution: uses lots of memory on iDevices)-->
		<script src="{!! asset('js/account/plugin/pace/pace.min.js') !!}"></script>

		<!-- Link to Google CDN's jQuery + jQueryUI; fall back to local -->
		<script src="{!! asset('js/account/jquery.min.js') !!}"></script>
		<script>
			if (!window.jQuery) {
				document.write('<script src="{!! asset("js/account/libs/jquery-3.2.1.min.js") !!}""><\/script>');
			}
			</script>

			<script src="{!! asset('js/account/jquery-ui.min.js') !!}"></script>
			<script>
				if (!window.jQuery.ui) {
					document.write('<script src="{!! asset("js/account/libs/jquery-ui.min.js") !!}><\/script>');
				}
		</script>

		<!-- IMPORTANT: APP CONFIG -->
		<script src="{!! asset('js/account/app.config.js') !!}"></script>

		<!-- JS TOUCH : include this plugin for mobile drag / drop touch events
		<script src="js/plugin/jquery-touch/jquery.ui.touch-punch.min.js"></script> -->

		<!-- BOOTSTRAP JS -->
		<script src="{!! asset('js/account/bootstrap/bootstrap.min.js') !!}"></script>

		<!-- JQUERY VALIDATE -->
		<script src="{!! asset('js/account/plugin/jquery-validate/jquery.validate.min.js') !!}"></script>

		<!-- JQUERY MASKED INPUT -->
		<script src="{!! asset('js/account/plugin/masked-input/jquery.maskedinput.min.js') !!}"></script>

		<!--[if IE 8]>

		<h1>Your browser is out of date, please update your browser by going to www.microsoft.com/download</h1>

		<![endif]-->

		<!-- MAIN APP JS FILE -->
		<script src="{!! asset('js/account/app.min.js') !!}"></script>

		<script>
			runAllForms();

			$(function() {
				// Validation
				$("#login-form").validate({
					// Rules for form validation
					rules : {
						email : {
							required : true,
							email : true
						},
						password : {
							required : true,
							minlength : 3,
							maxlength : 20
						}
					},

					// Messages for form validation
					messages : {
						email : {
							required : 'Please enter your email address',
							email : 'Please enter a VALID email address'
						},
						password : {
							required : 'Please enter your password'
						}
					},

					// Do not change code below
					errorPlacement : function(error, element) {
						error.insertAfter(element.parent());
					}
				});
			});
		</script>

	

	</body>

</html>