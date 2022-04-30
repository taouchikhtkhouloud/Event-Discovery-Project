import {Form, FormControl, Button} from 'react-bootstrap'
import './index.scss';
const Search = () => (
    <div className='searching'>

    <h1>Que voulez-vous faire ?</h1>
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="recherche"
          className="me-2"
          aria-label="Search"
        />
        <FormControl
          type="search"
          placeholder="Ville"
          className="me-2"
          aria-label="Search"
        />
        
        <Button variant="outline-success" className='search'>recherche</Button>
      </Form>
    </div>
);
export default Search