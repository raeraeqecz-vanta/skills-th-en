export const groups = [
  {
    id: 'start', number: '01', title: 'เริ่มต้นและตั้งบริบท', intro: 'เตรียม repository และหาสกิลที่เหมาะกับจังหวะงาน',
    skills: [
      { slug: 'setup-skill-context', path: 'foundation/setup-skill-context', name: 'ตั้งค่าบริบท', summary: 'ให้สกิลรู้จักโครงสร้าง คำศัพท์ และกติกาของ repository นี้ก่อนเริ่มงาน' },
      { slug: 'choose-next-skill', path: 'foundation/choose-next-skill', name: 'เลือกสกิลถัดไป', summary: 'ประเมินสถานะงานแล้วเลือกสกิลหรือขั้นตอนที่เหมาะสม' },
    ],
  },
  {
    id: 'flow', number: '02', title: 'ลำดับงานหลัก', intro: 'จากการลับโจทย์ ไปสู่ข้อกำหนด งานที่ทำได้ และการส่งมอบ',
    skills: [
      { slug: 'stress-test-and-sharpen', path: 'foundation/stress-test-and-sharpen', name: 'ทดสอบและลับคม', summary: 'ท้าทายสมมติฐาน ความเสี่ยง และช่องว่างก่อนตกลงแนวทาง' },
      { slug: 'to-spec', path: 'specification/to-spec', name: 'แปลงเป็นสเปก', summary: 'จัดทำข้อกำหนดจากบทสนทนาและการตัดสินใจที่ตกลงกันแล้ว' },
      { slug: 'write-governed-spec', path: 'specification/write-governed-spec', name: 'เขียนสเปกกำกับ', summary: 'บันทึกขอบเขต หลักฐาน ข้อห้าม และจุดตัดสินใจไว้ในข้อกำหนด' },
      { slug: 'blueprint-to-tasks', path: 'specification/blueprint-to-tasks', name: 'แตกแผนเป็นงาน', summary: 'แปลง Blueprint ที่ผ่านการทบทวนให้เป็นงานย่อยที่ตรวจรับได้' },
      { slug: 'implement-approved-task', path: 'implementation/implement-approved-task', name: 'ทำงานที่อนุมัติ', summary: 'ดำเนินการตาม Atomic Task ที่อนุมัติแล้ว โดยรักษาขอบเขตงาน' },
      { slug: 'code-review-and-fix', path: 'implementation/code-review-and-fix', name: 'ตรวจแก้โค้ด', summary: 'ตรวจการเปลี่ยนแปลงเทียบกับข้อกำหนดและแก้ปัญหาที่พบ' },
      { slug: 'release-and-handoff', path: 'release/release-and-handoff', name: 'ส่งมอบงาน', summary: 'ตรวจหลักฐานความพร้อม สรุปผล และเตรียมส่งต่องาน' },
    ],
  },
  {
    id: 'upkeep', number: '03', title: 'บริบทและคู่มือ', intro: 'ดูแลความต่อเนื่องของข้อมูลและช่วยให้คนใช้งานเข้าใจระบบ',
    skills: [
      { slug: 'reconcile-work-context', path: 'foundation/reconcile-work-context', name: 'ปรับบริบทให้ตรงกัน', summary: 'รวบรวมหลักฐานล่าสุด พร้อมแยกข้อมูลยืนยันแล้ว ข้อขัดแย้ง และสิ่งที่ยังไม่ชัด' },
      { slug: 'write-user-manual', path: 'documentation/write-user-manual', name: 'เขียนคู่มือ', summary: 'แปลงระบบหรือผลลัพธ์ที่พร้อมแล้วให้เป็นคู่มืออ่านเข้าใจง่าย' },
    ],
  },
];

export const repository = 'raeraeqecz-vanta/skills-th-en';
export const repositoryUrl = `https://github.com/${repository}`;
