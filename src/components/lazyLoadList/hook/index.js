
import { useEffect, useState } from 'react'

function getPhotos() {
    return fetch('https://picsum.photos/v2/list?page=1&limit=50').then(res => res.json())
}

function useLazyLoad(ref) {
    const [photosList, setPhotoList] = useState([])

    useEffect(() => {
        init()
    }, [])

    useEffect(() => {
        handleLazyLoad()
    },[photosList])


    async function init() {
        const data = await getPhotos()
        setPhotoList(data)
        window.addEventListener('scroll', () => handleLazyLoad(), false)
    }

    function handleLazyLoad() {
        const oItems = ref.current.getElementsByClassName('lazy-loading-item')
        for (let i = 0; i < oItems.length; i++) {
            const oImg = oItems[i].getElementsByTagName('img')[0]
            const oImgTop = oImg.offsetTop
            const clientHeight = document.documentElement.clientHeight
            const scrollTop = document.documentElement.scrollTop
            const url = oImg.getAttribute('data-url')
            const isLoad = oImg.getAttribute('data-loading')
            if (oImgTop < clientHeight + scrollTop) {
                if (isLoad === 'false') {
                    oImg.setAttribute('src', url)
                    oImg.removeAttribute('data-url')
                    oImg.setAttribute('data-loading', true)
                }
            }
        }
    }

    return [
        photosList
    ]
}

export  {
    useLazyLoad
}