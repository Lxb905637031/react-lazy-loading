import { useRef } from 'react'

import LazyLoadItem from './components/lazyLoadItem/index.jsx'

import './style/index.less'

import { useLazyLoad } from './hook/index.js'

function LazyLoadList() {

    const listRef = useRef()
    const [photoList] = useLazyLoad(listRef)

    return (
        <div
            className="lazy-loading-list"
            ref={ listRef }
        >
            {
                photoList && photoList.map(photo => {
                    return (
                        <LazyLoadItem
                            key={ photo.id }
                            url={ photo.download_url }
                        />
                    )
                })
            }
        </div>
    )
}

export default LazyLoadList
