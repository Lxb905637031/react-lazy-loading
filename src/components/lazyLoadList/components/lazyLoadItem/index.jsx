import './style/index.less'

function LazyLoadItem({
    url
}) {
 
    return (
        <div
            className="lazy-loading-item"
        >
            <img 
                src="https://img.zcool.cn/community/01377959b806aba8012075342b6dfd.GIF" 
                alt=""
                data-url={ url }
                data-loading={ false }
            />
        </div>
    )
}

export default LazyLoadItem

