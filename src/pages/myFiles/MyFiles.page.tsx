import React from 'react';
import './myFiles.styles.scss';

const MyFiles: React.FC = () => {
  return (
    <div className='my-files'>
      <h1 className='my-files__title'>My Files</h1>
      <div className='my-files__selection-options'>add here: search bar & sorting options</div>
    </div>
  )
}

export default MyFiles;