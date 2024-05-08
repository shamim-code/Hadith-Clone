import React from 'react'
import "./svgStyle.css"

export default function Polygon() {
  return (
    <div class="relative top-2 group">
        <svg viewBox="0 0 100 100" fill="#2b9e76" xmlns="http://www.w3.org/2000/svg" class="rounded-full polygon">
            <polygon points="50 5, 95 25, 95 75, 50 95, 5 75, 5 25" />
        </svg>
    </div>


  )
}
