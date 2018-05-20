<!DOCTYPE html>
<html class="no-js css-menubar" lang="en">

	
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
		<meta name="rider" content="give and get rides">
		<meta name="author" content="">

		<title>ShareRide</title>

		<!-- <link rel="apple-touch-icon" href="{{ asset('assets/images/apple-touch-icon.png') }}">
		<link rel="shortcut icon" href="{{ asset('assets/images/favicon.ico') }}"> -->

		<!-- Stylesheets -->
		<link rel="stylesheet" href="{{ asset('global/css/bootstrap.minfd53.css?v4.0.1') }}">
		<link rel="stylesheet" href="{{ asset('global/css/bootstrap-extend.minfd53.css?v4.0.1') }}">
		<link rel="stylesheet" href="{{ asset('assets/css/site.minfd53.css?v4.0.1') }}">

		<!-- Skin tools (demo site only) -->
		<!-- <link rel="stylesheet" href="{{ asset('global/css/skintools.minfd53.css?v4.0.1') }}">
		<script src="{{ asset('assets/js/Plugin/skintools.minfd53.js?v4.0.1') }}"></script> -->

		<!-- Plugins -->
		<link rel="stylesheet" href="{{ asset('global/vendor/animsition/animsition.minfd53.css?v4.0.1') }}">
		<link rel="stylesheet" href="{{ asset('global/vendor/asscrollable/asScrollable.minfd53.css?v4.0.1') }}">
		<link rel="stylesheet" href="{{ asset('global/vendor/switchery/switchery.minfd53.css?v4.0.1') }}">
		<link rel="stylesheet" href="{{ asset('global/vendor/intro-js/introjs.minfd53.css?v4.0.1') }}">
		<link rel="stylesheet" href="{{ asset('global/vendor/slidepanel/slidePanel.minfd53.css?v4.0.1') }}">
		<link rel="stylesheet" href="{{ asset('global/vendor/flag-icon-css/flag-icon.minfd53.css?v4.0.1') }}">
		<link rel="stylesheet" href="{{ asset('global/vendor/waves/waves.minfd53.css?v4.0.1') }}">

		<!-- Fonts -->
		<link rel="stylesheet" href="{{ asset('global/fonts/material-design/material-design.minfd53.css?v4.0.1') }}">
		<link rel="stylesheet" href="{{ asset('global/fonts/brand-icons/brand-icons.minfd53.css?v4.0.1') }}">
		<link rel='stylesheet' href="https://fonts.googleapis.com/css?family=Roboto:400,400italic,700">
		
		
  		<link rel="stylesheet" href="{{ asset('global/fonts/font-awesome/font-awesome.minfd53.css?v4.0.1') }}">

		<!--[if lt IE 9]>
		<script src="{{ asset('global/vendor/html5shiv/html5shiv.min.js?v4.0.1') }}"></script>
		<![endif]-->

		<!--[if lt IE 10]>
		<script src="{{ asset('global/vendor/media-match/media.match.min.js?v4.0.1') }}"></script>
		<script src="{{ asset('global/vendor/respond/respond.min.js?v4.0.1') }}"></script>
		<![endif]-->

		<!-- Scripts -->
		<script src="{{ asset('global/vendor/breakpoints/breakpoints.minfd53.js?v4.0.1') }}"></script>
		<script>
			Breakpoints();
		</script>
		<link id="skinStyle" href="{{ asset('assets/skins/red.css') }}" rel="stylesheet" type="text/css">
		@section('styles')
		@show
	</head>
	<body class="animsition ">
		<!--[if lt IE 8]>
		<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
		<![endif]-->
		<!-- topnavigation bar -->
		@include('layouts.topnavbar')
		
		<!-- navigation -->
		@include('layouts.navigation')

		<!-- Page -->
		<div class="page">
			<!-- <div class="page-content"> -->

				@yield('content')

			<!-- </div> -->
		</div>
		<!-- End Page -->

		<!-- Footer -->
		@include('layouts.footer')
		<!-- Core  -->
		<script src="{{ asset('global/vendor/babel-external-helpers/babel-external-helpersfd53.js?v4.0.1') }}"></script>
		<script src="{{ asset('global/vendor/jquery/jquery.minfd53.js?v4.0.1') }}"></script>
		<script src="{{ asset('global/vendor/popper-js/umd/popper.minfd53.js?v4.0.1') }}"></script>
		<script src="{{ asset('global/vendor/bootstrap/bootstrap.minfd53.js?v4.0.1') }}"></script>
		<script src="{{ asset('global/vendor/animsition/animsition.minfd53.js?v4.0.1') }}"></script>
		<script src="{{ asset('global/vendor/mousewheel/jquery.mousewheel.minfd53.js?v4.0.1') }}"></script>
		<script src="{{ asset('global/vendor/asscrollbar/jquery-asScrollbar.minfd53.js?v4.0.1') }}"></script>
		<script src="{{ asset('global/vendor/asscrollable/jquery-asScrollable.minfd53.js?v4.0.1') }}"></script>
		<script src="{{ asset('global/vendor/ashoverscroll/jquery-asHoverScroll.minfd53.js?v4.0.1') }}"></script>
		<script src="{{ asset('global/vendor/waves/waves.minfd53.js?v4.0.1') }}"></script>

		<!-- Plugins -->
		<script src="{{ asset('global/vendor/switchery/switchery.minfd53.js?v4.0.1') }}"></script>
		<script src="{{ asset('global/vendor/intro-js/intro.minfd53.js?v4.0.1') }}"></script>
		<script src="{{ asset('global/vendor/screenfull/screenfull.minfd53.js?v4.0.1') }}"></script>
		<script src="{{ asset('global/vendor/slidepanel/jquery-slidePanel.minfd53.js?v4.0.1') }}"></script>

		<!-- Scripts -->
		<script src="{{ asset('global/js/State.minfd53.js?v4.0.1') }}"></script>
		<script src="{{ asset('global/js/Component.minfd53.js?v4.0.1') }}"></script>
		<script src="{{ asset('global/js/Plugin.minfd53.js?v4.0.1') }}"></script>
		<script src="{{ asset('global/js/Base.minfd53.js?v4.0.1') }}"></script>
		<script src="{{ asset('global/js/Config.minfd53.js?v4.0.1') }}"></script>

		<script src="{{ asset('assets/js/Section/Menubar.minfd53.js?v4.0.1') }}"></script>
		<script src="{{ asset('assets/js/Section/Sidebar.minfd53.js?v4.0.1') }}"></script>
		<script src="{{ asset('assets/js/Section/PageAside.minfd53.js?v4.0.1') }}"></script>
		<script src="{{ asset('assets/js/Plugin/menu.minfd53.js?v4.0.1') }}"></script>

		<!-- Config -->
		<script src="{{ asset('global/js/config/colors.minfd53.js?v4.0.1') }}"></script>
		<script src="{{ asset('assets/js/config/tour.minfd53.js?v4.0.1') }}"></script>
		<script>
			Config.set('assets', '{{ asset("assets") }}');
		</script>

		<!-- Page -->
		<script src="{{ asset('assets/js/Site.minfd53.js?v4.0.1') }}"></script>
		<script src="{{ asset('global/js/Plugin/asscrollable.minfd53.js?v4.0.1') }}"></script>
		<script src="{{ asset('global/js/Plugin/slidepanel.minfd53.js?v4.0.1') }}"></script>
		<script src="{{ asset('global/js/Plugin/switchery.minfd53.js?v4.0.1') }}"></script>
		
		@section('scripts')
		@show

		<script>
			(function(document, window, $) {'use strict';

				var Site = window.Site;
				$(document).ready(function() {
					Site.run();
				});
			})(document, window, jQuery);
		</script>

	</body>

	
</html>