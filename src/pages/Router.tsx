import { Route, Routes } from 'react-router-dom'

import { PAGES_PATHS } from 'src/common/constants/Constants'
import { Home } from './Home'
import { CreateQuiz } from './CreateQuiz'
import { Login } from './Login'
import { EditQuiz } from './EditQuiz'
import { QuizList } from './QuizList'
import { ViewResponses } from './ViewResponses'

export const PageRouter = () => {
  return (
    <Routes>
      <Route path={PAGES_PATHS.HOME} element={<Home />} />

      <Route path={PAGES_PATHS.LOGIN} element={<Login />} />

      <Route path={PAGES_PATHS.CREATE_QUIZ} element={<CreateQuiz />} />

      <Route path={PAGES_PATHS.EDIT_QUIZ} element={<EditQuiz />} />

      <Route path={PAGES_PATHS.QUIZ_LIST} element={<QuizList />} />

      <Route path={PAGES_PATHS.VIEW_RESPONSES} element={<ViewResponses />} />
    </Routes>
  )
}