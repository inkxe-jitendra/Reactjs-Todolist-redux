const postReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.data])
    case 'COMPLETE_TODO':
    return state.map((post) => {
      if (post.id === action.id) {
        return {
          ...post,
          completed:true,
          time:new Date()
          }
        } else return post;
    })
    case 'DELETE_TODO':
      return state.filter((post) => post.id !== action.id)
    case 'EDIT_TODO':
      return state.map((post) => post.id === action.id ? { ...post, editing: !post.editing } : post)
    case 'UPDATE':
      return state.map((post) => {
        if (post.id === action.id) {
          return {
            ...post,
            title: action.data.newTitle,
            editing: !post.editing
            }
            } else return post;
        })
    default:
    return state;
  }
}
export default postReducer;