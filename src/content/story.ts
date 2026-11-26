/**
 * The cast of the course story. Brightloop is a fictional company that
 * builds a delivery-tracking SaaS. The learner joins as a junior frontend
 * developer and, by the last lesson, interviews for a senior role.
 */
export const CAST: Record<string, { role: string; voice: 'us' | 'gb'; color: string }> = {
  // Mid-tone colors that stay readable on both light and dark backgrounds.
  Maya: { role: 'Engineering Manager', voice: 'us', color: '#4f7cf0' },
  Arjun: { role: 'Senior Backend Developer', voice: 'gb', color: '#1fa37f' },
  Lena: { role: 'QA Engineer', voice: 'us', color: '#d0558f' },
  Tom: { role: 'Product Manager', voice: 'gb', color: '#d08a1e' },
  Sofia: { role: 'Product Designer', voice: 'us', color: '#9670e0' },
  Ken: { role: 'DevOps Engineer', voice: 'gb', color: '#7f93a8' },
  You: { role: 'Frontend Developer (это ты)', voice: 'us', color: 'var(--text)' },
  Client: { role: 'Client', voice: 'gb', color: '#d9534f' },
  Kate: { role: 'HR Partner', voice: 'us', color: '#c2702a' },
  Nina: { role: 'Frontend Intern', voice: 'gb', color: '#2a9bb5' },
};

export const COMPANY = 'Brightloop';
