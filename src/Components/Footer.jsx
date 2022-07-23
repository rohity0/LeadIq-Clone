import { Image, Box, Flex, Input, Text, Button, Grid, GridItem, Spacer, Divider, Stack } from "@chakra-ui/react";

export function BottomFotter() {
    return (
        <>
            
            <Box pb={"30px"} mb={"105px"} color={"#576f76"} mt={"60px"} w="90%" margin={"auto"}>
               
                <Flex gap="7rem" m={"auto"}  >
                    <Stack align={"flex-start"}>
                        <Text as={"h3"} mb="22px" lineHeight={"22px"} fontSize={"20px"} fontWeight="500">
                            Why LeadQ
                        </Text>
                        <Text>
                            Features
                        </Text>
                        <Text>
                            Pricing
                        </Text>
                        <Text>
                            Success Stories
                        </Text>
                            
                    </Stack>  
                   
                    <Stack align={"flex-start"}>
                         <Text  as={"h3"} mb="22px" lineHeight={"22px"} fontSize={"20px"} fontWeight="500">
                           Solutions
                        </Text>
                        <Flex gap={"2rem"}>
                            <Stack align={"flex-start"}>
                                     
                        <Text>
                            Sales Leaders
                        </Text>
                        <Text>
                            Revenue Ops
                        </Text>
                        <Text>
                            Sales Professionals

                                </Text>
                                
                            </Stack>
                                    
                    
                    <Stack align={"flex-start"}>
                                  <Text>
                         Eliminating Busy Work
                        </Text>
                        <Text>
                           Strategic Prospecting
                        </Text>
                        <Text>
                           Data Accuracy
                        </Text>
                         </Stack>
                    
                        </Flex>
                    </Stack>
                    
                    <Stack align={"flex-start"}>
                        <Text as={"h3"} mb="22px" lineHeight={"22px"} fontSize={"20px"} fontWeight="500">
                            Resoures
                        </Text>
                        <Text>
                            Blog
                       </Text>
                       <Text>
                            Support
                        </Text>
                        <Text>
                            Carrers
                        </Text>
                        <Text>
                             Press
                        </Text>
                        <Text>
                            Privacy Center
                        </Text>
                    </Stack>
                          
                    <Stack>
                        <Text as={"h3"} mb="22px" lineHeight={"22px"} fontSize={"20px"} fontWeight="500" >
                                  Contact
                        </Text>
                        
                         <Flex gap={"1rem"} >
                            <Image  src="https://assets.website-files.com/60819f9be381394642b5659e/6081c958408db1111a5f6e4b_leadiq-icon-contact-phone.svg" alt="icon" />
                            <Text as="p"> 1-888-653-2347 </Text>
                        </Flex>
                             <Flex gap={"1rem"}>
                         <Image src="https://assets.website-files.com/60819f9be381394642b5659e/6081c9584a52ae9f54e9d71c_leadiq-icon-contact-email.svg" alt="icon" />
                            <Text as="p"> support@leadiq.com</Text>
                        </Flex> 

                    </Stack>
                      


                </Flex>

                
            </Box>
        </>
    )
}