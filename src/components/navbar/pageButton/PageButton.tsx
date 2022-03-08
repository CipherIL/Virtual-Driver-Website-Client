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
    <Link to={pageLink} className='page-button'>
      <div className='page-button__image-container'>
        <FontAwesomeIcon icon={pageIcon} size="2x" className='page-button__image'/>
      </div>
      <div className='page-button__title'>{pageTitle}</div>
    </Link>
  )
}

export default PageButton