import ProjectNavbar from '@/components/ProjectNavbar';
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <ProjectNavbar/>
        {children}</div>
  )
}

export default layout;