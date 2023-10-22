'use client'

import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react'

const BlogTags = (props) => {
  const { marginTop = 0, tags } = props

  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        )
      })}
    </HStack>
  )
}

const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src={props.src}
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  )
}

const ArticleList = () => {
    return (
      <>
    <Container maxW={'7xl'} p="12">
      <Heading as="h1">CulturEat Community Blog</Heading>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={
                  "https://assets.bonappetit.com/photos/601185e9e0a941bb1291e9e2/4:3/w_1648,h_1236,c_limit/GoLive-Beef-Pho.jpg"
                }
                alt="a picture of Pho dish"
                objectFit="contain"
              />
            </Box>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)',
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <BlogTags tags={['Vietnamese', 'Protein', 'Grains', 'Vegetables']} />
          <Heading marginTop="1">
            <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
              My Comfort Dish - Pho
            </Text>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            Pho is a beef noodle soup originate from Vietnam, a country in SouthEast Asia. 
            The broth is beef bone based and flavored with star anise and cloves, making up its distinct aromatic taste.
            While it is usually served with flat rice noodle and beef, Pho can also be served with other protein
            such as chicken, shrimp, and tofu, and topped with fresh herbs, bean spoutes, and lime.
            Regardless of the protein source, pho is typically rich in nutrients. It provides a good balance of protein, 
            carbohydrates from the noodles, and essential vitamins and minerals from the herbs and vegetables. 
            Pho's versatility lies in its adaptable components, allowing for various protein substitutions and adjustments to 
            maintain its distinct flavor and nutritional value. Whether you prefer beef, chicken, seafood, or a vegetarian option, 
            pho can be tailored to suit different tastes and dietary preferences while remaining delicious and nutritious.
            A bowl of hot Pho is perfect for for any time, whether you're kicking off your day 
            with a burst of energy or unwinding after a long, exhausting one. 
          </Text>
          <BlogAuthor src="https://affable-creator-media.s3.ap-southeast-1.amazonaws.com/influencer-197181325-1561bd3bd43e-profile-pic.jpg" name="Tran Pham" date={new Date('2023-10-21T19:01:27Z')} />
        </Box>
      </Box>
      <Heading as="h2" marginTop="5">
        Trending Articles
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    "https://assets.bonappetit.com/photos/601185e9e0a941bb1291e9e2/4:3/w_1648,h_1236,c_limit/GoLive-Beef-Pho.jpg"
                  }
                  alt="a picture of Pho dish"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Box>
            </Box>
            <BlogTags tags={['Vietnamese', 'Protein', 'Grains', 'Vegetables']} marginTop={3} />
            <Heading fontSize="xl" marginTop="2">
              <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                  My Comfort Dish - Pho
              </Text>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2" fontStyle={'italic'}>
            Pho is a beef noodle soup originate from Vietnam, a country in SouthEast Asia. 
            The broth is beef bone based and flavored with star anise and cloves, making up its distinct aromatic taste.
            While it is usually served with flat rice noodle and beef, Pho can also be served with ...
            </Text>
            <BlogAuthor src="https://affable-creator-media.s3.ap-southeast-1.amazonaws.com/influencer-197181325-1561bd3bd43e-profile-pic.jpg" name="Tran Pham" date={new Date('2023-10-21T19:01:27Z')} />
          </Box>
        </WrapItem>
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/3/0/FNK_the-best-chicken-tikka-masala_H_s4x3.jpg.rend.hgtvcom.826.620.suffix/1567523604572.jpeg'
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Box>
            </Box>
            <BlogTags tags={['Indian', 'Spicy', 'Protein', 'Chicken']} marginTop={3} />
            <Heading fontSize="xl" marginTop="2">
              <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Maaast Spicy Chicken Tikka Masala
              </Text>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2" fontStyle={'italic'}>
              Namaste Foodies! Today, we're diving into the heart of Indian cuisine, exploring the art of making Chicken
              Tikka Masala. Get ready to embark on a spicy, creamy, and utterly delicious adventure through the vibrant
              world of Indian flavors. Let's roll up our sleeves and ...
            </Text>
            <BlogAuthor src="https://image.enjoymovie.net/hGZbM_pvD2Rus5wo8DMPQGdABQc=/256x256/smart/core/p/R2wox4zkNE.jpg" name="Shah Rukh Khan" date={new Date('2023-10-21T19:01:27Z')} />
          </Box>
        </WrapItem>
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    'https://www.seriouseats.com/thmb/zO5qobwKewdVMul9U2vxXL3Tupc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__02__20200224-obe-ata-vicky-wasik-23-48ef3dfb1176452f99d4a0c6fbed3e16.jpg'
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Box>
            </Box>
            <BlogTags tags={['Nigerian', 'Protein', 'Chicken', 'Bell Peppers']} marginTop={3} />
            <Heading fontSize="xl" marginTop="2">
              <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Simple, Hearty Obe Ata Stew
              </Text>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2" fontStyle={'italic'}>
             There's nothing quite like the comforting embrace of a warm, hearty meal that transcends generations and
             brings us back to our roots. This dish has long been a source of comfort and joy for our family, and today,
             I'll reveal the magic that turns everyday ingredients into a dish that ...
            </Text>
            <BlogAuthor src="https://img.freepik.com/premium-photo/happy-african-woman-with-smile-generative-ai_888418-14306.jpg" name="Iyabo Akinadewo" date={new Date('2023-10-20T19:01:27Z')} />
          </Box>
        </WrapItem>
      </Wrap>
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">Share Your Voice</Heading>
        <Text as="p" fontSize="lg">
          Our community page serves as a medium for everyone to share and learn about different cuisines along with its 
          health benefits and the origin surrounding the dish. Our webapp makes it easy for writers to incorporate
          calories and other nutrients info into their post. Our search and categorization system allows readers
          to easily find the content they are interested in and explore. Furthermore, writers can also share tips about eating 
          and excersises that are in their culture. We hope to turn this into a comprehensive resource for 
          promoting culinary diversity, healthy living, and cultural exchange. Here, everyone can share:
        </Text>
        <Text as="p" fontSize="lg" marginLeft="20">
          <ul>
            <li>Recipes of cultural dishes </li>
            <li>Origin and evolution </li>
            <li>Healthy eating tips </li>
            <li>Traditional dances, excersies and their benefits</li>
            <li>And more...!</li>
          </ul>
        </Text>
      </VStack>
    </Container>
    </>
  )
}

export default ArticleList