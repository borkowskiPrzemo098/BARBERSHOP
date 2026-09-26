---
name: SFM — Salon Fryzur Męskich
description: The barber of an interwar Warsaw grand hotel. Gilded letters on black lacquer, ivory marble between.
colors:
  lacquer: "#0b0a09"
  marble: "#f1ebdd"
  ink: "#16120c"
  ink-soft: "#4d4538"
  ivory: "#f4eee1"
  ivory-soft: "#c9c0ae"
  gold: "#d4ad5c"
  gold-hi: "#f6e1a1"
  gold-lo: "#8c6526"
  gold-deep: "#83601c"
typography:
  display:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(7.5rem, min(25vw, 36svh), 25rem)"
    fontWeight: 900
    lineHeight: 0.8
    letterSpacing: "0.06em"
  headline:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(3rem, 8.4vw, 8rem)"
    fontWeight: 900
    lineHeight: 0.98
    letterSpacing: "0.005em"
  title:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(1.35rem, 2.4vw, 1.9rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "0.04em"
  price:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(2rem, 3.6vw, 2.8rem)"
    fontWeight: 900
    lineHeight: 1
  body:
    fontFamily: "Jost, Futura, Century Gothic, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.18em"
  button:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 800
    letterSpacing: "0.08em"
rounded:
  none: "0px"
  arch: "999px"
spacing:
  gutter: "clamp(20px, 4vw, 48px)"
  section: "clamp(96px, 12vw, 170px)"
  section-compact: "clamp(72px, 9vw, 120px)"
  head-gap: "clamp(40px, 6vw, 72px)"
  wrap: "1240px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.lacquer}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "15px 28px"
    height: "52px"
  button-primary-large:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.lacquer}"
    typography: "{typography.button}"
    padding: "18px 34px"
    height: "60px"
  button-dark:
    backgroundColor: "{colors.lacquer}"
    textColor: "{colors.gold-hi}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "15px 28px"
    height: "52px"
  button-dark-hover:
    backgroundColor: "#211c16"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ivory}"
    typography: "{typography.button}"
    padding: "15px 28px"
    height: "52px"
  button-line-hover:
    textColor: "{colors.gold-hi}"
  review-card:
    backgroundColor: "{colors.lacquer}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.none}"
    padding: "44px 36px 36px"
  nav-link:
    textColor: "{colors.ivory}"
    padding: "10px 14px"
  nav-link-hover:
    textColor: "{colors.gold-hi}"
  medallion:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.lacquer}"
    size: "58px"
  booking-panel:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.lacquer}"
    padding: "clamp(56px, 8vw, 100px) clamp(22px, 5vw, 60px)"
---

# Design System: SFM — Salon Fryzur Męskich

## Overview

**Creative North Star: "The Grand Hotel Barber"**

SFM is set in an interwar Warsaw grand hotel: black lacquer panels, ivory marble floors, and brass lettering set by a sign-maker. The page is a run of full-bleed bands that alternate hard between lacquer and marble. Gold is not a highlight colour. It is the metal the room is built from: flat letters, double rules, stepped corners, sunburst fans, octagon medallions, and one brass price plaque.

The display face does the heavy lifting. Condensed Big Shoulders Display caps run huge and tight, and the wordmark carries a shadow-line (a flat gold face, a lacquer gap, then a second darker gold line). Jost, a Futura-era geometric sans, handles everything people read. Density is low and confident: big sections, few elements per band, every ornament drawn in the same gold vocabulary.

The build rejects the category default of a dark photo with a thin gold serif and a centred button. It also rejects metallic gradient text, pastel or secondary accent hues, and content that fades in on scroll.

**Key Characteristics:**
- Lacquer and marble bands alternate hard, joined by a gold double-rule seam with a gold diamond at centre.
- Gold is the only accent family, used as flat ink and flat fields and never as a sheen.
- Condensed display caps at poster scale, with Jost for reading.
- Deco geometry throughout: stepped (notched) corners, top-rounded arches, sunburst fans, octagons, diamonds.
- Everything is visible on load. Motion is limited to a one-time hero flourish and hover states.

