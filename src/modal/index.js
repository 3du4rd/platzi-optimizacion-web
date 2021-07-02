//import openModal from './open-modal'
export const modalListener = event => {
  event.preventDefault()
  const img = event.target
  const link = img.parentElement
  const videoId = link.dataset.videoid

  if (link && link.classList.contains('js-video-link')) {
    console.log(`Click! ${link.href}`)
    console.log(link.dataset.videoid)

    //Activar LazyLoading
    import(/* webpackChunkName: "modal-lib" */ './open-modal').then(
      ({ openModal }) => {
        openModal(videoId)
      }
    )
  }
}
