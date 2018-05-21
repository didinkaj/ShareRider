<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('auth/login');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::post('/book/ride/{id}','HomeController@bookRide')->where('id', '[0-9]+');
Route::get('/book/ride/{id}','HomeController@bookRideShow')->where('id', '[0-9]+');
Route::post('/add/ride', 'RidesController@store');
Route::delete('deleteRide/{id}', ['uses' =>'RidesController@destroy'])->where('id', '[0-9]+')->name("deleteRide");
Route::get('/settings', function(){
	return view('settings');
})->name('settings');
Route::post('/editride/{id}', ['uses' =>'RidesController@edit'])->where('id', '[0-9]+')->name('editride');
Route::patch('/edit/ride/{id}', 'RidesController@update')->where('id', '[0-9]+');
Route::get('/editride/{id}', 'RidesController@show')->where('id', '[0-9]+');
Route::get('/ride/history','RideHistoryController@index');
Route::post('/confirm/bookride/{id}','HomeController@confirmBookRide')->where('id', '[0-9]+');

