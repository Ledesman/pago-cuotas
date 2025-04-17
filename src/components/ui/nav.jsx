"use client"
import { navbarLink } from "../data/data"
import React from "react"
import { Link } from "react-router-dom"



export default function Navbar() {
 

  return (
    <nav className="">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Brand */}
        <div className="text-2x1 flex items-center gap-2 font-bold uppercase">
            <p>Clientes</p>
            <p className="text-secondary">Pago</p>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
        <ul className="flex items-center gap-6 text-gray-600">
            {navbarLink.map((item) => (
            
                <li key={item.id} >
                <a href={item.link} 
                className="inline-block px-3 py-1 hover:text-primary font-semibold"
                >{item.title}a</a>
                </li>
            ))}
        </ul>
        </div>

        {/* Sign In Button */}
        <div className="hidden md:block">
          <Link to="/sign-in" className="px-4 py-2 rounded hover:bg-gray-800 transition-colors">
            Sign In
          </Link>
        </div>
        {/* Sign In mobil hamburger */}
       
    </div>
    
      
    </nav>
  )
}
