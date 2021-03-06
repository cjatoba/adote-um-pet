<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Adoption extends Model
{
    use HasFactory;

    protected $fillable = [
        'email',
        'value',
        'pet_id',
    ];

    public function pet()
    {
        return $this->belongsTo(Pet::class);
    }
}
