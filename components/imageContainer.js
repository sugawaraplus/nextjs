/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import Image from 'next/image';

const ImageContainer = ({ src, alt, width, height }) => (
  <Box>
    <Image
      src={src}
      alt={alt}
      layout="responsive"
      width={width}
      height={height}
    />
  </Box>
);

export default ImageContainer;
