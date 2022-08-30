<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Event extends Model
{
    use HasFactory;
    protected $table = "events";
    protected $fillable = [
        "slug",
        "title",
        "category",
        "price",
        "poster",
        "organizer",
        "start_date",
        "end_date",
        "start_time",
        "end_time",
        "capacity",
        "address",
        "desc",
        "status"
    ];

    public function getStartTimeAttribute()
    {
        return Carbon::parse($this->attributes["start_time"])->translatedFormat("H:i");
    }

    public function getEndTimeAttribute()
    {
        return Carbon::parse($this->attributes["end_time"])->translatedFormat("H:i");
    }
}
