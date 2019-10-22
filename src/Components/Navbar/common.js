import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import NavItem from './navItem';


const Navigation = ({ navColors, navItems, navBrand, rightSide }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef();
  function toggleOnClick() {
    setIsExpanded(prev => !prev);
  }
  function closeCollapse() {
    setIsExpanded(false);
  }
  useOnClickOutside(ref, () => setIsExpanded(false));
  return (
    <Navbar
      expanded={isExpanded}
      onSelect={closeCollapse}
      bg={navColors.bg}
      variant={navColors.variant}
      sticky={navColors.sticky}
      expand={navColors.expand}
      collapseOnSelect={true}
    >
      <Nav>
        {navBrand.highlight ? (
          <NavBrandHighlight {...navBrand.brand} {...navBrand.class} />
        ) : (
          <NavBrand {...navBrand.brand} {...navBrand.class} />
        )}
      </Nav>
      <Navbar.Toggle onClick={toggleOnClick} aria-controls="basic-navbar-nav" id="my-toggle-outer">
        <span id="my-toggle-icon" className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" ref={ref}>
        <Nav className="mr-auto">
          {navItems.items.map(item => (
            <NavItem key={item.value} {...item} {...navItems.class} />
          ))}
          
        </Nav>
        {rightSide}
      </Navbar.Collapse>
    </Navbar>
  );
};
Navigation.propTypes = {
  navColors: PropTypes.shape({
    bg: PropTypes.string,
    variant: PropTypes.string,
    sticky: PropTypes.string,
    expand: PropTypes.string
  }),
  navItems: PropTypes.shape({
    class: PropTypes.shape({ activeClassName: PropTypes.string }),
    items: PropTypes.arrayOf(
      PropTypes.shape({
        to: PropTypes.string,
        value: PropTypes.string
      })
    )
  }),
  navBrand: PropTypes.shape({
    highlight: PropTypes.bool,
    brand: PropTypes.shape({
      to: PropTypes.string,
      value: PropTypes.string
    }),
    class: PropTypes.shape({
      className: PropTypes.string,
      activeClassName: PropTypes.string
    })
  })
};

function useOnClickOutside(ref, cb) {
  useEffect(() => {
    const listener = event => {
      if (
        !ref.current ||
        ref.current.contains(event.target) ||
        event.target.id === "my-toggle-outer" ||
        event.target.id === "my-toggle-icon"
      ) {
        return;
      }
      cb(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, cb]);
}

// highlist the nav brand when 'Home' is selected
const NavBrandHighlight = ({ to, value, className, activeClassName }) => (
  <LinkContainer
    className={className}
    exact={true}
    activeClassName={activeClassName}
    to={to}
  >
    <Nav.Link active={false}>{value}</Nav.Link>
  </LinkContainer>
);

const NavBrand = ({ to, value, className, activeClassName }) => (
  <LinkContainer
    className={className}
    exact={true}
    activeClassName={activeClassName}
    to={to}
    isActive={() => false}
  >
    <Nav.Link active={false}>{value}</Nav.Link>
  </LinkContainer>
);

export default Navigation;
