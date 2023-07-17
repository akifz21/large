import React from 'react'

export const Button = ({ children, onClick, type, ...rest }: {
    children: any,
    onClick: any,
    type: any
}) => {
    return (
        <button
            type={type}
            className="rounded-md
            bg-dark-color
            px-4 py-2 text-sm
            font-medium
          text-light-color
            hover:opacity-75
            dark:bg-light-color
            dark:text-dark-color"
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    )
}
