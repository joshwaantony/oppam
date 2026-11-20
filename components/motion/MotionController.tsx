'use client'

import { useEffect } from 'react'

/**
 * Global, render-less animation layer.
 *
 * Works purely through data attributes so existing markup, layout and
 * styling stay untouched:
 *
 *  - [data-reveal="<variant>"]  element animates in when it scrolls into view
 *  - [data-reveal-stagger]      direct children animate in one after another
 *  - [data-parallax="<speed>"]  subtle scroll-linked depth (desktop only)
 *  - [data-magnetic]            element gently follows the cursor (fine pointers only)
 *  - [data-spotlight]           soft glow follows the cursor across a card
 *
 * Elements are only hidden once this component has mounted (html.motion-ready),
 * so content is always visible without JavaScript or with reduced motion.
 */

export const INTRO_DONE_EVENT = 'oppam:intro-done'

const REVEAL_SELECTOR = '[data-reveal], [data-reveal-stagger]'

export function MotionController() {
  useEffect(() => {
    const root = document.documentElement
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduceMotion.matches || typeof IntersectionObserver === 'undefined') return

    root.classList.add('motion-ready')

    const cleanups: Array<() => void> = []

    /* ---------------------------------------------------------------
       1. Scroll-triggered reveals
       --------------------------------------------------------------- */
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            ;(entry.target as HTMLElement).dataset.inview = 'true'
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    )

    const observed = new WeakSet<Element>()
    const track = (el: Element) => {
      const node = el as HTMLElement
      if (observed.has(el) || node.dataset.inview) return
      observed.add(el)
      // Fixed UI (header, floating buttons) reveals with the page rather than on scroll
      if (node.dataset.revealOn === 'load') node.dataset.inview = 'true'
      else io.observe(el)
    }
    const observeAll = (scope: ParentNode) => {
      scope.querySelectorAll(REVEAL_SELECTOR).forEach(track)
    }

    // Wait until the intro loader starts fading so the hero choreography is seen.
    let started = false
    const start = () => {
      if (started) return
      started = true
      root.dataset.introDone = 'true'
      observeAll(document)
    }

    if (root.dataset.introDone || !document.querySelector('[data-intro-loader]')) {
      start()
    } else {
      window.addEventListener(INTRO_DONE_EVENT, start, { once: true })
      const fallback = window.setTimeout(start, 4500)
      cleanups.push(() => {
        window.removeEventListener(INTRO_DONE_EVENT, start)
        window.clearTimeout(fallback)
      })
    }

    // Pick up elements added later (language switch remounts, route changes, accordions).
    const mo = new MutationObserver((mutations) => {
      if (!started) return
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return
          const el = node as Element
          if (el.matches(REVEAL_SELECTOR)) track(el)
          observeAll(el)
        })
      }
    })
    mo.observe(document.body, { childList: true, subtree: true })

    // Content sitting in the last strip of the page can never cross the
    // observer's bottom margin, so reveal it once the user reaches the end.
    const revealAtPageEnd = () => {
      if (!started) return
      const doc = document.documentElement
      if (window.innerHeight + window.scrollY < doc.scrollHeight - 4) return
      document
        .querySelectorAll<HTMLElement>('[data-reveal]:not([data-inview]), [data-reveal-stagger]:not([data-inview])')
        .forEach((el) => {
          if (el.getBoundingClientRect().top < window.innerHeight) {
            el.dataset.inview = 'true'
            io.unobserve(el)
          }
        })
    }
    window.addEventListener('scroll', revealAtPageEnd, { passive: true })

    cleanups.push(() => {
      io.disconnect()
      mo.disconnect()
      window.removeEventListener('scroll', revealAtPageEnd)
    })

    /* ---------------------------------------------------------------
       2. Pointer effects (fine pointers / desktop only)
       --------------------------------------------------------------- */
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')

    let magnetEl: HTMLElement | null = null
    const releaseMagnet = () => {
      if (magnetEl) magnetEl.style.transform = ''
      magnetEl = null
    }

    const onPointerMove = (e: PointerEvent) => {
      if (!finePointer.matches) return
      const target = e.target as Element | null

      // Spotlight glow on cards
      const card = target?.closest?.('[data-spotlight]') as HTMLElement | null
      if (card) {
        const r = card.getBoundingClientRect()
        card.style.setProperty('--spot-x', `${e.clientX - r.left}px`)
        card.style.setProperty('--spot-y', `${e.clientY - r.top}px`)
      }

      // Magnetic buttons
      const magnet = target?.closest?.('[data-magnetic]') as HTMLElement | null
      if (magnet !== magnetEl) releaseMagnet()
      if (magnet) {
        magnetEl = magnet
        const r = magnet.getBoundingClientRect()
        const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2)
        const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2)
        magnet.style.transform = `translate3d(${(dx * 5).toFixed(2)}px, ${(dy * 4).toFixed(2)}px, 0)`
      }
    }

    document.addEventListener('pointermove', onPointerMove, { passive: true })
    document.addEventListener('pointerleave', releaseMagnet)
    cleanups.push(() => {
      document.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('pointerleave', releaseMagnet)
      releaseMagnet()
    })

    /* ---------------------------------------------------------------
       3. Subtle parallax (large screens only)
       --------------------------------------------------------------- */
    const desktop = window.matchMedia('(min-width: 1024px)')
    let raf = 0

    const updateParallax = () => {
      raf = 0
      const els = document.querySelectorAll<HTMLElement>('[data-parallax]')
      if (!desktop.matches) {
        els.forEach((el) => (el.style.translate = ''))
        return
      }
      const vh = window.innerHeight
      els.forEach((el) => {
        const r = el.getBoundingClientRect()
        if (r.bottom < -200 || r.top > vh + 200) return
        const speed = parseFloat(el.dataset.parallax || '0.08') || 0.08
        const offset = (r.top + r.height / 2 - vh / 2) * -speed
        el.style.translate = `0 ${Math.max(-60, Math.min(60, offset)).toFixed(1)}px`
      })
    }

    const requestParallax = () => {
      if (!raf) raf = window.requestAnimationFrame(updateParallax)
    }

    window.addEventListener('scroll', requestParallax, { passive: true })
    window.addEventListener('resize', requestParallax, { passive: true })
    requestParallax()
    cleanups.push(() => {
      window.removeEventListener('scroll', requestParallax)
      window.removeEventListener('resize', requestParallax)
      if (raf) window.cancelAnimationFrame(raf)
      document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => (el.style.translate = ''))
    })

    return () => {
      cleanups.forEach((fn) => fn())
      root.classList.remove('motion-ready')
    }
  }, [])

  return null
}

export default MotionController
