import CardStyle from "./styled";

const Card = (props) =>{
    return(
        <>
        <CardStyle>
        {props.nameimg}
       </CardStyle>
       
        {/*

       <div>
           <div className="card-body">
               <h5 className="card-title">{props.txt}</h5>
               <p className="card-text">{props.coment}</p>
               <a href="#" className="btn btn-primary">Ir</a>
           </div>
       </div>
       <div className="card-footer text-muted">
         {props.date}
       </div>

        */}

       </>
        )
}

export default Card;