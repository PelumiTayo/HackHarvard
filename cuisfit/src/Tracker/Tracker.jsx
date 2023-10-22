import React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  Image,
  Text,
  Badge,
  IconButton,
  Input,
  VStack,
  Tooltip,
  FormControl,
  AspectRatio,
  FormLabel,
  InputGroup,
  InputLeftElement,
  createIcon,
  Textarea,
  Button,
  Stack,
} from "@chakra-ui/react";

import { StarIcon } from "@chakra-ui/icons";

export default function Tracker() {
  const [mockInput, setMockInput] = useState({
    image: "",
    country: "",
    dishName: "",
    serving: "",
    date: "",
  });
  const [subError, setSubError] = useState("");

  console.log(subError);
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
          width={"full"}
          overflow={"hidden"}
        >
          <Image
            alt={"Hero Image"}
            fit={"cover"}
            w={"100%"}
            h={"100%"}
            objectFit={"contain"}
            src={"cultureatfood 1.png"}
          />
        </Box>
      </Box>
      <Box color={"black"} textAlign={"center"} w={"50%"}>
        <Text
          color="#7E0000"
          transform={"translateX(-50%) translateY(-50%)"}
          fontSize="2xl"
          fontWeight={"extrabold"}
        >
          Global Flavors, Personal Goals - Track Your Culinary Journey!
        </Text>
        <Image
          src="cultureat 1.png"
          position={"absolute"}
          boxSize="150px"
          left={"1300px"}
          top={"60px"}
        />
        <Button
          bgColor={"#0B7A75"}
          color={"white"}
          onClick={(e) => {
            e.preventDefault();
            if (
              (dishButton === true &&
                mockInput.dishName &&
                mockInput.image &&
                mockInput.date &&
                mockInput.country &&
                mockInput.serving) ||
              dishButton == false
            ) {
              setDishButton(!dishButton);
            }
            if (dishButton == true) {
              setSubError("Please provide an input to all fields.");
            }
          }}
        >
          {dishButton ? "Submit" : "Add a dish!"}
        </Button>
        {dishButton ? (
          <Box bg="white" borderRadius="lg">
            <Text color={"red"}>{subError}</Text>
            <Box m={8} color="#0B0E3F">
              <VStack spacing={5}>
                <FormControl id="name">
                  <FormLabel>Dish Name</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <Input
                      onChange={(e) =>
                        setMockInput((prevState) => ({
                          ...prevState,
                          dishName: e.target.value,
                        }))
                      }
                      value={mockInput.dishName}
                      type="text"
                      size="md"
                    />
                  </InputGroup>
                </FormControl>
                <FormControl id="name">
                  <FormLabel>Country</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <Input
                      onChange={(e) =>
                        setMockInput((prevState) => ({
                          ...prevState,
                          country: e.target.value,
                        }))
                      }
                      value={mockInput.country}
                      type="text"
                      size="md"
                    />
                  </InputGroup>
                </FormControl>
                <FormControl id="name">
                  <Tooltip
                    label="1g = 0.00423 Cups, 1g = 0.03527oz "
                    fontSize="md"
                  >
                    <FormLabel>Serving Size (g) (between 1 and 2000)</FormLabel>
                  </Tooltip>
                  <InputGroup borderColor="#E0E1E7">
                    <Input
                      onChange={(e) =>
                        setMockInput((prevState) => ({
                          ...prevState,
                          serving: e.target.value,
                        }))
                      }
                      value={mockInput.serving}
                      type="number"
                      min="1"
                      max="2000"
                      size="md"
                    />
                  </InputGroup>
                </FormControl>
                <FormControl id="name">
                  <FormLabel>Image Url</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <Input
                      onChange={(e) =>
                        setMockInput((prevState) => ({
                          ...prevState,
                          image: e.target.value,
                        }))
                      }
                      value={mockInput.image}
                      type="text"
                      size="md"
                    />
                  </InputGroup>
                </FormControl>
                <FormControl id="name">
                  <FormLabel>Date</FormLabel>
                  <Input
                    onChange={(e) =>
                      setMockInput((prevState) => ({
                        ...prevState,
                        date: e.target.value,
                      }))
                    }
                    value={mockInput.date}
                    type="date"
                    size="md"
                  />
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
                <Image
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/f/f9/Bolani.jpg"
                  }
                  w={"100%"}
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

                  <Box>200 Calories/Serving</Box>

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
                <Image
                  src={
                    "https://hot-thai-kitchen.com/wp-content/uploads/2023/04/pho-beef-blog.jpg"
                  }
                  w={"100%"}
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

                  <Box>450 Calories/Serving</Box>

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
                <Image
                  src={
                    mockInput.image
                      ? mockInput.image
                      : "https://cdni.iconscout.com/illustration/premium/thumb/error-404-4279234-3569464.png"
                  }
                  alt={"Image of ethnic food"}
                  w={"100%"}
                  maxH={"200px"}
                  objectFit={"contain"}
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
                      {mockInput.country ? mockInput.country : "unknown"}
                    </Box>
                  </Box>

                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                  >
                    {mockInput.dishName ? mockInput.dishName : "Unknown"}
                  </Box>

                  <Box>
                    {mockInput.serving
                      ? `${mockInput.serving} Calories/Serving`
                      : "0 Calories/Serving"}
                  </Box>

                  <Box as="span" ml="2" fontSize="sm" fontWeight={"bold"}>
                    {mockInput.date
                      ? `Added ${mockInput.date}`
                      : mockInput.date}
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
