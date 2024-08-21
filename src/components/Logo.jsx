import Image from 'next/image'
import logo from '@/images/logos/logo.png'

export function Logo(props) {
  return (
    <div style={{ width: '150px' }}> {/* Set the width to your desired value */}
      <Image
        src={logo}  // Relative path from the public folder
        alt="LAPIN AMK - Arrival Assistant Logo"
        layout="responsive"          // Ensures the image scales responsively
        width={121}                  // Desired width
        height={41}                  // Desired height for aspect ratio
        {...props}
      />
    </div>
  )
}

