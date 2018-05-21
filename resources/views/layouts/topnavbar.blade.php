<nav class="site-navbar navbar navbar-default  navbar-fixed-top navbar-mega bg-blue-600" role="navigation">

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
			<i class="icon fa-taxi" aria-hidden="true"></i>
			<span class="navbar-brand-text hidden-xs-down"> Rider</span>
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
				<li>
					<a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
				</li>
				<li>
					<a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
				</li>
				@else
				<li class="nav-item dropdown">
					<a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" data-animation="scale-up" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre> {{ Auth::user()->name }} <span class="caret"></span> </a>

					<div class="dropdown-menu" role="menu">
						<a class="dropdown-item" href="javascript:void(0)" role="menuitem"><i class="icon md-account" aria-hidden="true"></i> Profile</a>
						<a class="dropdown-item" href="javascript:void(0)" role="menuitem"><i class="icon md-card" aria-hidden="true"></i> Billing</a>
						<a class="dropdown-item" href="javascript:void(0)" role="menuitem"><i class="icon md-settings" aria-hidden="true"></i> Settings</a>
						<div class="dropdown-divider"></div>
						<a class="dropdown-item" href="{{ route('logout') }}"
						onclick="event.preventDefault();
						document.getElementById('logout-form').submit();"><i class="icon md-power" aria-hidden="true"></i> {{ __('Logout') }} </a>

						<form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
							@csrf
						</form>
					</div>
				</li>
				@endguest
				<li>
					<span style="margin-left: 8px;"></span>
				</li>

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