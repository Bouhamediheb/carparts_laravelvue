<?php

namespace App\Http\Controllers;

use App\Models\Marque;
use Illuminate\Http\Request;

class MarqueController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $marques = Marque::all();
        return response()->json($marques);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255|unique:marques',
            'image'
        ]);
        $marque = Marque::create($request->all());

        return response()->json($marque, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $marque = Marque::findOrFail($id);
        return response()->json($marque);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'string|max:255|unique:marques'
        ]);

        $marque = Marque::findOrFail($id);
        $marque->update($request->all());

        return response()->json($marque, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $marque = Marque::findOrFail($id);
        $marque->delete();

        return response()->json(null, 204);
    }
}
