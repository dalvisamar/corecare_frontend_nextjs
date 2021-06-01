import Image from 'next/image';
import style from '../../../styles/blog/postDetail.module.scss'
const PostComment = ({ comment }) => {
    return (
        <div className={"comment " + style.comment}>
            <span className={"avatar " + style.avatar}>
                {/* <img src={BASEURL + review.user.photo} alt="employee"/> */}
                <Image src={comment.user?.photo ? comment.user.photo.startsWith("h") ? comment.user.photo : BASE_URL + comment.user.photo : "/default-profile.png"} layout="fill" objectFit="cover" alt="employee" />
            </span>
            <div className={"content"}>
                <span className="author">{comment.user?.username || comment.user?.email || comment.user?.number || comment.name}</span>
                <div className="metadata">
                    <span className={"date"}>{comment.created}</span>
                </div>
                {/* <Rate disabled defaultValue={review.star} /> */}    
                <div className="text">
                    {comment.comment}
                </div>
                <div className="actions">
                    <div className={"reply"}>Reply</div>
                </div> 
            </div>
        </div>
    )
}

export default PostComment