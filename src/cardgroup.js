
import {CardGroup} from 'reactstrap'
import ProjectCard from './card'

function Group() {
    return (
        <CardGroup>
          <ProjectCard title="My First Project"/>
          <ProjectCard title="My Second Project"/>
          <ProjectCard title="My Fourth Project"/>
          <ProjectCard title="My Fifth Project"/>
        </CardGroup>
    )
}

export default Group