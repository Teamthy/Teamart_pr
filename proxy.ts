export async function proxy(req: Request) {
    const url = new URL(req.url)

    try {
        const target =
            "http://localhost:5000" +
            url.pathname.replace("/api/vision", "")

        const init: RequestInit = {
            method: req.method,
            headers: req.headers,
        }

        if (req.method !== "GET" && req.method !== "HEAD") {
            init.body = await req.arrayBuffer()
        }

        const res = await fetch(target + url.search, init)

        return new Response(await res.arrayBuffer(), {
            status: res.status,
            headers: res.headers
        })
    } catch (err) {
        console.error("Proxy error", err)
        return new Response("Proxy error", { status: 500 })
    }
}

export const config = {
    matcher: "/api/vision/:path*"
}

export default proxy
