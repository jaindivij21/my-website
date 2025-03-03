/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Precedent - Building blocks for your Next.js project';
export const contentType = 'image/png';

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          backgroundImage:
            'linear-gradient(to bottom right, #000000 25%, #ffffff 50%, #000000 75%)'
        }}
      >
        <img
          src={new URL(
            '../../public/images/logo.png',
            import.meta.url
          ).toString()}
          alt='Divij Jain Website Logo'
          tw='w-20 h-20 mb-4 opacity-95'
        />
        <h1
          style={{
            fontSize: '100px',
            fontFamily: 'SF Pro',
            background:
              'linear-gradient(to bottom right, #000000 21.66%, #78716c 86.47%)',
            backgroundClip: 'text',
            color: 'transparent',
            lineHeight: '5rem',
            letterSpacing: '-0.02em'
          }}
        >
          Precedent
        </h1>
      </div>
    )
  );
}
