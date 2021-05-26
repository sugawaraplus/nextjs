/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui";
import Link from "next/link";
import Image from "next/image";
import siteTitle from "./layout";

const NavLink = ({ href, title }) => (
  <Link href={href}>
    <a>{title}</a>
  </Link>
);

const Header = () => {
  return (
    <header>
      <Container>
        <Flex sx={{ mt: 2 }}>
          <Link href="/">
            <a>
              <Image
                src="/images/logo_studyplus_inc.svg"
                alt={siteTitle}
                width={142}
                height={36}
                priority={true}
              />
            </a>
          </Link>
          <div
            sx={{
              ml: "auto",
              "& a": {
                display: "inline-block",
                fontSize: 4,
                lineHeight: "20px",
                textDecoration: "none",
                color: "black",
                mr: [3, 6],
              },
              "& a:hover": {
                color: "primary",
                borderBottomWidth: 2,
                borderBottomStyle: "solid",
                borderBottomColor: "primary",
                pb: 2,
              },
              "& a:last-of-type": { mr: 0 },
            }}
          >
            <NavLink href="/company" title="COMPANY" />
            <NavLink href="/service" title="SERVICE" />
            <NavLink href="/news" title="NEWS" />
            <NavLink href="/ir" title="IR" />
            <NavLink href="/recruit" title="RECRUIT" />
          </div>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
