import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardImg, Col} from 'reactstrap'

function ProjectCard(props) {
    return (
  <Card
    color="light"
    className="m-1 rounded border-dark" 
  >
      <CardImg
      alt="Card image cap"
      src="https://picsum.photos/696/248"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        {props.title}
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        {props.subtitle}
      </CardSubtitle>
      <CardText>
        Some quick example text 
      </CardText>
      <Button>
        View the project
      </Button>
    </CardBody>
  </Card>
    )
}

export default ProjectCard