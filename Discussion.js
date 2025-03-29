function Discussion({ courseId }) {
    try {
        const [comments, setComments] = React.useState([]);
        const [newComment, setNewComment] = React.useState('');
        const [isLoading, setIsLoading] = React.useState(true);

        React.useEffect(() => {
            // Simulated data
            setComments([
                {
                    id: 1,
                    user: 'John Doe',
                    avatar: 'https://i.pravatar.cc/40?img=1',
                    content: 'Great explanation of the concepts!',
                    timestamp: '2024-01-28T10:30:00Z',
                    replies: [
                        {
                            id: 2,
                            user: 'Instructor',
                            avatar: 'https://i.pravatar.cc/40?img=2',
                            content: 'Thank you! Let me know if you have any questions.',
                            timestamp: '2024-01-28T11:00:00Z'
                        }
                    ]
                }
            ]);
            setIsLoading(false);
        }, [courseId]);

        const handleSubmitComment = async (e) => {
            e.preventDefault();
            if (!newComment.trim()) return;

            try {
                await postComment(courseId, newComment);
                // Optimistically update UI
                setComments(prevComments => [{
                    id: Date.now(),
                    user: 'You',
                    avatar: 'https://i.pravatar.cc/40?img=3',
                    content: newComment,
                    timestamp: new Date().toISOString(),
                    replies: []
                }, ...prevComments]);
                setNewComment('');
            } catch (error) {
                console.error('Error posting comment:', error);
            }
        };

        const formatDate = (dateString) => {
            return new Date(dateString).toLocaleString();
        };

        if (isLoading) {
            return (
                <div data-name="loading" className="flex justify-center items-center py-8">
                    <i className="fas fa-spinner fa-spin text-2xl text-blue-600"></i>
                </div>
            );
        }

        return (
            <div data-name="discussion-section">
                <form onSubmit={handleSubmitComment} className="mb-8">
                    <div className="mb-4">
                        <textarea
                            className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
                            rows="3"
                            placeholder="Add a comment..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        disabled={!newComment.trim()}
                    >
                        Post Comment
                    </button>
                </form>

                <div data-name="comments-list" className="space-y-6">
                    {comments.map(comment => (
                        <div key={comment.id} className="discussion-thread">
                            <div className="flex items-start space-x-4">
                                <img
                                    src={comment.avatar}
                                    alt={comment.user}
                                    className="w-10 h-10 rounded-full"
                                />
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <h4 className="font-semibold">{comment.user}</h4>
                                        <span className="text-sm text-gray-500">
                                            {formatDate(comment.timestamp)}
                                        </span>
                                    </div>
                                    <p className="text-gray-700">{comment.content}</p>
                                    
                                    {comment.replies?.map(reply => (
                                        <div key={reply.id} className="mt-4 ml-8 flex items-start space-x-4">
                                            <img
                                                src={reply.avatar}
                                                alt={reply.user}
                                                className="w-8 h-8 rounded-full"
                                            />
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-1">
                                                    <h4 className="font-semibold">{reply.user}</h4>
                                                    <span className="text-sm text-gray-500">
                                                        {formatDate(reply.timestamp)}
                                                    </span>
                                                </div>
                                                <p className="text-gray-700">{reply.content}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error('Discussion component error:', error);
        reportError(error);
        return null;
    }
}
