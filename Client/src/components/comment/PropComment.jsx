import React, { useEffect, useState ,useContext} from 'react';
import { database } from '../../firebase';
import { UserContext } from '../../context/userContext';
function PropComment({ item }) {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');
  const {userData} =useContext(UserContext)
  const fetchComments = async () => {
    let arr = [];
    for (let i = 0; i < item.reviews.length; i++) {
      let data = await database.comments.doc(item.reviews[i]).get();
      arr.push(data.data());
    }
    setComments(arr);
  };

  useEffect(() => {
    fetchComments();
  }, [item]); // Trigger fetchComments whenever the item changes

  const handleClick = async () => {
    if(text.trim()=='')return
    const obj = {
      text: text,
      id: item.Pid,
      name:userData.userName
    };

    // Add comment to database
    const doc = await database.comments.add(obj);

    // Update property document with new comment ID
    await database.property.doc(item.Pid).update({
      reviews: [...item.reviews, doc.id],
    });

    // Update local state with the new comment
    setComments([...comments, obj]);
    setText('');
  };

  return (
    <div>
      <div className="px-4">
        <h3 className="text-xl">Comments</h3>

        <div>
          {comments.map((comment, index) => (
            <div key={index} className="flex items-center gap-2 my-2">
              <div className="h-10 w-10 bg-slate-50 rounded-full flex items-center justify-center">
                {comment.name?comment.name.substring(0,1): 'user'}
              </div>
              <p className="text-xs">{comment.text}</p>
            </div>
          ))}
        </div>
        <p>{comments.length > 0 ? 'Post Your Comment' : 'No Comments Yet'}</p>
        <div className="comment-cont flex my-5">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            className="bg-transparent border-solid border-2 border-blue-700 rounded-l p-2 w-full max-w-[30rem] outline-none"
          />
          <button
            className="bg-blue-700 p-2 border-2 border-blue-700 px-6 text-white rounded-r"
            onClick={handleClick}
          >
            Post Comment
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropComment;
