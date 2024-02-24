import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem/index'

import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')

  const changeNameInput = event => setName(event.target.value)
  const changeCommentInput = event => setComment(event.target.value)
  const [commentlist, updateCommentsList] = useState([])

  const formSubmitted = event => {
    event.preventDefault()
    const newComment = {
      id: uuidv4(),
      name,
      commentText: comment,
    }
    updateCommentsList(prev => [...prev, newComment])
    setName('')
    setComment('')
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={formSubmitted}>
        <NameInput
          type="text"
          placeholder="Your name"
          onChange={changeNameInput}
          value={name}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          onChange={changeCommentInput}
          value={comment}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        {commentlist.map(each => (
          <CommentItem commentDetails={each} key={each.id} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
