import React,{memo} from 'react'
const Form = memo(({formData,handleChange,errorMessage}) => {
  return (
    <>
    {
      formData && formData.map((data,index) => {
        const{type,placeholder,name,label} = data;
        switch(type) {
          case "text": 
            return(
              <div key={index} className ="position-relative mb-3">
				  <label className ="form-label my-2">{label}</label>
                  <input 
					className ={`form-control ${errorMessage && errorMessage[name] && "is-invalid"}`}
					type = {type} 
					placeholder ={placeholder}  
					name ={name}
					value = {handleChange && handleChange.objective[name]}
					onChange = {(e)=>handleChange && handleChange.setObjective({
						...handleChange.objective,[e.target.name]:e.target.value.trim(),
				   	})}
				  />
				  <div className='position-absolute'>
					  <small className='text-danger'>{errorMessage && errorMessage[name] && errorMessage[name]}</small>
				  </div>
              </div>
            )
          default :
          return ""
        }
      })
    }
    </>
  )
})


export default Form