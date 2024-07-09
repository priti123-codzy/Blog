<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;



class AuthController extends Controller
{
   // Other methods like login, register, etc.

   public function logout()
{
    Auth::logout();
    return redirect('/login');
}
}
