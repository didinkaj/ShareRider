<?php

namespace Rider\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Input;

use Rider\Rides;

use Auth;

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
}
