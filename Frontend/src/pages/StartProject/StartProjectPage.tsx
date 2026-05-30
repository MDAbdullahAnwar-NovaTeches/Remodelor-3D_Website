const steps = [
  {
    title: 'Share the brief',
    copy: 'Tell us about the room, timeline, goals, and overall remodel scope.',
  },
  {
    title: 'Set the direction',
    copy: 'We map the visual language, materials, and pricing fit for the project.',
  },
  {
    title: 'Review the proposal',
    copy: 'You receive a premium plan with the next steps laid out clearly.',
  },
]

function StartProjectPage() {
  return (
    <main className="start-project-page">
      <section className="start-hero">
        <div className="start-copy">
          <p className="about-kicker">Start Project</p>
          <h1>Begin your remodel with a clear, visual plan.</h1>
          <span>
            Share the space you want to transform and we will help turn it into something polished,
            focused, and easy to approve.
          </span>
        </div>

        <div className="start-panel hover-card">
          <p>How it works</p>
          <ol>
            {steps.map((step) => (
              <li key={step.title}>
                <strong>{step.title}</strong>
                <span>{step.copy}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="start-section">
        <div className="section-heading">
          <p>Project brief</p>
          <h2>Use this page as the first step toward a high-end remodel conversation.</h2>
        </div>
        <div className="start-form-card hover-card">
          <div className="start-form-grid">
            <label>
              Name
              <input className="clickable" type="text" placeholder="Your name" />
            </label>
            <label>
              Email
              <input className="clickable" type="email" placeholder="you@example.com" />
            </label>
            <label>
              Space
              <input className="clickable" type="text" placeholder="Kitchen, bathroom, whole home..." />
            </label>
            <label>
              Budget
              <input className="clickable" type="text" placeholder="Lite, Pro, Premium" />
            </label>
          </div>
          <label className="full">
            Project notes
            <textarea
              className="clickable"
              rows={5}
              placeholder="Tell us about the vision, timeline, and goals."
            />
          </label>
          <button className="clickable" type="button">
            Request a proposal
          </button>
        </div>
      </section>
    </main>
  )
}

export default StartProjectPage
