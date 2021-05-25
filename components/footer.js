/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import Image from "next/image";

const Footer = ({ sx }) => {
  return (
    <footer sx={{ bg: "background", pt: 10, pb: 4, sx }}>
      <Container>
        <Box sx={{ fontSize: 4, lineHeight: "20px" }}>Footer</Box>
      </Container>
    </footer>
  );
};

export default Footer;
