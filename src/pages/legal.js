import React from 'react';

import { Box, Flex, Heading, Text } from '@chakra-ui/core';
import Layout from '../components/Layout';

export default function About() {
  const legalData = [
    {
      id: 'terms',
      title: 'Terms and Conditions',
      body: `Cupcake jelly beans chocolate apple pie cheesecake chupa chups cake. Jujubes bear claw cake sweet roll wafer gummi bears cotton candy. Marshmallow halvah jelly-o cotton candy halvah lollipop biscuit dragée. Topping biscuit gingerbread pastry lemon drops. Gingerbread chocolate bar caramels cookie powder soufflé cake. Chocolate cake dragée sugar plum gummies cheesecake chupa chups. Bear claw cotton candy powder gummies cheesecake. Macaroon marshmallow sweet lollipop chocolate bar toffee. Chocolate cake topping wafer chupa chups. Macaroon pastry cookie dessert chocolate cake. Cake oat cake soufflé muffin cotton candy carrot cake cheesecake liquorice. Ice cream dessert sugar plum topping pie pie jelly-o. Jelly candy tootsie roll brownie cookie topping pudding wafer.`,
    },
    {
      id: 'privacy',
      title: 'Privacy Policy',
      body: `Pudding sweet roll candy canes cheesecake lollipop soufflé. Candy sesame snaps pastry halvah liquorice macaroon. Gummi bears cake sweet caramels bonbon. Jelly liquorice toffee ice cream sweet oat cake biscuit cotton candy cheesecake. Gingerbread tiramisu tootsie roll topping sweet pudding carrot cake chupa chups. Gummi bears halvah gingerbread oat cake pudding chocolate bar. Muffin bear claw chocolate bar. Sugar plum powder cheesecake toffee dessert biscuit cake chupa chups halvah. Candy canes jelly-o toffee candy danish pudding. Lemon drops cake fruitcake. Pastry marshmallow tiramisu. Pastry topping tart dragée gummi bears cotton candy. Sweet roll cheesecake donut marshmallow. Sugar plum jelly-o chocolate cake.`,
    },
  ];
  return (
    <Layout p="4">
      <Flex justify="center" direction="column" align="center">
        <Heading as="h1" textAlign="center">
          Legal
        </Heading>
        <Box maxWidth="800px" w="90%" m="3em">
          {legalData.map(entry => (
            <>
              <Heading
                id={entry.id}
                as="h2"
                textAlign="left"
                fontSize="1.5rem"
                key={entry.title}
              >
                {entry.title}
              </Heading>
              <Text fontSize="0.75rem" pt="1em" pb="2em">
                {entry.body}
              </Text>
            </>
          ))}
        </Box>
      </Flex>
    </Layout>
  );
}
