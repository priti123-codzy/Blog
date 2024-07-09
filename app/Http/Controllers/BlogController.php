<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post; 
use Inertia\Inertia;


class BlogController extends Controller
{
   
    public function index()
    {
        $posts = Post::all();
        return Inertia::render('Blog', ['posts' => $posts]);
    }

    public function create()
    {
        return Inertia::render('BlogCreate');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'excerpt' => 'required',
            'body' => 'required',
        ]);

        Post::create($request->all());
        return redirect()->route('blog.index');
    }

    public function edit($id)
    {
        $post = Post::findOrFail($id);
        return Inertia::render('BlogEdit', ['post' => $post]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required',
            'excerpt' => 'required',
            'body' => 'required',
        ]);

        $post = Post::findOrFail($id);
        $post->update($request->all());
        return redirect()->route('blog.index');
    }

    public function destroy($id)
    {
        $post = Post::findOrFail($id);
        $post->delete();
        return redirect()->route('blog.index');
    }
}
