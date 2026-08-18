# VermiHut Classic Guide

An offline-friendly educational site for the dark-green Original VermiHut
Classic five-tray worm composter. It explains the selected review-based
two-dry-peat-buffer method while separating that modification from manufacturer
and university guidance. The project uses plain HTML, CSS, SVG, and JavaScript
with no framework, external assets, server, or build step.

## Use the guide

1. Double-click `index.html` to open the full responsive guide locally.
2. Follow **Open print guide** to use the separately authored 1-3 page quick
   guide. Its print button appears only when JavaScript is available.
3. Review `research-notes.md` for source scope, cautions, and claim support.

Existing VermiHut content and the dedicated print workflow are intentionally
kept separate: print actions lead to `print-guide.html`, not a printout of the
long website.

## Files

| File | Purpose |
|---|---|
| `index.html` | Complete VermiHut educational site and SVG visuals |
| `styles.css` | Site theme, responsive layout, and accessibility styling |
| `script.js` | Mobile-menu enhancement |
| `print-guide.html` | Separately authored compact operating guide |
| `print-guide.css` | Screen preview and Letter/A4 print rules |
| `research-notes.md` | Cited claim, scope, limitation, and safety notes |
| `source.md` | Original supplied source material; intentionally unchanged |
| `README.md` | Project usage and QA documentation |

## QA

- Run `node --check script.js`.
- Confirm all IDs are unique and every local anchor and relative file link
  resolves.
- Open `index.html` directly from `file://`; test the mobile menu, navigation,
  print-guide links, and focus visibility.
- Check keyboard-only use, touch targets, 320px width, 200% zoom, reduced
  motion, increased contrast, and no page-level horizontal overflow.
- Preview `print-guide.html` on Letter and A4 with backgrounds on and off;
  confirm 1-3 readable pages with no clipped or split critical content.
- Verify web copy, diagrams, research notes, and print guide agree on the exact
  model, five-tray arrangement, cautions, dates, and source status.
