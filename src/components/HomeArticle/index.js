import './styles.css';
import HomeArticleContent1 from '../HomeArticleContent1';
import HomeArticleContent2 from '../HomeArticleContent2';
import HomeArticleContent3 from '../HomeArticleContent3';

const HomeArticle = () =>{
    return(
        <div className="container">
            <div className="row ">
                <div className="col-md-4">
                    <HomeArticleContent1 />
                </div>
                <div className="col-md-4">
                    <HomeArticleContent2/>
                </div>
                <div className="col-md-4">
                    <HomeArticleContent3/>
                </div>        
            </div>

        </div>

    )
}

export default HomeArticle