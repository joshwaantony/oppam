'use client'

import React, { useEffect, useId, useRef, useState } from 'react'
import {
  Check,
  ChevronDown,
  FileHeart,
  HeartHandshake,
  Hospital,
  House,
  MoreHorizontal,
  Stethoscope,
  TestTube2,
  type LucideIcon,
} from 'lucide-react'

// Same order as translations[lang].request.serviceOptions
const defaultOptionIcons: readonly LucideIcon[] = [
  Hospital,
  Stethoscope,
  TestTube2,
  FileHeart,
  House,
  HeartHandshake,
  MoreHorizontal,
]

interface ServiceSelectProps {
  label: string
  value: string
  options: readonly string[]
  onChange: (value: string) => void
  /** Icons matched to `options` by index. Defaults to the request-form icons. */
  icons?: readonly LucideIcon[]
}

/**
 * Accessible custom dropdown (WAI-ARIA listbox pattern) styled to match the
 * request form inputs. Supports mouse, touch and keyboard
 * (Arrow keys, Home/End, Enter/Space, Escape, Tab, type-ahead).
 */
export function ServiceSelect({
  label,
  value,
  options,
  onChange,
  icons: optionIcons = defaultOptionIcons,
}: ServiceSelectProps) {
  const id = useId()
  const labelId = `${id}-label`
  const listId = `${id}-list`

  const [open, setOpen] = useState(false)
  const selectedIndex = Math.max(0, options.indexOf(value))
  const [activeIndex, setActiveIndex] = useState(selectedIndex)

  const rootRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const typeahead = useRef({ text: '', timer: 0 })

  // Close on outside click / touch
  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [open])

  // Focus the list when opened and keep the active option in view
  useEffect(() => {
    if (!open) return
    listRef.current?.focus({ preventScroll: true })
  }, [open])

  useEffect(() => {
    if (!open) return
    const el = listRef.current?.querySelector<HTMLElement>(`[data-index="${activeIndex}"]`)
    el?.scrollIntoView({ block: 'nearest' })
  }, [open, activeIndex])

  const openList = (index = selectedIndex) => {
    setActiveIndex(index)
    setOpen(true)
  }

  const closeList = (focusButton = true) => {
    setOpen(false)
    if (focusButton) buttonRef.current?.focus()
  }

  const choose = (index: number) => {
    onChange(options[index])
    closeList()
  }

  const onButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) {
      e.preventDefault()
      openList(e.key === 'ArrowUp' ? Math.max(0, selectedIndex - 1) : selectedIndex)
    }
  }

  const onListKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setActiveIndex((i) => Math.min(options.length - 1, i + 1))
        break
      case 'ArrowUp':
        e.preventDefault()
        setActiveIndex((i) => Math.max(0, i - 1))
        break
      case 'Home':
        e.preventDefault()
        setActiveIndex(0)
        break
      case 'End':
        e.preventDefault()
        setActiveIndex(options.length - 1)
        break
      case 'Enter':
      case ' ':
        e.preventDefault()
        choose(activeIndex)
        break
      case 'Escape':
        e.preventDefault()
        closeList()
        break
      case 'Tab':
        closeList(false)
        break
      default:
        // Type-ahead: jump to the first option starting with the typed text
        if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
          const ta = typeahead.current
          window.clearTimeout(ta.timer)
          ta.text += e.key.toLowerCase()
          ta.timer = window.setTimeout(() => (ta.text = ''), 600)
          const match = options.findIndex((o) => o.toLowerCase().startsWith(ta.text))
          if (match >= 0) setActiveIndex(match)
        }
    }
  }

  const SelectedIcon = optionIcons[selectedIndex % optionIcons.length]

  return (
    <div ref={rootRef} className="relative text-sm font-bold text-[#123D32]">
      <span id={labelId}>{label}</span>

      {/* Trigger */}
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-labelledby={`${labelId} ${id}-value`}
        onClick={() => (open ? closeList() : openList())}
        onKeyDown={onButtonKeyDown}
        className={`group mt-2 flex w-full cursor-pointer items-center gap-3 rounded-xl border bg-[#FBFDF9] px-4 py-3.5 text-left font-normal outline-none transition duration-200 hover:border-[#8DBB4D] focus-visible:border-[#075C42] focus-visible:ring-2 focus-visible:ring-[#8DBB4D]/30 ${
          open ? 'border-[#075C42] ring-2 ring-[#8DBB4D]/30' : 'border-[#DCE7D8]'
        }`}
      >
        <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-[#EAF4E8] text-[#075C42]">
          <SelectedIcon size={14} />
        </span>
        <span id={`${id}-value`} className="min-w-0 flex-1 truncate">
          {options[selectedIndex]}
        </span>
        <ChevronDown
          size={18}
          strokeWidth={2.2}
          className={`shrink-0 text-[#075C42] transition-transform duration-300 ease-out motion-reduce:transition-none ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Options panel */}
      <ul
        ref={listRef}
        id={listId}
        role="listbox"
        tabIndex={-1}
        aria-labelledby={labelId}
        aria-activedescendant={open ? `${id}-opt-${activeIndex}` : undefined}
        onKeyDown={onListKeyDown}
        className={`absolute left-0 right-0 top-full z-30 mt-2 max-h-80 origin-top overflow-y-auto rounded-2xl border border-[#DCE7D8] bg-white p-1.5 font-normal shadow-[0_18px_45px_rgba(7,92,66,0.16)] outline-none motion-reduce:transition-none ${
          open
            ? // visibility flips instantly on open so the list can take focus right away
              'visible translate-y-0 scale-100 opacity-100 [transition:opacity_200ms_ease-out,translate_200ms_ease-out,scale_200ms_ease-out,visibility_0s]'
            : // ...and is delayed on close so the fade-out stays visible
              'invisible -translate-y-1 scale-[0.98] opacity-0 pointer-events-none [transition:opacity_150ms_ease-in,translate_150ms_ease-in,scale_150ms_ease-in,visibility_0s_150ms]'
        }`}
      >
        {options.map((opt, index) => {
          const Icon = optionIcons[index % optionIcons.length]
          const isSelected = index === selectedIndex
          const isActive = open && index === activeIndex
          return (
            <li
              key={opt}
              id={`${id}-opt-${index}`}
              data-index={index}
              role="option"
              aria-selected={isSelected}
              onClick={() => choose(index)}
              onPointerMove={() => activeIndex !== index && setActiveIndex(index)}
              className={`flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-150 ${
                isActive ? 'bg-[#EAF4E8] text-[#075C42]' : 'text-[#123D32]'
              } ${isSelected ? 'font-semibold text-[#075C42]' : ''}`}
            >
              <span
                className={`flex size-7 shrink-0 items-center justify-center rounded-lg transition-colors duration-150 ${
                  isSelected ? 'bg-[#075C42] text-white' : 'bg-[#F1F7EF] text-[#075C42]'
                }`}
              >
                <Icon size={15} />
              </span>
              <span className="min-w-0 flex-1">{opt}</span>
              {isSelected && <Check size={16} strokeWidth={2.6} className="shrink-0 text-[#075C42]" />}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ServiceSelect
