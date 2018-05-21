<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBookRidesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('book_rides', function (Blueprint $table) {
            $table->increments('id');
			$table->integer('ride_id');
			$table->integer('user_id');
			$table->string('name');
			$table->string('email');
			$table->integer('driver_id');
			$table->string('driver_name');
			$table->string('driver_email');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('book_rides');
    }
}
