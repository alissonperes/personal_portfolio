import PropTypes from 'prop-types';

const Navbar = ({ links, navTitle, github, linkedin }) => {
  return (
    <nav className='flex navbar z-3 bg-dark border-bottom border-body navbar-expand-sm sticky-top'>
      <div className="container-fluid ">
        <span className='navbar-brand'>{ navTitle }</span>
        <div className='collapse navbar-collapse justify-content-center' id='navbarNavDropdown'>
          <ul className="navbar-nav ">
            {links.map((link) => {
              const { id, href, text } = link;
              return (
                <li key={id} className='nav-item'>
                  <a
                    href={href}
                    className='nav-link'
                  >
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='fs-2'>
          <a
            href={github.link}
            target='_blank'
            rel='noreferrer'
          >
            {linkedin.icon}
          </a>
          <a
            href={linkedin.link}
            target='_blank'
            rel='noreferrer'
          >
            {github.icon}
          </a>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  links: PropTypes.array,
  navTitle: PropTypes.object,
  github: PropTypes.object,
  linkedin: PropTypes.object,
};

export default Navbar;
