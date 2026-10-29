import { useMemo, useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { groups } from '../data/skills.js';
import StepIcon from './StepIcon.jsx';
import SkillIcon from './SkillIcon.jsx';

const groupIcons = { start: 'understand', flow: 'breakdown', upkeep: 'guideBook' };

export default function SkillCatalog({ onSelect }) {
  const [query, setQuery] = useState('');
  const list = useMemo(() => groups
    .map(group => ({
      ...group,
      skills: group.skills.filter(skill => `${skill.name} ${skill.summary} ${skill.slug}`.toLowerCase().includes(query.trim().toLowerCase())),
    }))
    .filter(group => group.skills.length), [query]);

  return <section id="skills" className="catalog-section">
    <div className="catalog-title"><div><h2>เลือกสกิลตามจังหวะงาน</h2><p>เริ่มจากลำดับหลัก แล้วเพิ่มสกิลตามงานที่ทำจริง</p></div><label className="search-box"><Search size={20} /><input value={query} onChange={event => setQuery(event.target.value)} placeholder="ค้นหาสกิล" aria-label="ค้นหาสกิล" /></label></div>
    {list.length ? list.map(group => <section className="skill-group" id={group.id} key={group.id}>
      <div className="group-heading"><StepIcon name={groupIcons[group.id] || 'breakdown'} /><div><h3>{group.title}</h3><p>{group.intro}</p></div></div>
      <div className="skill-list">{group.skills.map(skill => <a className="skill-row" href={`?skill=${skill.slug}`} onClick={event => { event.preventDefault(); onSelect(skill); }} key={skill.slug}>
        <SkillIcon slug={skill.slug} /><div className="skill-copy"><code>/{skill.slug}</code><h4>{skill.name}</h4><p>{skill.summary}</p></div><ArrowRight className="row-arrow" size={23} />
      </a>)}</div>
    </section>) : <p className="empty">ไม่พบสกิลที่ตรงกับคำค้น ลองใช้คำอื่น</p>}
  </section>;
}
