<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UserDashboardController extends Controller
{
     // Ensure the controller uses authentication middleware
     public function __construct()
     {
         $this->middleware('auth');
     }
 
     // Show the user dashboard
     public function index()
     {
         // Fetch user-specific data here, for example, user's posts
         $user = auth()->user();
         $posts = $user->posts; // Assuming a user has a posts relationship
 
         return Inertia::render('User/Dashboard', [
             'user' => $user,
             'posts' => $posts,
         ]);
     }
 
     // Other dashboard-related methods can be added here
}
