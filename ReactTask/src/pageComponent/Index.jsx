import React,{useState} from 'react'
import Button from '../baseComponent/Button';
import Modal from '../baseComponent/Modal';
import Form from '../baseComponent/Form';
import {data,objectiveFormData,keyResultData} from '../utils/itemData';
import Table from '../baseComponent/Table';

function Index() {

	// State maintain
	const[objective,setObjective] = useState({
		objective : "",
		period    : ""
	})
	const[objectiveError,setObjectiveError] = useState({
		objective : "",
		period    : ""
	})
	const [keyObjectiveData] = useState(data);
	const [objectiveName,setObjectiveName] = useState("");
	const [id, setId] = useState('')
	// handele submit 
	const handleSubmit = (e,getForm) => {
	
        setObjectiveError({objective: objective.objective ?"" :"Objective is required.",period:objective.period?"":"Period is required" })
        switch(getForm) {
			case "objectiveModal":
				if(objective.objective  && objective.period) {
					const newObj = {
						id : keyObjectiveData.length + 1,
						objective: objective.objective,
						period : objective.period,
						obj: []
					}
					keyObjectiveData.push(newObj)
					document.getElementsByClassName("objectiveModal")[0].click();
				}
				break;
			case "keyObjectiveModal" :
				if(objective.objective  && objective.period) {
					let index = keyObjectiveData.findIndex(data=>data.id === id)
					keyObjectiveData[index].obj.push(objective)
					document.getElementsByClassName("keyObjectiveModal")[0].click();
				}
				break;
			default:
				return"";
		}	 
	}

	// handle clear 
	const handleClear = () => {
       setObjective({
			objective : "",
			period    : ""
		})
		setObjectiveError({
			objective : "",
			period    : ""
		})
	}
	console.log(keyObjectiveData, "data")
  return (
	<section className='container card p-3 mt-md-5'>
        <div className='container-lg d-flex justify-content-between align-items-center px-lg-5'>
			<div>
				<h1>My objective</h1>
			</div>
			<div>
				<Button 
					btnName="Objective" 
					classNmae ="btn" 
					modal="modal"
					target="#objectiveModal"
					icon = "+"
				/>
			</div>
		</div>
		<div className='container-lg px-lg-5'>
			{
				keyObjectiveData && keyObjectiveData.map((data,index) => {
					const{objective,period, obj, id} = data;
                        return(
							<div key={index}>
								<div className='d-flex justify-content-between align-items-center'>
									<div><h3>{objective}</h3></div>
									<div>{period}</div>
								</div>
								<Table
									tableData ={obj && obj}
								/>
								<div className='py-3'>
									<Button 
										btnName   ="key result" 
										classNmae ="btn" 
										modal     ="modal"
										target    ="#keyObjectiveModal"
										icon      = "+"
										onClick   = {()=> {setId(id) ;setObjectiveName(objective)}}
									/>
								</div>
							</div>
						)
				})
			
			}
		</div>
			<div>
				<Modal
					modalTittle  = "Add New Objective"
					modalId      = "objectiveModal"
					handleSubmit = {handleSubmit}
					handleClear  = {handleClear}
					modalBody    = {<Form 
										formData={objectiveFormData && objectiveFormData} 
										handleChange = {{objective,setObjective,}}
										errorMessage = {objectiveError && objectiveError}
								  />}
				/>
			</div>
			<div>
				<Modal
					modalTittle  = {objectiveName && objectiveName}
					modalId      = "keyObjectiveModal"
					handleSubmit = {handleSubmit}
					handleClear  = {handleClear}
					modalBody    = {<Form 
										formData={keyResultData && keyResultData} 
										handleChange = {{objective,setObjective,}}
										errorMessage = {objectiveError && objectiveError}
								  />}
				/>
			</div>
	</section>
  )
}

export default Index