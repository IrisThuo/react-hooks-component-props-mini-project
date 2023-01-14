


function Article({objData}){
   
    const articleData = objData.map((data) => {
        return( 
            <article key={data.id}>
                
                <h3>{data.title}</h3>
                <small>{data.date}</small>
                <p>{data.preview}</p>
            </article>
        )
    })
   
    return( 
        
        <div>
          {articleData}
        </div>
    )
}

export default Article