import Navbar from 'react-bootstrap/Navbar';

import { Container } from 'react-bootstrap';

const NavBar = () => {
    return (


        <Navbar expand="lg" variant="dark" bg="dark">
            <Container>
                <Navbar.Brand href="#">Airport Operation Management System</Navbar.Brand>
            </Container>
        </Navbar>


    );
}

export default NavBar;