import React, { useState, useEffect } from 'react';
import { useLocalStorage } from 'react-use';

import {
  Button,
  Flex,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/core';

import { AllyFeed, AllyFilter, PageHero, Image, Layout } from '../components';

export default function Allies(props) {
  const [allyFilters, setAllyFilters] = useState({
    skill: '',
    location: '',
  });

  const [acceptedTAC, setAcceptedTAC] = useLocalStorage('acceptedTAC', false);

  const pageSubtitle = (
    <p>
      These Allies are offering their skills to help Black-Owned businesses.
      Whether you need to rebuild or stay afloat, an Ally can help. Search for
      Allies by skill or location and contact them directly.
    </p>
  );

  const heroBackgroundImageUrl =
    '//res.cloudinary.com/rebuild-black-business/image/upload/c_scale,f_auto,h_0.6,q_auto/v1/assets/ally-background';

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (!acceptedTAC) onOpen();
  }, [acceptedTAC, onOpen]);

  return (
    <Layout>
      <Flex align="center" justify="center" direction="column">
        <PageHero
          title="Allies"
          subtitle={pageSubtitle}
          heroImageUrl={heroBackgroundImageUrl}
          hasFadedHeroImage
        />
        <AllyFilter onSearch={setAllyFilters} />
        {acceptedTAC ? (
          <AllyFeed filters={allyFilters} />
        ) : (
          <>
            <Modal
              isOpen={isOpen}
              onClose={onClose}
              size="lg"
              closeOnOverlayClick={false}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader padding={0} margin={0}>
                  <Image
                    alt="Person with a bandana over their mouth, holding one arm in the air"
                    publicId="assets/ally-sign-up"
                  />
                </ModalHeader>
                <ModalBody fontSize="lg" mt="8">
                  Please read and accept our{' '}
                  <Link href="/legal#terms" color="rbb-orange" target="_blank">
                    terms and conditions
                  </Link>{' '}
                  to access our Ally list and contacts.
                </ModalBody>

                <ModalFooter>
                  <Button
                    margin="0 auto"
                    variantColor="orange"
                    rightIcon="check"
                    onClick={() => {
                      setAcceptedTAC(true);
                      onClose();
                    }}
                  >
                    I accept the Terms and Conditions
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )}
      </Flex>
    </Layout>
  );
}
