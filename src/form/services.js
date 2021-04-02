import { storage } from '../firebase'

export function uploadImage(image, setLoadProgress, setPreviewImage) {
  const metadata = {
    name: image.name,
  }
  const uploadTask = storage.ref(`images/${image.name}`).put(image, metadata)
  uploadTask.on(
    'state_changed',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      setLoadProgress(progress)
    },
    (error) => {
      alert('An error occurred, please try again.')
    },
    () => {
      storage
        .ref('images')
        .child(image.name)
        .getDownloadURL()
        .then((url) => {
          setPreviewImage({ imageUrl: url, imageName: image.name })
          setLoadProgress()
        })
    }
  )
}

export function uploadAudio(audio, setPreviewAudio) {
  const metadata = {
    name: audio.name,
  }
  const uploadTask = storage.ref(`audio/${audio.name}`).put(audio, metadata)
  uploadTask.on(
    'state_changed',
    (snapshot) => {},
    (error) => {
      alert('An error occurred, please try again.')
    },
    () => {
      storage
        .ref('audio')
        .child(audio.name)
        .getDownloadURL()
        .then((url) => {
          setPreviewAudio({ audioUrl: url, audioName: audio.name })
        })
    }
  )
}
