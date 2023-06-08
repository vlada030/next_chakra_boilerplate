"use client";

import { Flex, Center, Spacer, HStack, Button } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { Image } from "@chakra-ui/next-js";
import logoUrl from "@/public/logo.png"

const Navigation = () => {
  const navList = [
    {
      link: "/posts",
      title: "Posts",
    },
    {
      link: "/about",
      title: "About",
    },
  ];
  return (
    <Flex
      bgColor="#FFFFFF"
      w="full"
      px="3.75rem"
      zIndex="6"
      borderBottom="1px solid #EAE8E8"
      overflow="hidden"
      h="3.5rem"
    >
      <Center flexShrink="0">
        <Link href="/" py="1.1rem" pr="2rem">
         <Image src={logoUrl} w="3rem" alt="logo" />
       </Link>
      </Center>

      <Spacer />

      <HStack gap="2rem">
        {navList.map((item, ind) => {
          return (
            <Link
              key={ind}
              href={item.link}
              isExternal={item.title === "Free trial" ? true : null}
              fontFamily="Plus Jakarta Sans Bold, sans-serif"
              fontSize="1rem"
              borderBottom={"1px solid #CDEE24"}
              // borderBottom={
              //   location.pathname === item.link
              //     ? "1px solid #CDEE24"
              //     : "1px solid transparent"
              // }
              //className={location.pathname !== item.link && "animateLink"}
              _hover={{ textDecoration: "none" }}
              whiteSpace="nowrap"
            >
              {item.title}
            </Link>
          );
        })}
        <HStack gap="1.375rem">
          <Link
            href="/login"
            fontFamily="Plus Jakarta Sans Bold, sans-serif"
            fontSize="1rem"
            color="limeText"
            className="animateLink"
            _hover={{ textDecoration: "none" }}
          >
            Log in
          </Link>
          <Button as={Link} href="/get-started" size="sm">
            Get started
          </Button>
        </HStack>
      </HStack>
    </Flex>
  );
};

export default Navigation;
