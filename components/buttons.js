/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import Link from "next/link";

export const Button1 = ({ url, title, sx, ...props }) => (
  <Box
    sx={{
      "& a": {
        display: "inline-block",
        fontSize: [4, 5, 6],
        lineHeight: ["20px", "24px", "28px"],
        textDecoration: "none",
        bg: "primary",
        color: "white",
        borderRadius: 2,
        px: 9,
        py: 4,
      },
      sx,
    }}
    {...props}
  >
    <Link href={url} passHref>
      <a>{title}</a>
    </Link>
  </Box>
);

export const Button2 = ({ url, title, sx, ...props }) => (
  <Box
    sx={{
      "& a": {
        display: "inline-block",
        fontSize: [3, 4, 5],
        lineHeight: ["20px", "20px", "28px"],
        textDecoration: "none",
        bg: "primary",
        color: "white",
        borderRadius: 2,
        px: 9,
        py: 4,
      },
      sx,
    }}
    {...props}
  >
    <Link href={url} passHref>
      <a>{title}</a>
    </Link>
  </Box>
);

export const Button3 = ({ url, title, sx, ...props }) => (
  <Box
    sx={{
      "& a": {
        display: "inline-block",
        fontSize: [1, 3, 4],
        lineHeight: ["16px", "20px", "20px"],
        textDecoration: "none",
        bg: "primary",
        color: "white",
        borderRadius: 2,
        px: 8,
        py: 3,
      },
      sx,
    }}
    {...props}
  >
    <Link href={url} passHref>
      <a>{title}</a>
    </Link>
  </Box>
);

export const Button4 = ({ url, title, sx, ...props }) => (
  <Box
    sx={{
      "& a": {
        display: "inline-block",
        fontSize: [0, 1, 3],
        lineHeight: ["16px", "20px", "20px"],
        textDecoration: "none",
        bg: "primary",
        color: "white",
        borderRadius: 2,
        px: 8,
        py: 3,
      },
      sx,
    }}
    {...props}
  >
    <Link href={url} passHref>
      <a>{title}</a>
    </Link>
  </Box>
);
