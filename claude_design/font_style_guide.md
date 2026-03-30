# Font & Style Guide

## Desired Aesthetic
The user wants fonts that feel **classical, elegant, and elaborate** — like a traditional tea label or a textbook. The style should evoke refinement and warmth, not modern minimalism.

## Current Font Stack

| Role | Font | Notes |
|---|---|---|
| Page titles (Calendar, About, etc.) | **Cormorant Garamond** (italic, 400 weight) | Classical, elegant serif. Used for `.page-hero h1`. Larger size with letter-spacing for a refined feel. |
| Section headings | **Playfair Display** | Serif with contrast and personality. Used for calendar headers, card titles, etc. |
| Body text / labels | **Lato** | Clean sans-serif for readability. |

## CSS Variables
- `--font-display`: Cormorant Garamond — for page titles and display text
- `--font-heading`: Playfair Display — for section headings
- `--font-body`: Lato — for body text and UI labels

## Style Direction
- Page headers should feel like the title page of a book — italic, light weight, generous spacing
- Avoid heavy/bold weights on display fonts; let the letterforms speak for themselves
- If exploring alternatives in the future, look at: EB Garamond, Libre Baskerville, Crimson Pro — all in the same classical serif family
