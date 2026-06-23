// Lightweight click/goal tracking for Cloudflare Web Analytics.
//
// Cloudflare's free Web Analytics has no custom-event API, but its beacon
// automatically records a pageview whenever history.pushState fires. We use
// that: push a virtual path like "/goal/linkedin-click", let the beacon log
// it, then immediately restore the real URL so the address bar and back
// button are unaffected. Goals then appear under "Top pages" in the
// Cloudflare dashboard (paths starting with /goal/).
//
// Tracking must never break navigation, so everything is wrapped defensively
// and no-ops when analytics isn't configured (e.g. local dev without a token).

export function trackGoal(name) {
  if (typeof window === 'undefined' || !name) return
  if (!process.env.NEXT_PUBLIC_CF_BEACON_TOKEN) return
  try {
    const realUrl =
      window.location.pathname + window.location.search + window.location.hash
    window.history.pushState(window.history.state, '', `/goal/${name}`)
    window.history.replaceState(window.history.state, '', realUrl)
  } catch (e) {
    // Never let analytics interfere with the user's click.
  }
}

// Derive a stable goal name from a link's href.
export function goalFromHref(href = '') {
  if (href.startsWith('mailto:')) return 'email-click'
  if (href.startsWith('tel:')) return 'phone-click'
  if (href.includes('linkedin.com')) return 'linkedin-click'
  return 'outbound-click'
}
