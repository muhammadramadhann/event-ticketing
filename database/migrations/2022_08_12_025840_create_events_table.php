<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string("slug");
            $table->string("title");
            $table->string("category");
            $table->integer("price");
            $table->string("poster");
            $table->string("organizer");
            $table->date("start_date");
            $table->date("end_date");
            $table->time("start_time");
            $table->time("end_time");
            $table->integer("capacity");
            $table->string("city");
            $table->string("address");
            $table->longText("desc")->nullable();
            $table->string("status")->default("Draft");
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
        Schema::dropIfExists('events');
    }
};
