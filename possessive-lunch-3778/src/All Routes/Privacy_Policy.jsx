import React from 'react'
import { Text, Stack,Link,ListItem,UnorderedList } from '@chakra-ui/react'
const Privacy_Policy = () => {
  return (
    <div>
      <Stack mt={"2rem"} ml={"4rem"}>
        <Text fontSize={["lg","xl","2xl","4xl"]}>Privacy Policy for IdeaKart</Text>
       <Text fontSize={["sm","md"]}>At www.ideakart.com we consider the privacy of our visitors to be extremely important. This privacy policy document describes in detail the types of personal information is collected and recorded by www.ideakart.com and how we use it.</Text>
       <Text fontWeight={"bold"}>Log Files</Text>
       <Text fontSize={["sm","md"]}>Like many other Web sites, www.ideakart.com makes use of log files. These files merely logs visitors to the site - usually a standard procedure for hosting companies and a part of hosting services's analytics. The information inside the log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and possibly the number of clicks. This information is used to analyze trends, administer the site, track user's movement around the site, and gather demographic information. IP addresses, and other such information are not linked to any information that is personally identifiable..</Text>
       <Text fontWeight={"bold"}>Cookies and Web Beacons</Text>
       <Text fontSize={["sm","md"]}>www.ideakart.com uses cookies to store information about visitors' preferences, to record user-specific information on which pages the site visitor accesses or visits, and to personalize or customize our web page content based upon visitors' browser type or other information that the visitor sends via their browser.</Text>
       <Text fontWeight={"bold"}>DoubleClick DART Cookie</Text>
       <Text fontSize={["sm","md"]}>→ Google, as a third party vendor, uses cookies to serve ads on www.ideakart.com.
→ Google's use of the DART cookie enables it to serve ads to our site's visitors based upon their visit to www.ideakart.com and other sites on the Internet.
→ Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy at the following URL - <Link href='http://www.google.com/privacy_ads.html' color={"blue"}  isExternal> http://www.google.com/privacy_ads.html</Link></Text>
        <Text fontWeight={"bold"}>Our Advertising Partners</Text>
       <Text fontSize={["sm","md"]}>Some of our advertising partners may use cookies and web beacons on our site. Our advertising partners include .......
       <UnorderedList>
        <ListItem>Google</ListItem>
        <ListItem>Amazon</ListItem>
       </UnorderedList>
       </Text>
       <Text fontSize={["sm","md"]}>You may consult this listing to find the privacy policy for each of the advertising partners of www.ideakart.com.</Text>
       <Text fontSize={["sm","md"]}>These third-party ad servers or ad networks use technology in their respective advertisements and links that appear on www.ideakart.com and which are sent directly to your browser. They automatically receive your IP address when this occurs. Other technologies (such as cookies, JavaScript, or Web Beacons) may also be used by our site's third-party ad networks to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on the site.</Text>
       <Text fontSize={["sm","md"]}>www.ideakart.com has no access to or control over these cookies that are used by third-party advertisers.</Text>
       <Text fontWeight={"bold"}>Third Party Privacy Policies</Text>
       <Text fontSize={["sm","md"]}>You should consult the respective privacy policies of these third-party ad servers for more detailed information on their practices as well as for instructions about how to opt-out of certain practices. www.ideakart.com's privacy policy does not apply to, and we cannot control the activities of, such other advertisers or web sites.</Text>
       <Text fontSize={["sm","md"]}>If you wish to disable cookies, you may do so through your individual browser options. More detailed information about cookie management with specific web browsers can be found at the browsers' respective websites.</Text>
       <Text fontWeight={"bold"}>Children's Information</Text>
       <Text fontSize={["sm","md"]}>We believe it is important to provide added protection for children online. We encourage parents and guardians to spend time online with their children to observe, participate in and/or monitor and guide their online activity. www.ideakart.com does not knowingly collect any personally identifiable information from children under the age of 13. If a parent or guardian believes that www.ideakart.com has in its database the personally-identifiable information of a child under the age of 13, please contact us immediately (using the contact in the first paragraph) and we will use our best efforts to promptly remove such information from our records.</Text>
       <Text fontWeight={"bold"}>Online Privacy Policy Only</Text>
       <Text fontSize={["sm","md"]}>This privacy policy applies only to our online activities and is valid for visitors to our website and regarding information shared and/or collected there. This policy does not apply to any information collected offline or via channels other than this website.</Text>
       <Text fontWeight={"bold"}>Consent</Text>
       <Text fontSize={["sm","md"]}>By using our website, you hereby consent to our privacy policy and agree to its terms.</Text>
       
       </Stack>
    </div>
  )
}

export default Privacy_Policy
