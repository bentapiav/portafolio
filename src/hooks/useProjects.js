import { useEffect, useState } from 'react'
import { projects as projectsData } from '../data/portfolio'

const useProjects = (delay = 300) => {
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setProjects(projectsData)
      setIsLoading(false)
    }, delay)

    return () => clearTimeout(timerId)
  }, [delay])

  return { projects, isLoading }
}

export default useProjects
