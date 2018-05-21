<?php

namespace Rider\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Input;

use Rider\Rides;

use Rider\BookRides;

use Validator;

use Auth;

use Session;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    	$allRides =  Rides::latest()
					 ->where('user_id','!=',Auth::user()->id)
					 ->where('bookedstatus','0')
					 -> orderBy('created_at', 'desc')
					 -> get();
					 
		$myRides = Rides::latest()
				   ->where('user_id',Auth::user()->id)
				   ->where('bookedstatus','0')
				   -> orderBy('created_at', 'desc')
				   ->limit(1)
				   -> get();
				   
		return view('home',compact('allRides','myRides'));
    }
	
	
	public function bookRide($id){
		   //
        $rideId = Rides::where('id',$id)
					->where('bookedstatus','0')
        			->first();
		return view('bookride',compact('rideId'));
	}
	
	public function bookRideShow($id){
		   //
        $rideId = Rides::where('id',$id)
					->where('bookedstatus','0')
        			->first();
		return view('bookride',compact('rideId'));
	}
	
	public function confirmBookRide(Request $request){
		   //
        //
          $validator = Validator::make($request->all(), [
            'origin' => 'required|max:255|string',
            'destination' => 'required|max:255|string',
            'capacity' => 'required|numeric',
            'driver' => 'required|max:255|string',
            'driverid' => 'required|numeric',
            'driveremail' => 'required|email'
        ]);

        if ($validator->fails()) {
        	session::flash('error', 'Ride Creation failed, Check the form and try again');
            return redirect('/home')
                        ->withErrors($validator)
                        ->withInput();
        }else{
        	$save = BookRides::updateOrCreate([
        				'ride_id' => $request->input(['rideid']), 
        				'driver_id'=> $request->input(['driverid']),
        				],
        	
        				[ 
        				 'ride_id' => $request->input(['rideid']),   
        				 'user_id'=>Auth::user()->id,
        				 'name'=>Auth::user()->name,
        				 'email'=>Auth::user()->email,
        				 'driver_id'=> $request->input(['driverid']),
        				 'driver_name'=> $request->input(['driver']),
        				 'driver_email'=> $request->input(['driveremail']),						  	
        				 'origin' => $request->input(['origin']),
        				 'destination' => $request->input(['destination']),
        				 'space_available' => $request->input(['capacity']),
        				  
        				]);
						
			$ridestatus = Rides::where('id',$request->input(['rideid']))
							->where('bookedstatus','0')
							->update([
								'bookedstatus'=>'1',
							]);
			// redirect
			if($save && $ridestatus){
            session::flash('success', 'Ride Booked Successfully ');
            return redirect('/home');
			}else{
			session::flash('error', 'Ride Task not saved, try again!');
            return redirect('/home');
			}
        }
	}
	
	
	
}
