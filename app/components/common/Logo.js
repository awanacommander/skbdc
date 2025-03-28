"use client"
import { useDarkMode } from '@/app/utils/hooks'
import React from 'react'

export default function Logo(props) {
  const { className, whiteLogo = false } = props
  const darkMode = useDarkMode()

  let path = (darkMode === "dark" || whiteLogo) ? "/assets/shirlington-logo-white.png" : "/assets/shirlington-logo-black.png"

  return (
    <img src={path} alt="Logo" className={className} />
  )
}
