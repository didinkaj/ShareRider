@extends('layouts.main')

@section('title')

-Home

@endsection

@section('content')

<div class="page-content">
	<div class="row">
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
		<div class="col-xxl-9 col-xl-8 col-lg-12">
			<div class="card">

				<div class="card-block ">
					<h4 class="card-title  " style="color: #1e88e5;"> Available Rides <span class="float-right badge badge-round badge-warning"></span></h4>

					<hr />

					<div class="example-wrap m-lg-0">

						<br />

						<ul class="list-group list-group-dividered list-group-full">
							@foreach($allRides as $ride)
							<li class="list-group-item">
								<div class="media">
									<div class="pr-20">
										<i class="icon fa-taxi" style="color: #dc3545;" aria-hidden="true"></i>

									</div>
									<div class="media-body">
										<small class="text-muted float-right">{{$ride->created_at->diffForHumans()}}</small>
										<h5 class="mt-0 mb-5">{{$ride->driver}}</h5>
										<div>
											<b>Origin</b> : {{ucfirst($ride->origin)}} <br/>
											<b>Destination</b> : {{ucfirst($ride->destination) }}<br/>
											<b>Capacity</b> : {{$ride->space_available}}<br />
											<b>Email</b> : {{ucfirst($ride->user_email)}} 
										</div>
									</div>
									<div class="pl-20">
										<form autocomplete="off" method="post" action="{{url('/book/ride/'.$ride->id)}}">
										@csrf
										<button type="submit" class="btn btn-block btn-primary waves-effect waves-classic">
											Book
										</button>
										</form>
									</div>
								</div>
								<br />
							</li>
							@endforeach						
						
						</ul>
						<button type="button" class="btn btn-block btn-primary waves-effect waves-classic">
							<i class="icon md-chevron-down mr-5" aria-hidden="true"></i>Show
							More
						</button>

					</div>

				</div>

			</div>
		</div>

		<div class="col-xxl-3 col-xl-4 col-lg-12">
			<div class="card">
				<div class="card-block">

					<h4 class="card-title  " style="color: #;"> Add New Ride</h4>
					<hr />

					<form autocomplete="off" method="post" action="{{url('/add/ride')}}">
						@csrf
						<div class="form-group form-material floating" data-plugin="formMaterial">
							<input class="form-control empty" name="origin" required="required" type="text">
							<label class="floating-label">Origin</label>
						</div>
						<div class="form-group form-material floating" data-plugin="formMaterial">
							<input class="form-control empty" name="destination" required="required" type="text">
							<label class="floating-label">Destination</label>
						</div>
						<div class="form-group form-material floating" data-plugin="formMaterial">
							<input class="form-control empty" name="capacity" required="required" type="number">
							<label class="floating-label">Capacity</label>
						</div>

						<div class="float-right">
							<button  class="btn-success btn waves-effect waves-classic" type="submit" >
								Add Ride
							</button>

						</div>

					</form>
				</div>
				<div class="card-block">
					<h4 class="card-title "> My Rides </h4>
					<hr />

					<ul class="list-group list-group-dividered list-group-full">
						@foreach($myRides as $ride)
						<li class="list-group-item">
							<div class="media">
								<div class="pr-20">
									<i class="icon fa-taxi" style="color: #dc3545;" aria-hidden="true"></i>
								</div>
								<div class="media-body">
									<small class="text-muted float-right">{{$ride->created_at->diffForHumans()}}</small>
									<h5 class="mt-0 mb-5">{{$ride->driver}}</h5>
									<div>
										<b>Origin</b> : {{ucfirst($ride->origin)}} <br/>
										<b>Destination</b> : {{ucfirst($ride->destination) }}<br/>
										<b>Capacity</b> : {{$ride->space_available}}
									</div>
									<div class="actions mt-10">
										<table>
											<tr>
												<td>
													<form method="POST" action="{{url('/editride/'.$ride->id) }}" >
														@csrf
													<button  class="btn btn-info btn-xs waves-effect waves-classic">
														<i class="icon md-edit" aria-hidden="true"></i>Edit
													</button>
													</form>
												</td>
												<td>
													<form method="POST" action="/deleteRide/{{$ride->id}}" >
														@csrf
														{!! method_field('delete') !!}
													<button type="submit" class="btn btn-default btn-xs waves-effect waves-classic">
														<i class="icon md-delete" aria-hidden="true"></i>Delete
													</button>
													</form>
												</td>
											</tr>										
										
										</table>
									</div>
								</div>

							</div>
						</li>
						@endforeach
					</ul>

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
