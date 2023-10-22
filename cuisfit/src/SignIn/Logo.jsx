import { Image } from '@chakra-ui/react'


export const Logo = (props) => (
  <Image
    src="cultureat 1.png" // Replace with the path to your new image
    alt="my Logo"
    height="20"
    width="auto"
    viewBox="0 0 89 89"
    objectFit={"contain"}
    {...props}
  />
);
