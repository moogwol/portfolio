
import {CardGroup} from 'reactstrap'
import ProjectCard from './card'

function Group() {
    return (
        <CardGroup>
          <ProjectCard title="Pengen"
                       image="/portfolio/static/media/pengen.712de208.png"
                       subtitle='Drawing Canvas'
                       text='Created as an entry for The Mint Bean Hackathon November 2021 '
                       url='https://0002pghg2i85392kkiugbg0aos7pot2qnle76s1034ochcvvh9hjkb8.siasky.net/'
          />
          <ProjectCard title="My Second Project"/>
          <ProjectCard title="My Fourth Project"/>
          <ProjectCard title="My Fifth Project"/>
        </CardGroup>
    )
}

export default Group