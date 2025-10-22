import React, { useEffect, useRef, useState, useCallback } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import Skeleton from '../components/Skeleton'

const PAGE_SIZE = 10
const API_URL = 'https://jsonplaceholder.typicode.com/posts'

export default function ApiPage() {
  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [hasMore, setHasMore] = useState(true)
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const sentinel = useRef(null)
  const [useInfiniteScroll, setUseInfiniteScroll] = useState(false)

  // debounce for smoother searching
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(query.trim()), 300)
    return () => clearTimeout(t)
  }, [query])

  const fetchPage = useCallback(
    async (pageNum, signal, append = true) => {
      setLoading(true)
      setError(null)
      try {
        const url = `${API_URL}?_page=${pageNum}&_limit=${PAGE_SIZE}`
        const res = await fetch(url, { signal })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()

        const filtered = debouncedQuery
          ? data.filter(
              p =>
                p.title.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
                p.body.toLowerCase().includes(debouncedQuery.toLowerCase())
            )
          : data

        setItems(prev => (append ? [...prev, ...filtered] : filtered))
        setHasMore(data.length === PAGE_SIZE)
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message || 'Failed to fetch')
      } finally {
        setLoading(false)
      }
    },
    [debouncedQuery]
  )

  // load when page or search changes
  useEffect(() => {
    const controller = new AbortController()
    fetchPage(page, controller.signal, page !== 1)
    return () => controller.abort()
  }, [page, debouncedQuery, fetchPage])

  // reset items when query changes
  useEffect(() => {
    setItems([])
    setPage(1)
  }, [debouncedQuery])

  // infinite scroll observer
  useEffect(() => {
    if (!useInfiniteScroll) return
    const node = sentinel.current
    if (!node) return
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !loading && hasMore) {
          setPage(p => p + 1)
        }
      },
      { rootMargin: '200px' }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [useInfiniteScroll, loading, hasMore])

  const onSearchChange = e => setQuery(e.target.value)
  const loadMore = () => setPage(p => p + 1)

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Posts (JSONPlaceholder)
        </h1>

        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-700 dark:text-gray-300">Infinite</label>
          <input
            type="checkbox"
            checked={useInfiniteScroll}
            onChange={() => setUseInfiniteScroll(v => !v)}
            className="form-checkbox h-4 w-4"
          />
        </div>
      </div>

      <Card>
        {/* Search bar */}
        <div className="flex flex-col md:flex-row gap-3 mb-4">
          <input
            type="search"
            value={query}
            onChange={onSearchChange}
            placeholder="Search posts..."
            className="flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none
                       bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100"
            aria-label="Search posts"
          />
          <Button onClick={() => { setItems([]); setPage(1); }}>Refresh</Button>
        </div>

        {/* Error */}
        {error && (
          <div className="text-red-500 mb-3">
            Error: {error} <Button onClick={() => fetchPage(page, new AbortController().signal)}>Retry</Button>
          </div>
        )}

        {/* List or Skeleton */}
        {loading && items.length === 0 ? (
          <Skeleton count={8} />
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {items.map(post => (
              <li
                key={post.id}
                className="p-3 border rounded hover:shadow bg-white dark:bg-gray-800 transition"
              >
                <h3 className="font-semibold mb-1 text-gray-900 dark:text-gray-100">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 opacity-80">
                  {post.body}
                </p>
              </li>
            ))}
          </ul>
        )}

        {/* Footer controls */}
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm opacity-80 text-gray-700 dark:text-gray-300">
            {loading ? 'Loading...' : `Showing ${items.length} posts`}
          </div>

          {!useInfiniteScroll && (
            <Button onClick={loadMore} disabled={loading || !hasMore}>
              {loading ? 'Loading...' : hasMore ? 'Load more' : 'No more'}
            </Button>
          )}
        </div>

        {/* Sentinel for infinite scroll */}
        <div ref={sentinel} className="h-1" />
      </Card>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white
                   p-3 rounded-full shadow-lg transition-all"
        aria-label="Scroll to top"
      >
        ⬆️
      </button>
    </div>
  )
}
