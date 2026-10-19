import PortfolioTemplate from '../components/templates/PortfolioTemplate'
import Navbar from '../components/organisms/Navbar'
import HeroSection from '../components/organisms/HeroSection'
import ExperienceSection from '../components/organisms/ExperienceSection'
import EducationSection from '../components/organisms/EducationSection'
import ProjectsSection from '../components/organisms/ProjectsSection'
import ContactSection from '../components/organisms/ContactSection'
import Footer from '../components/organisms/Footer'
import useProjects from '../hooks/useProjects'
import {
  profile,
  experiences,
  education,
  socialLinks,
  contactEmail,
  country,
} from '../data/portfolio'

const HomePage = () => {
  const { projects, isLoading } = useProjects()

  return (
    <PortfolioTemplate
      header={<Navbar name={profile.name} />}
      footer={<Footer name={profile.name} email={contactEmail} country={country} />}
    >
      <HeroSection {...profile} />
      <ExperienceSection experiences={experiences} />
      <EducationSection education={education} />
      <ProjectsSection projects={projects} isLoading={isLoading} />
      <ContactSection socialLinks={socialLinks} />
    </PortfolioTemplate>
  )
}

export default HomePage
