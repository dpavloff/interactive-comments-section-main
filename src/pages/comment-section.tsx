import React, { Component, FC } from 'react'
import PropTypes from 'prop-types'
import './comment-section.css'
import CommentThread from '../components/comment-thread/comment-thread'
import ReplyForm from '../components/comment-form/comment-form'

const Comments : FC = (props) => {

  return <div className='comments-section'>
    <CommentThread />
    <ReplyForm />
  </div>
}

export default Comments;