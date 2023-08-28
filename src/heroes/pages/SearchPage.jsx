import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "../../hooks/useForm"
import { HeroeCard } from "../components"
import queryString from 'query-string';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

const navigate = useNavigate();    
//obtenemos el queryParam de nuestra localizacion en el html
//para ello usamos el useLocation
const location = useLocation();

const { q = '' } = queryString.parse( location.search );

const heroes = getHeroesByName(q);

const showSearch = (q.length === 0);

const showError = (q.length > 0) && heroes.length === 0;

console.log({q,heroes,showSearch,showError});

const { searchText, onInputChange } = useForm({
    searchText:q
});

const onSearchSubmit = ( event ) => {
    event.preventDefault();
   // if (searchText.trim().length <=1) return;
    //console.log({searchText});

    // navigate(`?q=${ searchText }&asc=true`);
    navigate(`?q=${ searchText }`);


}

  return (
    <>
    <h1>Search Page</h1>
    <hr />

    <div className="row">
    <div className="col-5">
    <h4>Busqueda</h4>
    <hr />
    <form onSubmit={ onSearchSubmit }>
        <input 
        type="text"
        placeholder="Search a hero"
        className="form-control"
        name="searchText"
        autoComplete="off" 
        value={ searchText }
        onChange={ onInputChange }/>
            <button className="btn btn-outline-primary mt-1">
                Search
            </button>

        
    </form>
    </div>
    <div className="col-7">
        <h4>Resultados</h4>
        <hr/>
{/* 
        { (q === '') 
        ? (<div className="alert alert-primary">
                Buscar un hero
            </div>)
        : (heroes.length === 0) &&   
            (<div className="alert alert-danger">
            No hero with <b>{ q }</b>
            </div>)
        } */}

        <div className="alert alert-primary animate__animated animate__fadeIn"
        style={{display : showSearch ? '' : 'none'}}
        >
                Buscar un hero
        </div>

        <div className="alert alert-danger animate__animated animate__fadeIn"
        style={{display: showError ? '' : 'none'}}>
            No hero with <b>{ q }</b>
        </div>

        
        
        { heroes.map( hero => ( <HeroeCard key={ hero.id } {...hero}/>))}
        

    </div>
    </div>


    </>
    
  )
}
