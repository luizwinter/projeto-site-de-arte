import HomeArticleCard from "../HomeArticleCard"
import Card from "../Card"
import ArticleTitle from "../ArticleTitle"

const HomeArticle = () =>{
    return(
        <>
        <div className="container">
        <ArticleTitle>Paisagens</ArticleTitle>
            <div className="row justify-content-around">

                <HomeArticleCard  
                style={{ backgroundImage: "url(/nat1.jpg)"}}
                className="col-md4"
                >

                <Card 
                feature="Paisagem"
                txt="Algum texto aqui"
                coment="comentario"

                />
                </HomeArticleCard>
                <HomeArticleCard  
                style={{ backgroundImage: "url(/nat2.jpg)"}}
                className="col-md4"
                >

                <Card 
                feature="Paisagem"
                txt="Algum texto aqui"
                coment="comentario"
                />
                </HomeArticleCard>
                <HomeArticleCard  
                style={{ backgroundImage: "url(/nat3.jpg)"}}
                className="col-md4"
                >

                <Card 
                feature="Paisagem"
                txt="Algum texto aqui"
                coment="comentario"
                />
                </HomeArticleCard>            </div>
        </div>
        </>
    )
}

export default HomeArticle