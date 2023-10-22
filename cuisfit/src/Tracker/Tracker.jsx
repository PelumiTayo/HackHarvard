import React from "react";
import { useState } from "react";
import {
  Box,
  Image,
  Text,
  Badge,
  IconButton,
  Input,
  VStack,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  createIcon,
  Textarea,
  Button,
  Stack,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

import { StarIcon } from "@chakra-ui/icons";

export default function Tracker() {
    const [mockInput, setMockInput] = useState({
        image: "",
        country: "",
        dishName: "",
        serving: "",
        date: ""
    })
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };
  const [dishButton, setDishButton] = useState(false);
  return (
    <Box display="flex" w={"95"} minH={"100vh"} h={"fit-content"} m={"20px"}>
      <Box w={"50%"}>
        <Box
          position={"relative"}
          height={"650px"}
          display={"flex"}
          marginTop={"50px"}
          alignItems={"center"}
          rounded={"2xl"}
          boxShadow={"2xl"}
          width={"full"}
          overflow={"hidden"}
        >
          <Text
            position={"absolute"}
            left={"50%"}
            top={"50%"}
            transform={"translateX(-50%) translateY(-50%)"}
            fontSize="2xl"
            color={"black"}
            fontWeight={"extrabold"}
          >
            Global Flavors, Personal Goals - Track Your Culinary Journey!
          </Text>
          <Image
            alt={"Hero Image"}
            fit={"cover"}
            w={"100%"}
            h={"100%"}
            src={
              "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
            }
          />
        </Box>
      </Box>
      <Box color={"black"} textAlign={"center"} w={"50%"}>
        <Button
          bgColor={"#0B7A75"}
          color={"white"}
          onClick={(e) => {
            e.preventDefault();
            setDishButton(!dishButton);
          }}
        >
          {dishButton ? "Submit" : "Add a dish!"}
        </Button>
        {dishButton ? (
          <Box bg="white" borderRadius="lg">
            <Box m={8} color="#0B0E3F">
              <VStack spacing={5}>
                <FormControl id="name">
                  <FormLabel>Dish Name</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement pointerEvents="none">
                      {/* <BsPerson color="gray.800" /> */}
                    </InputLeftElement>
                    <Input type="text" size="md" />
                  </InputGroup>
                </FormControl>
                <FormControl id="name">
                  <FormLabel>Serving Size (g)</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement pointerEvents="none">
                      {/* <MdOutlineEmail color="gray.800" /> */}
                    </InputLeftElement>
                    <Input type="text" size="md" />
                  </InputGroup>
                </FormControl>
                <FormControl id="name">
                  <FormLabel>Date</FormLabel>
                  <Input type="datetime-local" size="md" />

                  {/* <Textarea
                         borderColor="gray.300"
                         _hover={{
                           borderRadius: 'gray.300',
                         }}
                         placeholder="message"
                       /> */}
                </FormControl>
              </VStack>
            </Box>
          </Box>
        ) : (
          <>
            
            <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"}>
              <Box
                m={"10px"}
                w="40%"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Jollof_Rice_with_Stew.jpg/1200px-Jollof_Rice_with_Stew.jpg"
                  }
                  w={"100%"}
                  // maxW={"100%"}
                  maxH={"200px"}
                  objectFit={"contain"}
                  alt={property.imageAlt}
                />

                <Box p="6">
                  <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      New
                    </Badge>
                    <Box
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                      ml="2"
                    >
                      Nigerian
                    </Box>
                  </Box>

                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                  >
                    Jollof Rice
                  </Box>

                  <Box>100 Calories/Serving</Box>

                  <Box as="span" ml="2" fontSize="sm" fontWeight={"bold"}>
                    Added 10/21/2023
                  </Box>
                </Box>
              </Box>
              <Box
                m={"10px"}
                w="40%"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image src={"https://upload.wikimedia.org/wikipedia/commons/f/f9/Bolani.jpg"} alt={property.imageAlt} />

                <Box p="6">
                  <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      New
                    </Badge>
                    <Box
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                      ml="2"
                    >
                      Afghanistan
                    </Box>
                  </Box>

                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                  >
                    Bolani
                  </Box>

                  <Box>
                    200 Calories/Serving
                  </Box>

                  <Box as="span" ml="2" fontSize="sm" fontWeight={"bold"}>
                    Added 10/20/2023
                  </Box>
                </Box>
              </Box>
              <Box
                m={"10px"}
                w="40%"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image src={"https://hot-thai-kitchen.com/wp-content/uploads/2023/04/pho-beef-blog.jpg"} alt={property.imageAlt} />

                <Box p="6">
                  <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      New
                    </Badge>
                    <Box
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                      ml="2"
                    >
                      Vietnam
                    </Box>
                  </Box>

                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                  >
                    Pho
                  </Box>

                  <Box>
                    450 Calories/Serving
                  </Box>

                  <Box as="span" ml="2" fontSize="sm" fontWeight={"bold"}>
                    Added 10/17/2023
                  </Box>
                </Box>
              </Box>
              <Box
                m={"10px"}
                w="40%"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image src={property.imageUrl} alt={property.imageAlt} />

                <Box p="6">
                  <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      New
                    </Badge>
                    <Box
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                      ml="2"
                    >
                      {property.beds} beds &bull; {property.baths} baths
                    </Box>
                  </Box>

                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                  >
                    {property.title}
                  </Box>

                  <Box>
                    {property.formattedPrice}
                    <Box as="span" fontSize="sm">
                      / wk
                    </Box>
                  </Box>

                  <Box display="flex" mt="2" alignItems="center">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < property.rating ? "teal.500" : "gray.300"}
                        />
                      ))}
                    <Box as="span" ml="2" fontSize="sm">
                      {property.reviewCount} reviews
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}
