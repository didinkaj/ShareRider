@extends('layouts.main')

@section('content')


<div class="page-content ">
	
	<div class="panel">
		
		<div class="panel-heading">
			<h3 class="panel-title">Edit Ride</h3>
		</div>
		<div class="panel-body">
			<div class="row row-lg">
				@if (Session::has('success'))
		<span class="alert alert-success alert-dismissable col-md-12"> <strong>{{ Session::get('success') }}</strong>
			<button aria-hidden="true" data-dismiss="alert" class="close" type="button">
				×
			</button></span>
		@endif
		@if (Session::has('error'))
		<span class="alert alert-danger alert-dismissable col-md-12"> <strong>{{ Session::get('error') }}</strong>
			<button aria-hidden="true" data-dismiss="alert" class="close" type="button">
				×
			</button></span>
		@endif

				<div class="card-body">
					<form autocomplete="off" method="post" action="{{url('/edit/ride/'.$rideId->id)}}">
						@csrf
						{!! method_field('patch') !!}
						<div class="form-group form-material floating" data-plugin="formMaterial">
							<input class="form-control " name="origin" value="{{$rideId->origin}}" required="required" type="text">
							<label class="floating-label">Origin</label>
						</div>
						<div class="form-group form-material floating" data-plugin="formMaterial">
							<input class="form-control " value="{{$rideId->destination}}"  name="destination" required="required" type="text">
							<label class="floating-label">Destination</label>
						</div>
						<div class="form-group form-material floating" data-plugin="formMaterial">
							<input class="form-control "  value="{{$rideId->space_available}}" name="capacity" required="required" type="number">
							<label class="floating-label">Capacity</label>
						</div>

						<div class="float-right">
							<button  class="btn-success btn waves-effect waves-classic" type="submit" >
								Edit Ride
							</button>

						</div>
						<div class="float-left">
							<a href="/home"  class="btn-primary btn waves-effect waves-classic" type="submit" >
								Back
							</a>

						</div>

					</form>
				</div>
			</div>
		</div>
	</div>
</div>


@endsection
@section('scripts')
<script src="{{ asset('global/js/Plugin/jquery-placeholder.minfd53.js?v4.0.1') }}"></script>
<script src="{{ asset('global/js/Plugin/material.minfd53.js?v4.0.1') }}"></script>
@endsection