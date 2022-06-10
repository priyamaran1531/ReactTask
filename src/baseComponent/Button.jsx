import React from 'react'

export default function Button({btnName,className,target,modal,icon,onClick}) {
  return (
    <>
    <button 
      className      = {className}
      data-bs-toggle = {modal} 
      data-bs-target = {target}
      onClick        = {onClick}
    >
      <span>{icon}</span>{btnName}
    </button>
    </>
  )
}
