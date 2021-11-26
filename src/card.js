import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardImg} from 'reactstrap'
import  pengen  from "./images/pengen.png";
import  englishHumour  from "./images/english_humour.png";
console.log(englishHumour); 

function handleClick(url) {
  console.log(url);
  // window.location.href=url
  window.open(url)
}

function ProjectCard(props) {
    return (
  <Card
    color="dark"
    className="m-2 rounded card bg-transparent" 
  >
    <CardBody className="cardbody">
      <CardTitle tag="h5">
        {props.title}
      </CardTitle>

      <CardImg className="image bg-transparent mb-2 rounded"
      alt="Card image cap"
      src={props.image}
      top
      width="100%"
    />

      <CardSubtitle
        className="subtitle mb-2"
        tag="h6"
      >
        {props.subtitle}
      </CardSubtitle>
      <CardText className="cardtext text-light">
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