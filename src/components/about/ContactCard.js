import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useTheme,
} from '@chakra-ui/core';
import React from 'react';
import Image from '../../components/Image.js';
import SubmitBusiness from '../Forms/SubmitBusiness.js';

const CardContent = ({ title, blurb, publicId, transforms = {} }) => {
  const theme = useTheme();
  return (
    <>
      {publicId ? (
        <CardImage publicId={publicId} transforms={transforms} />
      ) : (
        <NoImage />
      )}
      <Flex
        w="100%"
        direction="column"
        p="4"
        align="center"
        justify="center"
        textAlign="center"
        backgroundColor={theme.colors['rbb-black-100']}
      >
        <Heading
          color="white"
          fontFamily={theme.fonts.heading}
          as="h5"
          size="md"
        >
          {title}
        </Heading>
        <Text
          p="2"
          fontSize={theme.fontSizes.paragraph}
          fontFamily={theme.fonts.heading}
          color={theme.colors['rbb-white']}
        >
          {blurb}
        </Text>
      </Flex>
    </>
  );
};

// @TODO :: Add a fallback image to be displayed incase of no image
const NoImage = () => (
  <Box maxW="342px" maxH="220px" bg="#414A4C">
    <Flex justify="center" align="center">
      <p>No image available</p>
    </Flex>
  </Box>
);

// @TODO :: Replace with new Image component
const CardImage = ({ publicId, transforms }) => {
  return (
    <Flex w="100%" minH="220px" position="relative" overflow="hidden">
      <Image publicId={publicId} transforms={{ ...transforms }} />
    </Flex>
  );
};

// @TODO :: Add proper content to this modal. Probably pull this out into its own file seeing as its going to be a form
const ModalForm = ({ isOpen, onClose, title }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <SubmitBusiness />
      </ModalBody>
      <ModalFooter>
        <Button variantColor="blue" m={3} onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

const ModalCard = ({
  publicId,
  modalTitle,
  title,
  blurb,
  margin,
  transforms = {},
}) => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const focusRef = React.useRef();

  return (
    <>
      <Flex
        as="a"
        href="#"
        ref={focusRef}
        maxH="322px"
        direction="column"
        onClick={onOpen}
        marginBottom={margin}
      >
        <CardContent
          title={title}
          blurb={blurb}
          publicId={publicId}
          transforms={transforms}
        />
      </Flex>
      <ModalForm isOpen={isOpen} title={modalTitle} onClose={onClose} />
    </>
  );
};

const MailtoCard = ({ publicId, email, title, blurb, transforms = {} }) => (
  <Flex
    as="a"
    href={`mailto:${email}`}
    isExternal
    maxH="322px"
    direction="column"
  >
    <CardContent
      title={title}
      blurb={blurb}
      publicId={publicId}
      transforms={transforms}
    />
  </Flex>
);

const VolunteerCard = ({ publicId, title, blurb, transforms = {} }) => (
  <Flex
    as={Link}
    href="https://discord.com/invite/272XMuv"
    isExternal
    maxH="322px"
    direction="column"
  >
    <CardContent
      title={title}
      blurb={blurb}
      publicId={publicId}
      transforms={transforms}
    />
  </Flex>
);

/**
 * Contact Card for Business Owner - General Inquiry - Volunteers. Default renders the VolunteerCard
 *
 * @param {string} title - The cards title
 * @param {string} blurb - The cards blurb
 * @param {string} publicId - The images url
 * @param {string} cloudName - The alt text for the image
 * @param {boolean} modalCard - If doesModal then card with modal will be displayed
 * @param {boolean} mailtoCard - If doesMailto then card with mailto link will be displayed
 * @param {string} modalTitle - The title to be displayed in the modal
 * @param {string} email - The RBB support email address
 * @param {object} transforms - Image transformations
 */
const ContactCard = ({
  title,
  blurb,
  publicId,
  modalCard,
  mailtoCard,
  modalTitle,
  email,
  transforms = {},
}) => {
  if (modalCard) {
    return (
      <ModalCard
        modalTitle={modalTitle}
        title={title}
        blurb={blurb}
        publicId={publicId}
        transforms={transforms}
      />
    );
  }
  if (mailtoCard) {
    return (
      <MailtoCard
        email={email}
        title={title}
        blurb={blurb}
        publicId={publicId}
        transforms={transforms}
      />
    );
  }
  return (
    <VolunteerCard
      title={title}
      blurb={blurb}
      publicId={publicId}
      transforms={transforms}
    />
  );
};

export default ContactCard;
