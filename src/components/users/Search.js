import React, { useState, useContext} from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/AlertContext';



const Search = () => {

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext)

   const [text , setText ] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault()
        if(text === ''){
           alertContext.setAlert('Please Enter Something', 'light');
        }else{
         githubContext.searchUsers(text);
        setText( '')    
        }
    }

    const onChange = (e) =>  setText(e.target.value);


        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input
                     type="text" 
                     name="text" 
                     value={text} 
                     placeholder="Search Users..." 
                     onChange={onChange}
                     />
                    <input type="submit" className="btn btn-dark btn-block" />
                </form>
                {githubContext.users.length > 0 && 
                <button type="button" className="btn btn-light" onClick={githubContext.clearUsers}>Clear</button>}
            </div>
        )
    }



export default Search
