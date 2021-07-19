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
                nameimg="Tulipas"
                />
                </HomeArticleCard>
                <HomeArticleCard  
                style={{ backgroundImage: "url(/nat2.jpg)"}}
                className="col-md4"
                >

                <Card 
                nameimg="Mar Aberto"
                />
                </HomeArticleCard>
                <HomeArticleCard  
                style={{ backgroundImage: "url(/nat3.jpg)"}}
                className="col-md4"
                >

                <Card 
                nameimg="Mar Aberto - Finalizado"
                />
                </HomeArticleCard>            </div>
        </div>
        </>
    )
}

export default HomeArticle