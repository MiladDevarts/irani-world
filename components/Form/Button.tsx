
import React from 'react'

interface ButtonProps {
    content:string,
    classes: string,
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className={`${props.classes} font-opensans bg-blue text-white text-lg rounded-2xl w-full text-center border-2 border-blue hover:bg-white hover:text-blue transition-all duration-300`}>{props.content}</button>
  )
}

export default Button