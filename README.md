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

## Create with Copilot

`SKILL.md` is a reusable execution contract for researching, building, and
validating a product-specific educational site. The prominent **Create with
Copilot** button in the hero opens a dialog containing a complete reusable
prompt based on this VermiHut-style experience.

The trigger is hidden in HTML and revealed only after `script.js` runs, so an
inert control never appears when JavaScript is unavailable. Opening the dialog
immediately attempts to copy the prompt:

- secure hosted pages use `navigator.clipboard`;
- direct `file://` opening falls back to selecting the prompt and using
  `document.execCommand("copy")`;
- if both methods are blocked, the prompt remains selected and the live status
  instructs the user to copy manually.

The dialog is keyboard accessible, scrollable, touch-friendly, and constrained
to the viewport. At 320px its prompt, actions, and status use the available
width, while the close and copy controls retain usable touch targets.

Suggested reuse:

1. Copy the project and keep `SKILL.md` in its root.
2. Open `index.html` and choose **Create with Copilot**.
3. Replace `[YOUR PRODUCT]` and bracketed details in the copied prompt.
4. Paste it into GitHub Copilot while the copied project is open.
5. Review citations, model-specific caveats, responsive behavior, and the final
   Letter/A4 print preview before publishing.

## Files

| File | Purpose |
|---|---|
| `index.html` | Complete VermiHut educational site, SVG visuals, and Copilot dialog |
| `styles.css` | Site theme, responsive layout, accessibility, and dialog styling |
| `script.js` | Mobile-menu enhancement and Copilot dialog/clipboard behavior |
| `print-guide.html` | Separately authored compact operating guide |
| `print-guide.css` | Screen preview and Letter/A4 print rules |
| `research-notes.md` | Cited claim, scope, limitation, and safety notes |
| `source.md` | Original supplied source material; intentionally unchanged |
| `SKILL.md` | Reusable product-site research, build, print, and validation instructions |
| `README.md` | Project usage and QA documentation |

## QA

- Run `node --check script.js`.
- Confirm all IDs are unique and every local anchor and relative file link
  resolves.
- Open `index.html` directly from `file://`; test the mobile menu, dialog,
  automatic copy, **Copy prompt again**, close button, Escape, focus visibility,
  and manual-selection fallback messaging.
- Check keyboard-only use, touch targets, 320px width, 200% zoom, reduced
  motion, increased contrast, and no page-level horizontal overflow.
- Preview `print-guide.html` on Letter and A4 with backgrounds on and off;
  confirm 1-3 readable pages with no clipped or split critical content.
- Verify web copy, diagrams, research notes, and print guide agree on the exact
  model, five-tray arrangement, cautions, dates, and source status.
