import React from 'react'
import './LoadingSpinner.css'
import { BeatLoader } from 'react-spinners'

const component = (props) => {
  return (
    <div>
      {
        props.condition &&
        <div className="has-text-centered loading_spinner_wrap">
          <BeatLoader
            color={'#81ecec'} 
            loading={true} 
          />
        </div>
      }
    </div>
  )
}

export const LoadingSpinner = component