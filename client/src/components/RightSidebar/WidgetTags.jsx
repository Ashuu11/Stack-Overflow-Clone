import React from 'react'

const WidgetTags = () => {

  const tags = ['c', 'css', 'express', 'nodejs', 'html', 'java', 'javascript', 'mern', 'mongodb', 'reactjs', 'php', 'python','mysql']

  return (
    <div className='widget-tags'>
        <h4>Watched Tags</h4>
        <div className='widget-tags-div'>
          {
            tags.map((tag) =>(
              <p key={tag}>{tag}</p>
            ))
          }
        </div>
    </div>
  )
}

export default WidgetTags