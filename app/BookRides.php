<?php

namespace Rider;

use Illuminate\Database\Eloquent\Model;

class BookRides extends Model
{
    //
     //
       /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'origin', 'destination','ride_id', 'space_available','user_id','email','driver_name','name','driver_id','driver_email',
    ];
}
