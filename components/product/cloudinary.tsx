'use client'
import { CldUploadWidget, getCldImageUrl } from 'next-cloudinary'
import { Button } from '../ui/button'
interface UploadResult {
  info?: { public_id?: string }
}
const Cloudinary = () => {
  return (
    <div>
      <CldUploadWidget
        signatureEndpoint={'/api/sign-image'}
        onSuccess={(result) => {
          const publicId = (result as UploadResult)?.info?.public_id
          const url = getCldImageUrl({ src: publicId as string })
          console.log(url)
        }}
      >
        {({ open }) => {
          return <Button onClick={() => open()}>Upload an Image</Button>
        }}
      </CldUploadWidget>
    </div>
  )
}

export default Cloudinary
