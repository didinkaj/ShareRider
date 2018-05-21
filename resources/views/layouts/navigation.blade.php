<div class="site-menubar site-menubar-light">
	<div class="site-menubar-body">
		<div>
			<div>
				<ul class="site-menu" data-plugin="menu">
					<li class="site-menu-item {{ request()->is('book/ride/*') ? 'active' : '' }}  {{ request()->is('home') ? 'active' : '' }} {{ request()->is('editride/*') ? 'active' : '' }} {{ request()->is('edit/ride/*') ? 'active' : '' }}">
						<a href="{{ route('home')}}"> <i class="site-menu-icon md-view-dashboard" aria-hidden="true"></i> <span class="site-menu-title">Dashboard</span> </a>
					</li>
					<li class="site-menu-item {{ request()->is('ride/history') ? 'active' : '' }} ">
						<a href="{{ url('ride/history')}}"> <i class="site-menu-icon fa-calendar-check-o" aria-hidden="true"></i> <span class="site-menu-title">Rides History</span> </a>
					</li>
					<li class="site-menu-item {{ request()->is('settings') ? 'active' : '' }} ">
						<a href="{{ route('settings')}}"> <i class="site-menu-icon md-settings" aria-hidden="true"></i> <span class="site-menu-title">Settings</span> </a>
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