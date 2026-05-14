import projectsList from '../../pages/ProjectsPage/projectsList.json'
import competitionsList from '../../pages/CompetitionsPage/competitionsList.json'
import certificatesList from '../../pages/CertificatesPage/certificatesList.json'

export type SiteProject = {
  name: string
  description: string
  techStack: string[]
  date: string
  githubRepoLink: string
}

export type SiteCompetition = {
  name: string
  description: string
  year: string
  awardsWon?: string
}

export type SiteCertificate = {
  name: string
  description: string
  year: string
  tags: string[]
}

export const siteContent = {
  person: {
    fullName: 'Nergis Rahimzade',
  },
  contact: {
    email: 'nergisrahimzade123@gmail.com',
    linkedin: 'https://www.linkedin.com/in/nergiz-rahimzade-183967337/',
    github: 'https://github.com/nergisRahimzade',
  },
  projects: projectsList as unknown as SiteProject[],
  competitions: competitionsList as unknown as SiteCompetition[],
  certificates: certificatesList as unknown as SiteCertificate[],
} as const

export function localAnswerForPrompt(prompt: string): string {
  const p = prompt.toLowerCase()

  if (p.includes('summarize') && p.includes('project')) {
    const projects = siteContent.projects
    const lines = projects.map((proj) => {
      const topTech = proj.techStack.slice(0, 4).join(', ')
      return `- ${proj.name} (${proj.date}) — ${topTech}. GitHub: ${proj.githubRepoLink}`
    })
    return [
      `Here are Nergis’s projects (${projects.length}):`,
      ...lines,
      '',
      'If you want, ask: “Tell me more about <project name>”.',
    ].join('\n')
  }

  if (p.includes('contact') || p.includes('reach') || p.includes('email') || p.includes('linkedin')) {
    const { email, linkedin, github } = siteContent.contact
    return [
      'You can contact Nergis here:',
      `- Email: ${email}`,
      `- LinkedIn: ${linkedin}`,
      `- GitHub: ${github}`,
    ].join('\n')
  }

  if (p.includes('resume') || p.includes('cv')) {
    return [
      'Resume page summary:',
      '- Open the “Resume” tab to view Nergis’s CV content.',
      '- If you tell me what you want (internship, junior role, ML track), I can help summarize it for that goal once the OpenAI step is connected.',
    ].join('\n')
  }

  if (p.includes('certificate')) {
    const certs = siteContent.certificates
    const lines = certs.map((c) => `- ${c.name} (${c.year}) — tags: ${c.tags.join(', ')}`)
    return [`Certificates (${certs.length}):`, ...lines].join('\n')
  }

  if (p.includes('competition') || p.includes('hackathon')) {
    const comps = siteContent.competitions
    const lines = comps.map((c) => {
      const award = c.awardsWon ? ` — award: ${c.awardsWon}` : ''
      return `- ${c.name} (${c.year})${award}`
    })
    return [`Competitions (${comps.length}):`, ...lines].join('\n')
  }

  return [
    'I can answer questions about this portfolio site (projects, competitions, certificates, contact, resume).',
    'Try one of the topic buttons above, or ask something like “What projects use React?”',
  ].join('\n')
}

