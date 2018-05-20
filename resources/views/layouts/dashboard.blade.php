<!DOCTYPE html>
<html class="no-js css-menubar" lang="en">

	<!-- Mirrored from getbootstrapadmin.com/remark/material/iconbar/pages/blank.html by HTTrack Website Copier/3.x [XR&CO'2014], Sun, 20 May 2018 01:19:48 GMT -->
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
		<meta name="description" content="bootstrap material admin template">
		<meta name="author" content="">

		<title>{{ config('app.name', 'Rider') }}</title>

		<link rel="apple-touch-icon" href="{{ asset('assets/images/apple-touch-icon.png') }}">
		<link rel="shortcut icon" href="{{ asset('assets/images/favicon.ico') }}">

		<!-- Stylesheets -->
		<link rel="stylesheet" href="{{ asset('global/css/bootstrap.minfd53.css?v4.0.1') }}">
		<link rel="stylesheet" href="{{ asset('global/css/bootstrap-extend.minfd53.css?v4.0.1') }}">
		<link rel="stylesheet" href="{{ asset('assets/css/site.minfd53.css?v4.0.1') }}">

		<!-- Skin tools (demo site only) -->
		<link rel="stylesheet" href="{{ asset('global/css/skintools.minfd53.css?v4.0.1') }}">
		<script src="{{ asset('assets/js/Plugin/skintools.minfd53.js?v4.0.1') }}"></script>

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
	</head>
	<body class="animsition ">
		<!--[if lt IE 8]>
		<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
		<![endif]-->

		<nav class="site-navbar navbar navbar-default navbar-inverse navbar-fixed-top navbar-mega"
		role="navigation">

			<div class="navbar-header">
				<button type="button" class="navbar-toggler hamburger hamburger-close navbar-toggler-left hided"
				data-toggle="menubar">
					<span class="sr-only">Toggle navigation</span>
					<span class="hamburger-bar"></span>
				</button>
				<button type="button" class="navbar-toggler collapsed" data-target="#site-navbar-collapse"
				data-toggle="collapse">
					<i class="icon md-more" aria-hidden="true"></i>
				</button>
				<div class="navbar-brand navbar-brand-center">
					<img class="navbar-brand-logo" src="../assets/images/logo.png" title="Remark">
					<span class="navbar-brand-text hidden-xs-down"> Remark</span>
				</div>
				<button type="button" class="navbar-toggler collapsed" data-target="#site-navbar-search"
				data-toggle="collapse">
					<span class="sr-only">Toggle Search</span>
					<i class="icon md-search" aria-hidden="true"></i>
				</button>
			</div>

			<div class="navbar-container container-fluid">
				<!-- Navbar Collapse -->
				<div class="collapse navbar-collapse navbar-collapse-toolbar" id="site-navbar-collapse">
					<!-- Navbar Toolbar -->
					<ul class="nav navbar-toolbar">
						<li class="nav-item hidden-float" id="toggleMenubar">
							<a class="nav-link" data-toggle="menubar" href="#" role="button"> <i class="icon hamburger hamburger-arrow-left"> <span class="sr-only">Toggle menubar</span> <span class="hamburger-bar"></span> </i> </a>
						</li>
						<li class="nav-item hidden-sm-down" id="toggleFullscreen">
							<a class="nav-link icon icon-fullscreen" data-toggle="fullscreen" href="#" role="button"> <span class="sr-only">Toggle fullscreen</span> </a>
						</li>
						<li class="nav-item hidden-float">
							<a class="nav-link icon md-search" data-toggle="collapse" href="#" data-target="#site-navbar-search"
							role="button"> <span class="sr-only">Toggle Search</span> </a>
						</li>
						
						
						
					</ul>
					<!-- End Navbar Toolbar -->

					<!-- Navbar Toolbar Right -->
					<ul class="nav navbar-toolbar navbar-right navbar-toolbar-right">
						<li class="nav-item dropdown">
							<a class="nav-link" data-toggle="dropdown" href="javascript:void(0)" data-animation="scale-up"
							aria-expanded="false" role="button"> <span class="flag-icon flag-icon-us"></span> </a>
							<div class="dropdown-menu" role="menu">
								<a class="dropdown-item" href="javascript:void(0)" role="menuitem"> <span class="flag-icon flag-icon-gb"></span> English</a>
								<a class="dropdown-item" href="javascript:void(0)" role="menuitem"> <span class="flag-icon flag-icon-fr"></span> French</a>
								<a class="dropdown-item" href="javascript:void(0)" role="menuitem"> <span class="flag-icon flag-icon-cn"></span> Chinese</a>
								<a class="dropdown-item" href="javascript:void(0)" role="menuitem"> <span class="flag-icon flag-icon-de"></span> German</a>
								<a class="dropdown-item" href="javascript:void(0)" role="menuitem"> <span class="flag-icon flag-icon-nl"></span> Dutch</a>
							</div>
						</li>
						
						
						
						@guest
                            <li><a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a></li>
                            <li><a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a></li>
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }} <span class="caret"></span>
                                </a>

                           
	                            <div class="dropdown-menu" role="menu">
									<a class="dropdown-item" href="javascript:void(0)" role="menuitem"><i class="icon md-account" aria-hidden="true"></i> Profile</a>
									<a class="dropdown-item" href="javascript:void(0)" role="menuitem"><i class="icon md-card" aria-hidden="true"></i> Billing</a>
									<a class="dropdown-item" href="javascript:void(0)" role="menuitem"><i class="icon md-settings" aria-hidden="true"></i> Settings</a>
									<div class="dropdown-divider"></div>
									<a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();"><i class="icon md-power" aria-hidden="true"></i> 
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
								</div>
                            </li>
                        @endguest
						
					
					</ul>
					<!-- End Navbar Toolbar Right -->
				</div>
				<!-- End Navbar Collapse -->

				<!-- Site Navbar Seach -->
				<div class="collapse navbar-search-overlap" id="site-navbar-search">
					<form role="search">
						<div class="form-group">
							<div class="input-search">
								<i class="input-search-icon md-search" aria-hidden="true"></i>
								<input type="text" class="form-control" name="site-search" placeholder="Search...">
								<button type="button" class="input-search-close icon md-close" data-target="#site-navbar-search"
								data-toggle="collapse" aria-label="Close"></button>
							</div>
						</div>
					</form>
				</div>
				<!-- End Site Navbar Seach -->
			</div>
		</nav>
		<div class="site-menubar site-menubar-light">
			<div class="site-menubar-body">
				<div>
					<div>
						<ul class="site-menu" data-plugin="menu">
							<li class="site-menu-item">
								<a href="#"> <i class="site-menu-icon md-view-dashboard" aria-hidden="true"></i> <span class="site-menu-title">Dashboard</span> </a>
							</li>
							<li class="site-menu-item active">
								<a href="#"> <i class="site-menu-icon md-settings" aria-hidden="true"></i> <span class="site-menu-title">Settings</span> </a>
							</li>
							<li class="site-menu-item">
								<a href="{{ route('logout') }}" onclick="event.preventDefault();  document.getElementById('logout-form').submit();"> <i class="site-menu-icon md-power" aria-hidden="true"></i> <span class="site-menu-title">Logout</span> </a>
								<form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                </form>
							</li>
							
							

                                    

						</ul>
					</div>
				</div>
			</div>
		</div>

		<!-- Page -->
		<div class="page">
			<div class="page-content">

				@yield('content')

			</div>
		</div>
		<!-- End Page -->

		<!-- Footer -->
		<footer class="site-footer">
			<div class="site-footer-legal">
				© 2018 <a href="#">Rider</a>
			</div>
			<div class="site-footer-right">
				Designed <i class="red-600 icon md-favorite"></i> by <a href="#">Didinya Johnson</a>
			</div>
		</footer>
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
			Config.set('assets', '../assets');
		</script>

		<!-- Page -->
		<script src="{{ asset('assets/js/Site.minfd53.js?v4.0.1') }}"></script>
		<script src="{{ asset('global/js/Plugin/asscrollable.minfd53.js?v4.0.1') }}"></script>
		<script src="{{ asset('global/js/Plugin/slidepanel.minfd53.js?v4.0.1') }}"></script>
		<script src="{{ asset('global/js/Plugin/switchery.minfd53.js?v4.0.1') }}"></script>

		<script>
			(function(document, window, $) {'use strict';

				var Site = window.Site;
				$(document).ready(function() {
					Site.run();
				});
			})(document, window, jQuery);
		</script>

	</body>

	<!-- Mirrored from getbootstrapadmin.com/remark/material/iconbar/pages/blank.html by HTTrack Website Copier/3.x [XR&CO'2014], Sun, 20 May 2018 01:19:48 GMT -->
</html>