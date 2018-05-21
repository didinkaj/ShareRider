@extends('layouts.main')

@section('styles')
 <link rel="stylesheet" href="{{ asset('assets/examples/css/tables/datatable.minfd53.css?v4.0.1') }}">
@endsection

@section('content')


<div class="page-content ">
	<div class="panel">
		<div class="panel-heading">
			<h3 class="panel-title">Ride History</h3>
		</div>
		<div class="panel-body">
			<div class="row row-lg">

				<div class="card-body">
					<div class="row"><div class="col-sm-12"><table class="table table-hover dataTable table-striped w-full dtr-inline" data-plugin="dataTable" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info" style="width: 1102px;">
            <thead>
              <tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style="width: 186px;" aria-sort="ascending" aria-label="Origin: activate to sort column descending">Origin</th>
              	<th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style="width: 200px;" aria-label="Destination: activate to sort column ascending">Destination</th>
              	<th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style="width: 104px;" aria-label="Capacity: activate to sort column ascending">Capacity</th>
              	<th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style="width: 161px;" aria-label="Driver Name: activate to sort column ascending">Driver Name</th>
              	<th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style="width: 106px;" aria-label="Driver ID: activate to sort column ascending">Driver ID</th>
              	<th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style="width: 117px;" aria-label="Driver Email: activate to sort column ascending">Driver Email</th>
              	</tr>
            </thead>
            
             @foreach($allhisto as $ridehistory)
            <tr role="row" class="odd">
                <td class="sorting_1" tabindex="0">{{$ridehistory->origin }}</td>
                <td>{{$ridehistory->destination}}</td>
                <td>{{$ridehistory-> space_available}}</td>
                <td style="">{{$ridehistory->driver_name}}</td>
                <td style="">{{$ridehistory->driver_id}}</td>
                <td style="">{{$ridehistory->driver_email}}</td>
              </tr>
             @endforeach 
            
            <tfoot>
              <tr>
              	<th rowspan="1" colspan="1">Origin</th>
              	<th rowspan="1" colspan="1">Destination</th>
              	<th rowspan="1" colspan="1">Capacity</th>
              	<th rowspan="1" colspan="1" style="">Driver Name</th>
              	<th rowspan="1" colspan="1" style="">Driver ID</th>
              	<th rowspan="1" colspan="1" style="">Driver Email</th>
              	</tr>
            </tfoot>
            <tbody>

          
              </tbody>
          </table></div></div>
				</div>
			</div>
		</div>
	</div>
</div>


@endsection

@section('scripts')
 <script src="{{ asset('global/js/Plugin/datatables.minfd53.js?v4.0.1') }}"></script>
 <script src="{{ asset('assets/examples/js/tables/datatable.minfd53.js?v4.0.1') }}"></script>
 <script src="{{ asset('assets/examples/js/uikit/icon.minfd53.js?v4.0.1') }}"></script>
@endsection



