import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Copy, ExternalLink } from 'lucide-react';
import { repository, repositoryUrl } from '../data/skills.js';
import { skillDetails } from '../data/skillDetails.js';
import SkillIcon from './SkillIcon.jsx';

export default function SkillDetail({ skill, group, onBack }) {
  const [copyStatus, setCopyStatus] = useState(null);
  const detail = skillDetails[skill.slug];
  const command = `npx skills@latest add ${repository} --skill=${skill.slug}`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('error');
    }
    window.setTimeout(() => setCopyStatus(null), 2200);
  }

  return <div className="detail-page">
    <button className="detail-back" onClick={onBack}><ArrowLeft size={18} /> กลับไปหน้ารวมสกิล</button>
    <article>
      <div className="detail-hero"><SkillIcon slug={skill.slug} /><div><p className="detail-group">{group.title}</p><code>/{skill.slug}</code><h1>{skill.name}</h1><p className="detail-summary">{skill.summary}</p></div></div>
      <div className="detail-layout">
        <div className="detail-main">
          <section className="detail-block"><h2>สกิลนี้ช่วยเรื่องอะไร</h2><p>{skill.summary} ใช้เป็นแนวทางให้ coding agent ทำงานตามจังหวะที่เหมาะสม พร้อมให้ผู้ใช้ตรวจทานผลลัพธ์ก่อนเดินหน้าต่อ</p></section>
          <section className="detail-block"><h2>ควรใช้เมื่อ</h2><p>{detail.when}</p></section>
          <section className="detail-block"><h2>เตรียมอะไรก่อนเริ่ม</h2><p>{detail.input}</p></section>
          <section className="detail-block"><h2>วิธีใช้งาน</h2><ol className="detail-steps">{detail.steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><p>{step}</p></li>)}</ol></section>
          <section className="detail-block detail-outcome"><h2>สิ่งที่ควรได้</h2><p>{detail.result}</p><div><ArrowRight size={17} /><span>{detail.next}</span></div></section>
        </div>
        <aside className="detail-aside">
          <h2>เริ่มใช้สกิลนี้</h2><p>เปิด Terminal ในโฟลเดอร์โปรเจกต์ แล้วติดตั้งสกิล</p>
          <div className="detail-command"><code>{command}</code><button onClick={copy} aria-label={copyStatus === 'copied' ? 'คัดลอกแล้ว' : 'คัดลอกคำสั่งติดตั้ง'}>{copyStatus === 'copied' ? <Check size={18} /> : <Copy size={18} />}</button></div>
          {copyStatus && <p className={`copy-status ${copyStatus}`} role="status">{copyStatus === 'copied' ? 'คัดลอกคำสั่งแล้ว' : 'คัดลอกไม่สำเร็จ กรุณาเลือกและคัดลอกคำสั่งด้วยตนเอง'}</p>}
          <p className="detail-hint">จากนั้นเปิด coding agent ในโปรเจกต์ แล้วพิมพ์ <code>/{skill.slug}</code></p>
          {skill.slug !== 'setup-skill-context' && <p className="detail-hint">หากยังไม่ตั้งค่าบริบทของ repository ให้ติดตั้งและเรียก <code>/setup-skill-context</code> ก่อน</p>}
          <a className="detail-source" href={`${repositoryUrl}/tree/main/skills/${skill.path}`} target="_blank" rel="noreferrer">อ่านรายละเอียดต้นฉบับ <ExternalLink size={15} /></a>
        </aside>
      </div>
      <p className="detail-note">คู่มือหน้านี้เป็นคำอธิบายภาษาไทยเพื่อเริ่มต้นใช้งาน ขั้นตอนฉบับเต็มและข้อกำหนดล่าสุดอยู่ใน SKILL.md ต้นฉบับ</p>
    </article>
  </div>;
}
