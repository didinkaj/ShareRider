<?php

namespace Rider\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Input;

use Validator;

use Rider\Rides;


use Auth;

use Session;

class RidesController extends Controller
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
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return view('home');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
          $validator = Validator::make($request->all(), [
            'origin' => 'required|max:255|string',
            'destination' => 'required|max:255|string',
            'capacity' => 'required|numeric'
        ]);

        if ($validator->fails()) {
        	session::flash('error', 'Ride Creation failed, Check the form and try again');
            return redirect('/home')
                        ->withErrors($validator)
                        ->withInput();
        }else{
        	$save = Rides::create([        				
        				 'user_id'=>Auth::user()->id,
        				 'user_email'=>Auth::user()->email,
        				 'origin' => $request->input(['origin']),
        				 'destination' => $request->input(['destination']),
        				 'space_available' => $request->input(['capacity']),
        				 'driver'=>Auth::user()->name
        				]);
			// redirect
			if($save){
            session::flash('success', 'Ride Created Successfully ');
            return redirect('/home');
			}else{
			session::flash('error', 'Ride Task not saved, try again!');
            return redirect('/home');
			}
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $rideId = Rides::where('id',$id)
					->where('user_id',Auth::user()->id)
        			->first();
		return view('editride',compact('rideId'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $rideId = Rides::where('id',$id)
					->where('user_id',Auth::user()->id)
        			->first();
		return view('editride',compact('rideId'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
         $validator = Validator::make($request->all(), [
            'origin' => 'required|max:255|string',
            'destination' => 'required|max:255|string',
            'capacity' => 'required|numeric'
        ]);

        if ($validator->fails()) {
        	session::flash('error', 'Ride Creation failed, Check the form and try again');
            return redirect('/editride/'.$id)
                        ->withErrors($validator)
                        ->withInput();
        }else{ 	
        	$save =	Rides::where('id',$id)
							->where('user_id',Auth::user()->id)
			        		->update([
									'origin' => $request->input(['origin']),
			        				'destination' => $request->input(['destination']),
			        				'space_available' => $request->input(['capacity'])
			        				]);
			// redirect
			if($save){
            session::flash('success', 'Ride Edited Successfully ');
            return redirect('/editride/'.$id);
			}else{
			session::flash('error', 'Ride  not saved, try again!');
            return redirect('/editride/'.$id);
			}
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $delete = Rides::destroy($id);
		if($delete){
			session::flash('success', 'Successfully deleted Rides!');
            return redirect('/home');
		}else{
			session::flash('error', 'Deletion failed, please try again');
            return redirect('/home');
		}
    }
}
