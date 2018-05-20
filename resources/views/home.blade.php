@extends('layouts.main')

@section('content')


<div class="page-content container-fluid">
	<div class="panel">
		<div class="panel-heading">
			<h3 class="panel-title">Get Ride</h3>
		</div>
		<div class="panel-body">
			<div class="row row-lg">

				<div class="card-body">
					@if (session('status'))
					<div class="alert alert-success">
						{{ session('status') }}
					</div>
					@endif

					You are logged in!
				</div>
			</div>
		</div>
	</div>
</div>


@endsection
