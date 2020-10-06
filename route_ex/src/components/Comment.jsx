import React from 'react';
import './comment.css';

const Comment = () => {
    return (
        <div className="comment">
        <h1>댓글 등록</h1>
        <div className="comment_submit">
            <div className="comment_input">
                <input type="text" name="" id="" placeholder="사용자아이디"/>
                <input type="text" name="age" id="age" placeholder="댓글"/>
            </div>
            <div className="comment_button">
                <button type="submit">등록</button>
            </div>
        </div>
        <hr></hr>
        <div className="comment_list">
            <table>
                <thead>
                    <tr>
                        <td>아이디</td>
                        <td>작성자</td>
                        <td>댓글</td>
                        <td>수정</td>
                        <td>삭제</td>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
    );
};

export default Comment;