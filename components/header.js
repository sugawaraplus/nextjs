/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui";
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
import siteTitle from "./layout";

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
          <Link href="/">
            <a>
              <Image
                src="/images/logo_studyplus.svg"
                alt={siteTitle}
                width={138}
                height={35}
                priority={true}
              />
            </a>
          </Link>
          <div sx={{ ml: "auto" }}>
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
