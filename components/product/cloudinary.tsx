'use client'
import { CldUploadWidget, getCldImageUrl } from 'next-cloudinary'
import { Button } from '../ui/button'

interface UploadResult {
  info?: { public_id?: string }
}

type CloudinaryProps = {
  onUpload: (url: string) => void
}

const Cloudinary = ({ onUpload }: CloudinaryProps) => {
  return (
    <CldUploadWidget
      signatureEndpoint={'/api/sign-image'}
      options={{
        sources: ['local', 'url', 'camera'],
        resourceType: 'image',
        clientAllowedFormats: ['jpg', 'jpeg', 'png', 'webp'],
        multiple: false,
      }}
      onSuccess={(result) => {
        const publicId = (result as UploadResult)?.info?.public_id
        if (publicId) {
          const url = getCldImageUrl({
            src: publicId,
            width: 1000,
            height: 1000,
            crop: 'fill',
            quality: 'auto',
            format: 'auto',
          })
          onUpload(url)
        }
      }}
    >
      {({ open }) => (
        <Button onClick={() => open()} variant={'secondary'} type='button'>
          Upload an Image
        </Button>
      )}
    </CldUploadWidget>
  )
}

export default Cloudinary
