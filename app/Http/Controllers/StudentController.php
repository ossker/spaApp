<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Student;
use App\Http\Resources\StudentResource;

class StudentController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum', ['except' => ['index', 'show']]);
    }
    
    public function index()
    {
        return StudentResource::collection(Student::all());
    }


    public function store(Request $request)
    {
        $data = $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'index' => 'regex:/^s[0-9][0-9][0-9]$/|unique:students,index',
            'email'=>'email|unique:students,email',
            'age' => 'required',
            'description' => 'nullable',
            'paid' => 'nullable'
        ]);
        $student = Student::create($data);
        return new StudentResource($student);
    }


    public function show(Student $student)
    {
        return new StudentResource($student);
    }


    public function update(Request $request, Student $student)
    {
        $data=$request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'index' => "regex:/^s[0-9][0-9][0-9]$/|unique:students,index,{$student->id}",
            'email' => "email|unique:students,email,{$student->id}",
            'age' => 'required',
            'description' => 'nullable',
            'paid' => 'nullable'
        ]);
        $student->update($data);
        return new StudentResource($student);
    }


    public function destroy(Student $student)
    {
        $student->delete();
        return response()->json('Deleted', 204);
    }

}
