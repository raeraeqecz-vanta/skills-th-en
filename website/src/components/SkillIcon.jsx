import setupSkillContext from '../assets/icons/skills/setup-skill-context.svg';
import chooseNextSkill from '../assets/icons/skills/choose-next-skill.svg';
import stressTestAndSharpen from '../assets/icons/skills/stress-test-and-sharpen.svg';
import toSpec from '../assets/icons/skills/to-spec.svg';
import writeGovernedSpec from '../assets/icons/skills/write-governed-spec.svg';
import blueprintToTasks from '../assets/icons/skills/blueprint-to-tasks.svg';
import implementApprovedTask from '../assets/icons/skills/implement-approved-task.svg';
import codeReviewAndFix from '../assets/icons/skills/code-review-and-fix.svg';
import releaseAndHandoff from '../assets/icons/skills/release-and-handoff.svg';
import reconcileWorkContext from '../assets/icons/skills/reconcile-work-context.svg';
import writeUserManual from '../assets/icons/skills/write-user-manual.svg';

const icons = {
  'setup-skill-context': setupSkillContext,
  'choose-next-skill': chooseNextSkill,
  'stress-test-and-sharpen': stressTestAndSharpen,
  'to-spec': toSpec,
  'write-governed-spec': writeGovernedSpec,
  'blueprint-to-tasks': blueprintToTasks,
  'implement-approved-task': implementApprovedTask,
  'code-review-and-fix': codeReviewAndFix,
  'release-and-handoff': releaseAndHandoff,
  'reconcile-work-context': reconcileWorkContext,
  'write-user-manual': writeUserManual,
};

export default function SkillIcon({ slug }) {
  const src = icons[slug];
  if (!src) return null;
  return <span className="skill-icon" aria-hidden="true"><img src={src} alt="" decoding="async" /></span>;
}
