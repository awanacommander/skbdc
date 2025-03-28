import clsx from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const sizeVariants = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-5 py-3 text-lg",
}

export default function Button(props) {
  const { rounded = false, className, size = "medium", children } = props

  return (
    <button className={twMerge(clsx(`bg-[#9690a240] text-white ${sizeVariants?.[size] || sizeVariants.medium}`, { ["rounded-md"]: !rounded, ["rounded-full"]: rounded }), className)}>{children}</button>
  )
}
