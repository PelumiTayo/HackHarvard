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
        src="https://100k-faces.glitch.me/random-image"
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
                  "https://hot-thai-kitchen.com/wp-content/uploads/2023/04/pho-beef-blog.jpg"
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
          <BlogTags tags={['Country', 'Protein', 'Grains', 'Vegetables']} />
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
          <BlogAuthor name="John Doe" date={new Date('2023-10-21T19:01:27Z')} />
        </Box>
      </Box>
      <Heading as="h2" marginTop="5">
        Latest articles
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
                    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
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
            <BlogTags tags={['Region', 'Food Category',]} marginTop={3} />
            <Heading fontSize="xl" marginTop="2">
              <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Blog title
              </Text>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </Text>
            <BlogAuthor name="John Doe" date={new Date('2023-10-21T19:01:27Z')} />
          </Box>
        </WrapItem>
      </Wrap>
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">What we write about</Heading>
        <Text as="p" fontSize="lg">
          Our community page serves as a medium for everyone to share and learn about different cusines along with its 
          health benefits and the origin surrounding the dish. Our webapp makes it easy for writers to incorporate
          calories and other nutrients info into their post. Our search and categorization system allows readers
          to easily find the content their interested in and explore. Furthermore, writers can also share tips about eating 
          and excersises that are in their culture. We hope to turn this into a comprehensive resource for 
          promoting culinary diversity, healthy living, and cultural exchange. Here, everyone can share:
          <ul>
            <li>recipes of cultural dishes </li>
            <li>origin and evolution </li>
            <li>healthy eating tips </li>
            <li>traditional dances, excersies and their benefits</li>
            <li>and more...</li>
          </ul>
        </Text>
      </VStack>
    </Container>
    </>
  )
}

export default ArticleList