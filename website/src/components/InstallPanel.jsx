import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { repository, repositoryUrl, groups } from '../data/skills.js';
import StepIcon from './StepIcon.jsx';

export default function InstallPanel() {
  const [scope, setScope] = useState('all');
  const [skill, setSkill] = useState('setup-skill-context');
  const [copyStatus, setCopyStatus] = useState(null);
  const command = scope === 'all'
    ? `npx skills@latest add ${repository}`
    : `npx skills@latest add ${repository} --skill=${skill}`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('error');
    }
    window.setTimeout(() => setCopyStatus(null), 2200);
  }

  return <section id="install" className="install-section">
    <div className="section-heading"><StepIcon name="terminal" variant="section" /><div><h2>ติดตั้งให้ตรงกับเครื่องมือที่ใช้</h2><p>เลือกหนึ่งวิธีให้ตรงกับ coding agent ของคุณ</p></div></div>
    <div className="route-tabs" role="group" aria-label="ขอบเขตการติดตั้ง">
      <button aria-pressed={scope === 'all'} className={scope === 'all' ? 'active' : ''} onClick={() => { setScope('all'); setCopyStatus(null); }}>เลือกสกิลระหว่างติดตั้ง</button>
      <button aria-pressed={scope === 'single'} className={scope === 'single' ? 'active' : ''} onClick={() => { setScope('single'); setCopyStatus(null); }}>ติดตั้งสกิลเดียว</button>
    </div>
    {scope === 'single' && <label className="skill-select">เลือกสกิล<select value={skill} onChange={event => { setSkill(event.target.value); setCopyStatus(null); }}>{groups.flatMap(group => group.skills).map(item => <option value={item.slug} key={item.slug}>{item.name} · {item.slug}</option>)}</select></label>}
    <div className="install-command"><span className="prompt">$</span><code>{command}</code><button className="copy-button" onClick={copy} aria-label={copyStatus === 'copied' ? 'คัดลอกแล้ว' : 'คัดลอกคำสั่ง'}>{copyStatus === 'copied' ? <Check size={21} /> : <Copy size={21} />}</button></div>
    {copyStatus && <p className={`copy-status ${copyStatus}`} role="status">{copyStatus === 'copied' ? 'คัดลอกคำสั่งแล้ว' : 'คัดลอกไม่สำเร็จ กรุณาเลือกและคัดลอกคำสั่งด้วยตนเอง'}</p>}
    <p className="route-note">สกิลจะถูกเพิ่มใน repository นี้เป็นไฟล์ที่อ่านและแก้ไขได้</p>
    <ol className="install-steps">
      <li><StepIcon name="terminal" /><div><strong>เปิด Terminal ที่โฟลเดอร์โปรเจกต์</strong><p>รันคำสั่งด้านบนจากโฟลเดอร์ที่ต้องการติดตั้งสกิล</p></div></li>
      <li><StepIcon name="agent" /><div><strong>เลือก agent ที่ใช้งาน</strong><p>เลือก Codex หรือ coding agent ที่ต้องการจากรายการของตัวติดตั้ง</p></div></li>
      {scope === 'all' ? <li><StepIcon name="setup" /><div><strong>รวม setup skill ไว้ด้วย</strong><p>ตอนเลือกสกิล ให้รวม <code>setup-skill-context</code> เพื่อกำหนดบริบทของ repository</p></div></li> : <li><StepIcon name="setup" /><div><strong>ติดตั้งเฉพาะสกิลที่เลือก</strong><p>คำสั่งนี้ลงเฉพาะ <code>{skill}</code> หากยังไม่ตั้งค่าบริบท ให้รันคำสั่ง setup ที่แสดงด้านล่างแยกต่างหาก</p></div></li>}
      <li><StepIcon name="runSkill" /><div><strong>เริ่มใช้งานใน coding agent</strong><p>เปิด workspace ของโปรเจกต์ แล้วเรียกสกิลด้วย slash command ของสกิลนั้น</p></div></li>
    </ol>
    <div className="setup-callout"><span>{scope === 'single' && skill !== 'setup-skill-context' ? 'ถ้ายังไม่ตั้งค่าบริบทของ repository' : 'เริ่มใช้งานครั้งแรก'}</span>{scope === 'single' && skill !== 'setup-skill-context' ? <code>npx skills@latest add {repository} --skill=setup-skill-context</code> : <code>/setup-skill-context</code>}<p>ทำ setup หนึ่งครั้งต่อ repository ก่อนเริ่มใช้สกิลอื่น</p></div>
    <div className="install-foot"><a href="https://skills.sh/" target="_blank" rel="noreferrer">ดูคู่มือ Skills.sh ↗</a><a href={repositoryUrl} target="_blank" rel="noreferrer">ดู Source บน GitHub ↗</a></div>
  </section>;
}
