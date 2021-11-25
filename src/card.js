import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardImg} from 'reactstrap'
import  pengen  from "./images/pengen.png";
console.log(pengen); 

function handleClick(url) {
  console.log(url);
  // window.location.href=url
  window.open(url)
}

function ProjectCard(props) {
    return (
  <Card
    color="dark"
    className="m-1 rounded border-dark card bg-transparent" 
  >
      <CardImg
      alt="Card image cap"
      src={props.image}
      top
      width="100%"
    />
    <CardBody className="cardbody ">
      <CardTitle tag="h5">
        {props.title}
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        {props.subtitle}
      </CardSubtitle>
      <CardText className="cardtext">
        {props.text} 
      </CardText>
      {/* <Button onClick={handleClick.bind(this, props.url)}> */}
      <Button onClick={() => handleClick(props.url)}>
        View the project
      </Button>
    </CardBody>
  </Card>
    )
}

export default ProjectCard