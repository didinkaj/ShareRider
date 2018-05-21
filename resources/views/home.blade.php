@extends('layouts.main')

@section('title')

-Home

@endsection

@section('content')

<div class="page-content">
	<div class="row">
		<div class="col-xxl-9 col-xl-8 col-lg-12">
			<div class="card">

				<div class="card-block ">
					<h4 class="card-title  " style="color: #1e88e5;"> Available Rides
						<span class="float-right badge badge-round badge-warning"></span>
						</h4>
					<hr />

					<div class="example-wrap m-lg-0">

						<p>

						</p>
						<ul class="list-group list-group-dividered list-group-full">
							<li class="list-group-item">
								<div class="media">
									<div class="pr-20">
										<i class="icon fa-taxi" style="color: #dc3545;" aria-hidden="true"></i>

									</div>
									<div class="media-body">
										<small class="text-muted float-right">Just now</small>
										<h5 class="mt-0 mb-5">@Ramon Dunn</h5>
										<div>
											Lorem ipsum Veniam aliquip culpa laboris minim tempor labore
											commodo officia veniam non in in in.
										</div>
									</div>
									<div class="pl-20">
										<button type="button" class="btn btn-block btn-primary waves-effect waves-classic">
											Book
										</button>
									</div>
								</div>
								<br />
							</li>

							<li class="list-group-item">
								<div class="media">
									<div class="pr-20">
										<i class="icon fa-taxi" style="color: #dc3545;" aria-hidden="true"></i>
									</div>
									<div class="media-body">
										<small class="text-muted float-right">38 minutes ago</small>
										<h5 class="mt-0 mb-5">@Scott Sanders</h5>
										<div>
											Lorem ipsum Laborum sit laborum cillum proident dolore culpa
											reprehenderit qui enim labore do mollit in.
										</div>
									</div>
									<div class="pl-20">
										<button type="button" class="btn btn-block btn-primary waves-effect waves-classic">
											Book
										</button>
									</div>
								</div>
								<br />
							</li>
							<li class="list-group-item">
								<div class="media">
									<div class="pr-20">
										<i class="icon fa-taxi" style="color: #dc3545;" aria-hidden="true"></i>
									</div>
									<div class="media-body">
										<small class="text-muted float-right">2 hours ago</small>
										<h5 class="mt-0 mb-5">@Nina Wells</h5>
										<div>
											Lorem ipsum Culpa mollit ex mollit magna dolore dolore dolore
											tempor velit magna enim ad dolore dolore dolore.
										</div>
									</div>
									<div class="pl-20">
										<button type="button" class="btn btn-block btn-primary waves-effect waves-classic">
											Book
										</button>
									</div>
								</div>
								<br />
							</li>
						</ul>
						<button type="button" class="btn btn-block btn-primary waves-effect waves-classic"><i class="icon md-chevron-down mr-5" aria-hidden="true"></i>Show
                More</button>

					</div>

				</div>

			</div>
		</div>

		<div class="col-xxl-3 col-xl-4 col-lg-12">
			<div class="card">
				<div class="card-block">

					<h4 class="card-title  " style="color: #;"> Add New Ride</h4>
					<hr />

					<form autocomplete="off" method="post" action="">
						<div class="form-group form-material floating" data-plugin="formMaterial">
							<input class="form-control empty" name="inputFloatingText" required="required" type="text">
							<label class="floating-label">Origin</label>
						</div>
						<div class="form-group form-material floating" data-plugin="formMaterial">
							<input class="form-control empty" name="inputFloatingText" required="required" type="text">
							<label class="floating-label">Destination</label>
						</div>
						<div class="form-group form-material floating" data-plugin="formMaterial">
							<input class="form-control empty" name="inputFloatingText" required="required" type="text">
							<label class="floating-label">Capacity</label>
						</div>
						
						<div class="float-right">
							<button  class="btn-success btn waves-effect waves-classic" type="submit" value="" >Add Ride
								</button>
							
						</div>

					</form>
					</div>
					<div class="card-block">
					<h4 class="card-title "> My Rides </h4>
					<hr />

					<ul class="list-group list-group-dividered list-group-full">
						<li class="list-group-item">
							<div class="media">
								<div class="pr-20">
									<i class="icon fa-taxi" style="color: #dc3545;" aria-hidden="true"></i>
								</div>
								<div class="media-body">
									<small class="text-muted float-right">Just now</small>
									<h5 class="mt-0 mb-5">@Ramon Dunn</h5>
									<div>
										Lorem ipsum Veniam aliquip culpa laboris minim tempor labore
										commodo officia veniam non in in in.
									</div>
									<div class="actions mt-10">
                        <button type="button" class="btn btn-info btn-xs waves-effect waves-classic"><i class="icon md-edit" aria-hidden="true"></i>Edit</button>
                        <button type="button" class="btn btn-default btn-xs waves-effect waves-classic"><i class="icon md-delete" aria-hidden="true"></i>Delete</button>
                      </div>
								</div>
								
							</div>
						</li>
					</ul>

				</div>

			</div>

		</div>
	</div>
</div>

@endsection
