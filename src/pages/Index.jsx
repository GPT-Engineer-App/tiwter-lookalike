import React from "react";
import { ChakraProvider, Box, Flex, VStack, HStack, Text, Input, InputGroup, InputLeftElement, Button, Avatar, IconButton, Divider, Spacer, Heading, Stack, Container } from "@chakra-ui/react";
import { FaTwitter, FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaList, FaUserAlt, FaSearch, FaFeatherAlt } from "react-icons/fa";

const Tweet = ({ username, handle, content, avatar }) => (
  <Box paddingY={2}>
    <HStack spacing={3}>
      <Avatar src={avatar} />
      <VStack align="start">
        <Text fontWeight="bold">
          {username}{" "}
          <Text as="span" fontWeight="normal" color="gray.500">
            @{handle}
          </Text>
        </Text>
        <Text>{content}</Text>
      </VStack>
    </HStack>
  </Box>
);

const Index = () => {
  return (
    <ChakraProvider>
      <Container maxW="container.xl" py={5}>
        <Flex>
          {/* Sidebar */}
          <VStack align="start" spacing={4} mr={8}>
            <IconButton icon={<FaTwitter />} fontSize="2xl" variant="ghost" aria-label="Twitter Logo" />
            <IconButton icon={<FaHome />} fontSize="2xl" variant="ghost" aria-label="Home" />
            <IconButton icon={<FaHashtag />} fontSize="2xl" variant="ghost" aria-label="Explore" />
            <IconButton icon={<FaBell />} fontSize="2xl" variant="ghost" aria-label="Notifications" />
            <IconButton icon={<FaEnvelope />} fontSize="2xl" variant="ghost" aria-label="Messages" />
            <IconButton icon={<FaBookmark />} fontSize="2xl" variant="ghost" aria-label="Bookmarks" />
            <IconButton icon={<FaList />} fontSize="2xl" variant="ghost" aria-label="Lists" />
            <IconButton icon={<FaUserAlt />} fontSize="2xl" variant="ghost" aria-label="Profile" />
            <Button leftIcon={<FaFeatherAlt />} colorScheme="twitter" size="lg" borderRadius="9999px">
              Tweet
            </Button>
          </VStack>

          {/* Feed */}
          <VStack flex={1} spacing={0} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box px={4} py={3} width="100%" bg="blue.500" color="white">
              <Heading size="md">Home</Heading>
            </Box>
            <Box p={4} width="100%">
              <Stack spacing={4}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
                  <Input type="text" placeholder="Search Twitter" />
                </InputGroup>
                <Divider />
                <Tweet username="John Doe" handle="johndoe" content="Just setting up my twttr" avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwZXJzb258ZW58MHx8fHwxNzA5NDI3ODQzfDA&ixlib=rb-4.0.3&q=80&w=1080" />
                <Tweet username="Jane Smith" handle="janesmith" content="Hello Twitter! #myfirstTweet" avatar="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxwZXJzb258ZW58MHx8fHwxNzA5NDI3ODQzfDA&ixlib=rb-4.0.3&q=80&w=1080" />
                {/* More tweets */}
              </Stack>
            </Box>
          </VStack>

          {/* Widgets */}
          <VStack align="start" spacing={4} ml={8}>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
              <Input type="text" placeholder="Search Twitter" />
            </InputGroup>
            {/* Trending, Who to follow, etc. */}
          </VStack>
        </Flex>
      </Container>
    </ChakraProvider>
  );
};

export default Index;
