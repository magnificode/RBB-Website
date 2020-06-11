import {
  Box,
  ButtonGroup,
  Flex,
  Heading,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useDisclosure,
  useTheme,
} from '@chakra-ui/core';
import React, { useState } from 'react';
import Button from '../components/Button';
import ContentBlock from '../components/ContentBlock';
import SubmitAlly from '../components/Forms/SubmitAlly';
import SubmitBusiness from '../components/Forms/SubmitBusiness';
import Layout from '../components/Layout';

const InfoModal = ({ isOpen, onClose, modalType }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalCloseButton />
      <ModalBody>
        {modalType === 'ally' && <SubmitAlly />}
        {modalType === 'business' && <SubmitBusiness />}
      </ModalBody>
      <ModalFooter>
        <Button onClick={onClose}>Close</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default () => {
  const theme = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalType, setModalType] = useState(null);

  const handleType = newType => {
    setModalType(newType);
    onOpen();
  };

  return (
    <Layout>
      <Flex direction="column" align="center" justify="center">
        <ContentBlock
          layout="left"
          imageSource="assets/home-header-bg" // @TODO :: Pass this to cloudinary
          backgroundColor="#000"
          backgroundMode="fade"
        >
          <Box pt={16} pb={[72, 72, 145]} color="white">
            <Heading mb={theme.spacing.lg}>
              <Text
                lineHeight="0.5"
                fontWeight="900"
                fontSize={['50px', '50px', '50px', '72px']}
                fontFamily={theme.fonts['heading-slab']}
                textTransform="uppercase"
              >
                Rebuild
              </Text>
              <Text
                fontSize={['100px', '100px', '100px', '150px']}
                fontWeight="900"
                lineHeight="1"
                fontFamily={theme.fonts['heading-slab']}
                textTransform="uppercase"
              >
                Black
              </Text>
              <Text
                lineHeight="0.5"
                fontWeight="900"
                fontSize={['50px', '50px', '50px', '72px']}
                fontFamily={theme.fonts['heading-slab']}
                textTransform="uppercase"
              >
                Businesses
              </Text>
            </Heading>
            <Text
              fontSize={theme.fontSizes.lg}
              fontFamily={theme.fonts.heading}
              lineHeight="1.25"
              py={8}
              maxW="540px"
            >
              Black-Owned businesses need <strong>us</strong>. In a time of
              social unrest and economic uncertainty, we are called to Action!
              Let’s Do our Part.
            </Text>
            <ButtonGroup spacing={4} mt={theme.spacing.base}>
              <Button
                variant="cta"
                m={3}
                h="auto"
                px="30px"
                onClose={onClose}
                onClick={() => handleType('business')}
              >
                I need help
              </Button>
              <Button
                as={Link}
                href="/allies"
                variant="primary"
                style={{ textDecoration: 'none' }}
                m={3}
                h="auto"
                px="30px"
              >
                I can help
              </Button>
            </ButtonGroup>
          </Box>
        </ContentBlock>

        <ContentBlock
          layout="right"
          imageSource="assets/cta1-bg" // @TODO :: Pass this to cloudinary
          backgroundColor="#fff"
          backgroundMode="fade"
          backgroundOpacity="0.85"
        >
          <Box py={[72, 72, 190]} color={theme.colors['rbb-black-100']}>
            <Heading
              mb={theme.spacing.lg}
              fontFamily={theme.fonts['heading-slab']}
              fontWeight="900"
              fontSize="40px"
              lineHeight="1.2"
              textTransform="uppercase"
            >
              Business Owners,
              <br />
              We&rsquo;re here for you.
            </Heading>
            <Box fontSize={theme.fontSizes.lg} maxW="540px">
              <Text
                fontFamily={theme.fonts.heading}
                lineHeight="1.25"
                pb={theme.spacing.base}
              >
                We want to restore wealth to Black communities by supporting you
                and your business. Whether your business is in urgent need or
                you are doing well, we're here to help.
              </Text>
              <Text fontFamily={theme.fonts.heading} lineHeight="1.25">
                You can add your business to our online directory of Black-Owned
                businesses. You can also contact one of our registered Allies
                directly for help. <strong>We are all in this together.</strong>
              </Text>
            </Box>
            <ButtonGroup spacing={4} mt={theme.spacing.base}>
              <Button
                variant="primary"
                maxW="230px;"
                m={3}
                h="auto"
                px="30px"
                onClose={onClose}
                onClick={() => handleType('business')}
              >
                Add Business
              </Button>
              <Button
                variant="secondary"
                m={3}
                h="auto"
                px="30px"
                as={Link}
                href="/allies"
              >
                See Allies
              </Button>
            </ButtonGroup>
          </Box>
        </ContentBlock>

        <ContentBlock
          layout="left"
          imageSource="assets/cta2-bg" // @TODO :: Pass this to cloudinary
          backgroundColor="#000"
          backgroundMode="fade"
        >
          <Box py={[72, 72, 190]} color={theme.colors['rbb-white']}>
            <Heading
              mb={theme.spacing.lg}
              fontFamily={theme.fonts['heading-slab']}
              fontWeight="900"
              fontSize="40px"
              lineHeight="1.2"
              textTransform="uppercase"
            >
              How to help
            </Heading>
            <Box fontSize={theme.fontSizes.lg} maxW="540px">
              <Text
                fontFamily={theme.fonts.heading}
                lineHeight="1.25"
                pb={theme.spacing.base}
              >
                View our growing list of Black-Owned businesses across the
                nation! Find Black-Owned businesses in your area or register any
                that we’re missing.
              </Text>
              <Text fontFamily={theme.fonts.heading} lineHeight="1.25">
                If you have specific skills you&rsquo;d like to offer, you can
                register as an Ally.
              </Text>
            </Box>
            <ButtonGroup spacing={4} mt={theme.spacing.base}>
              <Button
                variant="primary"
                maxW="230px"
                m={3}
                h="auto"
                px="30px"
                onClose={onClose}
                onClick={() => handleType('business')}
              >
                Add Business
              </Button>
              <Button
                variant="secondary"
                m={3}
                h="auto"
                px="30px"
                as={Link}
                href="/allies"
              >
                See Allies
              </Button>
            </ButtonGroup>
          </Box>
        </ContentBlock>

        <ContentBlock
          layout="full"
          imageSource="assets/cta3-bg"
          backgroundColor={theme.colors['rbb-white']}
        >
          <Box py={[140, 140, 200]} maxW="574px">
            <Heading
              mb={theme.spacing.lg}
              fontFamily={theme.fonts['heading-slab']}
              fontWeight="900"
              fontSize="40px"
              lineHeight="1.2"
              textTransform="uppercase"
            >
              Do you want to help Rebuild Black Business?
            </Heading>
            <Text
              fontFamily={theme.fonts.heading}
              lineHeight="1.25"
              pb={theme.spacing.base}
            >
              Join our group of volunteers. We’re developers, designers,
              marketers, project managers, policy makers, and web professionals.
              Welcome!
            </Text>
            <Button
              variant="cta"
              w="100%"
              onClose={onClose}
              onClick={() => handleType('ally')}
            >
              Join us
            </Button>
          </Box>
        </ContentBlock>
      </Flex>
      <InfoModal isOpen={isOpen} modalType={modalType} onClose={onClose} />
    </Layout>
  );
};
