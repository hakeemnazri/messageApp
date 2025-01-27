import React from 'react'

function GenderCheckbox({onCheckboxChange, selectedGender}) {
  return (
    <div className='flex mt-2'>
        <div className="form-control">
      <label className={`label gap-2 cursor-pointer`}>
            <span className="label-text">Male</span>
            <input 
            type="checkbox"  className="checkbox" 
            checked = {selectedGender== "male"}
            onChange={()=>onCheckboxChange("male")}
            />
        </label>
        </div>
        <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
            <span className="label-text">Female</span>
            <input 
            type="checkbox"  className="checkbox"
            checked = {selectedGender== "female"}
            onChange={()=>onCheckboxChange("female")} 
            />
        </label>
        </div>
      
    </div>
  )
}

export default GenderCheckbox
