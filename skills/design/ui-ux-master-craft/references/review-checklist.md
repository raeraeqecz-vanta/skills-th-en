# UI/UX Review Checklist / รายการตรวจ UI/UX

Use only after inspecting the real interface and relevant states. Mark each item `PASS`, `FAIL`, `N/A`, `BLOCKED`, or `NOT TESTED`; attach evidence for material findings. A screenshot cannot establish keyboard, zoom, state, or assistive-technology behavior.

ใช้หลังจากตรวจอินเทอร์เฟซจริงและ State ที่เกี่ยวข้อง ทำเครื่องหมาย `PASS`, `FAIL`, `N/A`, `BLOCKED` หรือ `NOT TESTED` พร้อมหลักฐานสำหรับ Finding ที่มีผล ภาพหน้าจออย่างเดียวพิสูจน์พฤติกรรม Keyboard, Zoom, State หรือ Assistive Technology ไม่ได้

## A. Product and workflow / ผลิตภัณฑ์และ Workflow

- [ ] The primary task, current state, and next action are clear early in the reading order. / งานหลัก สถานะปัจจุบัน และ Action ถัดไปชัดเจนตั้งแต่ต้นลำดับการอ่าน
- [ ] The primary action describes its outcome; consequential effects and recovery are visible. / Action หลักระบุผลลัพธ์ และแสดงผลกระทบ/การกู้คืนของงานสำคัญ
- [ ] Supporting metrics and navigation do not compete with the work surface without a reason. / ตัวเลขสรุปและ Navigation ไม่แย่งความสำคัญจากพื้นที่ทำงานโดยไม่มีเหตุผล
- [ ] Findings are grounded in observed interface or source evidence; unknown behavior is labeled. / Finding อิงอินเทอร์เฟซหรือ Source ที่ตรวจจริง และติดป้ายพฤติกรรมที่ยังไม่ทราบ

## B. Information and visual system / ข้อมูลและระบบภาพ

- [ ] Each route has a dominant object or task and a distinct product-specific visual thesis. / แต่ละ Route มีวัตถุหรืองานหลัก และ Visual Thesis ที่มีเอกลักษณ์ของผลิตภัณฑ์
- [ ] Related information is grouped; optional details are disclosed progressively without hiding essential state or blockers. / จัดข้อมูลที่เกี่ยวข้องเป็นกลุ่ม เปิดเผยรายละเอียดรองตามลำดับ โดยไม่ซ่อน State หรือ Blocker สำคัญ
- [ ] Typography supports the content language, hierarchy, numerals, and real content. / Typography รองรับภาษา ลำดับชั้น ตัวเลข และเนื้อหาจริง
- [ ] Semantic tokens represent component colors, spacing, surfaces, and focus behavior where applicable. / Semantic Token กำหนดสี Spacing พื้นผิว และ Focus ของ Component ตามความเหมาะสม
- [ ] Cards, shadows, radii, icons, and motion have a clear grouping, interaction, or communication purpose. / Card, Shadow, Radius, Icon และ Motion มีหน้าที่จัดกลุ่ม สื่อ Interaction หรือสื่อสารชัดเจน

## C. Accessibility and Thai content / Accessibility และภาษาไทย

- [ ] Real Thai strings, long labels, and combining marks wrap and render without clipping. / ข้อความไทยจริง Label ยาว และวรรณยุกต์จัดบรรทัดและแสดงผลไม่ถูกตัด
- [ ] No negative letter-spacing is applied to Thai runs; line boxes can grow. / ไม่ลด Letter Spacing ของข้อความไทย และกล่องบรรทัดขยายตามเนื้อหาได้
- [ ] Actual rendered text and non-text contrast combinations are checked against applicable criteria. / ตรวจ Contrast ของข้อความและองค์ประกอบที่ไม่ใช่ข้อความที่ Render จริงกับเกณฑ์ที่เกี่ยวข้อง
- [ ] State is not conveyed through color alone. / ไม่สื่อ State ด้วยสีเพียงอย่างเดียว
- [ ] Keyboard order is logical; focus is visible and not entirely obscured. / ลำดับ Keyboard เป็นเหตุเป็นผล เห็น Focus และไม่มีเนื้อหาบังทั้งหมด
- [ ] Native semantics and labels are present; any custom widget follows its APG keyboard pattern. / ใช้ Semantic และ Label ที่ถูกต้อง Widget กำหนดเองทำตาม Keyboard Pattern ของ APG
- [ ] Applicable target-size criterion and spacing exceptions are checked; frequent touch actions remain comfortable. / ตรวจ Target Size และข้อยกเว้นด้านระยะห่างตามเกณฑ์ พร้อมทำให้ Action Touch ที่ใช้บ่อยกดง่าย
- [ ] Content survives text resize to 200%, 320 CSS-pixel reflow, and text-spacing overrides as applicable. / เนื้อหายังใช้งานได้เมื่อขยายข้อความ 200%, Reflow ที่ 320 CSS pixels และปรับ Text Spacing ตามเกณฑ์

## D. Responsive, states, and interaction / Responsive, State และ Interaction

- [ ] Compact layouts reprioritize content rather than merely shrink desktop columns. / Layout ขนาดเล็กจัดลำดับเนื้อหาใหม่ ไม่ใช่แค่ย่อคอลัมน์ Desktop
- [ ] Relevant loading, empty, validation, error, blocked, and partial/stale states are covered. / ครอบคลุม State loading, empty, validation, error, blocked และ partial/stale ที่เกี่ยวข้อง
- [ ] Search, active filters, counts, reset, and empty results behave clearly where present. / Search, Filter ที่ใช้งาน จำนวนผลลัพธ์ Reset และผลลัพธ์ว่างชัดเจนเมื่อมี
- [ ] Recoverable failure retains user input; feedback appears close to the change. / เมื่อกู้คืนได้ ระบบรักษาข้อมูลที่กรอก และวาง Feedback ใกล้จุดเปลี่ยน
- [ ] Reduced-motion behavior is present when non-essential interaction motion exists. / รองรับ Reduced Motion เมื่อมีการเคลื่อนไหวจาก Interaction ที่ไม่จำเป็น

## E. Evidence and verdict / หลักฐานและข้อสรุป

- [ ] Each material finding names the inspected route, viewport, state, or interaction. / Finding ที่มีผลระบุ Route, Viewport, State หรือ Interaction ที่ตรวจ
- [ ] Severity reflects task blockage, user impact, and available workaround. / Severity สะท้อนการติดขัดของงาน ผลกระทบ และวิธีเลี่ยงปัญหา
- [ ] `NOT TESTED` and `BLOCKED` items are not reported as passes. / รายการ `NOT TESTED` และ `BLOCKED` ไม่ถูกรายงานว่า Pass
- [ ] The verdict distinguishes a design recommendation from a verified implementation result. / ข้อสรุปแยกข้อเสนอด้าน Design ออกจากผลการ Implement ที่ตรวจแล้ว

Do not call the interface polished while high-impact task-completion, accessibility, responsive, or consequential-action failures remain. Report lower-priority exceptions and unverified conditions explicitly.

ห้ามเรียกอินเทอร์เฟซว่าขัดเกลาแล้ว หากยังมีปัญหาผลกระทบสูงด้านการทำงาน Accessibility, Responsive หรือ Action ที่มีผลสำคัญ ระบุข้อยกเว้น Priority ต่ำและเงื่อนไขที่ยังไม่ตรวจให้ชัด
