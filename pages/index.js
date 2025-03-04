import React from 'react'
import dynamic from 'next/dynamic';

const SpeechToText = dynamic(() => import('@/components/Audio'), {
  ssr: false,
});
export default function index() {

  return (
    <div>
      <SpeechToText></SpeechToText>
    </div>
  )
}
