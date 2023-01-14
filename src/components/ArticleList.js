import blogData from "../data/blog";
import Article from "./Article";



function ArticleList (){
return(
    <main>
      <Article objData={blogData.posts}  date="January 1, 1970" />
    </main>
)
}

export default ArticleList