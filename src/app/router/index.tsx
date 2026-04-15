import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'

const HomePage = lazy(() => import('@/pages/home').then((m) => ({ default: m.HomePage })))
const WorksPage = lazy(() => import('@/pages/works').then((m) => ({ default: m.WorksPage })))
const WorkDetailPage = lazy(() =>
  import('@/pages/work-detail').then((m) => ({ default: m.WorkDetailPage }))
)
const AboutPage = lazy(() => import('@/pages/about').then((m) => ({ default: m.AboutPage })))
const StrengthsPage = lazy(() =>
  import('@/pages/strengths').then((m) => ({ default: m.StrengthsPage }))
)
const ContactPage = lazy(() =>
  import('@/pages/contact').then((m) => ({ default: m.ContactPage }))
)

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-8 rounded-full border-2 border-primary-600 border-t-transparent animate-spin" />
      <p className="text-neutral-400 text-sm">Loading...</p>
    </div>
  </div>
)

const NotFoundPage = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="font-display text-8xl font-bold text-neutral-200 mb-4">404</div>
      <h1 className="text-2xl font-bold text-neutral-900 mb-2">ページが見つかりません</h1>
      <p className="text-neutral-500 mb-8">
        お探しのページは存在しないか、移動された可能性があります。
      </p>
      <a
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-xl font-medium hover:bg-neutral-700 transition-colors"
      >
        トップへ戻る
      </a>
    </div>
  </div>
)

export const AppRouter = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/works/:slug" element={<WorkDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/strengths" element={<StrengthsPage />} />
          <Route path="/services" element={<StrengthsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}
