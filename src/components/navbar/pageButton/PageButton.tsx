import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

//Styles
import './pageButton.styles.scss';

interface Props {
  pageTitle: string;
  pageLink: string;
  pageIcon: any;
}

const PageButton: React.FC<Props> = ({pageTitle,pageLink,pageIcon}) => {
  return (
    <div className='page-button'>
      <Link to={pageLink} className='page-button__image-container'>
        <FontAwesomeIcon icon={pageIcon} size="2x" className='page-button__image'/>
      </Link>
      <div className='page-button__title-container'>
        <div className='page-button__title'>{pageTitle}</div>
        <div className='page-button__title-arrow'></div>
      </div>
    </div>
  )
}

export default PageButton