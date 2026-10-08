# UI/UX Evidence Base / ฐานหลักฐาน UI/UX

Use this guide to make grounded design decisions, not to impose one visual style. Values are classified as **Standard** (normative and testable), **Recommended default** (a starting point), or **Context decision** (must fit users, workflow, content, and platform). Check the source links when a standards claim matters; guidance may change.

ใช้เอกสารนี้ประกอบการตัดสินใจที่มีหลักฐาน ไม่ใช่บังคับให้ทุกผลิตภัณฑ์มีรูปแบบเดียว ค่าและแนวทางแบ่งเป็น **Standard** (ข้อกำหนดที่ทดสอบได้), **Recommended default** (ค่าเริ่มต้นที่ปรับได้) และ **Context decision** (ขึ้นกับผู้ใช้ Workflow เนื้อหา และแพลตฟอร์ม) ตรวจแหล่งต้นทางเมื่อจำเป็นต้องอ้างมาตรฐาน เพราะแนวทางอาจเปลี่ยนได้

## 1. Task and information architecture / งานและโครงสร้างข้อมูล

Start with actor, job, changing state, evidence required for a decision, and consequence/recovery. Put the current task and its primary action early in reading order. Metrics belong in the primary hierarchy only if they affect a decision. Progressive disclosure may hide optional history and advanced settings, but not status, blockers, consequential effects, or required validation.

เริ่มจากผู้ใช้ งาน สถานะที่เปลี่ยน หลักฐานที่จำเป็นต่อการตัดสินใจ และผลกระทบ/วิธีกู้คืน วางงานปัจจุบันและ Action หลักไว้ต้นลำดับการอ่าน ตัวเลขสรุปอยู่ในลำดับหลักเมื่อมีผลต่อการตัดสินใจเท่านั้น Progressive Disclosure ซ่อนประวัติหรือการตั้งค่าขั้นสูงได้ แต่ห้ามซ่อนสถานะ ตัวขัดขวาง ผลกระทบสำคัญ หรือ Validation ที่จำเป็น

Nielsen Norman Group's heuristics are broad evaluation principles—feedback, user control, error prevention, recognition, and recovery—not pixel rules. [Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/)

## 2. Typography and Thai / Typography และภาษาไทย

**Recommended default:** use 16px or larger for ordinary body text; smaller type is for secondary metadata and still must remain readable. Choose a family for language coverage, actual rendered forms, weight range, numerals, loading cost, and license. A mono face is appropriate for IDs or tabular values, not Thai paragraphs. Limit families when possible, but content coverage and legibility outrank a strict font-count rule.

**ค่าแนะนำ:** ใช้ 16px ขึ้นไปกับเนื้อหาทั่วไป ตัวเล็กกว่านี้สงวนไว้กับ Metadata รองและต้องยังอ่านได้ เลือกฟอนต์จากภาษาที่รองรับ รูปตัวอักษรที่ Render จริง ช่วงน้ำหนัก ตัวเลข เวลาโหลด และ License ใช้ Mono กับ ID หรือตัวเลขแบบตารางได้ แต่ไม่ใช้กับย่อหน้าภาษาไทย จำกัดจำนวนตระกูลฟอนต์ได้เมื่อเหมาะสม แต่ความครอบคลุมภาษาและการอ่านง่ายสำคัญกว่ากฎจำนวนฟอนต์ตายตัว

For Thai, set the document language correctly, use real Thai copy, allow line boxes to grow, test tone marks at actual weights, avoid negative letter spacing on Thai, and never use forced `word-break: break-all` as a substitute for correct line wrapping. W3C's Thai Layout Requirements covers script-specific line breaking, spacing, and baselines. [Thai Layout Requirements](https://www.w3.org/TR/thai-lreq/)

ภาษาไทยควรกำหนด `lang` ให้ถูก ใช้ข้อความไทยจริง ให้กล่องข้อความขยายตามเนื้อหา ตรวจวรรณยุกต์ที่น้ำหนักฟอนต์จริง ไม่ลด Letter Spacing ภาษาไทย และไม่ใช้ `word-break: break-all` แทนการจัดบรรทัดที่เหมาะสม เอกสาร W3C Thai Layout Requirements อธิบายการตัดบรรทัด ระยะห่าง และ Baseline เฉพาะอักษรไทย

