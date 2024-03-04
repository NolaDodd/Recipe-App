import React, { useState } from "react";
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.

function RecipeCreate({createRecipe}) {

 const initialFormState = {
    name:"",
    cuisine:"",
    photo:"",
    ingredients:"",
    preparation: "",
  }
  
  const [formData, setFormData] = useState({...initialFormState})
  
  const handleSubmit = (event) => {
    event.preventDefault()
    createRecipe(formData)
    setFormData(initialFormState)
  }
  
  const handleChange = ({target}) => {
    setFormData({...formData, [target.name]: target.value})
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody className="create">
          <tr>
            <td className="name">
             <label htmlFor="name">
                <input
                  id="name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  placeholder="Name"
                  className="scaleDown"
                />
            </label>
           </td>
           <td className="cuisine"> 
             <label htmlFor="cuisine">
                <input
                  id="cuisine"
                  type="text"
                  name="cuisine"
                  onChange={handleChange}
                  value={formData.cuisine}
                  placeholder="Cuisine"
                  className="scaleDown"
                />
            </label>
           </td>
           <td className="photo">
             <label htmlFor="photo">
              <input
                id="photo"
                type="url"
                name="photo"
                onChange={handleChange}
                value={formData.photo}
                placeholder="URL"
                className="scaleDown"
              />
            </label>
           </td>
           <td className="ingredients">
            <label htmlFor="ingredients">
              <textarea id="ingredients" 
              name="ingredients" 
              onChange={handleChange} 
              value={formData.ingredients} 
              rows={2}
              placeholder="Ingredients"
              />
            </label>
           </td>
           <td className="preparation">
            <label htmlFor="preparation">
              <textarea id="preparation" 
              name="preparation" 
              onChange={handleChange} 
              value={formData.preparation} 
              rows={2} 
              placeholder="Preparation"
              />
            </label>
           </td>
           <td className="actions">
              <button type="submit">Create</button>
           </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
