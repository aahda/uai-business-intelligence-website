import { useEffect, useRef, useState, useCallback } from 'react'

interface ImageLightboxProps {
  src: string
  alt: string
  onClose: () => void
}

export default function ImageLightbox({
  src,
  alt,
  onClose,
}: ImageLightboxProps) {
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const dragStart = useRef({ x: 0, y: 0 })
  const posStart = useRef({ x: 0, y: 0 })
  const overlayRef = useRef<HTMLDivElement>(null)

  const reset = useCallback(() => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'r' || e.key === 'R') reset()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, reset])

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? -0.15 : 0.15
    setScale((s) => Math.min(Math.max(1, s + delta), 5))
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setDragging(true)
      dragStart.current = { x: e.clientX, y: e.clientY }
      posStart.current = { ...position }
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragging && scale > 1) {
      setPosition({
        x: posStart.current.x + (e.clientX - dragStart.current.x),
        y: posStart.current.y + (e.clientY - dragStart.current.y),
      })
    }
  }

  const handleMouseUp = () => setDragging(false)

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose()
  }

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="fixed inset-0 z-60 bg-black/80 backdrop-blur-sm flex items-center justify-center select-none cursor-grab"
      style={dragging ? { cursor: 'grabbing' } : undefined}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors z-10 cursor-pointer"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="absolute z-10 top-4 left-4 flex items-center gap-2">
        <button
          onClick={() => setScale((s) => Math.min(s + 0.3, 5))}
          className="w-9 h-9 rounded-lg bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer"
          title="Zoom in"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
        <button
          onClick={() => setScale((s) => Math.max(s - 0.3, 1))}
          className="w-9 h-9 rounded-lg bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer"
          title="Zoom out"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15"
            />
          </svg>
        </button>
        <button
          onClick={reset}
          className="w-9 h-9 rounded-lg bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer"
          title="Reset zoom (R)"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
            />
          </svg>
        </button>
        <span className="text-white/60 text-xs font-mono ml-1">
          {Math.round(scale * 100)}%
        </span>
      </div>

      <img
        src={src}
        alt={alt}
        draggable={false}
        className="max-w-[90vw] max-h-[85vh] object-contain transition-transform duration-100"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
        }}
      />
    </div>
  )
}
