import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'
import HomePage from './pages/HomePage'
import FeaturePage from './pages/FeaturePage/FeaturePage'
import FeatureListPage from './pages/FeatureListPage/FeatureListPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="features" element={<FeatureListPage />} />
        <Route path="features/:featureId" element={<FeaturePage />} />
      </Route>
    </Routes>
  )
}

export default App
