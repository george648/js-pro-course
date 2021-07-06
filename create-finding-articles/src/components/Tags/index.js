import { useState } from 'react';
import { v4 } from 'uuid';
import { TagsList } from './components/TagsList';
import { AddTagForm } from './components/AddTagForm';
import { Notification } from './components/Notification';
import { StyledTags } from './styled';
import { Modal } from './../UI/Modal/Modal';

export const Tags = ({ tags: defaultTags } , props) => {
  const [tags, setTags] = useState(defaultTags);
  const [removedTag, setRemoveTag] = useState('');
  const [tagId, setTagId] = useState('')
  const [isTagCreated, setIsTagCreated] = useState(false);
  const [isFormOpened, setIsFormOpened] = useState(false);
  const [isNotificationOpened, setIsNotificationOpened] = useState(false);

  const addTagHandler = (tag) => {
    setTags([
      {label: tag, id: v4()},
      ...tags,
    ]);
    setIsTagCreated(true);
  };

  const tagRemoveHandler = (tagId, label) => {
    setIsFormOpened(true);
    setRemoveTag(label);
    setTagId(tagId);
  };

  const closeNotificationHandler = () => {
    setIsNotificationOpened(false);
    setRemoveTag('');
  };

  const closeAddTagNotificationHandler = () => {
    setIsTagCreated(false);
  };

  const closeModalBtn = (event) => {
    setIsFormOpened(false)
  }

  const cancelModalBtn = (event) => {
    setIsFormOpened(false)
  }

  const submitBtn = (event) => {
    setIsNotificationOpened(true);
    setIsFormOpened(false)
    setTags(tags.filter(({ id }) => id !== tagId));
    setTimeout(()=> {
      setIsNotificationOpened(false);
    }, 1000)

  }

  return (
    <StyledTags>
      <AddTagForm onAddTag={addTagHandler} />
      <TagsList tags={tags} onTagRemove={tagRemoveHandler} />

      {isTagCreated && (
        <Notification onClose={closeAddTagNotificationHandler}>
          <p><strong>NEW TAG WAS CREATED!!!!!</strong></p>
        </Notification>
      )}

      {isFormOpened && (
        <Modal closeModalBtn={closeModalBtn}> 
        213 Are you sure to delete <b> {removedTag} </b>  ?
        <div className="modalBtnBlock">
          <button onClick={cancelModalBtn}>Cancel</button>
          <button onClick={submitBtn}>Delete tag</button>
        </div>
        </Modal>
      )}

      {isNotificationOpened && 
        <Notification onClose={closeNotificationHandler}>
          <p>You've just removed {removedTag}.</p>
        </Notification>}
    </StyledTags>
  )
}