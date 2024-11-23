"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function ZentryAnimation() {
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const cursorRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const text = textRef.current
    const cursor = cursorRef.current
    
    if (!container || !text || !cursor) return

    // Initial text animation with enhanced visual effects
    gsap.from(text, {
      duration: 1.5,
      opacity: 0,
      scale: 0.8,
      y: -50,
      ease: "power3.out",
    })

    // Mouse move animation
    const handleMouseMove = (e) => {
      const { left, top, width, height } = container.getBoundingClientRect()
      const x = e.clientX - left
      const y = e.clientY - top
      
      // Animate cursor follower with a smoother transition
      gsap.to(cursor, {
        x: x,
        y: y,
        duration: 0.4,
        ease: "power3.out",
      })

      // Parallax effect on text with a more dynamic range
      const moveX = (x - width / 2) * 0.1
      const moveY = (y - height / 2) * 0.1

      gsap.to(text, {
        x: moveX,
        y: moveY,
        duration: 0.4,
        ease: "power3.out",
      })

      // Scale effect on hover with a more pronounced effect
      const distance = Math.sqrt(
        Math.pow(x - width / 2, 2) + Math.pow(y - height / 2, 2)
      )
      const scale = Math.max(1, 1.2 - distance / width)
      
      gsap.to(text, {
        scale: scale,
        duration: 0.4,
        ease: "power3.out",
      })
    }

    // Add event listeners
    container.addEventListener("mousemove", handleMouseMove)
    
    // Cleanup
    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Hover effect function
  const handleMouseEnter = () => {
    gsap.to(textRef.current, {
      color: "#FF4654", // Change to a different color on hover
      scale: 1.1, // Scale up
      duration: 0.3,
      ease: "power3.out",
    });
  }

  const handleMouseLeave = () => {
    gsap.to(textRef.current, {
      color: "#FFFFFF", // Change back to original color
      scale: 1, // Scale back to original
      duration: 0.3,
      ease: "power3.out",
    });
  }

  return (
    <div 
      ref={containerRef}
      className="relative h-screen w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-hidden cursor-none"
    >
      {/* Cursor follower */}
      <div 
        ref={cursorRef}
        className="absolute w-16 h-16 pointer-events-none mix-blend-difference"
      >
        <div className="absolute inset-0 bg-white rounded-full opacity-30 blur-2xl transform scale-125" />
        <div className="absolute inset-0 bg-white rounded-full opacity-60 blur-lg" />
      </div>

      {/* Main text */}
      <div 
        ref={textRef}
        className="absolute inset-0 flex items-center justify-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h1 className="text-[18vw] font-extrabold text-white tracking-tight select-none drop-shadow-lg">
          VALORANT
        </h1>
      </div>

      {/* Background particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 5}s infinite ease-in-out`,
          }}
        />
      ))}

      {/* Glitch effect overlay */}
      <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/30" />
      </div>
    </div>
  )
}