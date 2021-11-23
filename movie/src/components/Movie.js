import './Movie.css';

function Movie(props){
    const {Title, Year, imdbID, Type, Poster} = props;

    return (
        <div className="card">
            {
                Poster === 'N/A' ? <img src={`https://via.placeholder.com/300x444/61c4fd/000000?text=${Title}`} alt=""/> : <img src={Poster} alt={imdbID} />
            }
            
            <div>
                <h3>{Title}</h3>
                <p>{Year} <span>{Type}</span></p>
            </div>
        </div>
    )
}

export default Movie;