## Colors

The palette is two grounds and one metal: near-black lacquer and warm ivory marble, with gold in four weights and no other hue.

### Primary
- **Sign Gold** (#d4ad5c): The metal. Used for wordmark letters, gold emphasis words on lacquer, primary buttons, the booking panel field, octagon medallions, stars, section-seam diamonds, card borders, and the focus ring. On lacquer it reaches about 9:1.
- **Gold Leaf Highlight** (#f6e1a1): Hover and active text on lacquer (nav links, footer links, ghost-button hover), the text colour of dark buttons, and reviewer names.
- **Tarnished Brass** (#8c6526): Hairlines on lacquer, meaning the header rules, section-seam double rules, footer rules, burger border, and the wordmark's shadow-line. Rules only, never text.
- **Engraved Gold** (#83601c): The gold that holds contrast on marble (about 4.8:1). Used for emphasis words in marble headlines, barber role labels, the step-frame outline, crew arch outlines, and dark sunburst fans.

### Neutral
- **Black Lacquer** (#0b0a09): Page ground, the lacquer bands, header, drawer, review cards, dark buttons, and text on gold.
- **Ivory Marble** (#f1ebdd): The light bands, finished with a faint top-left white bloom so they read as polished stone.
- **Lamp Ink** (#16120c): Headlines and titles on marble, and text on the brass plaque.
- **Worn Ink** (#4d4538): Body copy on marble.
- **Ivory** (#f4eee1): Body and headline text on lacquer.
- **Smoked Ivory** (#c9c0ae): Secondary text on lacquer (leads, subheads, captions, footer copy).

### Named Rules
**The One Metal Rule.** Gold is the only accent family. No burgundy, no green, no blue, no second accent hue. New states and emphasis come from the four golds or from the lacquer/marble grounds.

**The Right Gold Rule.** Use Sign Gold on lacquer and Engraved Gold on marble. Sign Gold text on marble fails contrast, and Tarnished Brass is only for rules.

**The Hard Alternation Rule.** Adjacent sections switch ground: lacquer, marble, lacquer. Never place two marble bands together, and never use a mid-grey or tinted third ground to soften the change.

## Typography

**Display Font:** Big Shoulders Display (with Arial Narrow fallback)
**Body Font:** Jost (with Futura, Century Gothic fallback)

**Character:** Condensed deco signage caps set against a clean Futura-lineage reading face. The display face is used loud and uppercase. Jost stays quiet and sentence-case.

### Hierarchy
- **Display** (900, clamp(7.5rem, min(25vw, 36svh), 25rem), line-height 0.8, +0.06em): The SFM wordmark only. Gold with the shadow-line treatment.
- **Headline** (900, clamp(3rem, 8.4vw, 8rem), line-height 0.98, uppercase, balanced wrap): Section headlines. One key phrase is set in gold through emphasis, using Engraved Gold on marble and Sign Gold on lacquer. About and booking panels use smaller variants in the 2.8–7rem range. Tracking stays near zero so Polish diacritics (Ż, Ó, Ł) have room.
- **Title** (800–900, 1.35–1.9rem, line-height 1–1.1, uppercase, +0.04–0.06em): Service names, barber names, and the step names in the numbered rites list.
- **Price** (900, clamp(2rem, 3.6vw, 2.8rem), line-height 1): Price figures, with the currency set at 0.45em in weight 700.
- **Body** (Jost 400, 1.0625rem, line-height 1.6): Running text, capped near 58ch in long passages.
- **Label** (Big Shoulders 700, 0.85–0.9rem, +0.16–0.2em, uppercase, gold): Definition terms (hours, address, phone), footer column heads, barber roles.
- **Button** (Big Shoulders 800, 1.05rem, +0.08em, uppercase).

### Named Rules
**The Signage Rule.** Every heading, label, button, and number is Big Shoulders caps. Jost is for sentences only. Do not set headings in Jost or paragraphs in Big Shoulders.

**The Flat Ink Rule.** Gold type is a flat colour. No background-clip gradient text, no metallic sheen, no glow. The only dimensional letter treatment is the wordmark's hard shadow-line: `.035em` of lacquer offset, then `.06em` of Tarnished Brass.

## Layout

Full-bleed bands hold a centred wrap (1240px max) with fluid gutters (clamp(20px, 4vw, 48px)). Standard bands use clamp(96px, 12vw, 170px) vertical padding. The gallery uses the tighter clamp(72px, 9vw, 120px). Section heads sit clamp(40px, 6vw, 72px) above their content and are either left-aligned or centred under a sunburst fan.

The hero is a centred monument: the wordmark across the top, then a three-column grid (claim right-aligned on the left, arch in the centre, lead + CTAs + hours on the right) pulled up under the wordmark. Content sections use asymmetric two-column grids (1.25fr/0.75fr, 1fr/1.1fr), four-up grids (crew, footer), a 2×4 mosaic with a double-size lead tile, and a three-up grid of review cards.

The header is fixed at 72px (64px under 640px). At 1040px, navigation moves into a full-screen lacquer drawer with huge display-caps links, and all multi-column grids collapse to one column (crew to two). At 640px the mosaic becomes 2 columns × 3 rows and the price rows drop their dot leaders.

**The Seam Rule.** Every section boundary gets the deco seam: a 7px gold double rule (1px Tarnished Brass top and bottom) with an 18px Sign Gold diamond on the centre line, ringed in the colour of the section it sits in.

## Elevation & Depth

Depth comes mostly from ground contrast (lacquer against marble) and from nested gold rules, not from shadows. The few soft shadows are ambient and fall below heavy objects set onto a photo or a band: the hero arch, the brass plaque, the years-of-experience plate. The header gains a soft drop shadow only after the page has scrolled.

### Shadow Vocabulary
- **Object drop** (`box-shadow: 0 40px 80px -20px rgba(0,0,0,.8)`): Framed hero arch photo, and the brass plaque at `0 40px 90px -30px`.
- **Plate drop** (`box-shadow: 0 20px 40px -12px rgba(0,0,0,.5), inset 0 0 0 1px #8c6526`): Small lacquer plates placed over imagery.
- **Header scrolled** (`box-shadow: 0 14px 30px rgba(0,0,0,.45)`): Header after scrolling past 60px.

### Named Rules
**The Nested Rule Rule.** To show that something is a framed object, add an inset hairline 7–10px inside its edge. Cards, plaque, mosaic tiles, and the header all do this. Frame with gold lines before reaching for a shadow.

## Shapes

Corners are square (0 radius) with two exceptions, both from the deco vocabulary:

- **Stepped corners**: a clip-path notch cut into each corner at 8px (buttons), 10px (star price row, back-to-top), 12px (default), 16px (framed photos), or 22px (booking panel, step-frame). This is the signature silhouette of anything you can press or anything presented as an object.
- **Arches**: portrait photos sit in top-rounded arches (999px top corners, square bottom). The hero arch adds two concentric gold arch outlines 12px and 24px outside it. Crew arches use a 1.5px Engraved Gold outline offset 8px.

Ornaments are drawn in CSS geometry, never as glyph icons: a sunburst fan (repeating conic rays in a half-disc with a hub cut out), an octagon medallion, a 45°-rotated diamond, and five-point stars cut with clip-path.

## Components

### Buttons
Heavy, pressable brass tablets.
- **Shape:** stepped corners (8px notch), minimum height 52px (60px for large), label in display caps.
- **Primary (gold):** Sign Gold field with lacquer text. Used for every booking CTA.
- **Dark:** lacquer field with Gold Leaf text, used on gold or brass grounds (plaque, booking panel). Hover raises to #211c16.
- **Line:** transparent with a 1.5px ivory rule at 60%, used for the secondary action on lacquer. On hover the border turns Sign Gold and the text turns Gold Leaf.
- **Hover / Focus:** lift 2px with a slight brightness boost. On press, sink 1px and scale to 0.98. Focus is a 2px Sign Gold outline offset 3px.

### Cards / Containers
- **Review card:** a lacquer card on a marble band, with a 1.5px Sign Gold border and an inner 1px Tarnished Brass rule inset 7px. Inside: five gold clip-path stars, a Jost quote, and a hairline-separated caption with the name in Gold Leaf caps. Cards sit three-up in a grid (one column under 1040px).
- **Corner Style:** square.
- **Internal Padding:** 44px 36px 36px (34px 24px 28px on phones).

### Navigation
- **Header:** always an opaque lacquer bar (94% or more), with a Tarnished Brass bottom rule and a second hairline 5px below it. Contents are the diamond + SFM wordmark on the left, display-caps links, and a compact gold "Zarezerwuj" button.
- **Links:** Big Shoulders 700, uppercase, +0.12em, ivory. On hover the text turns Gold Leaf and a 2px gold underline grows from the centre.
- **Mobile:** a square burger with a Tarnished Brass border opens a full-height lacquer drawer with faint sunburst rays. Links are clamp(2.4rem, 11vw, 3.6rem) display caps separated by brass hairlines, followed by a full-width gold Booksy button and the phone number.

### Brass Price Plaque (signature)
A translucent brass panel (rgba(205,166,88,.84)) sits on a sepia-toned photo, with a 1.5px gold border and two inner rules (inset 8px and 26px). Each row reads name + description, dotted leader, then the price in display numerals. The featured service is inverted to a lacquer row with stepped corners and gold price. A dark button sits at the foot.

### Octagon Medallion
A 58px Sign Gold octagon with a lacquer Roman numeral in display caps, used as the marker in numbered lists.

### Booking Panel
A Sign Gold field with 22px stepped corners and faint dark sunburst rays rising from below. It holds a huge lacquer display headline, a Jost line, a large dark Booksy button, and a phone link underlined in lacquer. This is the page's closing CTA.

### Sunburst Fan
A 92×46px half-disc of repeating gold rays with a hollow hub, placed above centred section heads (Sign Gold on lacquer, Engraved Gold on marble). The same ray pattern fills the hero behind the arch and animates open once on load.

## Do's and Don'ts

### Do:
- **Do** alternate lacquer (#0b0a09) and marble (#f1ebdd) bands and mark every boundary with the gold double-rule seam and diamond.
- **Do** keep gold as the only accent: Sign Gold (#d4ad5c) on lacquer, Engraved Gold (#83601c) on marble, Tarnished Brass (#8c6526) for rules only.
- **Do** send every booking action to Booksy as a gold (or dark-on-gold) stepped-corner link button.
- **Do** present testimonials as bordered lacquer cards in a grid, with gold outer border and inner inset rule.
- **Do** keep the header solid lacquer and visible at all times, including over the hero.
- **Do** draw ornaments in CSS geometry (fans, octagons, diamonds, arches, stepped corners) in flat gold.
- **Do** tone photography toward the room (partial grayscale + sepia) and treat all current photos as placeholders for the salon's own.

### Don't:
- **Don't** introduce burgundy, green, blue, or any second accent hue.
- **Don't** render gold with gradient text, background-clip sheen, or metallic glow. Gold is flat ink and flat fields.
- **Don't** use a booking form. Booking is always a Booksy link CTA, with phone as the fallback.
- **Don't** fade content in on scroll or hide it behind opacity reveals. All content is visible on load. Motion is limited to the one-time hero ray and shadow-line flourish and to hover states.
- **Don't** let the header go transparent or blend into the hero.
- **Don't** set two same-ground sections adjacent, or soften the alternation with a grey or tinted third ground.
- **Don't** round corners. Anything that isn't square is either a stepped notch or an arch.
- **Don't** use icon fonts or glyph icons for ornaments or ratings.
- **Don't** set gold text on marble in Sign Gold. Use Engraved Gold.
