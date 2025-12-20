"use client"
import React, { useEffect } from "react"

function CloseIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const ViewCetificate = ({ open, onClose, src, title, description }) => {
  useEffect(() => {
    if (!open) return
    function onKey(e) {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative z-10 w-full max-w-4xl rounded-lg bg-background shadow-lg overflow-hidden">
        <button
          aria-label="Close preview"
          onClick={onClose}
          className="absolute cursor-pointer right-3 top-3 inline-flex items-center justify-center rounded-md border bg-muted/10 p-2 text-muted-foreground hover:bg-muted/20 focus:outline-none"
        >
          <CloseIcon />
        </button>

        <div className="p-3 sm:p-6 dark:bg-[#0E0425]/50 border shadow-md ">
          <div className="mb-3 flex items-start justify-between gap-4">
            <div className="text-gray-700 dark:text-gray-300">
              <h3 className="text-lg font-semibold ">{title}</h3>
              {/* {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>} */}
            </div>
          </div>

          <div className="flex w-full items-center justify-center">
            {src ? (
              <img
                src={src}
                alt={title}
                className="max-h-[70vh] w-full max-w-full object-contain rounded-md"
              />
            ) : (
              <div className="flex h-[320px] w-full items-center justify-center rounded-md border border-dashed border-muted/40 bg-muted/5">
                <span className="text-sm text-muted-foreground">No preview available</span>
              </div>
            )}
          </div>

          <div className="mt-4 flex justify-end gap-2">
            <button
              onClick={onClose}
              rel="noreferrer"
              className={
              "px-6 py-1 cursor-pointer rounded-4xl text-sm bg-transparent dark:hover:bg-black/80 hover:bg-gray-300 border-2 text-gray-700 dark:text-white border-gray-800 dark:border-cyan-100/50"
            }
            >
              Close
            </button>
            {src && (
              <a href={src} target="_blank" rel="noreferrer" className={
                "px-10 rounded-4xl   py-1 text-md border-2 border-cyan-100/50 shadow-lg  font-semibold text-white  bg-gradient-to-r from-blue-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 transition duration-300"
              }>
                Open in new tab
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewCetificate
