import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { readFile } from 'node:fs/promises'

type SiteProject = {
  name: string
  description: string
  techStack: string[]
  date: string
  githubRepoLink: string
}

type SiteCompetition = {
  name: string
  description: string
  year: string
  awardsWon?: string
}

type SiteCertificate = {
  name: string
  description: string
  year: string
  tags: string[]
  from?: string
}

export type SiteContent = {
  person: { fullName: string }
  contact: { email: string; linkedin: string; github: string }
  projects: SiteProject[]
  competitions: SiteCompetition[]
  certificates: SiteCertificate[]
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, '..')

async function readJson<T>(relativePathFromRepoRoot: string): Promise<T> {
  const abs = path.join(repoRoot, relativePathFromRepoRoot)
  const raw = await readFile(abs, 'utf8')
  return JSON.parse(raw) as T
}

let cached: SiteContent | null = null

export async function getSiteContent(): Promise<SiteContent> {
  if (cached) return cached

  const [projects, competitions, certificates] = await Promise.all([
    readJson<SiteProject[]>('src/pages/ProjectsPage/projectsList.json'),
    readJson<SiteCompetition[]>('src/pages/CompetitionsPage/competitionsList.json'),
    readJson<SiteCertificate[]>('src/pages/CertificatesPage/certificatesList.json'),
  ])

  cached = {
    person: { fullName: 'Nergis Rahimzade' },
    contact: {
      email: 'nergisrahimzade123@gmail.com',
      linkedin: 'https://www.linkedin.com/in/nergiz-rahimzade-183967337/',
      github: 'https://github.com/nergisRahimzade',
    },
    projects,
    competitions,
    certificates,
  }

  return cached
}