**Standard — WCAG 2.2 SC 1.4.4, 1.4.10, 1.4.12:** text must resize to 200% without loss of content or functionality; content must reflow at 320 CSS pixels wide (or equivalent) without two-dimensional scrolling except for content whose meaning or use requires it; and specified text-spacing overrides must not cause loss. These tests are related but distinct.

**มาตรฐาน — WCAG 2.2 SC 1.4.4, 1.4.10, 1.4.12:** ข้อความต้องขยายได้ 200% โดยไม่สูญเสียเนื้อหาหรือการทำงาน เนื้อหาต้องจัดเรียงใหม่ที่ความกว้าง 320 CSS pixels (หรือเทียบเท่า) โดยไม่ต้องเลื่อนสองทิศทาง ยกเว้นเนื้อหาที่จำเป็นต้องใช้รูปแบบดังกล่าว และการปรับระยะห่างข้อความตามเกณฑ์ต้องไม่ทำให้ข้อมูลหรือฟังก์ชันหาย การทดสอบเหล่านี้เกี่ยวข้องแต่ไม่ใช่เรื่องเดียวกัน

## 3. Color and focus / สีและ Focus

**Standards — WCAG 2.2 AA:** normal text contrast is at least 4.5:1; large text is at least 3:1; meaningful non-text controls/graphics require 3:1 against adjacent colors under SC 1.4.11. Do not round a failing ratio upward. Meaning must not rely on color alone. Evaluate the actual rendered foreground/background pairs, including focus, selected, hover, disabled (when informative), overlay, and notification states. Light and dark themes require separate checks.

**มาตรฐาน — WCAG 2.2 AA:** Contrast ของข้อความปกติอย่างน้อย 4.5:1 ข้อความขนาดใหญ่อย่างน้อย 3:1 ส่วน Control/กราฟิกที่มีความหมายต้องมี Contrast 3:1 กับสีข้างเคียงตาม SC 1.4.11 ห้ามปัดค่าไม่ผ่านให้ดูเหมือนผ่าน ความหมายต้องไม่ขึ้นกับสีเพียงอย่างเดียว ตรวจคู่สีที่ Render จริง รวม Focus, Selected, Hover, Disabled (เมื่อยังสื่อสารข้อมูล), Overlay และ Notification โดย Theme สว่างและมืดต้องตรวจแยกกัน

**Standards — WCAG 2.2 AA:** SC 2.4.7 requires visible keyboard focus. SC 2.4.11 requires focused components not be entirely hidden by author-created content. Check focus contrast/visibility and whether sticky headers, dialogs, or overlays obscure it; focus appearance and focus not obscured are related but distinct criteria.

**มาตรฐาน — WCAG 2.2 AA:** SC 2.4.7 กำหนดให้เห็น Focus เมื่อใช้ Keyboard ส่วน SC 2.4.11 กำหนดไม่ให้เนื้อหาที่ผู้เขียนสร้างบัง Focus ทั้งหมด ตรวจการมองเห็น/Contrast ของ Focus และกรณี Sticky Header, Dialog หรือ Overlay บัง Focus ทั้งสองเกณฑ์เกี่ยวข้องแต่แยกจากกัน

Define semantic roles (`text.primary`, `surface.canvas`, `border.strong`, `focus.ring`, `status.warning`) before component styling. Hex examples from design guides are not certified pairings; calculate and render-test actual combinations.

กำหนดบทบาท Semantic (`text.primary`, `surface.canvas`, `border.strong`, `focus.ring`, `status.warning`) ก่อนตกแต่ง Component ค่า Hex ในคู่มือเป็นเพียงตัวอย่าง ไม่ได้รับรองว่า Contrast ผ่าน ต้องคำนวณและทดสอบคู่สีที่ใช้จริง

## 4. Layout, density, and responsive behavior / Layout ความหนาแน่น และ Responsive

Breakpoints are **context decisions**, not device categories. Start from where the content stops working. Reprioritize and recompose at narrow widths: preserve identity, state, and next action; move secondary columns into details; retain width for comparison-heavy work. Also consider short landscape windows and zoom. Constrain reading prose when it improves comprehension, but do not squeeze tables, timelines, or canvases that need width.

