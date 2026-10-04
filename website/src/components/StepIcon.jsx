import understand from '../assets/icons/workflow/understand.svg';
import scope from '../assets/icons/workflow/scope.svg';
import breakdown from '../assets/icons/workflow/breakdown.svg';
import buildReview from '../assets/icons/workflow/build-review.svg';
import terminal from '../assets/icons/workflow/terminal.svg';
import agent from '../assets/icons/workflow/agent.svg';
import setup from '../assets/icons/workflow/setup.svg';
import runSkill from '../assets/icons/workflow/run-skill.svg';
import guideBook from '../assets/icons/workflow/guide-book.svg';

const icons = { understand, scope, breakdown, buildReview, terminal, agent, setup, runSkill, guideBook };

export default function StepIcon({ name, variant = 'step' }) {
  const src = icons[name];
  if (!src) return null;
  const className = variant === 'section' ? 'section-icon' : 'step-icon';
  return <span className={className} aria-hidden="true"><img src={src} alt="" decoding="async" /></span>;
}
