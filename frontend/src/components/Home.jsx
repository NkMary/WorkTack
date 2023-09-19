import './home.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function JobCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

const React = require('react')

// function Board() {
//     return <div className="rectangle">
//     </div> }


function Home () {
    return(
            <main className="home">
                <h1>Home Page</h1>
                <JobCard></JobCard>
             {/* <Board>   
                    
                </Board> */}
            </main>

    )
}

export default Home;