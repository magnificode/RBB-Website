import React from 'react';
import { PseudoBox, Box, Flex, theme } from '@chakra-ui/core';
import Image from './Image';

const formatHexCode = hexCode => {
  if (!hexCode.startsWith('#')) {
    return false;
  }

  // Using 3 digit hex
  if (hexCode.length === 4) {
    return `#${hexCode[1]}${hexCode[1]}${hexCode[2]}${hexCode[2]}${hexCode[3]}${hexCode[3]}`;
  }

  return hexCode;
};

const ContentBlockContent = props => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      h="100%"
      w="100%"
      px={[4, 4, 8]}
      {...props}
    >
      {props.children}
    </Flex>
  );
};

const ContentBlockColorOverlay = ({
  backgroundColor,
  backgroundOpacity,
  ...props
}) => {
  return (
    <Box
      pos="absolute"
      top="0"
      right="0"
      bottom="0"
      left="0"
      opacity={backgroundOpacity}
      backgroundColor={backgroundColor}
      zIndex="-1"
      {...props}
    />
  );
};

const ContentBlockWrapper = ({
  imageSource,
  imageWidth = '100%',
  imagePosition = { left: 0 },
  ...props
}) => {
  return (
    <PseudoBox
      as="div"
      d="flex"
      w="100%"
      pos="relative"
      textAlign="center"
      {...props}
    >
      {props.children}
    </PseudoBox>
  );
};

const LeftSideContentBlock = ({
  imageSource,
  backgroundColor,
  backgroundMode,
  backgroundOpacity,
  ...props
}) => {
  /**
   * Determine backgroundColor with alpha
   */
  let hexbackgroundColor;
  if (theme.colors[backgroundColor]) {
    hexbackgroundColor = formatHexCode(theme.colors[backgroundColor]);
  } else {
    const hexCode = formatHexCode(backgroundColor);
    if (hexCode) {
      hexbackgroundColor = hexCode;
    }
  }

  const isTint = backgroundMode === 'tint';
  if (isTint) {
    return (
      <ContentBlockWrapper
        imageSource={imageSource}
        textAlign={['center', 'center', 'left']}
        right="0"
      >
        <Image
          publicId={imageSource}
          role="presentation"
          transforms={{
            height: 0.6,
          }}
          objectFit="cover"
          objectPosition="right center"
          position="absolute"
          top="0"
          right="0"
          w={['100%', '100%', '52%']}
          height="100%"
          zIndex="-1"
        />
        <ContentBlockColorOverlay
          backgroundColor={backgroundColor}
          backgroundOpacity={backgroundOpacity}
        ></ContentBlockColorOverlay>
        <ContentBlockContent w={['100%', '100%', '50%']} mr="auto">
          {props.children}
        </ContentBlockContent>
      </ContentBlockWrapper>
    );
  } else {
    return (
      <ContentBlockWrapper
        imageSource={imageSource}
        imageWidth={['100%', '100%', '55%']}
        imagePosition={{ right: 0 }}
        textAlign={['center', 'center', 'left']}
      >
        <Image
          publicId={imageSource}
          role="presentation"
          transforms={{
            height: 0.6,
          }}
          objectFit="cover"
          objectPosition="right center"
          position="absolute"
          top="0"
          right="0"
          w={['100%', '100%', '52%']}
          height="100%"
          zIndex="-1"
        />
        <ContentBlockColorOverlay
          backgroundMode={backgroundMode}
          opacity={[backgroundOpacity, backgroundOpacity, 1]}
          background={[
            backgroundColor,
            backgroundColor,
            `linear-gradient(90deg, ${hexbackgroundColor}ff 50%, ${hexbackgroundColor}00 65%)`,
          ]}
        ></ContentBlockColorOverlay>
        <ContentBlockContent w={['100%', '100%', '50%']} mr="auto">
          {props.children}
        </ContentBlockContent>
      </ContentBlockWrapper>
    );
  }
};