Breakpoint เป็น **การตัดสินใจตามบริบท** ไม่ใช่ประเภทอุปกรณ์ เริ่มจากจุดที่เนื้อหาเริ่มใช้งานไม่ได้ จัดลำดับและจัดรูปแบบใหม่บนจอแคบ โดยรักษา Identity, State และ Action ถัดไป ย้ายคอลัมน์รองไปดูรายละเอียด และให้ความกว้างกับงานที่ต้องเปรียบเทียบ พิจารณาหน้าต่างแนวนอนที่เตี้ยและการ Zoom ด้วย จำกัดความกว้างย่อหน้าเพื่อช่วยอ่านได้ แต่ไม่บีบ Table, Timeline หรือ Canvas ที่ต้องใช้พื้นที่

Use boxes only when they communicate grouping, interaction, or elevation. Prefer spacing and borders before decorative shadows. Give clickable elements explicit hit areas; visual icon size is not the same as target size.

ใช้กล่องเมื่อสื่อการจัดกลุ่ม Interaction หรือ Elevation ใช้ระยะห่างและเส้นขอบก่อนเงาตกแต่ง กำหนดพื้นที่กดให้ชัด ขนาดไอคอนที่เห็นไม่เท่ากับขนาด Target

## 5. Controls, keyboard, and touch / Control, Keyboard และ Touch

Prefer native controls and semantic HTML. A custom widget inherits keyboard and focus responsibilities; implement the relevant WAI-ARIA APG pattern rather than adding ARIA roles decoratively. Use persistent labels, appropriate autocomplete/input mode, and errors that preserve input and explain both problem and correction.

ให้ความสำคัญกับ Native Control และ Semantic HTML หากสร้าง Widget เองจะต้องดูแล Keyboard และ Focus ให้ทำตาม WAI-ARIA APG ที่ตรงกับรูปแบบนั้น แทนการใส่ ARIA Role เพื่อการตกแต่ง ใช้ Label ที่มองเห็นได้ ตั้งค่า Autocomplete/Input Mode ให้เหมาะ และออกแบบ Error ให้รักษาค่าที่กรอกพร้อมอธิบายปัญหาและวิธีแก้

**Standard — WCAG 2.2 AA SC 2.5.8:** pointer targets are at least 24×24 CSS pixels or satisfy a defined exception, including sufficient spacing. Do not summarize the rule as “every target must be 24px”; inspect the criterion and exceptions. **Recommended default:** make frequent touch controls around 44×44 CSS pixels when space permits; this is usability guidance, not SC 2.5.8's AA minimum.

**มาตรฐาน — WCAG 2.2 AA SC 2.5.8:** Pointer Target มีขนาดอย่างน้อย 24×24 CSS pixels หรือเข้าเงื่อนไขข้อยกเว้นที่กำหนด รวมถึงการเว้นระยะเพียงพอ ห้ามย่อกฎเป็น “ทุกปุ่มต้อง 24px” โดยไม่ตรวจข้อยกเว้น **ค่าแนะนำ:** Control ที่ใช้บ่อยบน Touch มีขนาดราว 44×44 CSS pixels เมื่อพื้นที่เอื้อ ค่านี้เป็นแนวทางด้านการใช้งาน ไม่ใช่ขั้นต่ำ AA ของ SC 2.5.8

For dialogs and composite widgets, define entry/exit, Escape, focus return, tab order, and arrow-key behavior where the chosen APG pattern requires it. Do not use `role="grid"` for a static data table.

สำหรับ Dialog และ Composite Widget ให้กำหนดการเข้า/ออก การใช้ Escape การคืน Focus ลำดับ Tab และ Arrow Key ตาม APG Pattern ที่เลือก อย่าใช้ `role="grid"` กับ Data Table ที่เป็นเนื้อหาอ่านอย่างเดียว

## 6. Data, states, and feedback / ข้อมูล สถานะ และ Feedback

Prioritize identity, state/risk, next action, key comparison value, then secondary metadata. Use semantic tables for tabular reading; use an interactive grid only when spreadsheet-like navigation or editing is genuinely required. Make active filters, result counts, reset paths, and stale/partial/simulated data clear.

