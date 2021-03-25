import React, { useState, useEffect } from 'react'

const CustomSelect = ({ defText, optList, onSelectChange }) => {
  const [optionsList, setOptionsList] = useState(optList)
  const [defaultSelectText, setDefaultSelectText] = useState(defText)
  const [showOptionsList, setShowOptionsList] = useState(false)

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    setDefaultSelectText(defText)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleClickOutside = (e) => {
    if (
      !e.target.classList.contains('custom-select-option')
    ) {
      setShowOptionsList(false)
    }
  }

  const handleListDisplay = () => {
    setShowOptionsList(prevState => !prevState)
  }

  const handleOptionClick = (e) => {
    setDefaultSelectText(e.target.getAttribute('data-name'))
    onSelectChange(e.target.getAttribute('data-name'));
    setShowOptionsList(false)
  }

  return (
    <>
      <div className="custom-select-container">
        <div
          className={showOptionsList ? 'selected-text active' : 'selected-text'}
          onClick={handleListDisplay}
        >
          {defaultSelectText}
        </div>
     
          <ul className={`transition-all duration-500 select-options transform origin-top ${showOptionsList ? 'scale-y-100 opacity-1' : 'scale-y-0 opacity-0'}`}>
            {optionsList.map((option, index) => {
              return (
                <li
                  className="custom-select-option"
                  data-name={option}
                  key={index + 1}
                  onClick={handleOptionClick}
                >
                  {option}
                </li>
              )
            })}
          </ul>
  
      </div>
      <style jsx>{`
        .custom-select-container {
          display: inline-block;
          width: 100%;
          text-align: left;
          position: relative;
          cursor: pointer;
          font-weight:600;
        }

        .selected-text {
          background-color: #C1C8E4;
          padding: 12px 16px;
          color:#FFF;
          border-radius: 8px;
        }

        .selected-text::after,.selected-text::before {
          content: '';
          position: absolute;
          width: 7px;
          height:7px;
          right:11px;
          transform: rotate(45deg);
        }
        .selected-text::after {
          top: 12px;
        }
        .selected-text::before {
          bottom: 12px;
          transform: rotate(225deg);
        }

        .selected-text.active::after {
          top: 8px;
          border-color: transparent transparent #21425D transparent;
        }

        ul {
          margin: 0;
          padding: 0;
          text-align: left;
          z-index:99;
          transition: all 0.2s;
          top: 0px;
        }

        .select-options {
          position: absolute;
          width: 100%;
        }

        li.custom-select-option {
          list-style-type: none;
          padding: 12px 16px;
          background: #C1C8E4;
          transition: all 0.2s;
          cursor: pointer;
        }
        li.custom-select-option:first-child {
          border-radius: 8px 8px 0 0;
        }
        li.custom-select-option:last-child {
          border-radius: 0 0 8px 8px;
        }

        li.custom-select-option:hover {
          background-color: #fff;
          color: #C1C8E4;
        }
      `}</style>
    </>
  )
}

export default CustomSelect
