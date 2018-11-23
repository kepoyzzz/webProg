<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Model
{
    protected $fillable = [
    'id_job', 'Name','DateOfBirth','Location','Gender','Email','PhoneNumber',
    ];
}
