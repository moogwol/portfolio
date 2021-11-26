
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
          <ProjectCard title="British Humour Explainer"
                       image="/portfolio/static/media/english_humour.d5fe8c63.png"
                       subtitle="Education"
                       text="A website where English language learners can learn about jokes in English"
                       url="https://englishhumour.herokuapp.com/"
          />
        </CardGroup>
    )
}

export default Group