import React from 'react'
import UpdateForm from '../components/UpdateForm';

export default async function page({ params }) {
    const { id } = await params

    
  return (
    <div>
      <UpdateForm id={ id } />
    </div>
  )
}
