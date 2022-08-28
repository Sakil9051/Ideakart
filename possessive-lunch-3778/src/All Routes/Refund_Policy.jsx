import React from 'react'
import { Text, Stack,Link,ListItem,UnorderedList } from '@chakra-ui/react'
const Refund_Policy = () => {
  return (
    <div>
      <Stack mt={"2rem"} ml={"4rem"}>
        <Text fontSize={["lg","xl","2xl","4xl"]}>Return & Refund Policy</Text>
       <Text fontSize={["sm","md","lg","xl"]}>Thanks for shopping at Ideakart.com.</Text>
       <Text fontSize={["sm","md","lg","xl"]}>If you are not entirely satisfied with your purchase, we're here to help.</Text>
       <Text fontSize={["lg","xl","2xl","4xl"]}>Returns</Text>
       <Text fontSize={["sm","md","lg","xl"]}>You have 7 calendar days to return an item from the date you received it.</Text>
       <Text fontSize={["sm","md","lg","xl"]}>To be eligible for a return, your item must be unused and in the same condition that you received it.</Text>
       <Text fontSize={["sm","md","lg","xl"]}>Your item must be in the original packaging.</Text>
       <Text fontSize={["sm","md","lg","xl"]}>Your item needs to have the receipt or proof of purchase.</Text>
       <Text fontSize={["lg","xl","2xl","4xl"]}>Refunds</Text>
       <Text fontSize={["sm","md","lg","xl"]}>Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item.</Text>
       <Text fontSize={["sm","md","lg","xl"]}>If your return is approved, we will initiate a refund to your method of payment(Credit Card/Debit Card/Bank etc).</Text>
       <Text fontSize={["sm","md","lg","xl"]}>You will receive the credit within a certain amount of days, depending on your banks policies.</Text>
       <Text fontSize={["lg","xl","2xl","4xl"]}>Shipping</Text>
       <Text fontSize={["sm","md","lg","xl"]}>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non­refundable.

If you receive a refund, the cost of return shipping will be deducted from your refund.</Text>
       <Text fontSize={["lg","xl","2xl","4xl"]}>Contact Us</Text>
       <Text fontSize={["sm","md","lg","xl"]}>If you have any questions on how to return your item to us, contact us at 9650122736</Text>
       
       </Stack>
    </div>
  )
}

export default Refund_Policy