const RightSideContentBlock = ({
  imageSource,
  backgroundColor,
  backgroundMode,
  backgroundOpacity,
  ...props
}) => {
  /**
   * Determine backgroundColor with alpha
   */
  let hexbackgroundColor;
  if (theme.colors[backgroundColor]) {
    hexbackgroundColor = formatHexCode(theme.colors[backgroundColor]);
  } else {
    const hexCode = formatHexCode(backgroundColor);
    if (hexCode) {
      hexbackgroundColor = hexCode;
    }
  }

  const isTint = backgroundMode === 'tint';
  if (isTint) {
    return (
      <ContentBlockWrapper
        imageSource={imageSource}
        textAlign={['center', 'center', 'left']}
      >
        <Image
          publicId={imageSource}
          role="presentation"
          transforms={{
            height: 0.6,
          }}
          objectFit="cover"
          position="absolute"
          top="0"
          left="0"
          w={['100%', '100%', '52%']}
          height="100%"
          zIndex="-1"
        />
        <ContentBlockColorOverlay
          backgroundColor={backgroundColor}
          backgroundOpacity={backgroundOpacity}
        ></ContentBlockColorOverlay>
        <ContentBlockContent w={['100%', '100%', '50%']} ml="auto">
          {props.children}
        </ContentBlockContent>
      </ContentBlockWrapper>
    );
  } else {
    return (
      <ContentBlockWrapper
        imageSource={imageSource}
        imageWidth={['100%', '100%', '55%']}
        textAlign={['center', 'center', 'left']}
      >
        <Image
          publicId={imageSource}
          role="presentation"
          transforms={{
            height: 0.6,
          }}
          objectFit="cover"
          position="absolute"
          top="0"
          left="0"
          w={['100%', '100%', '52%']}
          height="100%"
          zIndex="-1"
        />
        <ContentBlockColorOverlay
          backgroundMode={backgroundMode}
          opacity={[backgroundOpacity, backgroundOpacity, 1]}
          background={[
            backgroundColor,
            backgroundColor,
            `linear-gradient(270deg, ${hexbackgroundColor}ff 50%, ${hexbackgroundColor}00 65%)`,
          ]}
        ></ContentBlockColorOverlay>
        <ContentBlockContent w={['100%', '100%', '50%']} ml="auto">
          {props.children}
        </ContentBlockContent>
      </ContentBlockWrapper>
    );
  }
};

const FullWidthContentBlock = ({
  layout,
  imageSource,
  backgroundColor,
  backgroundMode,
  backgroundOpacity,
  ...props
}) => {
  return (
    <ContentBlockWrapper imageSource={imageSource}>
      <Image
        publicId={imageSource}
        role="presentation"
        transforms={{
          height: 0.6,
        }}
        objectFit="cover"
        objectPosition="top center"
        position="absolute"
        top="0"
        left="0"
        w="100%"
        height="100%"
        zIndex="-1"
      />
      <ContentBlockColorOverlay
        backgroundColor={backgroundColor}
        backgroundOpacity={backgroundOpacity}
      />
      <ContentBlockContent layout={layout} backgroundMode={backgroundMode}>
        {props.children}
      </ContentBlockContent>
    </ContentBlockWrapper>
  );
};

const ContentBlock = ({
  layout = 'full',
  backgroundColor = '#000000',
  backgroundMode = 'tint',
  backgroundOpacity = 0.75,
  ...props
}) => {
  switch (layout) {
    case 'left':
      return (
        <LeftSideContentBlock
          backgroundColor={backgroundColor}
          backgroundMode={backgroundMode}
          backgroundOpacity={backgroundOpacity}
          {...props}
        ></LeftSideContentBlock>
      );
    case 'right':
      return (
        <RightSideContentBlock
          backgroundColor={backgroundColor}
          backgroundMode={backgroundMode}
          backgroundOpacity={backgroundOpacity}
          {...props}
        ></RightSideContentBlock>
      );
    default:
      return (
        <FullWidthContentBlock
          backgroundColor={backgroundColor}
          backgroundMode={backgroundMode}
          backgroundOpacity={backgroundOpacity}
          {...props}
        />
      );
  }
};

export default ContentBlock;
