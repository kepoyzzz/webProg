<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class job extends Model
{
    protected $fillable = ['JobName','JobLocation','JobSpecification','JobGiver'];

    public function users(){
        return $this->hasMany(User::class);
    }
}
