<?php

namespace Rider;

use Illuminate\Database\Eloquent\Model;

class Rides extends Model
{
    //
       /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'origin', 'destination', 'space_available','user_id','user_email','driver',
    ];
}
