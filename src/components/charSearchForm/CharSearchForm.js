import {useState} from 'react'
import {Formik, Field, Form} from 'formik'
import * as Yup from 'yup'
import {Link} from 'react-router-dom'
import useMarvelService from '../../services/MarvelService'
const CharSearchForm = ()=>{ 
    const [data, setData] = useState(null)
    const {getCharacterByName, clearError, loading} = useMarvelService();
    const onSubmit = (name)=>{
        clearError();   
        getCharacterByName(name)
        .then(onLoaded)
    } 
    const onLoaded = (char)=>{
        console.log(char)
        setData(char);
    }
    const results = !data ? null : data.length > 0 ? 
        <div className='valid-success'>
            <div className='valid-success-block'>There is! Visit {data[0].name} page?</div> 
            <Link to={`/characters/${data[0].id}`} href="#" className="success-block-button">TO PAGE</Link>
        </div>
            :         <div className='valid-failed'>
            <div className='valid-failed-block'>The character was not found. Check the name and try again</div> 
        </div>
    
    return(
        <Formik
        initialValues={{
            search: ''
        }}
        validationSchema={
            Yup.object({
                search: Yup.string().required('This field is required!')
            })}
        onSubmit={({search})=>onSubmit(search)}>    
               {({ errors, touched }) => (
                <div className='search'>
            <Form>
            <div className="search-form">
            <div className="search-form-right">
            <h3 className="search-form-title">Or find a character by name:</h3>
            <Field id="search" name="search" type="text" className="search-form-input" placeholder="Enter name"/>
            {touched.search && errors.search ? <div className='errorValidate'>{errors.search}</div> : null}
            </div>
            <button className="button-find" type='submit' disabled={loading}>FIND</button>

            </div>
            </Form>
            {results}
                </div>

       )}
        </Formik>


    )
}
export default CharSearchForm