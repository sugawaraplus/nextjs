/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui';
import styles from './header.module.css';
import Link from 'next/link';

const NavLink = ({ href, title }) => (
  <Link href={href}>
    <a className={styles.navLink}>{title}</a>
  </Link>
);

const Header = () => {
  return (
    <header>
      <Container>
        <Flex sx={{ my: 5 }}>
          <NavLink href="/" title="Studyplus" />
          <div sx={{ ml: 'auto' }}>
            <NavLink href="/service" title="Service" />
            <NavLink href="/company" title="Company" />
            <NavLink href="/recruit" title="Recruit" />
          </div>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
