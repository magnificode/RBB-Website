import React from 'react';
import { useImage } from 'use-cloudinary';
import { Image as ChakraImage } from '@chakra-ui/core';
import ImageSkeleton from './Loading/ImageSkeleton';

export default function Image(props) {
  const { transforms, publicId, alt, src } = props;

  const { getImage, data, status, error } = useImage({
    cloud_name: 'rebuild-black-business',
  });

  /* eslint-disable react-hooks/exhaustive-deps */
  React.useEffect(() => {
    getImage({
      public_id: publicId,
      transform_options: {
        ...transforms,
        // fetch: 'auto' is applied internally
        // crop: 'scale' is applied automatically when a width or height is supplied
        quality: 'auto',
      },
    });
  }, [publicId]);
  /* eslint-disable react-hooks/exhaustive-deps */

  if (status === 'loading') return <ImageSkeleton />;

  // @TODO :: Deliver custom Error UI if needed
  if (status === 'error') return <p>{error.message}</p>;

  return <ChakraImage {...props} src={data || src} alt={alt} />;
}
