import React from 'react';
import { useSelector } from "react-redux";
import { LoadingTareas } from './LoadingTareas';
import { SinTareas } from './SinTareas';
import { Tarea } from './Tarea';

function Tareas () {
  const { notes } = useSelector((state) => state.notes);
  const { loading } = useSelector((state) => state.ui);

  if (loading) return <LoadingTareas />

  return Boolean(notes.length) ? (
    notes.map(note => <Tarea key={note.id} {...note} />)
  ) : (
    <SinTareas />
  )
}

export default Tareas
