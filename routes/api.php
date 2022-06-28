<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', function (Request $request) {
    $data = $request->validate([
        'email' => 'required',
        'password' => 'required'
    ]);

    if(Auth::attempt($request->only('email', 'password'))){
        return response()->json('', 204);
    }
    return response()->json(['error'=>'Nieudane logowanie!'], 401);
});

Route::post('/logout', function (Request $request){
    Auth::logout();
    return response('');
});

Route::apiResource('students', 'StudentController');
