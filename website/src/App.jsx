import { useEffect, useMemo, useState } from 'react';
import { ArrowDown, Menu, X } from 'lucide-react';
import InstallPanel from './components/InstallPanel.jsx';
import SkillCatalog from './components/SkillCatalog.jsx';
import SkillDetail from './components/SkillDetail.jsx';
import StepIcon from './components/StepIcon.jsx';
import { groups, repositoryUrl } from './data/skills.js';
import { canReturnWithHistory, catalogEntryState, makeSectionUrl, makeSkillUrl } from './lib/navigation.js';

function currentSkillSlug() {
  return new URLSearchParams(window.location.search).get('skill');
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [skillSlug, setSkillSlug] = useState(currentSkillSlug);

  useEffect(() => {
    const onPopState = () => setSkillSlug(currentSkillSlug());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const selected = useMemo(() => groups
    .flatMap(group => group.skills.map(skill => ({ skill, group })))
    .find(item => item.skill.slug === skillSlug), [skillSlug]);

  function openSkill(skill) {
    window.history.pushState(catalogEntryState, '', makeSkillUrl(window.location.pathname, skill.slug));
    setSkillSlug(skill.slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function goToSection(anchor = 'skills', { replace = false } = {}) {
    const method = replace ? 'replaceState' : 'pushState';
    window.history[method]({}, '', makeSectionUrl(window.location.pathname, anchor));
    setSkillSlug(null);
    window.requestAnimationFrame(() => document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' }));
  }

  function backToCatalog() {
    if (canReturnWithHistory(window.history.state)) {
      window.history.back();
      return;
    }
    goToSection('skills', { replace: true });
  }

  const closeMenu = () => setMenuOpen(false);

  return <main>
    <header className="site-header">
      <a href="#top" className="brand" onClick={event => { if (selected) { event.preventDefault(); goToSection('top'); } }}><span className="brand-symbol">V</span><span>VANTA <b>Skills</b></span></a>
      <nav className={menuOpen ? 'open' : ''}>
        <a href="#install" onClick={event => { closeMenu(); if (selected) { event.preventDefault(); goToSection('install'); } }}>วิธีติดตั้ง</a>
        <a href="#skills" onClick={event => { closeMenu(); if (selected) { event.preventDefault(); goToSection('skills'); } }}>สำรวจสกิล</a>
        <a href={repositoryUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>GitHub <span aria-hidden="true">↗</span></a>
      </nav>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'ปิดเมนู' : 'เปิดเมนู'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
    </header>
    {selected ? <SkillDetail skill={selected.skill} group={selected.group} onBack={backToCatalog} /> : <>
      <section className="hero" id="top"><div className="hero-copy"><h1>สกิล AI ที่ทำให้<br />เริ่มต้นได้อย่างมั่นใจ</h1><p className="hero-sub">เข้าใจว่าสกิลช่วยอะไร ติดตั้งอย่างไร และเรียกใช้ตอนไหน — อธิบายเป็นภาษาไทยตามลำดับงานจริง</p><div className="hero-actions"><a className="button-primary" href="#install">เริ่มติดตั้ง <ArrowDown size={18} /></a><a className="text-link" href="#skills">สำรวจรายการสกิล</a></div><div className="hero-meta"><span>อ่านง่ายสำหรับผู้เริ่มต้น</span><i /> <span>รองรับ Codex</span><i /> <span>เปิดดู source ได้</span></div></div><div className="hero-side"><div className="flow-label"><span>WORKFLOW</span><b>จากแนวคิดสู่การส่งมอบ</b></div><div className="flow-list"><span><StepIcon name="understand" /><b>ทำความเข้าใจโจทย์</b></span><span><StepIcon name="scope" /><b>กำหนดขอบเขต</b></span><span><StepIcon name="breakdown" /><b>แตกเป็นงานย่อย</b></span><span><StepIcon name="buildReview" /><b>ลงมือและตรวจสอบ</b></span></div><div className="flow-caption">ทุกขั้นมีเป้าหมายชัดเจน และต่อยอดจากขั้นก่อนหน้า</div></div></section>
      <InstallPanel />
      <SkillCatalog onSelect={openSkill} />
      <footer><a href="#top" className="brand"><span className="brand-symbol">V</span><span>VANTA <b>Skills</b></span></a><p>สกิลที่ดีช่วยให้ AI ทำงานเป็นขั้นตอน และช่วยให้คนตรวจสอบสิ่งที่เกิดขึ้นได้</p><span className="copyright">คู่มือภาษาไทย · ตรวจสอบกับต้นทางก่อนติดตั้งเสมอ</span><span className="icon-attribution">ไอคอนต้นฉบับ VANTA Skills · Style v0.1.6</span></footer>
    </>}
  </main>;
}