จัดลำดับ Identity, State/Risk, Action ถัดไป, ค่าที่ต้องเปรียบเทียบ และ Metadata รอง ใช้ Semantic Table สำหรับข้อมูลตาราง ใช้ Interactive Grid เมื่อจำเป็นต้องนำทางหรือแก้ข้อมูลแบบ Spreadsheet จริง ๆ แสดง Filter ที่ทำงาน จำนวนผลลัพธ์ วิธี Reset และข้อมูลที่ล้าสมัย/ไม่ครบ/จำลองให้ชัด

Address applicable states: idle, loading, success, empty, validation, error, blocked/permission, and partial/stale. Feedback should appear near the changed object. Preserve user work after recoverable failure; reserve toasts for brief confirmation that is not needed to continue.

พิจารณา State ที่เกี่ยวข้อง ได้แก่ idle, loading, success, empty, validation, error, blocked/permission และ partial/stale วาง Feedback ใกล้กับวัตถุที่เปลี่ยน รักษาข้อมูลงานเมื่อเกิดปัญหาที่กู้คืนได้ ใช้ Toast กับการยืนยันชั่วคราวที่ไม่จำเป็นต้องอ่านต่อเพื่อทำงาน

## 7. Motion and content / Motion และข้อความ

Motion timing values are **recommended defaults**, not accessibility thresholds. Motion should clarify transition or feedback. WCAG 2.2 SC 2.3.3, an AAA criterion, requires that non-essential interaction-triggered motion can be disabled; support `prefers-reduced-motion` as an effective implementation approach. Automatically moving content may have separate pause/stop requirements.

ค่าเวลา Motion เป็น **ค่าแนะนำ** ไม่ใช่เกณฑ์ Accessibility ต้องใช้ Motion เพื่ออธิบายการเปลี่ยนผ่านหรือ Feedback WCAG 2.2 SC 2.3.3 ระดับ AAA กำหนดให้ปิด Motion ที่ไม่จำเป็นซึ่งเริ่มจาก Interaction ได้ การรองรับ `prefers-reduced-motion` เป็นวิธีทำงานที่เหมาะสม ส่วนเนื้อหาที่เคลื่อนอัตโนมัติอาจมีข้อกำหนดหยุด/พักแยกต่างหาก

Use the audience's operational vocabulary and label actions by outcome. Thai is primary when that is the working language; retain English terms where established technical vocabulary improves precision. Use icons consistently and provide accessible names for icon-only controls. Charts should answer a decision question and have a non-color summary.

ใช้คำศัพท์การทำงานของกลุ่มเป้าหมายและตั้งชื่อ Action ตามผลลัพธ์ ใช้ไทยเป็นหลักเมื่อเป็นภาษาทำงาน แต่คงศัพท์เทคนิคภาษาอังกฤษเมื่อช่วยให้แม่นยำ ใช้ Icon อย่างสอดคล้องและตั้ง Accessible Name ให้ Control ที่มีแต่ Icon กราฟควรตอบคำถามการตัดสินใจและมีสรุปที่ไม่พึ่งสี

## Sources / แหล่งข้อมูล

- W3C, [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/).
- W3C, [Understanding SC 1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum), [SC 1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast), [SC 2.5.8 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum), and [SC 2.3.3 Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions).
- W3C, [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/).
- W3C Internationalization Working Group, [Requirements for Thai Text Layout](https://www.w3.org/TR/thai-lreq/).
- Nielsen Norman Group, [10 Usability Heuristics for User Interface Design](https://www.nngroup.com/articles/ten-usability-heuristics/).

Standards and source pages may be revised; consult the normative criterion and its exceptions when making a compliance claim. This guide is not a formal accessibility audit or legal determination.

มาตรฐานและหน้าแหล่งข้อมูลอาจปรับปรุงได้ เมื่อต้องยืนยัน Compliance ให้ตรวจเกณฑ์ต้นฉบับและข้อยกเว้น เอกสารนี้ไม่ใช่การตรวจ Accessibility อย่างเป็นทางการหรือข้อวินิจฉัยทางกฎหมาย
