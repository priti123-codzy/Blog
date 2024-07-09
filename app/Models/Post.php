<?php
    // app/Models/Post.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'body',
        'category_id', // Ensure this field is fillable
        'tags',
        'featured_image',
        'status',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}

