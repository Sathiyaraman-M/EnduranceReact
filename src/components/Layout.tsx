import {Container} from 'reactstrap';
import NavMenu from './NavMenu';

const Layout = (props: any) => (
    <div>
        <NavMenu/>
        <Container tag="main">
            {props.children}
        </Container>
    </div>
);

export default Layout;