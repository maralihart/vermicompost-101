---
name: product-education-site-builder
description: Research and build a polished product-specific educational website, cited notes, responsive visuals, and a compact printable guide.
---

# Product Education Site Builder

Use this skill to create a beginner-friendly educational microsite for an exact
product or model, especially when setup, recurring use, troubleshooting,
research notes, original visuals, and a printable operating guide are required.

## Required input

- Exact product, model, edition, region, and relevant date
- Intended audience, current knowledge, and desired outcome
- Supplied source material and facts that must be preserved
- Explicit preferences, exclusions, safety concerns, and output constraints

If details are missing, make conservative assumptions and state them. Ask only
when a choice would materially change the result.

## Execution workflow

1. **Inspect and preserve**
   - Read the existing website, print guide, README, research notes, and supplied
     source material before editing.
   - Preserve verified content, intentional print behavior, direct `file://`
     opening, and files the user excludes from modification.

2. **Research the exact product**
   - Prefer current exact-model manufacturer manuals and support pages, followed
     by government, university, standards-body, and peer-reviewed sources.
   - Use retailer reviews, forums, and community sources only for visibly
     labeled experience, modification, or preference.
   - Do not silently substitute instructions for a related model, generation,
     edition, or region.
   - Record URLs, authors or organizations, publication/update and access dates,
     supported claims, limitations, conflicts, and scope in
     `research-notes.md`.
   - Remove, qualify, or label claims without direct support.

3. **Plan the learning path**
   - Define one beginner audience, one practical outcome, and clear boundaries.
   - Teach one memorable product/system model before detailed procedures.
   - Organize setup, operation, recurring care, and troubleshooting around that
     model, with observable checks instead of unsupported fixed promises.
   - Put high-impact cautions beside the affected step.

4. **Build the responsive site**
   - Create or update `index.html`, `styles.css`, and `script.js` without adding
     a framework, package manager, CDN, or build requirement.
   - Include scope, components/materials, setup, operating steps, maintenance,
     alternatives where useful, troubleshooting, safety, next steps, and
     sources.
   - Use original HTML/CSS/SVG visuals rather than copied product artwork.
   - Give meaningful visuals titles, descriptions, labels, and captions.
   - Support semantic landmarks, keyboard navigation, visible focus, touch
     targets, 320px reflow, zoom, reduced motion, contrast, and offline use.

5. **Build the dedicated print guide**
   - Author `print-guide.html` and `print-guide.css` separately; do not rely on
     printing the full website.
   - Condense only verified website content into 1-3 Letter/A4 pages.
   - Include the core model, setup or recurring workflow, checks, critical
     cautions, troubleshooting, and a source/scope note.
   - Prevent clipped content, split cards or diagrams, isolated headings, blank
     overflow pages, and type that is too small to use.

6. **Document and validate**
   - Update `README.md` with purpose, usage, file map, direct-opening behavior,
     any Copilot launcher/clipboard fallback, mobile support, and QA.
   - Check JavaScript syntax, required files, unique IDs, anchors, relative
     links, local assets, `file://` opening, dialog and keyboard behavior, 320px
     and zoom reflow, and touch target usability.
   - Preview print output on Letter and A4 and keep it within 1-3 pages.
   - Confirm the website, notes, diagrams, and print guide agree on facts,
     terminology, cautions, dates, and product scope.

## Required deliverables

- `index.html`
- `styles.css`
- `script.js`
- `print-guide.html`
- `print-guide.css`
- `research-notes.md`
- `README.md`
- `SKILL.md`

## Guardrails

- Never present anecdote, a reviewer modification, or inference as official
  product guidance.
- Never merge instructions for different products or versions without an
  explicit comparison and scope note.
- Do not promise fixed outcomes when environment, load, skill, or maintenance
  changes results.
- Do not add new claims only to the print guide.
- For safety-critical equipment or health, legal, or financial topics, state
  the guide's limits and direct readers to the manufacturer or qualified help.

## Completion standard

The task is complete only when the exact-product scope is clear, research is
cited, the site works offline and at 320px, visuals are accessible, the
dedicated print guide is readable and cutoff-free in 1-3 pages, and all
documented validation checks pass.
