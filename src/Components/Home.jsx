import { Image, Box, Flex, Input, Text, Button, Grid, GridItem, Spacer } from "@chakra-ui/react";
import { Navbar } from "./Navbar";
 
export function Home() {
    return (
        <>
           <Navbar />
        <Box   bgColor="#063c4d">
            <Flex w={"100%"}  p={"15px"}>
                <Box  w="45%" ml="50px" >
                    <Text fontSize='6xl'fontWeight={"bold"} mb="8px" color={"white"} >
                        Prospect Smarter </Text>
                    
                    <Text as="p" fontSize={"20px"} color={"white"}  width="80%" margin={"auto"} textAlign="left" mb="30px" fontWeight={"bold"} >
                        LeadIQ makes sales teams more efficient at outbound
                        prospecting by capturing and
                        sequencing contact information
                        with one click.
                    </Text>
                    <Flex justifyContent="center" alignItems="center"  >
                              <Input bgColor={"white"} borderRadius="80px" p="20px" h={"60px"} placeholder='Enter your work email' size='lg' width={"80%"} />
                <Button h="50px" bg={"#ffd265"} borderRadius="80px" ml={"-125px"}>Start Free</Button>
                    </Flex>
                    <Text color={"grey"} fontSize='10px'mb={"50px"} fontWeight="bold" >
                        By sigining up, you agree to the <span style={{color: "#1e9cce"}} >
                        Terms of use</span> and <span  style={{color: "#1e9cce"}}> Privacy policy.</span>
                    </Text>
                    <Grid mt="30px" w={"70%"} m="auto" templateColumns='repeat(3, 1fr)' gap={8}>
                        <GridItem >
                          <Image src='https://assets.website-files.com/6220f0eff47bc4199f479ed8/6220f0eff47bc4aaca47a037_Clari-01.svg' alt='Dan Abramov' />
                        </GridItem>
                        <GridItem  >
                          <Image pt={"7px"} src='https://assets.website-files.com/6220f0eff47bc4199f479ed8/6220f0eff47bc45bcd479f25_leadiq-logo-showpad.svg' alt='Dan Abramov' />
                        </GridItem>
                        <GridItem>
                            <Image src='https://assets.website-files.com/6220f0eff47bc4199f479ed8/6220f0eff47bc4260147a03f_walkme-client-logo-03.svg' alt="hello"/>
                        </GridItem>
                        <GridItem>
                            <Image  src="https://assets.website-files.com/6220f0eff47bc4199f479ed8/6220f0eff47bc4431847a039_Segment-client-logo-04.svg" alt="hello" />
                        </GridItem>
                        <GridItem>
                            <Image  src="https://assets.website-files.com/6220f0eff47bc4199f479ed8/6220f0eff47bc4404a479f28_leadiq-logo-sitecore.svg" alt="hello" />
                        </GridItem>
                        <GridItem>
                            <Image  src="https://assets.website-files.com/6220f0eff47bc4199f479ed8/6220f0eff47bc47c1d479f24_leadiq-logo-mulesoft.svg" alt="hello" />
                        </GridItem>
                       
                   </Grid>

                </Box>
                <Spacer/>
                {/* vsdvosjvoj */}
                <Box  mt={"20px"} float={"right"} position="relative"
                >
                    <Box >
                    <Image zIndex={"0"} height="500px" src="https://assets.website-files.com/60819f9be381394642b5659e/628e636de30eb30ee9fe126f_leadiq-background-hero-dark.svg" />
                    </Box>
                    <Box zIndex={"1"} mr="-10px" right="0" position="absolute" top="0">
                      <Image src="https://assets.website-files.com/60819f9be381394642b5659e/628e790730e8f2c418c890ae_interface-background-p-800.png" alt="icon" />
                    </Box>
                    <Box zIndex={"2"} position="absolute" top="-10" left="-135px">
                      <Image width="280px"  src="https://assets.website-files.com/60819f9be381394642b5659e/628e78dea1a51b019def8fc3_prospector-p-500.png" alt="icon" />
                    </Box>
                    
                   


                </Box>
                </Flex>
            </Box>
            
            <Box padding={"100px 24px"} overflow={"hidden"} pt="155px" pb="155px" bgColor={"#f4fbfc"}>
                <Box textAlign={"center"} mr="auto" ml={"auto"} maxW={"650px"}>
                   <Text mt={"0px"} mb="10px" fontSize={"38px"} lineHeight="54px" fontWeight={"500"}  as={"h2"}> Sales teams spend too much time on low value activities. </Text>
                </Box>

                <Box maxW={"1225px"} mr="auto" ml={"auto"}  boxSizing="border-box">
                    <Flex>
                        <Box w={"40%"} border={"1px solid"} textAlign="start">
                            <Text mb={"10px"} fontSize="24px" lineHeight={'34px'} fontWeight="500" as={"h3"}  >
                             LeadIQ allows you to:
                            </Text> 
                            <Flex alignItems="center" mt="30px">
                                <Box  w={"64px"} h="64px" mr="24px" p="11px" justifyContent={"flex-start"} alignItems="center" borderStyle={"solid"} borderWidth="1px" borderColor={"#dae2e3"} borderRadius="16px" bgColor={"#fff"}>
                                      <Image verticalAlign={"middle"} maxW={"100%"} src="https://assets.website-files.com/60819f9be381394642b5659e/6081b03989e2987115690e4b_leadiq-activities-icon-eliminates.svg" alt="icon" />
                                </Box>
                                <Text  fontSize={"20px"} as={"p"}> Eliminate busy work </Text>
                            </Flex>
                            <Flex  alignItems="center" mt="30px">
                                <Box  w={"64px"} h="64px" mr="24px" p="11px" justifyContent={"flex-start"} alignItems="center" borderStyle={"solid"} borderWidth="1px" borderColor={"#dae2e3"} borderRadius="16px" bgColor={"#fff"}>
                                      <Image verticalAlign={"middle"} maxW={"100%"} src="https://assets.website-files.com/60819f9be381394642b5659e/6081b0396fa45686e75d2ecc_leadiq-activities-icon-enriches.svg" alt="icon" />
                                </Box>
                                <Text  w="70%" fontSize={"20px"} lineHeight="30px" as={"p"}> Enrich and aggregate your prospect's data</Text>
                            </Flex>
                            <Flex  alignItems="center" mt="30px">
                                <Box  w={"64px"} h="64px" mr="24px" p="11px" justifyContent={"flex-start"} alignItems="center" borderStyle={"solid"} borderWidth="1px" borderColor={"#dae2e3"} borderRadius="16px" bgColor={"#fff"}>
                                      <Image verticalAlign={"middle"} maxW={"100%"} src="https://assets.website-files.com/60819f9be381394642b5659e/6081b03925595b6cd5dd0861_leadiq-activities-icon-makes.svg" alt="icon" />
                                </Box>
                                <Text fontSize={"20px"} w="80%" as={"p"}> Make prioritization and authentic personalization easier </Text>
                            </Flex>

                            <Button mt={"35px"} ml="10px" borderColor="transparent" borderRadius="100px" bgColor={"#ffd265"} boxShadow="4px 4px 16px 0 rgb(255 210 101 / 16%)" color={ "#063c4d"} fontWeight="500" textAlign={"center"} lineHeight="20px"  fontSize={"18px"} p="30px 40px 30px 40px" >
                                Browse features
                            </Button>
                            
                        </Box>
                    </Flex>
                </Box>
            </Box>
            </>
    )
}