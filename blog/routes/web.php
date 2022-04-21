<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome')->with('data', json_encode(['page_id' => 'root']));
});

Route::get('/lesson-list', function () {
    return view('lesson-list')->with('data', json_encode(['page_id' => 'lesson-list', 'lessons' => ['Lesson A', 'Lesson B', 'Lesson C']]));
});
