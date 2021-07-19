import HomeArticleCard from "../HomeArticleCard";
import Card from "../Card";
import ArticleTitle from "../ArticleTitle";

const Article2 = () =>{
    return(
        <>
        <div id="homearticle2" className="container">
            <ArticleTitle>Sacras</ArticleTitle>
            <div className="row justify-content-around">

                <HomeArticleCard  
                style={{ backgroundImage: "url(/sacr1.jpg)"}}
                className="col-md4"
                >

                <Card 
                nameimg="Anjo"
                />
                </HomeArticleCard>
                <HomeArticleCard  
                style={{ backgroundImage: "url(/sacr2.jpg)"}}
                className="col-md4"
                >

                <Card 
                nameimg="São Miguel Arcanjo"
                />
                </HomeArticleCard>
                <HomeArticleCard  
                style={{ backgroundImage: "url(/sacr3.jpg)"}}
                className="col-md4"
                >

                <Card 
                nameimg="N.S. da Paz"
                />
                </HomeArticleCard>            </div>
        </div>
        </>
    )
};

export default Article2;