import React from 'react'
import './sharedFiles.styles.scss';

const SharedFiles: React.FC = () => {
  return (
    <div className='shared-files'>
        <h1 className='shared-files__title'>Shared Files</h1>
        <div className='shared-files__selection-options'>add here: search bar & sorting options</div>
    </div>
  )
}

export default SharedFiles;