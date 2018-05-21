@extends('layouts.main')

@section('content')


<div class="page-content ">
	
	<div class="panel">
		
		<div class="panel-heading">
			<h3 class="panel-title">
				Booking Ride
				
				<span class="float-right"> {{$rideId->created_at->diffForHumans()}}</span>
			</h3>
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
					<form autocomplete="off" method="post" action="{{url('/confirm/bookride/'.$rideId->id)}}">
						@csrf
				
						<div class="form-group form-material floating" data-plugin="formMaterial">
							<input readonly="readonly" class="form-control " name="origin" value="{{$rideId->origin}}" required="required" type="text">
							<label class="floating-label">Origin</label>
						</div>
						<div class="form-group form-material floating" data-plugin="formMaterial">
							<input readonly="readonly" class="form-control " value="{{$rideId->destination}}"  name="destination" required="required" type="text">
							<label class="floating-label">Destination</label>
						</div>
						<div class="form-group form-material floating" data-plugin="formMaterial">
							<input readonly="readonly" class="form-control "  value="{{$rideId->space_available}}" name="capacity" required="required" type="number">
							<label class="floating-label">Capacity</label>
						</div>
						<div class="form-group form-material floating" data-plugin="formMaterial">
							<input readonly="readonly" class="form-control "  value="{{$rideId->driver}}" name="driver" required="required" type="text">
							<label class="floating-label">Driver</label>
						</div>
						<div class="form-group form-material floating" data-plugin="formMaterial">
							<input readonly="readonly" class="form-control "  value="{{$rideId->user_id}}" name="driverid" required="required" type="text">
							<label class="floating-label">Driver ID</label>
							<input readonly="readonly" class="form-control "  value="{{$rideId->user_email}}" name="driveremail" required="required" type="hidden">
							<input readonly="readonly" class="form-control "  value="{{$rideId->id}}" name="rideid" required="required" type="hidden">
						</div>

						<div class="float-right">
							<button  class="btn-success btn waves-effect waves-classic" type="submit" >
								Book Ride
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