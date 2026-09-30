export default function Icon({ name, size = 20, ...props }) {
  const paths = {
    arrow: <path d="M4 12h16M14 6l6 6-6 6" />,
    back: <path d="M20 12H4m6 6-6-6 6-6" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    people: <><circle cx="9" cy="8" r="3" /><path d="M3 21v-3a6 6 0 0 1 12 0v3m1-16a3 3 0 0 1 0 6m3 10v-3a6 6 0 0 0-3-5" /></>,
    search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></>,
    leaf: <path d="M20 3C9 2 2 8 5 15c4 8 16 3 15-12ZM4 21 16 9" />,
    chef: <><path d="M6 15a5 5 0 0 1-1-10 5 5 0 0 1 9-1 5 5 0 0 1 5 9v7H6Z" /><path d="M6 16h13M10 20v-4m5 4v-4" /></>,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>
}
