import HomeArticleCard from "../HomeArticleCard";
import Card from "../Card";
import ArticleTitle from "../ArticleTitle";

const Article2 = () =>{
    return(
        <>
        <div className="container">
            <ArticleTitle>Sacras</ArticleTitle>
            <div className="row justify-content-around">

                <HomeArticleCard  
                style={{ backgroundImage: "url(/sacr1.jpg)"}}
                className="col-md4"
                >

                <Card 
                feature="Paisagem"
                txt="Algum texto aqui"
                coment="comentario"

                />
                </HomeArticleCard>
                <HomeArticleCard  
                style={{ backgroundImage: "url(/sacr2.jpg)"}}
                className="col-md4"
                >

                <Card 
                feature="Paisagem"
                txt="Algum texto aqui"
                coment="comentario"
                />
                </HomeArticleCard>
                <HomeArticleCard  
                style={{ backgroundImage: "url(/sacr3.jpg)"}}
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
};

export default Article2;