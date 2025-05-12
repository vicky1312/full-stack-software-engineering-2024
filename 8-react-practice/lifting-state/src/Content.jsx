function ContentBox({title, contentList, setList, list}){
    const removeItem = (c) => {
        const newContent = list.filter((item) => item.name !== c.name)
        setList(newContent)
    }
    if (contentList.length > 0 ){
    return (
   
        <div className="category-box">
        <span className="title">{title}</span>
        {contentList.map(c => (
            <div key = {c.name.length} title={c.name} onClick= {() => removeItem(c)} >
                {c.name < 10 ? c.name : c.name.slice(0, 10)}...
            </div>
        ))}
        </div>
    
)
    }
}

export default ContentBox