/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box, Flex } from "theme-ui";
import Image from "next/image";
import Link from "next/link";

const NavTitle = ({ url, title, mt }) => (
  <Box
    sx={{
      fontSize: [1, 3, 4],
      lineHeight: ["16px", "20px", "20px"],
      "& a": { textDecoration: "none", color: "black" },
      "& a:hover": { color: "primary" },
      mt: mt,
    }}
  >
    <Link href={url} passHref>
      <a>{title}</a>
    </Link>
  </Box>
);

const NavList1 = ({ url, title }) => (
  <Box
    sx={{
      mb: 3,
      fontSize: [0, 1, 3],
      lineHeight: ["16px", "20px", "20px"],
      "& a": { textDecoration: "none", color: "black" },
      "& a:hover": { color: "primary" },
    }}
  >
    <Link href={url} passHref>
      <a>{title}</a>
    </Link>
  </Box>
);

const NavList2 = ({ url, title, mr }) => (
  <Box
    sx={{
      fontSize: 1,
      lineHeight: "16px",
      "& a": { textDecoration: "none", color: "black" },
      "& a:hover": { color: "primary" },
      mr,
    }}
  >
    <Link href={url} passHref>
      <a target="_blank" rel="noreferrer noopener">
        {title}
      </a>
    </Link>
  </Box>
);

const Copyright = ({ url, title }) => (
  <Box
    sx={{
      fontSize: 1,
      lineHeight: "16px",
      "& a": { textDecoration: "none", color: "lower" },
      "& a:hover": { color: "primary" },
    }}
  >
    <Link href={url} passHref>
      <a>{title}</a>
    </Link>
  </Box>
);

const Footer = ({ mt }) => {
  return (
    <footer sx={{ bg: "background", pt: 10, pb: 4, mt }}>
      <Container>
        <Flex>
          <Flex>
            <Box sx={{ mr: 10 }}>
              <NavTitle url="/company" title="企業情報" />
              <Box sx={{ mt: 6 }}>
                <NavList1 url="/company" title="経営理念" />
                <NavList1 url="/company" title="代表メッセージ" />
                <NavList1 url="/company" title="幹部紹介" />
                <NavList1 url="/company" title="会社概要" />
                <NavList1 url="/company" title="沿革" />
                <NavList1 url="/company" title="アクセス" />
              </Box>
            </Box>
            <Box sx={{ mr: 10 }}>
              <NavTitle url="/service" title="サービス" />
              <Box sx={{ mt: 6 }}>
                <NavList1 url="/service" title="Studyplus" />
                <NavList1 url="/service" title="Studyplus for School" />
                <NavList1 url="/service" title="Studyplus Ads" />
                <NavList1 url="/service" title="Studyplus API" />
              </Box>
            </Box>
            <Box sx={{ mr: 10 }}>
              <NavTitle url="/news" title="ニュース" />
              <Box sx={{ mt: 6 }}>
                <NavList1 url="/news" title="お知らせ" />
                <NavList1 url="/news" title="プレスリリース" />
                <NavList1 url="/news" title="メディア掲載" />
              </Box>
            </Box>
            <Box sx={{ mr: 10 }}>
              <NavTitle url="/ir" title="IR情報" />
              <Box sx={{ mt: 6 }}>
                <NavList1 url="/ir" title="IRニュース" />
                <NavList1 url="/ir" title="財務ハイライト" />
                <NavList1 url="/ir" title="IRカレンダー" />
                <NavList1 url="/ir" title="月次概況" />
              </Box>
            </Box>
            <Box>
              <NavTitle url="/recruit" title="採用情報" />
              <NavTitle url="/contact" title="お問い合わせ" mt={6} />
            </Box>
          </Flex>
          <Box sx={{ ml: "auto" }}>
            <Flex>
              <Box sx={{ mr: 4 }}>
                <Link href="https://twitter.com/studyplusjp">
                  <a target="_blank" rel="noreferrer noopener">
                    <Image
                      src="/images/icon_twitter.svg"
                      alt="Twitter@studyplusjp"
                      width={32}
                      height={32}
                    />
                  </a>
                </Link>
              </Box>
              <Box sx={{ mr: 4 }}>
                <Link href="https://www.facebook.com/studyplusfan">
                  <a target="_blank" rel="noreferrer noopener">
                    <Image
                      src="/images/icon_facebook.svg"
                      alt="Facebook@studyplusfan"
                      width={32}
                      height={32}
                    />
                  </a>
                </Link>
              </Box>
              <Box>
                <Link href="https://www.wantedly.com/companies/studyplus">
                  <a target="_blank" rel="noreferrer noopener">
                    <Image
                      src="/images/icon_wantedly.svg"
                      alt="Wantedly"
                      width={32}
                      height={32}
                    />
                  </a>
                </Link>
              </Box>
            </Flex>
            <Flex sx={{ mt: 10, justifyContent: "flex-end" }}>
              <Link href="https://privacymark.jp/">
                <a target="_blank" rel="noreferrer noopener">
                  <Image
                    src="/images/icon_privacy_mark.png"
                    alt="プライバシーマーク"
                    width={80}
                    height={80}
                  />
                </a>
              </Link>
            </Flex>
          </Box>
        </Flex>
        <Flex sx={{ mt: 11 }}>
          <Flex>
            <NavList2 url="/privacy_policy" title="個人情報保護方針" mr={5} />
            <NavList2
              url="https://info.studyplus.co.jp/privacy"
              title="個人情報に関する公表文"
              mr={5}
            />
            <NavList2
              url="https://info.studyplus.co.jp/declaration"
              title="暴力団追放宣言"
            />
          </Flex>
          <Box sx={{ ml: "auto" }}>
            <Copyright
              url="/"
              title="Copyright © 2021 スタディプラス株式会社"
            />
          </Box>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
