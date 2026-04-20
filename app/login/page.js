import Image from "next/image";

export default async function LoginPage({ searchParams }) {
  const params = await searchParams;
  const nextPath = typeof params?.next === "string" ? params.next : "/";
  const failed = params?.error === "1";

  return (
    <main className="login-shell">
      <section className="login-card">
        <div className="login-logo-wrap">
          <Image src="/l.png" alt="Twist Digital" width={190} height={54} className="login-logo" />
        </div>
        <h1 className="login-title">Protected Proposal</h1>
        <p className="login-subtitle">Enter your credentials to access this deck.</p>

        <form method="post" action="/api/login" className="login-form">
          <input type="hidden" name="next" value={nextPath} />

          <label className="login-label" htmlFor="username">Username</label>
          <input className="login-input" id="username" name="username" type="text" autoComplete="username" required />

          <label className="login-label" htmlFor="password">Password</label>
          <input className="login-input" id="password" name="password" type="password" autoComplete="current-password" required />

          {failed ? <p className="login-error">Invalid username or password.</p> : null}

          <button className="login-button" type="submit">Sign In</button>
        </form>
      </section>
    </main>
  );
}
