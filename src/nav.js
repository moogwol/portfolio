import {Navbar, NavItem, NavbarToggler, NavLink, Nav} from 'reactstrap'

function Navigation() {
    return (
        <div>
  <Navbar className="navigation"
    expand="md"
  >
 
    <NavbarToggler onClick={function noRefCheck(){}} />
      <Nav
        className="me-auto nav"
        navbar
      >
        <NavItem>
          <NavLink href="/components/">
            Blog
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/moogwol/">
            GitHub
          </NavLink>
        </NavItem>

      </Nav>
  </Navbar>
</div>
    )
}

export default Navigation