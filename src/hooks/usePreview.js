import { useState } from 'react'

export default function usePreview() {
  const [previewImage, setPreviewImage] = useState({
    imageUrl: '',
    imageName: '',
  })
  const [previewAudio, setPreviewAudio] = useState({
    audioUrl: '',
    audioName: '',
  })
  const [loadProgress, setLoadProgress] = useState()

  return {
    previewImage,
    setPreviewImage,
    previewAudio,
    setPreviewAudio,
    loadProgress,
    setLoadProgress,
  }
}
