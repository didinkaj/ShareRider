@extends('layouts.main')

@section('title', 'Page not found')
@section('content')

<div class="page-content ">
	<div class="panel">
		<div class="panel-heading">
			<h3 class="panel-title">Error</h3>
		</div>
		<div class="panel-body">
			<div class="middle-box text-center animated fadeInDown">
				<h2><i class="fa fa-minus-circle fa-4x"></i></h2>
				<h3 class="font-bold">Page Not Found</h3>

				<div class="error-desc">
					Sorry,  the page you are looking for doesnot exist. Try checking the URL for error, then hit the refresh button on your browser

				</div>
			</div>
		</div>
	</div>
</div>
@endsection
