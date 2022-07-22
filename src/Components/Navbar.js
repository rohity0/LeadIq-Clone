import { Link } from "react-router-dom";
import {  Flex, Box, Spacer, Image,  Button} from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
 
} from '@chakra-ui/react'

import { ChevronDownIcon } from "@chakra-ui/icons";

export function Navbar() {
    return (
        <>
        <Box h="65px" padding="12px 12px 0px 12px" bg="#063c4d" color="white">

        <Flex gap="2rem" justifyContent="flex-end"  >
            
                <Link to="/privacy">
                Privacy Center
            </Link>
           
            <Link to="/contact">
                Contact Us
            </Link>
            
            <Link to="/support">Support </Link>
            
            <Box>
                <Link to="/login">
                    Login
                 </Link>
            </Box>
          
            </Flex>
            </Box>  

            <Box position={"sticky"} zIndex="10" top="0" h="60px" bg="#063c4d" color="white">
                <Flex  gap={"2rem"} alignItems={"center"} >
                    <Box marginLeft="2rem">
                        <Image src="https://assets.website-files.com/60819f9be381394642b5659e/6081a538174f4d6bc01bdd27_leadiq-logo.svg"
                            alt="logo" />
                    </Box>
                 <Spacer/>
                    
                    <Menu>
                  <MenuButton as={"Button"} rightIcon={<ChevronDownIcon />}>
                        Why LeadIQ
                   </MenuButton >
                              <MenuList  zIndex={"5"} color="black">
                      <MenuItem>Features</MenuItem>
                      <MenuItem>Success Stories</MenuItem>
                      
                        </MenuList>
                        
                    </Menu>
                      <Menu>
                  <MenuButton as={"Button"} rightIcon={<ChevronDownIcon />}>
                        Solution
                   </MenuButton>
                              <MenuList  zIndex={"5"} color="black">
                      <MenuItem>By Use Case</MenuItem>
                      <MenuItem>Eliminating Busy Work</MenuItem>
                      <MenuItem>Strategic Prospecting</MenuItem>
                       <MenuItem>Data Accuracy</MenuItem>
                      
                   </MenuList>
                     <Menu>
                  <MenuButton as={"Button"} rightIcon={<ChevronDownIcon />}>
                        Resources
                   </MenuButton>
                              <MenuList zIndex={"5"} color="black">
                      <MenuItem>Blog</MenuItem>
                      <MenuItem>Support</MenuItem>
                       <MenuItem>Careers</MenuItem>
                        <MenuItem>Press</MenuItem>
                         <MenuItem>Privacy Center</MenuItem>
                         
                      
                   </MenuList>
                 </Menu>
                 </Menu>

                    <Menu>
                        <MenuButton as={"Button"} rightIcon={<ChevronDownIcon />} >
                            price
                        </MenuButton>
                    </Menu>
                    <Spacer/>
              
                <Button textAlign={"center"} mr={"40px"} borderRadius="100px" bgColor={"#ffd265"} color="black" p="15px 16px" fontSize={"16px"} lineHeight="18px">
                    Book a demo
                </Button>

                </Flex>
               
                 

            </Box>


            </>
      )
  }